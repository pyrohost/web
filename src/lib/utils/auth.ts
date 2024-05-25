import { TimeSpan, createDate } from 'oslo';
import { alphabet, generateRandomString } from 'oslo/crypto';

import prisma from '../api/prisma';

export function isValidEmail(email: string) {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
}

async function generateEmailVerificationCode(userId: string, email: string): Promise<string> {
    const code = generateRandomString(6, alphabet('0-9', 'A-Z'));
    
    await prisma.verificationToken.create({
        data: {
            userId,
            email,
            code,
            expiresAt: createDate(new TimeSpan(15, 'm')),
        },
    });

    return code;
}
