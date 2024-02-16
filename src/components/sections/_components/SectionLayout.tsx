const Section = ({
  children,
  hero = false,
}: {
  children: React.ReactNode;
  hero?: boolean;
}) => {
  return (
    <section
      data-standard-pyro-component={hero ? "Section-VariantHero" : "Section"}
      className={`${hero ? "relative h-full min-h-screen w-full px-4 md:px-16" : "relative my-[12rem] h-full w-full px-4 md:px-16"}`}
    >
      <div
        data-standard-pyro-component={hero ? "Section-VariantHero" : "Section"}
        className={`${hero ? "mx-auto flex h-full w-full max-w-[1620px] flex-col" : "relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center justify-center py-32 text-center"} `}
      >
        {children}
      </div>
    </section>
  );
};

const SectionTitle = ({
  children,
  hero = false,
  fullWidth = false,
  maxWidth = 960,
  ...other
}: {
  children: React.ReactNode;
  hero?: boolean;
  fullWidth?: boolean;
  maxWidth?: number;
}) => {
  return (
    <h1
      data-standard-pyro-component="SectionTitle"
      className={`z-10 ${hero ? "mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.25rem] md:text-[109px] md:tracking-[-0.35rem]" : "mt-4 text-[34px] font-extrabold leading-[98%] tracking-[-0.1rem] md:text-[62px] md:tracking-[-0.2rem]"} `}
      style={{
        maxWidth: `${fullWidth ? "100%" : `${maxWidth}px`}`,
        width: `${fullWidth ? "100%" : ""}`,
      }}
      {...other}
    >
      {children}
    </h1>
  );
};

SectionTitle.displayName = "Title";
Section.Title = SectionTitle;

const SectionDescription = ({
  children,
  hero = false,
  fullWidth = false,
  maxWidth = 480,
  ...other
}: {
  children: React.ReactNode;
  hero?: boolean;
  fullWidth?: boolean;
  maxWidth?: number;
}) => {
  return (
    <p
      data-standard-pyro-component="SectionDescription"
      className={`z-10 mt-10 text-[17px] font-normal leading-[155%] text-[#ffffff99] md:text-[22px]`}
      style={{
        maxWidth: `${fullWidth ? "100%" : `${maxWidth}px`}`,
        width: `${fullWidth ? "100%" : ""}`,
      }}
      {...other}
    >
      {children}
    </p>
  );
};

SectionDescription.displayName = "Description";
Section.Description = SectionDescription;

export default Section;
