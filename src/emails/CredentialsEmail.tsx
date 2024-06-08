import { Body, Button, CodeBlock, CodeInline, Container, Font, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";
import type * as React from "react";
import LayoutEmail from "./layout";

interface CredentialsEmailProps {
	email: string;
	password: string;
}

export const CredentialsEmail = ({ email, password }: CredentialsEmailProps) => (
	<LayoutEmail>
		<Heading className="mt-0 text-3xl font-extrabold tracking-tighter">Login to Pyrodactyl</Heading>
		<Text className="text-lg m-0">
			Here are your login credentials for{" "}
			<Link href="https://panel.pyro.host" className="text-brand underline">
				Pyrodactyl
			</Link>
			.
		</Text>
		<Text className="text-lg mt-0 mb-4">Keep them safe and don't share them with anyone.</Text>

		<Section className="bg-[#efefef] rounded-2xl p-4">
			<Text className="font-bold mt-0 mb-0">Email</Text>
			<CodeInline className="font-mono">{email}</CodeInline>
			<Text className="font-bold mb-0">Password</Text>
			<CodeInline className="font-mono">{password}</CodeInline>
		</Section>

		<Text className="text-sm mt-8">You're receiving this email because you recently purchased a service from Pyro.</Text>
	</LayoutEmail>
);

CredentialsEmail.PreviewProps = {
	email: "hi@pyro.host",
	password: "password123",
};

export default CredentialsEmail;
