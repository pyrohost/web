/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "pyro - Privacy Policy",
  description:
    "Pyro takes your privacy seriously. Read and learn about our privacy policy.",
};

const Page = () => {
  return (
    <main className="relative h-full w-full">
      <section className="relative h-full w-full px-16">
        <div className="mx-auto flex w-full max-w-[1620px] flex-col">
          <div className="z-10 mx-auto flex w-full max-w-[1620px] flex-col pt-60">
            <h1 className="mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.25rem] md:text-[84px] md:tracking-[-0.35rem]">
              Pyro - Privacy Policy
            </h1>
            <article className="mt-8 flex flex-col gap-4 leading-[155%]"></article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
