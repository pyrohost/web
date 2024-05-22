'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const AuthErrors = () => {
    let errors = ['Configuration', 'AccessDenied', 'Verification', 'Default'];
    let error = useSearchParams().get('error');

    if (!error) {
        return null;
    }

    if (!errors.includes(error)) {
        return null;
    }

    switch (error) {
        case 'Configuration':
            error = 'There is a problem with the server configuration.\nPlease contact a developer.';
            break;
        case 'AccessDenied':
            error = 'You do not have permission to login.';
            break;
        case 'Verification':
            error = 'The login link is no longer valid.\nIt may have been used already or it may have expired.';
            break;
        case 'Default':
            error =
                'An unknown error has occured. Please try again.\nIf the problem persists, please contact a developer.';
            break;
    }

    return (
        <Suspense>
            <div className='mx-4 mb-8 rounded-md bg-brand px-4 py-2 text-center text-white'>
                <div className='text-lg font-bold'>Uh oh!</div>
                <div className='whitespace-pre-line'>{error}</div>
            </div>
        </Suspense>
    );
};

export default AuthErrors;
