'use client';

import { register } from '@/actions/auth';

const RegisterForm = () => {
    const formAction = async (data: FormData) => {
        try {
            const { error } = await register(data);
        } catch (e) {
            console.error('Failed to register' + e);
        }
    };

    return (
        <form action={formAction}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
            <button type='submit'>Register</button>
        </form>
    );
};

export default RegisterForm;
