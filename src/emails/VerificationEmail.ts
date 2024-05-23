import Email from '@/emails/Email';

export const VerificationEmail = (url: string): Email => {
    return {
        subject: 'Verify your email address',
        html: undefined,
        fallback: `Click ${url} to verify your email address.`,
    };
};
