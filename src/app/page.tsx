import Holo from '@/components/Holo'
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
          <section className="min-h-[950px] h-screen w-full relative px-16">
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

            <img loading='lazy' decoding='async' src="/img/fire2.png" alt='' aria-hidden style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
            }} className='img-fade-in inset-0 absolute w-full h-full bg-fill select-none pointer-events-none -z-10 brightness-125' />

            <img loading='lazy' decoding='async' src="/img/fire.svg" alt='' aria-hidden style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
            }} className='img-fade-in inset-0 absolute w-full h-full bg-fill select-none pointer-events-none -z-10 brightness-[1.4]' />
          </section>

          <section className="h-full w-full relative px-16 my-[12rem]">
            <div style={{
              backgroundImage: 'url(/img/chips.png)',
              backgroundRepeat: 'no-repeat',
            }} className='absolute left-0 w-72 h-[calc(100%+240px)] -top-24 saturate-150 brightness-150'></div>
            <div style={{
              backgroundImage: 'url(/img/chips2.png)',
              backgroundRepeat: 'no-repeat',
            }} className='absolute right-0 w-72 h-[calc(100%+240px)] -top-24 saturate-150 brightness-150'></div>
            <div className='py-32 flex flex-col text-center items-center justify-center w-full max-w-[1620px] mx-auto h-full relative'>
              <div className='ignite-circle absolute top-1/2 -translate-y-[82%] w-[48rem] h-[48rem] rounded-full' style={{
                background: 'linear-gradient(180deg, rgba(248, 116, 116, 0.07) 0%, rgba(252, 142, 142, 0.00) 64.74%)'
              }}></div>

              <h1 className='mt-4 text-[62px] max-w-[490px] font-extrabold leading-[98%] tracking-[-0.2rem]'>
                Pricing that <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>ignites simplicity</span>
              </h1>
              <p className='mt-10 text-[20px] max-w-[490px] leading-[155%] font-normal text-[#ffffff99]'>
                Only pay for the hardware you need. Pyro offers simple pricing for servers of all sizes. Minecraft starts at only $4 per month.</p>
              <a style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='mt-10 text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4' href='https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15'>
                <p>See all available games</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>

              <div className='w-full flex mt-16 gap-12'>
                <div className='bg-[#d6b4ba0f] h-[600px] w-full flex rounded-3xl backdrop-blur-lg'>

                </div>
                <div className='bg-[#d6b4ba0f] h-[600px] w-full flex rounded-3xl backdrop-blur-lg'>

                </div>
                <div className='bg-[#d6b4ba0f] h-[600px] w-full flex rounded-3xl backdrop-blur-lg'>

                </div>
              </div>
            </div>
          </section>

          <section className="h-full w-full relative px-16 my-[12rem]">
            <div style={{
              backgroundImage: 'url(/img/stars.png)',
              backgroundRepeat: 'no-repeat',
            }} className='absolute left-0 w-[480px] h-[calc(100%+240px)] top-24 saturate-150 brightness-150'></div>
            <div style={{
              backgroundImage: 'url(/img/stars2.png)',
              backgroundRepeat: 'no-repeat',
            }} className='absolute right-0 w-[520px] h-[calc(100%+240px)] -top-24 saturate-150 brightness-150'></div>
            <div className='py-32 flex flex-col text-center items-center justify-center w-full max-w-[1620px] mx-auto h-full relative'>
              <h1 className='mt-4 text-[62px] max-w-[650px] font-extrabold leading-[98%] tracking-[-0.2rem]'>
                Servers that <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>spark to life</span> in seconds
              </h1>
              <p className='mt-10 text-[20px] max-w-[490px] leading-[155%] font-normal text-[#ffffff99]'>
                Pyro’s network launches servers from scratch in within seconds. You’re always a minute away from playing, no matter where you are.</p>
              <a style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='mt-10 text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4' href='https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15'>
                <p>It’s fast — really fast. Try it now</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>

            <div className='h-[800px]'>
              <div className='flex flex-row gap-12 absolute left-1/2 -translate-x-1/2'>
                <div className='bg-[#ffffff11] w-fit p-12 backdrop-blur-xl rounded-[64px]'>
                  <h1 className='mt-4 text-[42px] max-w-[240px] font-extrabold leading-[98%] tracking-[-0.2rem]'>
                    New York, United States
                  </h1>
                  <a style={{ backgroundImage: 'radial-gradient(1182.86% 226.39% at 34.92% 22.73%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)' }} className='mt-8 text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4 border-2 border-[#ffffff08] border-solid' href='https://billing.pyro.host/'>
                    <p>Test your ping</p>
                  </a>
                </div>
                <div className='bg-[#ffffff11] w-fit p-12  backdrop-blur-xl rounded-[64px]'>
                  <h1 className='mt-4 text-[38px] max-w-[240px] font-extrabold leading-[98%] tracking-[-0.2rem]'>
                    More locations coming soon!
                  </h1>
                </div>
              </div>
              <img loading='lazy' decoding='async' src="/img/globe.png" alt='' aria-hidden style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
              }} className='max-w-[1620px] img-fade-in top-[300px] left-1/2 -translate-x-1/2 absolute w-full h-full select-none pointer-events-none -z-10 brightness-[1.4]' />
            </div>
          </section>

          <section className="h-full w-full relative px-16 -mt-[20rem]">
            <div className='py-32 flex flex-col text-center items-center justify-center w-full max-w-[1620px] mx-auto h-full relative'>
              <h1 className='mt-4 text-[62px] max-w-[650px] font-extrabold leading-[98%] tracking-[-0.35rem]'>
                An experience that <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>fuels your community</span>
              </h1>
              <p className='mt-10 text-[20px] max-w-[490px] leading-[155%] font-normal text-[#ffffff99]'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                With Pyro, you don't need to hassle with outdated, insecure VPN software or use vehemently overpriced hosts. Simply pay, play, and go.</p>
              <a style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='mt-10 text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4' href='https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15'>
                <p>Try a server free for 24 hours</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </section>

          <section className="h-full w-full relative px-16 py-12 my-[12rem]" style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% 60%,rgb(246 99 145 / 7%),var(--transparent))'
          }}>
            <div className='py-32 flex flex-col justify-center w-full max-w-[1620px] mx-auto h-full relative'>
              <h1 className='mt-4 text-[109px] max-w-[970px] font-extrabold leading-[98%] tracking-[-0.35rem]'>
                You deserve a <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>better way</span> to play.
              </h1>
              <div className='mt-16 flex flex-col p-8 gap-4 bg-[#130e0e] w-fit rounded-3xl'>
                <h1 className='text-[42px] font-extrabold leading-[98%] tracking-[-0.2rem]'>
                  Exclusive Offer
                </h1>
                <p className='text-[20px] max-w-[480px] leading-[155%] font-normal text-[#ffffff99]'>
                  Launch a Minecraft server in seconds and play for free for 24 hours. No credit card required.
                </p>
                <Holo radius={24}>
                  <a style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='w-fit text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4' href='https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15'>
                    <p>Get a server now</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                </Holo>
              </div>
            </div>
          </section>
        </div>
        {/* <section className='h-[20000px]'></section> */}
      </main>
    </>
  )
}
