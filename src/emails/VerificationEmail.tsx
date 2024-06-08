import { Body, Button, Container, Font, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";
import type * as React from "react";
import LayoutEmail from "./layout";

export const VerificationEmail = ({ code }: { code: string }) => (
	<LayoutEmail>
		<Heading className="mt-0 text-3xl font-extrabold tracking-tighter">Verify Your Email</Heading>
		<Text className="text-lg">You're almost ready to play on your own game server on Pyro! Just click the button below to verify your email address.</Text>
		<Section>
			<Button className="bg-brand rounded-full text-white w-full py-4 text-center font-bold text-sm" href={`https://pyro.host/verify-email?code=${code}`}>
				Verify Email
			</Button>
		</Section>
		<Text className="text-sm mt-8">
			You're receiving this email because you signed up for a Pyro account. If you didn't sign up, you can safely ignore this email.
		</Text>
	</LayoutEmail>
);

VerificationEmail.PreviewProps = {
	code: "123456",
};

export default VerificationEmail;
