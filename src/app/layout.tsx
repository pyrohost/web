import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pyro.host',
  description: 'The ultimate hosting solution for gamers',
  openGraph: {
    title: 'Pyro.host',
    description: 'The ultimate hosting solution for gamers',
    images: [
      {
        url: 'https://pyro.host/ogimage.png',
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
    <html lang="en">
      <body className={inter.className}>
        <>
          <img loading='lazy' decoding='async' style={{
            WebkitMask: 'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(217, 217, 217, .8) 25%, #d9d9d9 50%, rgba(217, 217, 217, .8) 75%, rgba(217, 217, 217, 0) 100%)'
          }} className='fixed bottom-0 left-0 right-0 top-0 w-screen bg-cover opacity-25 bg-center bg-no-repeat' src="/img/fire.png" alt="" />
          {children}
        </>
      </body>
    </html>
  )
}
