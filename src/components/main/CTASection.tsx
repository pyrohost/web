import Holo from "@/components/ui/Holo";

const CTASection = () => {
  return (
    <section
      className="relative my-[12rem] h-full w-full px-16 py-12"
      style={{
        background:
          "radial-gradient(ellipse 100% 60% at 50% 60%,rgb(246 99 145 / 7%),var(--transparent))",
      }}
    >
      <div className="relative mx-auto flex h-full w-full max-w-[1620px] flex-col justify-center py-32">
        <h1 className="mt-4 max-w-[960px] text-[60px] font-extrabold leading-[98%] tracking-[-0.25rem] md:text-[109px] md:tracking-[-0.35rem]">
          You deserve a{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
            }}
          >
            better way
          </span>{" "}
          to play.
        </h1>
        <div className="mt-16 flex w-fit flex-col gap-4 rounded-3xl bg-[#130e0e] p-8">
          <h1 className="text-[42px] font-extrabold leading-[98%] tracking-[-0.1rem]">
            Exclusive Offer
          </h1>
          <p className="max-w-[480px] text-[20px] font-normal leading-[155%] text-[#ffffff99]">
            Try a Minecraft server free for 24 hours, on us. No credit card
            required.
          </p>
          <Holo radius={24}>
            <a
              style={{
                backgroundImage:
                  "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
              }}
              className="flex w-fit items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold"
              href="https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15"
            >
              <p>Get a server now</p>
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
          </Holo>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
