import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "pyro - Minecraft Server Hosting",
};

const Page = () => {
  return (
    <main className="relative h-full w-full">
      <section className="relative min-h-screen w-full px-16 text-center">
        <div className="relative mx-auto flex h-full min-h-screen w-full  max-w-[1620px] flex-col items-center">
          <div className="z-10 mx-auto mt-[24rem] flex h-full w-full max-w-[810px] flex-col items-center pt-20">
            <h1 className="text-[52px] font-extrabold leading-[98%] tracking-[-0.14rem]">
              Minecraft hosting !
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
