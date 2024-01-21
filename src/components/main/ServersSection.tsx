import Image from 'next/image'

const ServersSection = () => {
  return (
    <section className="h-full w-full relative px-16 my-[12rem]">
      <div className='absolute inset-0 select-none pointer-events-none img-opacity-animation'>
        <div className='w-full h-full relative inset-0 select-none pointer-events-none flex justify-between'>
          <div className='h-full w-[25%] relative'>
            <Image alt='' aria-hidden src="/img/stars2.png" fill className='object-cover select-none pointer-events-none' />
          </div>
          <div className='h-full w-[25%] relative'>
            <Image alt='' aria-hidden src="/img/stars.png" fill className='object-cover select-none pointer-events-none' />
          </div>
        </div>
      </div>
      <div className='py-32 flex flex-col text-center items-center justify-center w-full max-w-[1620px] mx-auto h-full relative z-10'>
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

      <div className='relative h-[650px]'>
        <div className='flex flex-row gap-12 absolute left-1/2 -translate-x-1/2 z-10'>
          <div className='bg-[#ffffff11] w-fit p-12 backdrop-blur-xl rounded-[64px]'>
            <h1 className='mt-4 text-[42px] max-w-[240px] font-extrabold leading-[98%] tracking-[-0.2rem]'>
              Helsinki, Finland
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
        <div className='absolute inset-0 select-none pointer-events-none img-opacity-animation'>
          <div className='w-full h-full relative inset-0 select-none pointer-events-none flex justify-between'>
            <div className='h-full w-full relative'>
              <Image alt='' width={1478} height={906} aria-hidden src="/img/globe2.png" className='max-w-[1620px] -top-[360px] absolute object-cover select-none pointer-events-none left-1/2 -translate-x-1/2' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServersSection;