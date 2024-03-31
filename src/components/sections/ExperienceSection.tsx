import Section from "@/components/sections/_components/SectionLayout";
import BrandText from "@/components/sections/_components/BrandText";
import ExternalLinkButton from "@/components/sections/_components/ExternalLinkButton";

const ExperienceSection = () => {
  return (
    <Section>
      <Section.Title maxWidth={700}>
        An experience that <BrandText>kindles your community</BrandText>
      </Section.Title>
      <Section.Description>
        Pyro’s network launches servers from scratch in within seconds. You’re
        always a minute away from playing, no matter where you are.
      </Section.Description>
      <div className="z-10 mt-8">
        <ExternalLinkButton
          href="https://discord.gg/fxeRFRbhQh"
          text="Launch your server in a minute"
        />
      </div>
    </Section>
  );
};

export default ExperienceSection;
