import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Pyro - Privacy Policy",
	description: "Pyro takes your privacy seriously. Read and learn about our privacy policy.",
	openGraph: {
		title: "Pyro - Privacy Policy",
		description: "Pyro takes your privacy seriously. Read and learn about our privacy policy.",
		images: [
			{
				url: "./ogimage_refresh.png",
			},
		],
	},
};

const Page = () => {
	return (
		<div className="mx-auto flex w-full max-w-[1620px] flex-col">
			<div className="z-10 mx-auto flex w-full max-w-[65ch] flex-col px-6 py-16 lg:px-12 lg:py-32">
				<h1 className="mt-4 font-extrabold text-[max(36px,min(5vw,48px))] leading-[98%] tracking-[-0.22rem]">Pyro's Privacy Policy</h1>
				<div className="mt-8 flex flex-col text-xl">
					<strong>Last Updated: May 28, 2024</strong>
					<strong>Effective: May 28, 2024</strong>
				</div>
				<article className="mt-8 flex flex-col gap-4 leading-[155%]">
					<div>
						Pyro Host Inc. operates the website pyro.host and certain services under the name "pyro.host" and is referred to as "Pyro" in this Privacy Policy.
						This Privacy Policy is designed to help you understand how we collect, use, and share your information, and to help you understand and exercise your
						privacy rights.
					</div>
					<div>
						<strong>Description of our Services.</strong> Pyro provides game hosting services, virtual private servers, and other related services
						(collectively, the "Services").
					</div>
					<br />
					<strong>Personal Information We Collect</strong>
					<div>
						While you use our Services, we collect only a minimal amount of data needed to provide you with our Services. However, we may collect additional
						types of information when you visit our website or communicate with us through other means, such as email or social media. We explain the types of
						information we collect below.
					</div>
					<strong>A. Information You Provide to Us Directly</strong>
					<div>We may collect the following types of information that you provide to us directly.</div>
					<ul className="list-disc">
						<li>
							<strong>Account Creation.</strong> We may collect information when you create an account with us, such as your email address, username, and
							password. Note that although you provide login credentials to access our services, we do not store your plain-text password on our servers.
						</li>
						<li>
							<strong>Purchases.</strong> We may collect information and details associated with your purchases, including payment information collected by our
							third-party payment processors (e.g., Stripe, PayPal) on our behalf. We do not directly collect or store any payment card information, but may
							receive billing address or other non-sensitive information associated with your payment card from our third-party processors.
						</li>
						<li>
							<strong>Your Communications with Us.</strong> We may collect information when you communicate with us, such as when you request customer or
							technical support, request information about our Services, or otherwise communicate with us.
						</li>
						<li>
							<strong>Surveys.</strong> We may contact you to participate in surveys about our Services, and some of these surveys may ask you to provide
							certain information about yourself.
						</li>
					</ul>
					<br />
					<strong>B. Information Collected Automatically</strong>
					<div>
						We may collect certain information automatically when you visit our website or use our Services to provide and measure our Services for security,
						performance, and fraud prevention purposes:
					</div>
					<ul className="list-disc">
						<li>
							<strong>Automatic Data Collection.</strong> In order to protect you and our Services, we may automatically collect certain information when you
							visit our website or use our Services, such as your Internet Protocol (IP) address (temporarily), device information, and authentication cookies.
						</li>
						<li>
							<strong>Cookies and Other Technologies.</strong> Please see our{" "}
							<Link className="underline" href="/legal/cookies">
								Cookie Policy
							</Link>{" "}
							for more information.
						</li>
						<li>
							<strong>Analytics.</strong> We may use Technologies and other third-party tools, including those provided by Google, to better understand how
							individuals use our Services. These tools are only used on Pyro's marketing sites ("pyro.host") and not Pyro services ("panel.pyro.host",
							"vps.panel.host").
						</li>
					</ul>
					<br />
					<strong>How We Use Your Information</strong>
					<div>
						<strong>A. Administering Our Services. </strong>
						<br />
						We use your information for administrative purposes, such as:
						<ul className="list-disc">
							<li>Administering your account</li>
							<li>Providing you with customer support and responding to your inquiries</li>
							<li>Comminicating with you about your account, purchases, or use of our Services, including any changes to our terms or policies</li>
						</ul>
						<br />
						<strong>B. Operational Purposes. </strong> <br />
						We use your information to operate our business, such as:
						<ul className="list-disc">
							<li>
								Preventing and detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those
								responsible for that activity{" "}
							</li>
							<li>Measuring and analyzing interest and engagement in our Services</li>
							<li>Short-term, transient use, such as customization of content that is displayed on our website</li>
							<li>Improving, upgrading, or enhancing our Services</li>
							<li>Developing new products and services</li>
							<li>Ensuring internal quality control and safety</li>
							<li>Verifying your identity and preventing fraud, including requests to exercise your privacy rights under this Privacy Policy</li>
							<li>Debugging to identify and repair errors that impair existing intended functionality of our Services</li>
							<li>Enforcing our terms, agreements and policies, including our Acceptable Use Policy, Terms of Service, and this Privacy Policy</li>
							<li>Complying with legal obligations, including complying with requests from law enforcement or government agencies</li>
						</ul>
						<br />
						<strong>C. Marketing and Advertising our Services.</strong>
						We may use your information to market and advertise our Services directly to you.
						<br />
						<br />
						<strong>D. Other Purposes.</strong> <br />
						We may use your information for other purposes as requested by you or as permitted by applicable law.
						<ul className="list-disc">
							<li>
								<strong>Consent.</strong> We may use your information for other purposes with your explicit consent.
							</li>
						</ul>
					</div>
					<br />
					<strong>How We Disclose Your Information</strong>
					<div>
						We disclose your information to third parties for limited business purposes, including to provide payments processing, to provide customer support,
						to protect us or others, or in the event of a major business transaction such as a merger, sale, asset transfer, or in the unlikely event of
						bankruptcy, as described below.
					</div>
					<strong>Disclosures to Provide Our Services</strong>
					<ul className="list-disc">
						<li>
							<strong>Service Providers and Business Partners. </strong>
							Pyro does not share any of your personal information with any third-party service providers or business partners. However, we may share your
							information with third-party service providers and business partners that help us to operate, provide, and improve our Services. For payment
							processing, we use Stripe, a third-party payment processor, to process payments. Stripe may collect and use your payment information in accordance
							with their privacy policy. You may also use PayPal, a third-party payment processor, to process payments. We do not directly collect or store any
							payment card information, but may receive billing address or other non-sensitive information associated with your payment card from our
							third-party processors.
						</li>
						<br />
						<strong>Disclosures to Protect Us or Others</strong>
						<br />
						<br />
						<li>
							<strong>Legal Compliance and Security. </strong>
							We may access, preserve, and disclose your information if we, in good faith, believe doing so is required or appropriate to: comply with law
							enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our, or others' rights, property, or
							safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual
							illegal activity.
						</li>
					</ul>

					<strong>Disclosures in the Event of Merger, Sale, or Other Asset Transfers</strong>
					<div>
						If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, purchase or sale of assets, or
						transition of service to another provider, your information may be sold or transferred as part of such a transaction as permitted by law and/or
						contract. We cannot control how such entities may use or disclose such information.
					</div>
					<br />
					<strong>Security of Your Information</strong>
					<div>
						We take steps to ensure that your information is treated securely and in accordance with this Privacy Policy. Unfortunately, no system is 100%
						secure, and we cannot ensure or warrant the security of any information you provide to us. We have taken appropriate safeguards to require that your
						personal information will remain protected and require our third-party service providers and partners to have appropriate safeguards as well. By
						using our Services or providing information to us, you agree that we may communicate with you electronically regarding security, privacy, and
						administrative issues relating to your use of our Services. If we are required to notify you of a security incident, we may attempt to notify you
						electronically by posting a notice on our Services, by mail or by sending an email to you.
					</div>
					<br />
					<strong>Retention of Personal Information</strong>
					<div>
						We store the personal information we receive as described in this Privacy Policy for as long as you use our Services or as necessary to fulfill the
						purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business
						purposes, enforce our agreements, and comply with applicable laws.
					</div>
					<br />
					<strong>Children's Privacy</strong>
					<div>
						Our Services are not directed to children under the age of 18, and we do not knowingly collect personal information from children under the age of
						18. If we learn that we have collected personal information of a child under the age of 18, we will take steps to delete such information from our
						Services as soon as possible.
					</div>
					<br />
					<strong>Your Privacy Choices and Rights</strong>
					<div>
						<strong>Email Communications. </strong> You can opt out of our marketing emails at any time by clicking the "unsubscribe" link at the bottom of our
						marketing messages. Please note that you cannot opt out of non-promotional emails, such as those about your account, transactions, servicing, or
						Pyro's ongoing business relations.
					</div>
					<div>
						<strong>Cookie Choices. </strong> Please see our{" "}
						<Link className="underline" href="/legal/cookies">
							Cookie Policy
						</Link>{" "}
						for more information.
					</div>
					<div>
						<strong>"Do Not Track". </strong> Do Not Track ("DNT") is a web browser setting that users can set in certain web browsers. Please note that we do
						not respond to or honor DNT signals or similar mechanisms transmitted by web browsers. Pyro does not use cross-site tracking or targeted
						advertising.
					</div>
					<div>
						<strong>Access to Your Information. </strong> You may request access to your personal information by using the email address listed in the "Contact
						Us" section below. We will respond to your request within a reasonable timeframe.
					</div>
					<br />
					<strong>Changes to Our Privacy Policy</strong>
					<div>
						We may revise this Privacy Policy from time to time in our sole discretion. If there are any material changes to this Privacy Policy, we will notify
						you as required by applicable law. You understand and agree that you will be deemed to have accepted the updated Privacy Policy if you continue to
						use our Services after the new Privacy Policy takes effect.
					</div>
					<div>The Site and the Services are operated by Pyro. If you have any questions about this Privacy Policy, please email us at support@pyro.host.</div>
				</article>
			</div>
		</div>
	);
};

export default Page;
