import Email from '@/emails/Email';

export const VerificationEmail = (code: string): Email => {
    return {
        subject: 'Verify your Pyro account',
        html: undefined,
        fallback: `Go to https://pyro.host/verify-email?code=${code} to verify your account.`,
    };
};
