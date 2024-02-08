import { Metadata } from "next";

export const metadata: Metadata = {
  title: "pyro - Coming Soon",
};

const Page = () => {
  const content = `
  We're rapidly expanding our infrastructure and crafting the best
  hosting experience possible. If you're wondering if Pyro is right
  for you or your community, join our waitlist and we'll be in
  touch. 🔥
  `;
  return (
    <main className="relative h-full w-full">
      <section className="relative h-screen w-full px-16">
        <div className="mx-auto flex w-full max-w-[1620px] flex-col">
          <div className="z-10 mx-auto flex w-full max-w-[735px] flex-col pt-60">
            <h1 className="mt-4 text-[109px] font-extrabold leading-[98%] tracking-[-0.35rem]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
                }}
              >
                Coming Soon
              </span>
            </h1>
            <p className="mt-10 text-[22px] font-normal leading-[155%] text-[#ffffff99]">
              {content}
            </p>
            <div className="mt-10 flex flex-row items-center gap-4">
              <a
                href="https://forms.gle/dUXavHV5BGL3QAheA"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  backgroundImage:
                    "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
                }}
                className="flex items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold"
              >
                <p>Join the waitlist</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
