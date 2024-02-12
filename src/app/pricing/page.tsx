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
            <div
              className="flex min-h-[400px] w-full flex-col overflow-hidden rounded-3xl border-2 border-[#ffffff11] p-8 backdrop-blur-3xl"
              // style={{
              //   background:
              //     "linear-gradient(to right top, rgb(49, 58, 96), rgb(78, 92, 110))",
              // }}
            >
              <h2 className="z-10 flex items-center text-2xl font-bold text-[#f8efef]">
                Overflow Memory{" "}
                <span className="z-10 ml-2 rounded-full bg-brand px-2 py-1 text-xs text-white">
                  Only on Pyro
                </span>
              </h2>
              <p className="z-10 mt-4 max-w-lg opacity-60">
                All Pyro servers come with Overflow Memory, allowing your server
                to use more memory when you need it most. Your server comes with
                both high-speed RAM and NVME-based memory, available when you
                need it, at no extra cost.
              </p>
              <div className="absolute left-3/4 z-[1] -translate-x-1/2 transform">
                <div className="absolute -left-14 top-28 z-10 flex h-24 w-24 -rotate-[6deg] items-center justify-center rounded-2xl border border-transparent shadow-2xl [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] before:absolute before:inset-0 before:rounded-2xl before:bg-zinc-900/30">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9436 3.25H12.0564H12.0565H12.0565C13.8942 3.24999 15.3498 3.24997 16.489 3.40314C17.6614 3.56076 18.6104 3.89288 19.3588 4.64125C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65019 20.75 10.1058 20.75 11.9435V12.0564C20.75 13.8942 20.75 15.3498 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C15.3498 20.75 13.8942 20.75 12.0565 20.75H11.9436C10.1059 20.75 8.65019 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64125 19.3588C3.89288 18.6104 3.56076 17.6614 3.40314 16.489C3.24997 15.3498 3.24999 13.8942 3.25 12.0565V12.0564V12.0564V11.9436V11.9436V11.9435C3.24999 10.1058 3.24997 8.65018 3.40314 7.51098C3.56076 6.33856 3.89288 5.38961 4.64125 4.64125C5.38961 3.89288 6.33856 3.56076 7.51098 3.40314C8.65018 3.24997 10.1058 3.24999 11.9435 3.25H11.9436H11.9436ZM13.3301 7.72831C13.7563 8.07955 13.8171 8.70979 13.4659 9.136L11.9606 10.9626L13.2898 11.2259C13.8247 11.3319 14.2519 11.7023 14.4225 12.1995C14.5962 12.7057 14.4802 13.2891 14.0578 13.6991L11.4634 16.2176C11.0671 16.6022 10.434 16.5928 10.0493 16.1966C9.66466 15.8003 9.67406 15.1672 10.0703 14.7825L11.9145 12.9923L10.7107 12.7538C9.72352 12.5582 9.05034 11.3492 9.83143 10.4014L11.9225 7.86406C12.2737 7.43785 12.9039 7.37708 13.3301 7.72831Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.5 1C10.0523 1 10.5 1.44772 10.5 2V4C10.5 4.55228 10.0523 5 9.5 5C8.94772 5 8.5 4.55228 8.5 4V2C8.5 1.44772 8.94772 1 9.5 1ZM14.5 1C15.0523 1 15.5 1.44772 15.5 2V4C15.5 4.55228 15.0523 5 14.5 5C13.9477 5 13.5 4.55228 13.5 4V2C13.5 1.44772 13.9477 1 14.5 1ZM1 9.5C1 8.94772 1.44772 8.5 2 8.5H4C4.55228 8.5 5 8.94772 5 9.5C5 10.0523 4.55228 10.5 4 10.5H2C1.44772 10.5 1 10.0523 1 9.5ZM19 9.5C19 8.94772 19.4477 8.5 20 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20C19.4477 10.5 19 10.0523 19 9.5ZM1 14.5C1 13.9477 1.44772 13.5 2 13.5H4C4.55228 13.5 5 13.9477 5 14.5C5 15.0523 4.55228 15.5 4 15.5H2C1.44772 15.5 1 15.0523 1 14.5ZM19 14.5C19 13.9477 19.4477 13.5 20 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20C19.4477 15.5 19 15.0523 19 14.5ZM9.5 19C10.0523 19 10.5 19.4477 10.5 20V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20C8.5 19.4477 8.94772 19 9.5 19ZM14.5 19C15.0523 19 15.5 19.4477 15.5 20V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20C13.5 19.4477 13.9477 19 14.5 19Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="overflow-memory-in relative z-[1] delay-0">
                  <div className="absolute left-1/2 z-[1] h-[1026px] w-[1026px] -translate-x-1/2 transform rounded-full border-t border-zinc-500/20 bg-gradient-to-b from-zinc-900 from-0% via-transparent via-20% to-100%"></div>
                </div>
                <div className="overflow-memory-in relative z-[1] !delay-75">
                  <div className="absolute left-1/2 top-[160px] z-[1] h-[684px] w-[684px] -translate-x-1/2 transform rounded-full border-t border-zinc-500/20 bg-gradient-to-b from-zinc-900 from-0% via-transparent via-20% to-100% shadow-2xl shadow-zinc-500/50"></div>
                </div>
                <div className="overflow-memory-in relative z-[1] !delay-150">
                  <div className="absolute left-1/2 top-[300px] z-[1] h-[342px] w-[342px] -translate-x-1/2 transform rounded-full border-t border-zinc-500/20 bg-gradient-to-b from-zinc-900 from-0% via-transparent via-20% to-100% shadow-2xl shadow-zinc-500/50"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-8 xl:flex-row">
            <div className="flex w-full flex-col rounded-3xl border-2 border-[#ffffff11] bg-[#ffffff11] p-8">
              <h2 className="text-2xl font-bold">
                Any server type, any mod, all on Pyro
              </h2>
              <p className="mt-4 opacity-60">
                Pyro supports all server types, all mods, and all plugins. If
                you can run it on a server, you can run it on Pyro. Everything
                from Spigot to Forge, Paper to Fabric, Bukkit to BungeeCord, and
                everything in between. Play your favorite mods, like Feed The
                Beast and ATLauncher.
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
            experience for you and your players.
          </Section.Description>
          <div className="mx-auto mt-8 w-fit">
            <ExternalLinkButton
              href="https://pay.pyro.host/checkout/config/3"
              text="Go global with Pyro"
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
