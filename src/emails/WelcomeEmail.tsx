import {
	Body,
	Button,
	CodeBlock,
	CodeInline,
	Container,
	Font,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
	dracula,
} from "@react-email/components";
import type * as React from "react";
import LayoutEmail from "./layout";

export const WelcomeEmail = () => (
	<LayoutEmail>
		<Heading className="mt-0 text-3xl font-extrabold tracking-tighter">Welcome to Pyro!</Heading>
		<Text className="text-lg leading-relaxed">
			Hi, we're thrilled to have you on board! Thank you for choosing Pyro to host your servers. Whether you're gaming with a few friends or managing a large
			community, we're here to ensure your server thrives.
		</Text>
		<Hr className="my-6" />
		<Text className="text-lg leading-relaxed">To help you get started, here are a few resources:</Text>
		<ul className="list-disc pl-5 mt-4 text-lg">
			{/* <li>Explore our <a href="https://pyro.host/docs" className="text-brand underline">documentation</a> to learn more about setting up and managing your servers.</li> */}{" "}
			{/* Coming soon :) */}
			<li>
				Join our{" "}
				<Link href="https://discord.gg/pyrohost" className="text-brand underline">
					Discord community
				</Link>{" "}
				to chat with other users and get help from our support team.
			</li>
			<li>
				Follow us on{" "}
				<Link href="https://x.com/withpyro" className="text-brand underline">
					Twitter (X)
				</Link>{" "}
				for updates on new features and promotions.
			</li>
			<li>
				Check our{" "}
				<Link href="https://status.pyro.host" className="text-brand underline">
					status page
				</Link>{" "}
				for real-time updates on server maintenance and incidents.
			</li>
		</ul>
	</LayoutEmail>
);

export default WelcomeEmail;
