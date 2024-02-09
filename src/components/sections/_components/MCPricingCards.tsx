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
}

interface MCPricingCardPerksProps {
  perks: Perk[];
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
  return (
    <>
      {perks.map((perk, index) => {
        // @ts-ignore
        const IconComponent = iconComponents[perk.icon];
        return (
          <FlexRow key={index}>
            <IconComponent fill={perk.fill} />
            <p>{perk.description}</p>
          </FlexRow>
        );
      })}
    </>
  );
};

const FlexRow = ({ children }: { children: React.ReactNode[] }) => {
  return <div className="flex flex-row gap-4">{children}</div>;
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
        relative flex h-[700px] w-full flex-col gap-8 rounded-3xl p-8 backdrop-blur-lg
        ${fancy ? "bottom-4 border-[2px] border-solid border-brand bg-[#da84841a]" : "bg-[#d6b4ba0f]"}
      `}
      >
        {fancy && (
          <div className="absolute -top-4 left-4 rounded-full bg-brand px-4 py-2 text-xs font-bold">
            Most Popular
          </div>
        )}
        <div className="flex gap-[14PX]">
          <MCPricingLogo />
          <h1 className="text-[31px] font-bold leading-[98%] tracking-[-0.1rem]">
            {planName}
          </h1>
        </div>

        <MCPricingPrice price={price} regionCode="us" />

        <h2 className="text-left text-[#ffffff99]">{description}</h2>
        <div className="text-md flex flex-col gap-4 font-bold">{children}</div>

        {!outOfStock && purchaseLink && (
          <>
            <div>:3</div>
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

const MCPricingCards = () => {
  return (
    <>
      <MCPricingCard
        outOfStock
        planName="Minecraft Basic"
        description="Try out Pyro's hosting for you and your community. Perfect for vanilla Minecraft versions below 1.12.2. Does not support modpacks."
        price={4}
      >
        <MCPricingCardPerks
          perks={[
            {
              icon: "cpu",
              fill: "regular",
              description: "Standard hardware",
            },
            {
              icon: "ram",
              fill: "regular",
              description: "2GB RAM",
            },
            {
              icon: "people",
              fill: "regular",
              description: "Up to 3 players",
            },
            {
              icon: "storage",
              fill: "regular",
              description: "Up to 10GB of Storage",
            },
            {
              icon: "x",
              fill: "regular",
              description: "No modding support",
            },
            {
              icon: "x",
              fill: "regular",
              description: "Standard support",
            },
            {
              icon: "x",
              fill: "regular",
              description: "No custom domains",
            },
          ]}
        />
      </MCPricingCard>

      <MCPricingCard
        fancy
        outOfStock
        planName="Minecraft Essential"
        description="Everything you need to get started, quickly. Perfect for playing solo or with a small group of friends. Supports your favorite modpacks."
        price={8}
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
              description: "4GB RAM",
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
              description: "Great modding support",
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

      <MCPricingCard
        outOfStock
        planName="Minecraft Premium"
        description="Powerful features for the most demanding modpacks, large communities, and players desiring a premium, lag-free experience."
        price={16}
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
              description: "8GB RAM",
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
              description: "Awesome modding support",
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
    </>
  );
};

export default MCPricingCards;
