/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Pyro Source Available License',
    description: 'Pyro Source Available License',
    openGraph: {
        title: 'Pyro Source Available License',
        description: 'Pyro Source Available License',
        images: [
            {
                url: './ogimage.png',
            },
        ],
    },
};

const Page = () => {
    redirect('https://github.com/pyrohost/legal/blob/main/licenses/PSAL.md');
};

export default Page;
