import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pyro - Let me Google that for you.',
    description: 'Let me Google that for you.',
    openGraph: {
        title: 'Pyro - Let me Google that for you.',
        description: 'Let me Google that for you.',
    },
};

const Page = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const url = `https://letmegooglethat.com/?${searchParams.q ? `q=${searchParams.q}` : ''}`;
    redirect(url);
};

export default Page;
