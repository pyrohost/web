import Holo from '@/components/ui/Holo'

const CTASection = () => {
  return (
    <section className="h-full w-full relative px-16 py-12 my-[12rem]" style={{
      background: 'radial-gradient(ellipse 100% 60% at 50% 60%,rgb(246 99 145 / 7%),var(--transparent))'
    }}>
      <div className='py-32 flex flex-col justify-center w-full max-w-[1620px] mx-auto h-full relative'>
        <h1 className='mt-4 text-[109px] max-w-[970px] font-extrabold leading-[98%] tracking-[-0.35rem]'>
          You deserve a <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>better way</span> to play.
        </h1>
        <div className='mt-16 flex flex-col p-8 gap-4 bg-[#130e0e] w-fit rounded-3xl'>
          <h1 className='text-[42px] font-extrabold leading-[98%] tracking-[-0.1rem]'>
            Exclusive Offer
          </h1>
          <p className='text-[20px] max-w-[480px] leading-[155%] font-normal text-[#ffffff99]'>
            Try a Minecraft server free for 24 hours, on us. No credit card required.
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
  )
}

export default CTASection;