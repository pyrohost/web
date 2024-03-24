import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "pyro - About Us",
};

const Page = () => {
  return (
    <main className="relative h-full w-full">
      <section className="relative min-h-screen w-full px-16 text-center">
        <div className="relative mx-auto flex h-full min-h-screen w-full  max-w-[1620px] flex-col items-center">
          <Image
            src="/img/glowgo.png"
            alt=""
            width={507}
            height={643}
            className="absolute top-12 scale-[0.8] mix-blend-lighten contrast-[1.05] [--padding:128] [--size:300] [--total:calc((2*var(--padding))+var(--size))] [mask:radial-gradient(calc(664/var(--total)*100%)_calc(389/var(--total)*100%)_at_50%_calc((var(--padding)-4)/var(--total)*100%),white,rgba(255,255,255,0.85)_58%,rgba(255,255,255,0))]"
          />
          <div className="z-10 mx-auto mt-[24rem] flex h-full w-full max-w-[810px] flex-col items-center pt-20">
            <h1 className="text-[52px] font-extrabold leading-[98%] tracking-[-0.14rem]">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Pyro's mission is to build the <br></br>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
                }}
              >
                best hosting platform in the world.
              </span>
            </h1>
            <p className="mt-10 text-[22px] font-normal leading-[155%] text-[#ffffff99]">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're a passionate, tight-knit team obsessed with every step of
              the hosting process. We want to empower anyone to play their
              favorite games with friends.
            </p>
            {/* <Image
              className="mt-10"
              src="/img/twosfanart.jpg"
              alt=""
              height="500"
              width="500"
            ></Image> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
