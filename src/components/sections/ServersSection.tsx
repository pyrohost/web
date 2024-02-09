import Image from "next/image";
import Section from "@/components/sections/_components/SectionLayout";
import BrandText from "@/components/sections/_components/BrandText";
import ExternalLinkButton from "@/components/sections/_components/ExternalLinkButton";

const ServersSectionImages = () => {
  return (
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
  );
};

const ServersSection = () => {
  return (
    <Section>
      <ServersSectionImages />
      <Section.Title>
        Servers that <BrandText>spark to life</BrandText> in seconds
      </Section.Title>
      <Section.Description>
        Pyro’s network launches servers from scratch in within seconds. You’re
        always a minute away from playing, no matter where you are.
      </Section.Description>
      <div className="z-10 mt-8">
        <ExternalLinkButton
          href="https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15"
          text="Launch your server in a minute"
        />
      </div>

      <div className="relative h-[650px] w-full">
        <div className="absolute left-1/2 z-10 mt-12 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-12 md:flex-row">
          <div className="w-full rounded-[64px] bg-[#ffffff11] p-12 backdrop-blur-xl md:w-fit">
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
          <div className="w-full rounded-[64px] bg-[#ffffff11] p-12  backdrop-blur-xl md:w-fit">
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
                className="pointer-events-none absolute -top-[220px] left-1/2 max-w-[1620px] -translate-x-1/2 select-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServersSection;
