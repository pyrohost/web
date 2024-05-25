import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import Footer from '@/components/ui/layout/Footer';
import HeaderLoginButton from '@/components/ui/layout/HeaderLoginButton';
import Header from '@/components/ui/layout/Header';

import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://pyro.host/'),
    title: 'pyro.host',
    description: 'Pyro is where your world plays. Instantly available, lag-free servers with unmatched value.',
    openGraph: {
        title: 'Pyro',
        description: 'Pyro is where your world plays. Instantly available, lag-free servers with unmatched value.',
        images: [
            {
                url: './ogimage_refresh.png',
            },
        ],
        url: 'https://pyro.host',
    },
};

export const viewport: Viewport = {
    themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            data-pyro-html=''
            lang='en'
            className='min-h-screen w-full overflow-x-hidden bg-black antialiased [font-synthesis-weight:none]'
        >
            <body
                data-pyro-body=''
                className={`${jakarta.className} flex min-h-screen w-full flex-col overflow-x-hidden bg-black text-white`}
            >
                <div data-pyro-index='' className='relative h-fit min-h-screen w-full flex-1 shrink-0 flex-col'>
                    <div className='flex flex-row items-center justify-between pr-4'>
                        <Header />
                        <div className='absolute right-4 top-4'>
                            <HeaderLoginButton />
                        </div>
                    </div>
                    <main className='relative z-10 flex min-h-[calc(100vh-76px-144px)] w-full flex-col overflow-clip rounded-3xl'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
            <GoogleAnalytics gaId='G-NWVJ0FNXG1' />
        </html>
    );
}
