import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pyro.host/'),
  title: 'pyro.host',
  description: 'pyro.host is a game focused hosting platform providing simple and reliable services for anyone to create their own experiences! We give you excellent infrastructure, control panel, and more at a competitive price.',
  openGraph: {
    title: 'pyro',
    description: 'pyro.host is a game focused hosting platform providing simple and reliable services for anyone to create their own experiences! We give you excellent infrastructure, control panel, and more at a competitive price.',
    images: [
      {
        url: './ogimage.png',
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
    <html lang="en" className="h-fit w-full relative bg-dark-950 text-white">
      <body className={`${jakarta.className} h-fit w-full relative`}>
        <>
          <div className='flex flex-col w-full h-full'>
            <NavBar />
            {children}
            <Footer />
          </div>
        </>
      </body>
    </html>
  )
}
