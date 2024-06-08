import { Body, Button, Container, Font, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";
import type * as React from "react";
import LayoutEmail from "./layout";

export const ResetPasswordEmail = ({ code }: { code: string }) => (
	<LayoutEmail>
		<Heading className="mt-0 text-3xl font-extrabold tracking-tighter">Reset Your Password</Heading>
		<Text className="text-lg">You recently requested to reset your Pyro account password. Click the button below to reset it.</Text>
		<Section>
			<Button className="bg-brand rounded-full text-white w-full py-4 text-center font-bold text-sm" href={`https://pyro.host/reset-password?code=${code}`}>
				Reset Password
			</Button>
		</Section>
		<Text className="text-sm mt-8">If you didn't request a password reset, you can safely ignore this email.</Text>
	</LayoutEmail>
);

ResetPasswordEmail.PreviewProps = {
	code: "123456",
};

export default ResetPasswordEmail;
