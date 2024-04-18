import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'pyro - Let me Google that for you.',
    description: 'Let me Google that for you.',
    openGraph: {
        title: 'pyro - Let me Google that for you.',
        description: 'Let me Google that for you.',
    },
};

const Page = () => {
    redirect('https://letmegooglethat.com/');
};

export default Page;
