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
              Pyro's Privacy Policy
            </h1>
            <h2 className="mt-8">
              INTERNAL: This is a draft. Does not fully apply to existing users
              until reviewed. We will email users once this is live.
            </h2>
            <article className="mt-8 flex flex-col gap-4 leading-[155%]">
              <h2 className="text-2xl">Introduction</h2>
              <div>
                Pyro is a hosting platform that provides game servers. The terms
                outlined below define a legal relationship between you and Pyro
                that applies to your use of our services. "Pyro", "we" or "us"
                refers to Pyro Hosting, LLC DBA pyro.host. "You", "your", or
                "user" refers to you, the individual accessing our website.
                "Services" refers to services, apps, websites, and other
                products operated by Pyro.
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
