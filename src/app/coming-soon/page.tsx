import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'pyro.host - Coming Soon'
}

const Page = () => {
  return (
    <main className="h-full w-full relative">
      <section className="h-screen w-full relative px-16">
        <div className='flex flex-col w-full max-w-[1620px] mx-auto'>
          <div className='flex flex-col max-w-[735px] w-full mx-auto pt-60 z-10'>
            <h1 className='mt-4 text-[109px] font-extrabold leading-[98%] tracking-[-0.35rem]'>
              <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>Coming Soon</span>
            </h1>
            <p className='mt-10 text-[22px] leading-[155%] font-normal text-[#ffffff99]'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're rapidly expanding our infrastructure and crafting the best hosting experience possible. If you're wondering if Pyro is right for you or your community, join our waitlist and we'll be in touch. 🔥</p>
            <div className='mt-10 flex flex-row items-center gap-4'>
              <a href='https://forms.gle/dUXavHV5BGL3QAheA' rel='noopener noreferrer' target='_blank' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4'>
                <p>Join the waitlist</p>
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
        }} className='inset-0 absolute w-full h-full bg-fill select-none pointer-events-none ' />
      </section>
    </main>
  )
}

export default Page