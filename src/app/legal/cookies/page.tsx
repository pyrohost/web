/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pyro - Cookie Policy',
    description: 'Pyro takes your privacy seriously. Read and learn about our cookie policy.',
    openGraph: {
        title: 'Pyro - Cookie Policy',
        description: 'Pyro takes your privacy seriously. Read and learn about our cookie policy.',
        images: [
            {
                url: './ogimage.png',
            },
        ],
    },
};

const Page = () => {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-white'>
                <div className='mx-auto flex w-full max-w-[1620px] flex-col'>
                    <div className='z-10 mx-auto flex w-full max-w-[73ch] flex-col py-60'>
                        <h1 className='mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.22rem] md:text-[84px] md:tracking-[-0.3rem]'>
                            Pyro's Cookie Policy
                        </h1>
                        <div className='mt-8 flex flex-col text-xl'>
                            <strong>Last Updated: February 8, 2024</strong>
                            <strong>Effective: February 15, 2024</strong>
                        </div>
                        <article className='mt-8 flex flex-col gap-4 leading-[155%]'>
                            <div className=''>
                                "Pyro", "we" or "us" refers to Pyro Host Inc. "You", "your", or "user" refers to you,
                                the individual accessing our website. "Services" refers to services, apps, websites, and
                                other products operated by Pyro. By using or accessing Pyro's website, you agree to
                                Pyro's use of Cookies as outlined below. This Cookie Policy is part of our Privacy
                                Policy and explains how we use cookies and similar technologies to recognize you when
                                you visit our website. It explains what these technologies are and why we use them, as
                                well as your rights to control our use of them.
                            </div>
                            <div>
                                Cookies are small, text-only pieces of data that are stored on an individual's device.
                                Cookies allow a website to remember your actions or preferences over time. Cookies are
                                used to improve the user experience by enabling a website to remember you, either for
                                the duration of your visit (using a "session cookie") or for repeat visits (using a
                                "persistent cookie").
                            </div>
                            <div>
                                We use Google Analytics to analyze the use of our website. Google Analytics gathers
                                information about website use by means of cookies. The information gathered relating to
                                our website is used to create reports about the use of our website. As this information
                                is processed exclusively by Google, the Google privacy policy applies. You may view the
                                Google privacy policy at{' '}
                                <a
                                    className='underline'
                                    href='https://policies.google.com/privacy'
                                    rel='noreferrer noopener'
                                    target='_blank'
                                >
                                    https://policies.google.com/privacy
                                </a>
                                . Specifically, Google Analytics collects information such as:
                                <ul className='mt-4 list-disc'>
                                    <li>The number of visitors to our website</li>
                                    <li>The pages that visitors view</li>
                                    <li>The length of time visitors spend on each page</li>
                                    <li>The sources of traffic to our website</li>
                                </ul>
                                This information is strictly used for the purpose of improving our website's experience,
                                improving our marketing efforts, and improving user experience.
                            </div>
                            <div>
                                Google Analytics may set cookies on your device or read cookies that are already there
                                to identify you. If users wish to opt-out of Google Analytics, they can use the Google
                                Analytics opt-out browser add-on. For more information, please visit the{' '}
                                <a
                                    className='underline'
                                    href='https://support.google.com/analytics/answer/181881?hl=en'
                                    rel='noreferrer noopener'
                                    target='_blank'
                                >
                                    Google support page.
                                </a>
                            </div>
                            <div>
                                Pyro does not sell, rent, or otherwise share any information gathered from cookies with
                                any third party. Pyro cannot reasonably use Google Analytics identifiers to personally
                                identify you or any other user.
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
