import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Section from "@/components/sections/_components/SectionLayout";
import BrandText from "@/components/sections/_components/BrandText";
import ExternalLinkButton from "@/components/sections/_components/ExternalLinkButton";

const PanelSection = () => {
  return (
    <Section>
      <Section.Title maxWidth={650}>
        A management panel that&apos;s <BrandText>simply fire</BrandText>
      </Section.Title>
      <Section.Description maxWidth={600}>
        Pyro&apos;s panel is unrivaled in accessibility, functionality, and
        aesthetics. Manage all your servers with confidence.
      </Section.Description>

      <Carousel
        className="mt-12 w-full md:px-16"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-2xl bg-[#d6b4ba0f]">
              <Image
                className="select-none"
                fill
                alt=""
                src="/img/panel1.jpg"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-2xl">
              <Image
                className="select-none"
                fill
                alt=""
                src="/img/panel2.jpg"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-2xl">
              <Image
                className="select-none"
                fill
                alt=""
                src="/img/panel3.jpg"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default PanelSection;
