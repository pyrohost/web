import { Metadata } from "next";
import BrandText from "@/components/sections/_components/BrandText";
import ExternalLinkButton from "@/components/sections/_components/ExternalLinkButton";
import Section from "@/components/sections/_components/SectionLayout";
import MCPricingCards from "@/components/sections/_components/SpecialMCPricingCards";
import Image from "next/image";
import Link from "next/link";

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
      <Section hero>
        <div className="relative mt-24 flex flex-col items-center text-center md:mt-48">
          <Section.Title hero>
            {/* <BrandText> */}
            Remarkably reliable Minecraft hosting
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
        <div className="absolute left-2 top-2 text-[9px] opacity-40">
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
        <div className="relative flex w-full flex-col gap-8 rounded-3xl bg-[#d6b4ba0f] p-8 text-left backdrop-blur-lg">
          <Section.Title fullWidth>
            Need a plan for <BrandText>extraordinarily</BrandText> large
            servers?
          </Section.Title>
          <Section.Description fullWidth>
            asdfhjasdkjhsadkhjasdflkhjasdfklhj
          </Section.Description>
        </div>
      </Section>
      <Section>
        <Section.Title maxWidth={850}>
          Dont take our word for it. <BrandText>Start a free trial.</BrandText>
        </Section.Title>
        <Section.Description maxWidth={600}>
          Only pay for what you need. Pyro offers simple pricing for servers of
          all sizes. Minecraft starts at only $4 per month.
        </Section.Description>

        <div className="mt-24 flex w-full flex-col gap-4 xl:flex-row"></div>
      </Section>
    </main>
  );
};

export default Page;
