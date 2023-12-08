// import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className='flex flex-col p-8'>
        <Image className='mb-8' src="/img/logo.png" alt="Logo" width={256} height={114} />
        <div className='flex flex-row gap-4'>
          <a rel="noreferrer noopener" target="_blank" className='flex items-center justify-center relative font-medium text-sm login-btn px-4 py-4 rounded-xl overflow-hidden transition-all will-change-transform duration-200 hover:-translate-y-0.5 hover:brightness-125' href='https://billing.pyro.host/index.php/client/login/'>
            {/* <div className='w-full'>
            Billing Panel
          </div> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>

            <div className='absolute top-0 left-0 rising-stars'>
              <div style={{ height: '2px', width: '1px' }} />
              <div style={{ height: '2px', width: '1px' }} />
              <div style={{ height: '2px', width: '1px' }} />
            </div>
          </a>
          <a rel="noreferrer noopener" target="_blank" className='flex items-center justify-center relative font-medium text-sm login-btn px-6 py-4 gap-4 rounded-xl overflow-hidden transition-all will-change-transform duration-200 hover:-translate-y-0.5 hover:brightness-125' href='https://forms.gle/dUXavHV5BGL3QAheA'>
            <div className='w-full'>Join the waitlist</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
        {/* <p className='opacity-60 text-xs mb-2'>Interested in trying Pyro?</p> */}

      </div>
    </main>
  )
}
