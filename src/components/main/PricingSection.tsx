import Image from 'next/image'
import MCPricingCards from '@/components/main/MCPricingCards'

const PricingSection = () => {
  return (
    <section className="h-full w-full relative px-16 my-[12rem]">
    <div className='absolute inset-0 select-none pointer-events-none img-opacity-animation'>
      <div className='w-full h-full relative inset-0 select-none pointer-events-none flex justify-between'>
        <div className='h-full w-[25%] relative'>
          <Image alt='' aria-hidden src="/img/chips2.png" fill className='object-cover select-none pointer-events-none' />
        </div>
        <div className='h-full w-[25%] relative'>
          <Image alt='' aria-hidden src="/img/chips.png" fill className='object-cover select-none pointer-events-none' />
        </div>
      </div>
    </div>

    <div className='py-32 flex flex-col text-center items-center justify-center w-full max-w-[1620px] mx-auto h-full relative'>
      <div className='pointer-events-none absolute top-1/2 -translate-y-[82%] w-[48rem] h-[48rem] rounded-full' style={{
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

      <div className='w-full flex flex-col xl:flex-row mt-16 gap-4'>
        <MCPricingCards />
      </div>
    </div>
  </section>
  )}

  export default PricingSection;