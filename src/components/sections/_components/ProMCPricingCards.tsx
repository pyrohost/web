import Image from "next/image";
import { FC } from "react";
import HugeIconsRAM from "@icons/hugeicons/RAM";
import HugeIconsPeople from "@icons/hugeicons/People";
import HugeIconsStorage from "@icons/hugeicons/Storage";
import HugeIconsTools from "@icons/hugeicons/Tools";
import HugeIconsLink from "@icons/hugeicons/Link";
import HugeIconsX from "@icons/hugeicons/X";
import HugeIconsCPU from "@icons/hugeicons/CPU";
import HugeIconsSupport from "@icons/hugeicons/Support";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MCPricingCardProps {
  planName: string;
  description: string;
  price: number;
  children?: React.ReactNode;
  outOfStock: boolean;
  purchaseLink?: string;
  fancy?: boolean;
}

interface Perk {
  icon: string;
  fill: "brand" | "regular";
  description: string;
  tooltip?: string;
}

interface MCPricingCardPerksProps {
  perks?: Perk[];
}

const iconComponents = {
  storage: HugeIconsStorage,
  people: HugeIconsPeople,
  ram: HugeIconsRAM,
  tools: HugeIconsTools,
  link: HugeIconsLink,
  x: HugeIconsX,
  cpu: HugeIconsCPU,
  support: HugeIconsSupport,
};

const MCPricingCardPerks: FC<MCPricingCardPerksProps> = ({ perks }) => {
  if (!perks) return null;

  return (
    <>
      {perks.map((perk, index) => {
        // @ts-ignore
        const IconComponent = iconComponents[perk.icon];
        return (
          <FlexRow key={index}>
            <IconComponent fill={perk.fill} />
            <p>{perk.description}</p>
            {perk.tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="-ml-2">
                    <InfoCircledIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{perk.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </FlexRow>
        );
      })}
    </>
  );
};

const FlexRow = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="flex flex-row items-center gap-4 text-left">{children}</div>
  );
};

const MCPricingLogo = () => {
  return (
    <Image
      src="/img/mc.png"
      alt=""
      width={31}
      height={31}
      className="aspect-square max-h-[31px] max-w-[31px]"
    />
  );
};

const MCPricingPrice = ({
  price,
  regionCode,
}: {
  price: number;
  regionCode: string;
}) => {
  return (
    <p className="flex">
      <span className="text-[12px] font-medium text-white">
        {regionCode.toUpperCase()}
      </span>
      <span className="ml-1.5 text-5xl font-black text-white">${price}</span>
      <span className="ml-2 self-center text-sm text-[#ffffff99]">
        per month
      </span>
    </p>
  );
};

const MCPricingCard: FC<MCPricingCardProps> = ({
  planName,
  description,
  price,
  children,
  outOfStock,
  purchaseLink,
  fancy = false,
}) => {
  return (
    <>
      <div
        className={`
        relative flex min-h-[650px] w-full flex-col gap-8 rounded-3xl p-8 backdrop-blur-lg
        ${fancy ? "border-[2px] border-solid border-brand bg-[#da84841a] md:bottom-4" : "bg-[#d6b4ba0f]"}
      `}
      >
        {fancy && (
          <div className="absolute -top-4 left-4 rounded-full bg-brand px-4 py-2 text-xs font-bold">
            Most Popular
          </div>
        )}
        <div className="flex gap-[14PX]">
          {fancy ? (
            <div className="brightness-200">
              <MCPricingLogo />
            </div>
          ) : (
            <MCPricingLogo />
          )}
          <h1 className="text-[31px] font-bold leading-[98%] tracking-[-0.1rem]">
            {planName}
          </h1>
        </div>

        <MCPricingPrice price={price} regionCode="us" />

        <h2 className="text-left text-[#ffffff99]">{description}</h2>

        <div className="text-md flex flex-col gap-4 font-bold">{children}</div>

        {!outOfStock && purchaseLink && (
          <>
            <a
              href={purchaseLink}
              rel="noreferrer noopener"
              target="_blank"
              className={`${fancy ? "bg-brand" : "bg-[#323232]"} mt-auto flex items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold`}
            >
              <p>Order now</p>
            </a>
          </>
        )}

        {outOfStock && (
          <div
            aria-hidden
            className="pointer-events-none mt-auto flex items-center justify-center gap-4 rounded-full bg-[#3f3e3e] py-3 pl-8 pr-6 text-sm font-bold opacity-50"
          >
            <p>Out of stock</p>
          </div>
        )}
      </div>
    </>
  );
};

const ProMCPricingCards = () => {
  return (
    <>
      <MCPricingCard
        outOfStock={false}
        purchaseLink="https://pay.pyro.host/checkout/config/7"
        planName="Max"
        description="The Max plan is for the largest communities and modpacks. It's the bleeding edge of performance and capacity that Pyro offers."
        price={20}
      >
        <MCPricingCardPerks
          perks={[
            {
              icon: "cpu",
              fill: "brand",
              description: "Resource-priority hardware",
            },
            {
              icon: "ram",
              fill: "brand",
              description: "12GB RAM",
              tooltip:
                "10GB of high-speed RAM, and 2GB of Pyro Overflow Memory for peak performance",
            },
            {
              icon: "people",
              fill: "brand",
              description: "Unlimited players",
            },
            {
              icon: "storage",
              fill: "brand",
              description: "Unlimited storage",
            },
            {
              icon: "tools",
              fill: "brand",
              description: "Supports every modpack and plugin",
            },
            {
              icon: "support",
              fill: "brand",
              description: "Priority support",
            },
            {
              icon: "link",
              fill: "brand",
              description: "Custom domain and pyro.host subdomain",
            },
          ]}
        />
      </MCPricingCard>
      <>
        <div
          className={`
        relative flex min-h-[650px] w-full flex-col gap-8 rounded-3xl bg-[#d6b4ba0f] p-8 backdrop-blur-lg
      `}
        >
          <div className="flex gap-[14PX]">
            <MCPricingLogo />
            <h1 className="text-[31px] font-bold leading-[98%] tracking-[-0.1rem]">
              Custom Plans
            </h1>
          </div>
          <p className="flex">
            <span className="ml-1.5 text-5xl font-black text-white">
              Contact Us
            </span>
          </p>
          <h2 className="text-left text-[#ffffff99]">
            If you need something more specific, we can work with you to create
            a custom plan that fits your needs.
          </h2>
          {/* <h2 className="text-left text-[#ffffff99]">{description}</h2> */}
          <>
            <a
              href="https://discord.gg/fxeRFRbhQh?utm_source=marketing_site&utm_medium=contact_sales_card_pricing&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH"
              rel="noreferrer noopener"
              target="_blank"
              className={`mt-auto flex items-center justify-center gap-4 rounded-full bg-brand py-3 pl-8 pr-6 text-sm font-bold`}
            >
              <p>Contact Us</p>
            </a>
          </>
        </div>
      </>
    </>
  );
};

export default ProMCPricingCards;
