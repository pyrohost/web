import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'pyro - About Us'
}

const Page = () => {
  return (
    <main className="h-full w-full relative">
      <section className="min-h-screen w-full relative px-16 text-center">
        <div className='flex flex-col w-full max-w-[1620px] mx-auto'>
          <div className='flex flex-col max-w-[735px] w-full mx-auto pt-60 z-10'>
            <h1 className='mt-4 text-[109px] font-extrabold leading-[98%] tracking-[-0.35rem]'>
              <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>It starts with community.</span>
            </h1>
            <p className='mt-10 text-[22px] leading-[155%] font-normal text-[#ffffff99]'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Pyro's platform gives anyone the ability to play their favorite games online. We're a passionate, tight-knit team building the best hosting platform in the world.</p>
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