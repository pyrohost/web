import Holo from "@/components/ui/Holo";
import Section from "@/components/sections/_components/SectionLayout";
import BrandText from "@/components/sections/_components/BrandText";
import ExternalLinkButton from "@/components/sections/_components/ExternalLinkButton";

const CTASection = () => {
  return (
    <Section hero>
      <Section.Title hero>
        You deserve a <BrandText>better way to play</BrandText>
      </Section.Title>
      <div className="mt-16 flex w-fit flex-col gap-4 rounded-3xl bg-[#130e0e] p-8">
        <h1 className="text-[42px] font-extrabold leading-[98%] tracking-[-0.1rem]">
          Exclusive Offer
        </h1>
        <p className="max-w-[480px] text-[20px] font-normal leading-[155%] text-[#ffffff99]">
          Try a Minecraft server free for 24 hours, on us. No credit card
          required.
        </p>
        <Holo radius={24}>
          <ExternalLinkButton
            href="https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15"
            text="Try a server free for 24 hours"
          />
        </Holo>
      </div>
    </Section>
  );
};

export default CTASection;
