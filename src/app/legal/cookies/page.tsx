/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "pyro - Cookie Policy",
};

const Page = () => {
  return (
    <main className="relative h-full w-full">
      <section className="relative h-full w-full px-16">
        <div className="mx-auto flex w-full max-w-[1620px] flex-col">
          <div className="z-10 mx-auto flex w-full max-w-[1620px] flex-col pt-60">
            <h1 className="mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.25rem] md:text-[84px] md:tracking-[-0.35rem]">
              Pyro - Cookie Policy
            </h1>
            <article className="mt-8 flex flex-col gap-4 leading-[155%]">
              <div className="">
                By using or accessing Pyro's website, you agree to Pyro's use of
                Cookies as outlined below. "Pyro", "we" or "us" refers to Pyro
                Hosting, LLC DBA pyro.host. This Cookie Policy is part of our
                Privacy Policy and explains how we use cookies and similar
                technologies to recognize you when you visit our website. It
                explains what these technologies are and why we use them, as
                well as your rights to control our use of them.
              </div>
              <div>
                Cookies are small, text-only pieces of data that are stored on
                an individual's device. Cookies allow a website to remember your
                actions or preferences over time. Cookies are used to improve
                the user experience by enabling a website to remember you,
                either for the duration of your visit (using a "session cookie")
                or for repeat visits (using a "persistent cookie").
              </div>
              <div>
                We use Google Analytics to analyze the use of our website.
                Google Analytics gathers information about website use by means
                of cookies. The information gathered relating to our website is
                used to create reports about the use of our website. As this
                information is processed exclusively by Google, the Google
                privacy policy applies. You may view the Google privacy policy
                at{" "}
                <a
                  className="underline"
                  href="https://policies.google.com/privacy"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  https://policies.google.com/privacy
                </a>
                . Specifically, Google Analytics collects information such as:
                <ul className="mt-4 list-disc">
                  <li>The number of visitors to our website</li>
                  <li>The pages that visitors view</li>
                  <li>The length of time visitors spend on each page</li>
                  <li>The sources of traffic to our website</li>
                </ul>
                This information is strictly used for the purpose of improving
                our website's experience, improving our marketing efforts, and
                improving user experience.
              </div>
              <div>
                Google Analytics may set cookies on your device or read cookies
                that are already there to identify you. If users wish to opt-out
                of Google Analytics, they can use the Google Analytics opt-out
                browser add-on. For more information, please visit the{" "}
                <a
                  className="underline"
                  href="https://support.google.com/analytics/answer/181881?hl=en"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Google support page.
                </a>
              </div>
              <div>
                Pyro does not sell, rent, or otherwise share any information
                gathered from cookies with any third party. Pyro cannot
                reasonably use Google Analytics identifiers to personally
                identify you or any other user.
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
