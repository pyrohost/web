import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const PanelSection = () => {
  return (
    <section className="h-full w-full relative px-16 my-[12rem]">
      <div className='py-32 flex flex-col text-center items-center justify-center w-full max-w-[1620px] mx-auto h-full relative'>
        <h1 className='mt-4 text-[62px] max-w-[650px] font-extrabold leading-[98%] tracking-[-0.2rem]'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          A management panel that's <span className='bg-clip-text text-transparent' style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }}>simply fire</span>
        </h1>
        <p className='mt-10 text-[20px] max-w-[490px] leading-[155%] font-normal text-[#ffffff99]'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Pyro's panel is unrivaled in accessibility, functionality, and aesthetics. Manage all your servers with confidence.</p>
        {/* <a style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='mt-10 text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4' href='https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15'>
          <p>Check it out</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </a> */}

        <Carousel className="w-full px-16 mt-12" opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            <CarouselItem>
              <div className='overflow-hidden rounded-2xl aspect-video relative w-full h-full bg-[#d6b4ba0f]'>
                <Image className='select-none' fill alt='' src='/img/panel1.jpg' />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='overflow-hidden rounded-2xl aspect-video relative w-full h-full'>
                <Image className='select-none' fill alt='' src='/img/panel2.jpg' />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='overflow-hidden rounded-2xl aspect-video relative w-full h-full'>
                <Image className='select-none' fill alt='' src='/img/panel3.jpg' />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default PanelSection;