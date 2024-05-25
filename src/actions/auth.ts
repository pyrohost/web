'use server';

import { hash, verify } from '@node-rs/argon2';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import lucia from '@/lib/api/auth';
import prisma from '@/lib/api/prisma';
import userAPI from '@/lib/api/user';
import { isValidEmail } from '@/lib/utils/auth';

interface ActionResult {
    error: string;
}

export const register = async (formData: FormData): Promise<ActionResult> => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: 'Please fill out all fields' };
    }

    if (!isValidEmail(email)) {
        return { error: 'Invalid email' };
    }

    // note: the password is hashed before checking for an existing user
    // this is to prevent timing attacks.
    const passwordHash = await hash(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
    });

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return { error: 'Invalid email or password' };
    }

    const user = await userAPI.createUser(email, passwordHash);

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return redirect('/account');
};

export const login = async (formData: FormData): Promise<ActionResult> => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: 'Please fill out all fields' };
    }

    if (!isValidEmail(email)) {
        return { error: 'Invalid email' };
    }

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return { error: 'Invalid email or password' };
    }

    const validPassword = await verify(user.passwordHash, password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
    });

    if (!validPassword) {
        return { error: 'Invalid email or password' };
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return redirect('/account');
};
