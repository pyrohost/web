import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'pyro.host - Home'
}

export default function Home() {
  return (
    <>
      <div style={{
        backgroundImage: 'url(/img/godrays.svg)',
        backgroundSize: '150rem',
        backgroundRepeat: 'no-repeat',
      }} className='absolute w-full h-full bg-left-top -top-96 -left-96 blur-lg saturate-150 brightness-150'></div>

      <main className="shrink-0 h-fit w-full relative">
        <div className='w-full h-full'>
          <section className="min-h-[fit-content] h-screen w-full relative px-16">
            <div className='flex flex-col w-full max-w-[1620px] mx-auto h-full'>
              <div className='flex flex-col max-w-[735px] w-full pt-60'>
                <a href='https://forms.gle/dUXavHV5BGL3QAheA' rel='noopener noreferrer' target='_blank' className='flex gap-4 p-2 bg-[#ffffff12] border-2 border-[#ffffff08] border-solid rounded-full px-4 w-fit font-bold text-sm justify-center items-center'>
                  <p>Be one of the first to try Pyro. <span className='text-brand'>Join the waitlist!</span></p>
                  {/* <a className='text-brand'>Join the waitlist</a> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>

                </a>
                <h1 className='mt-4 text-[109px] font-extrabold leading-[98%] tracking-[-0.35rem]'>
                  {/* <WordTransition
                  text='A better way to host games.'
                  delay={0.1}
                  gap={0.04}
                /> */}
                  A <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>better</span> way to host games.
                </h1>
                <p className='mt-10 text-[22px] leading-[155%] font-normal text-[#ffffff99]'>
                  Pyro is a new kind of host that makes it faster, easier, and cheaper to play your favorite games with friends. Instantly available, lag-free servers with unmatched value.</p>
                <div className='mt-10 flex flex-row items-center gap-4'>
                  <a style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4' href='https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15'>
                    <p>Create your server for free</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                  <a style={{ backgroundImage: 'radial-gradient(1182.86% 226.39% at 34.92% 22.73%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)' }} className='text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4 border-2 border-[#ffffff08] border-solid' href='https://billing.pyro.host/'>
                    <p>See our pricing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <img src="/img/fire2.png" alt='' aria-hidden style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
            }} className='img-fade-in inset-0 absolute w-full h-full bg-fill select-none pointer-events-none -z-10 brightness-125' />

            <img src="/img/fire.svg" alt='' aria-hidden style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
            }} className='img-fade-in inset-0 absolute w-full h-full bg-fill select-none pointer-events-none -z-10 brightness-[1.4]' />
          </section>

        </div>
        {/* <section className='h-[20000px]'></section> */}
      </main>
    </>
  )
}
