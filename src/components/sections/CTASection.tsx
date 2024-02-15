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
      <Section.Description maxWidth={700}>
        It&apos;s about time you experienced the future of game hosting. Order your
        Pyro server today and experience the difference.
      </Section.Description>
      <div className="mt-10 flex w-fit">
        <ExternalLinkButton href="https://pay.pyro.host" text="Order Now" />
      </div>
    </Section>
  );
};

export default CTASection;
