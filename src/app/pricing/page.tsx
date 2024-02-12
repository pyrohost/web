import { Metadata } from "next";
import BrandText from "@/components/sections/_components/BrandText";
import ExternalLinkButton from "@/components/sections/_components/ExternalLinkButton";
import Section from "@/components/sections/_components/SectionLayout";
import MCPricingCards from "@/components/sections/_components/SpecialMCPricingCards";
import Image from "next/image";
import Link from "next/link";
import PanelSection from "@/components/sections/PanelSection";
import HugeIconsPeople from "@/components/icons/hugeicons/People";
import HugeIconsRAM from "@/components/icons/hugeicons/RAM";
import HugeIconsStorage from "@/components/icons/hugeicons/Storage";
import HugeIconsTools from "@/components/icons/hugeicons/Tools";
import HugeIconsSupport from "@/components/icons/hugeicons/Support";
import HugeIconsLink from "@/components/icons/hugeicons/Link";
import HugeIconsCPU from "@/components/icons/hugeicons/CPU";
import Cobe from "@/components/Cobe";

export const metadata: Metadata = {
  title: "pyro.host - Pricing and Minecraft Plans",
  description:
    "Pyro's instantly available, lag-free servers are unmatched in value. Host your Minecraft server and play with friends for just $4.",
  openGraph: {
    title: "pyro.host - Pricing and Minecraft Plans",
    description: "",
    images: [
      {
        url: "./ogimage.png",
      },
    ],
  },
};

const Page = () => {
  return (
    <main className="relative h-full w-full">
      <Section hero>
        <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
          <Image
            alt=""
            aria-hidden
            src="/img/fire2.png"
            fill
            className="pointer-events-none select-none object-cover grayscale"
          />
          <Image
            alt=""
            aria-hidden
            src="/img/blazehero.png"
            width={1600}
            height={650}
            className="pointer-events-none min-h-[500px] w-full select-none object-cover opacity-35 grayscale"
            style={{
              maskImage:
                "radial-gradient(85% 100% at 50% 100%, transparent 55.5%, white)",
            }}
          />
        </div>
        <div className="relative mt-24 flex flex-col items-center text-center md:mt-48">
          <Section.Title hero>
            {/* <BrandText> */}
            Plans for every community
            {/* </BrandText> */}
          </Section.Title>
          <Section.Description hero maxWidth={900}>
            Play with your friends on Pyro&apos;s instantly available, lag-free
            servers. With 24/7 support over chat, an incredibly beautiful
            management panel, and more. Starting at just $4.
          </Section.Description>
          {/* <Section.Description hero maxWidth={900}>
            More than just premium hardware. Pyro is the complete suite for your
            Minecraft server, with always-online, lag-free servers, 24/7 support
            over chat and email, and the world's most beautiful management
            panel.
          </Section.Description> */}
          <div className="mt-24 flex w-full flex-col gap-4 xl:flex-row">
            <MCPricingCards />
          </div>
        </div>
        <div className="absolute left-2 top-2 z-[9998] text-[9px] opacity-40 ">
          Background art ©{" "}
          <a
            href="https://pixeljoint.com/pixelart/130189.htm"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Catghost
          </a>
        </div>
      </Section>
      <Section>
        <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
          <div className="pointer-events-none relative inset-0 h-full w-screen select-none">
            {/* <Image
              alt=""
              aria-hidden
              src="/img/godrays.png"
              fill
              className="pointer-events-none mt-[12rem] scale-[2] scale-y-[3] select-none"
            /> */}
          </div>
        </div>
        <div className="relative z-20 flex w-full flex-col gap-8 rounded-3xl bg-[#d6b4ba0f] p-8 text-left backdrop-blur-lg">
          <Section.Title fullWidth>
            The easy choice for the <BrandText>largest</BrandText> servers
          </Section.Title>
          <p className="z-10 text-[17px] font-normal leading-[155%] text-[#ffffff99] md:text-[22px]">
            Pyro&apos;s Pro plans are designed for the largest communities.
            Support a large playerbase, run multiple servers, and manage it all
            with Pyro&apos;s world-class management panel. Need an illustration
            or a globe or something
          </p>
        </div>
      </Section>
      <Section>
        <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
          <Image
            alt=""
            aria-hidden
            src="/img/minecrafthero.jpg"
            width={1600}
            height={650}
            className="pointer-events-none mt-32 w-full scale-150 select-none border-t-[1px] border-solid border-white object-cover opacity-35 grayscale"
            style={{
              maskImage:
                "radial-gradient(85% 100% at 50% 100%, transparent 55.5%, white)",
            }}
          />
        </div>
        <Section.Title maxWidth={700}>
          Everything you need from a Minecraft host
        </Section.Title>
        <Section.Description maxWidth={600}>
          Only Pyro offers the complete suite for your Minecraft server. We keep
          your server online, your players happy, and your community growing,
          for the lowest price.
        </Section.Description>

        <div className="relative mt-24 flex w-full max-w-[1200px] flex-col text-left">
          <div className="grid grid-cols-3 grid-rows-2 place-items-start justify-items-center gap-9">
            <div className="inline max-w-[256px] font-medium text-[#888]">
              <HugeIconsSupport
                className="-mt-1.5 mr-1 inline !h-5 !w-5 fill-white"
                fill="regular"
              />
              <h4 className="inline leading-[170%]">
                <span className="inline text-white">Top-tier support.</span>{" "}
                Tickets and a dedicated team for every customer.
              </h4>
            </div>
            <div className="inline max-w-[256px] font-medium text-[#888]">
              <HugeIconsTools
                className="-mt-1.5 mr-1 inline !h-5 !w-5 fill-white"
                fill="regular"
              />
              <h4 className="inline leading-[170%]">
                <span className="inline text-white">
                  Mods, plugins, and Jars.
                </span>{" "}
                All your favorite tools, all in one place.
              </h4>
            </div>
            <div className="inline max-w-[256px] font-medium text-[#888]">
              <HugeIconsStorage
                className="-mt-1.5 mr-1 inline !h-5 !w-5 fill-white"
                fill="regular"
              />
              <h4 className="inline leading-[170%]">
                <span className="inline text-white">Boundless storage.</span>{" "}
                Store all your files, worlds, and backups, with no limits.
              </h4>
            </div>
            <div className="inline max-w-[256px] font-medium text-[#888]">
              <HugeIconsPeople
                className="-mt-1.5 mr-1 inline !h-5 !w-5 fill-white"
                fill="regular"
              />
              <h4 className="inline leading-[170%]">
                <span className="inline text-white">Bring your friends.</span>{" "}
                Unlimited players, unlimited fun. No player limits.
              </h4>
            </div>
            <div className="inline max-w-[256px] font-medium text-[#888]">
              <HugeIconsLink
                className="-mt-1.5 mr-1 inline !h-5 !w-5 fill-white"
                fill="regular"
              />
              <h4 className="inline leading-[170%]">
                <span className="inline text-white">Subdomains.</span> Create a
                recognizable pyro.host subdomain, for free.
              </h4>
            </div>
            <div className="inline max-w-[256px] font-medium text-[#888]">
              <HugeIconsCPU
                className="-mt-1.5 mr-1 inline !h-5 !w-5 fill-white"
                fill="regular"
              />
              <h4 className="inline leading-[170%]">
                <span className="inline text-white">
                  Unmatched performance.
                </span>{" "}
                The lowest latency and the most consistent speeds, with Pyro.
              </h4>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-16 xl:flex-row">
            <div className="flex w-full flex-col rounded-3xl border-2 border-[#ffffff11] bg-[#ffffff11] p-8">
              <h2 className="text-2xl font-bold">
                Any server type, any mod, all on Pyro
              </h2>
              <p className="mt-4 opacity-60">
                Pyro supports all server types, all mods, and all plugins. If
                you can run it on a server, you can run it on Pyro. Everything
                from Spigot to Forge, Paper to Fabric, Bukkit to BungeeCord, and
                everything in between.
              </p>
            </div>
            <div className="flex w-full flex-col rounded-3xl border-2 border-[#ffffff11] bg-[#ffffff11] p-8">
              <h2 className="text-2xl font-bold">
                Transfer your world, or start fresh
              </h2>
              <p className="mt-4 opacity-60">
                Pyro makes it easy to transfer your world, your plugins, and
                your mods, from any other host. Or, start fresh with a new world
                and new plugins. Pyro makes it easy to get started, and easy to
                switch. And, with our 24/7 support, you&apos;ll never be alone
                in the process.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <PanelSection />

      <Section>
        <div className="z-20">
          <Section.Title maxWidth={800}>Available worldwide</Section.Title>
          <Section.Description maxWidth={800}>
            We&apos;re starting in Europe, and are rapidly expanding to more
            locations soon. But no matter where you are, we strive for the best
            experience for you and your players. Pyro has the most consistent
            speeds and the lowest latency across continents.
          </Section.Description>
          <div className="mx-auto mt-8 w-fit">
            <ExternalLinkButton
              href="https://pay.pyro.host/checkout/config/3"
              text="Play globally, with Pyro."
            />
          </div>
        </div>
        <div className="absolute z-10 h-[400px] w-[800px] bg-black blur-[100px]"></div>
        <div className="absolute">
          <Cobe />
        </div>

        <div className="mt-24 flex w-full flex-col gap-4 xl:flex-row"></div>
      </Section>
    </main>
  );
};

export default Page;
