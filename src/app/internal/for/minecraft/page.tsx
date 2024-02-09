/* eslint-disable react/no-unescaped-entities */
import PanelSection from "@/components/sections/PanelSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "pyro - Minecraft Server Hosting",
};

const CheckboxList = ({ messages }: { messages: string[] }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>

          <p>{message}</p>
        </div>
      ))}
    </>
  );
};

const perks = [
  "INTERNAL: This list is for illustrative use only and does not represent pyro's final product",
  "In case you're stumbling upon this somehow",
  "Instantly available Java Edition servers",
  "Zero lag, incredibly low latency",
  "24/7 support via chat, ticket, and email",
  "24/7 server uptime with 99.9% SLA (lol)",
  "No arbitrary limits: use what you pay for",
];

const Page = () => {
  return (
    <main className="relative h-full w-full">
      <section className="relative min-h-screen w-full px-16 text-center">
        <div className="relative mx-auto flex h-full min-h-screen w-full max-w-[1620px] flex-col items-center">
          <div className="z-10 mx-auto mt-[12rem] flex h-full w-full max-w-[870px] flex-col items-center pt-20">
            <h1 className="text-[60px] font-extrabold leading-[98%] tracking-[-0.25rem] md:text-[109px] md:tracking-[-0.35rem]">
              Pyro for Minecraft Server Hosting
            </h1>
            <p className="mt-10 text-[22px] font-normal leading-[155%] text-[#ffffff99]">
              More than just premium hardware. Pyro is the complete suite for
              your Minecraft server, with always-online, lag-free servers, 24/7
              support over chat and email, and an incredibly beautiful
              management panel.
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
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
        <Image
          alt=""
          aria-hidden
          src="/img/blazehero.png"
          width={1600}
          height={650}
          className="pointer-events-none min-h-[500px] w-full select-none object-cover opacity-35 grayscale"
          style={{
            maskImage:
              "radial-gradient(85% 100% at 50% 100%, transparent 55.5%, white)",
          }}
        />
      </div>

      <CheckboxList messages={perks} />

      <PanelSection />
    </main>
  );
};

export default Page;
