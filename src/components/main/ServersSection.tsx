import Image from "next/image";

const ServersSection = () => {
  return (
    <section className="relative my-[12rem] h-full w-full px-16">
      <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
        <div className="pointer-events-none relative inset-0 flex h-full w-full select-none justify-between">
          <div className="relative h-full w-[25%]">
            <Image
              alt=""
              aria-hidden
              src="/img/stars2.png"
              fill
              className="pointer-events-none select-none object-cover"
            />
          </div>
          <div className="relative h-full w-[25%]">
            <Image
              alt=""
              aria-hidden
              src="/img/stars.png"
              fill
              className="pointer-events-none select-none object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1620px] flex-col items-center justify-center py-32 text-center">
        <h1 className="mt-4 max-w-[650px] text-[62px] font-extrabold leading-[98%] tracking-[-0.2rem]">
          Servers that{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
            }}
          >
            spark to life
          </span>{" "}
          in seconds
        </h1>
        <p className="mt-10 max-w-[490px] text-[20px] font-normal leading-[155%] text-[#ffffff99]">
          Pyro’s network launches servers from scratch in within seconds. You’re
          always a minute away from playing, no matter where you are.
        </p>
        <a
          style={{
            backgroundImage:
              "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
          }}
          className="mt-10 flex items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold"
          href="https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15"
        >
          <p>Launch your server in a minute</p>
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
      </div>

      <div className="relative h-[650px]">
        <div className="absolute left-1/2 z-10 flex -translate-x-1/2 flex-row gap-12">
          <div className="w-fit rounded-[64px] bg-[#ffffff11] p-12 backdrop-blur-xl">
            <h1 className="mt-4 max-w-[240px] text-[42px] font-extrabold leading-[98%] tracking-[-0.2rem]">
              Helsinki, Finland
            </h1>
            <div
              style={{
                backgroundImage:
                  "radial-gradient(1182.86% 226.39% at 34.92% 22.73%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
              className="mt-8 flex flex-col items-center justify-center gap-1 rounded-full border-2 border-solid border-[#ffffff08] py-3 pl-8 pr-6 text-sm font-bold opacity-50"
              // href="https://billing.pyro.host/"
            >
              <p>Test your ping</p>
              <p className="text-xs">Coming Soon</p>
            </div>
          </div>
          <div className="w-fit rounded-[64px] bg-[#ffffff11]  p-12 backdrop-blur-xl">
            <h1 className="mt-4 max-w-[240px] text-[38px] font-extrabold leading-[98%] tracking-[-0.2rem]">
              More locations coming soon!
            </h1>
          </div>
        </div>
        <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
          <div className="pointer-events-none relative inset-0 flex h-full w-full select-none justify-between">
            <div className="relative h-full w-full">
              <Image
                alt=""
                width={1478}
                height={906}
                aria-hidden
                src="/img/globe2.png"
                className="pointer-events-none absolute -top-[360px] left-1/2 max-w-[1620px] -translate-x-1/2 select-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
