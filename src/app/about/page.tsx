import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'pyro - About Us'
}

const Page = () => {
  return (
    <main className="h-full w-full relative">
      <section className="min-h-screen w-full relative px-16 text-center">
        <div className='relative flex flex-col w-full h-full min-h-screen  max-w-[1620px] mx-auto items-center'>
          <Image src='/img/glowgo.png' alt='' width={507} height={643} className='absolute scale-[0.8] top-12 contrast-[1.05] mix-blend-lighten [--padding:128] [--size:300] [--total:calc((2*var(--padding))+var(--size))] [mask:radial-gradient(calc(664/var(--total)*100%)_calc(389/var(--total)*100%)_at_50%_calc((var(--padding)-4)/var(--total)*100%),white,rgba(255,255,255,0.85)_58%,rgba(255,255,255,0))]' />
          <div className='mt-[24rem] flex flex-col h-full max-w-[810px] w-full mx-auto pt-20 z-10 items-center'>
            <h1 className='text-[52px] font-extrabold leading-[98%] tracking-[-0.14rem]'>
              Pyro's mission is to build the <br></br><span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>best hosting platform in the world.</span>
            </h1>
            <p className='mt-10 text-[22px] leading-[155%] font-normal text-[#ffffff99]'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're a passionate, tight-knit team obsessed with every step of the hosting process. Pyro empowers anyone to play their favorite games with friends.</p>
          </div>
        </div>
      </section>
      <div className='absolute inset-0 select-none pointer-events-none img-opacity-animation'>
        <div className='relative inset-0 select-none pointer-events-none w-full h-full -top-64'>
          <Image alt='' aria-hidden src="/img/godrays.png" fill className='scale-150 blur-[1rem] select-none pointer-events-none' />
          <Image alt='' aria-hidden src="/img/godrays.png" fill className='scale-150 blur-[4rem] opacity-15 select-none pointer-events-none' />
          <Image alt='' aria-hidden src="/img/godrays.png" fill className='scale-150 blur-[15rem] select-none pointer-events-none' />
          <Image alt='' aria-hidden src="/img/godrays.png" fill className='scale-150 blur-[15rem] select-none pointer-events-none' />
        </div>
      </div>
    </main>
  )
}

export default Page