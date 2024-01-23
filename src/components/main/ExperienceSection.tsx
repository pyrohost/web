const ExperienceSection = () => {
  return (
    <section className="relative my-[12rem] h-full w-full px-16">
      <div className="relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center justify-center py-32 text-center">
        <h1 className="mt-4 max-w-[650px] text-[62px] font-extrabold leading-[98%] tracking-[-0.2rem]">
          An experience that{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
            }}
          >
            fuels your community
          </span>
        </h1>
        <p className="mt-10 max-w-[490px] text-[20px] font-normal leading-[155%] text-[#ffffff99]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          With Pyro, you don't need to hassle with outdated, insecure VPN
          software or juggle prices and billing. Simply pay, play, and go.
        </p>
        <a
          style={{
            backgroundImage:
              "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
          }}
          className="mt-10 flex items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold"
          href="https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15"
        >
          <p>Try a server free for 24 hours</p>
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
    </section>
  );
};

export default ExperienceSection;
