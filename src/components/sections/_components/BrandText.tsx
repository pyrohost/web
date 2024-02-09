const BrandText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      data-standard-pyro-component="BrandText"
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
      }}
    >
      {children}
    </span>
  );
};

export default BrandText;
