import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[950px] w-full px-4 md:px-16">
      <div className="mx-auto flex h-full w-full max-w-[1620px] flex-col">
        <div className="z-10 flex w-full max-w-[735px] flex-col items-center pt-48 text-center md:items-start md:pt-60 md:text-left">
          <a
            href="https://forms.gle/dUXavHV5BGL3QAheA"
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-fit items-center justify-center gap-4 rounded-full border-2 border-solid border-[#ffffff08] bg-[#ffffff12] p-2 px-4 text-sm font-bold"
          >
            <p>
              Be one of the first to try Pyro.{" "}
              <span className="text-brand">Join the waitlist!</span>
            </p>
            {/* <a className='text-brand'>Join the waitlist</a> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
          <h1 className="mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.25rem] md:text-[109px] md:tracking-[-0.35rem]">
            A{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
              }}
            >
              better
            </span>{" "}
            way to host games.
          </h1>
          <p className="mt-10 text-[17px] font-normal leading-[155%] text-[#ffffff99] md:text-[22px]">
            Pyro is a new game host that makes it faster, easier, and cheaper to
            play your favorite games with your friends. Instantly available,
            lag-free servers with unmatched value.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 md:flex-row">
            <a
              style={{
                backgroundImage:
                  "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
              }}
              className="flex items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold"
              href="https://billing.pyro.host/index.php/order/config/index/freebies/?group_id=7&pricing_id=15"
            >
              <p>Create your server for free</p>
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
            {/* <a
              style={{
                backgroundImage:
                  "radial-gradient(1182.86% 226.39% at 34.92% 22.73%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
              className="flex items-center justify-center gap-4 rounded-full border-2 border-solid border-[#ffffff08] py-3 pl-8 pr-6 text-sm font-bold"
              href="https://billing.pyro.host/"
            >
              <p>See our pricing</p>
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
            </a> */}
          </div>
        </div>
      </div>

      <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
        <div className="pointer-events-none relative inset-0 h-screen min-h-[950px] w-screen select-none">
          <Image
            alt=""
            aria-hidden
            src="/img/fire2.png"
            fill
            className="pointer-events-none select-none object-cover"
          />
          <Image
            alt=""
            aria-hidden
            src="/img/fire.svg"
            fill
            className="pointer-events-none select-none object-cover"
          />
          <Image
            alt=""
            aria-hidden
            src="/img/godrays.png"
            fill
            className="pointer-events-none  scale-150 select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
