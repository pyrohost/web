import Image from "next/image";
import MCPricingCards from "@/components/main/MCPricingCards";

const PricingSection = () => {
  return (
    <section className="relative my-[12rem] h-full w-full px-16">
      <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
        <div className="pointer-events-none relative inset-0 flex h-full w-full select-none justify-between">
          <div className="relative h-full w-[25%]">
            <Image
              alt=""
              aria-hidden
              src="/img/chips2.png"
              fill
              className="pointer-events-none select-none object-cover"
            />
          </div>
          <div className="relative h-full w-[25%]">
            <Image
              alt=""
              aria-hidden
              src="/img/chips.png"
              fill
              className="pointer-events-none select-none object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center justify-center py-32 text-center">
        <div
          className="pointer-events-none absolute top-1/2 h-[48rem] w-[48rem] -translate-y-[82%] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(248, 116, 116, 0.07) 0%, rgba(252, 142, 142, 0.00) 64.74%)",
          }}
        ></div>

        <h1 className="mt-4 max-w-[490px] text-[62px] font-extrabold leading-[98%] tracking-[-0.2rem]">
          Pricing that{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
            }}
          >
            ignites simplicity
          </span>
        </h1>
        <p className="mt-10 max-w-[490px] text-[20px] font-normal leading-[155%] text-[#ffffff99]">
          Only pay for the hardware you need. Pyro offers simple pricing for
          servers of all sizes. Minecraft starts at only $4 per month.
        </p>
        <a
          style={{
            backgroundImage:
              "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
          }}
          className="mt-10 flex items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold"
          href="https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15"
        >
          <p>See all available games</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>

        <div className="mt-16 flex w-full flex-col gap-4 xl:flex-row">
          <MCPricingCards />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
