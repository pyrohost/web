'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const LogInErrors = () => {
    let errors = [
        'OAuthSignin',
        'OAuthCallback',
        'OAuthCreateAccount',
        'EmailCreateAccount',
        'Callback',
        'OAuthAccountNotLinked',
        'EmailSignin',
        'CredentialsSignin',
        'SessionRequired',
        'Default',
    ];
    let error = useSearchParams().get('error');

    if (!error) {
        return null;
    }

    if (!errors.includes(error)) {
        return null;
    }

    switch (error) {
        case 'OAuthSignin':
            error = 'Try logging in with a different account.';
            break;
        case 'OAuthCallback':
            error = 'Try logging in with a different account.';
            break;
        case 'OAuthCreateAccount':
            error = 'Try logging in with a different account.';
            break;
        case 'EmailCreateAccount':
            error = 'Try logging in with a different account.';
            break;
        case 'Callback':
            error = 'Try logging in with a different account.';
            break;
        case 'OAuthAccountNotLinked':
            error = 'To confirm your identity, login with the same\naccount you used originally.';
            break;
        case 'EmailSignin':
            error = 'Email could not be sent.';
            break;
        case 'CredentialsSignin':
            error = 'Login failed. Check your credentials and try again.';
            break;
        case 'SessionRequired':
            error = 'Please login to access this page.';
            break;
        case 'Default':
            error = 'Unable to login.';
            break;
    }

    return (
        <Suspense>
            <div className='mx-auto mb-8 rounded-md bg-brand px-4 py-2 text-center text-white'>
                <div className='text-lg font-bold'>Uh oh!</div>
                <div className='whitespace-pre-line'>{error}</div>
            </div>
        </Suspense>
    );
};

export default LogInErrors;
