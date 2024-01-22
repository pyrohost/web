import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pyro.host/'),
  title: 'pyro.host',
  description: 'pyro is a better way to host games. Instantly available, lag-free servers with unmatched value.',
  openGraph: {
    title: 'pyro',
    description: 'pyro is a better way to host games. Instantly available, lag-free servers with unmatched value.',
    images: [
      {
        url: './newogimage.png',
      }
    ],
    url: 'https://pyro.host',
  },
}

export const viewport: Viewport = {
  themeColor: '#ff4b40',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark antialiased h-fit w-full relative bg-dark-950 text-white [font-synthesis-weight:none]">
      <body className={`${jakarta.className} flex flex-col min-h-full w-full relative overflow-x-hidden`}>
        <>
          <div className='relative w-full h-full overflow-hidden'>
            <NavBar />
            {children}
            <Footer />
          </div>
        </>
      </body>
      <GoogleAnalytics gaId='G-NWVJ0FNXG1' />
    </html>
  )
}
