import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PanelSection = () => {
  return (
    <section className="relative my-[12rem] h-full w-full px-16">
      <div className="relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center justify-center py-32 text-center">
        <h1 className="mt-4 max-w-[650px] text-[62px] font-extrabold leading-[98%] tracking-[-0.2rem]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}A
          management panel that's{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
            }}
          >
            simply fire
          </span>
        </h1>
        <p className="mt-10 max-w-[490px] text-[20px] font-normal leading-[155%] text-[#ffffff99]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Pyro's panel is unrivaled in accessibility, functionality, and
          aesthetics. Manage all your servers with confidence.
        </p>
        {/* <a style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='mt-10 text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4' href='https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15'>
          <p>Check it out</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </a> */}

        <Carousel
          className="mt-12 w-full px-16"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full overflow-hidden rounded-2xl bg-[#d6b4ba0f]">
                <Image
                  className="select-none"
                  fill
                  alt=""
                  src="/img/panel1.jpg"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full overflow-hidden rounded-2xl">
                <Image
                  className="select-none"
                  fill
                  alt=""
                  src="/img/panel2.jpg"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full overflow-hidden rounded-2xl">
                <Image
                  className="select-none"
                  fill
                  alt=""
                  src="/img/panel3.jpg"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PanelSection;
