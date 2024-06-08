import { Body, Button, Container, Font, Head, Heading, Hr, Html, Img, Link, Preview, Section, Tailwind, Text } from "@react-email/components";
import type * as React from "react";

interface LayoutEmailProps {
	children: React.ReactNode;
}

export const LayoutEmail = ({ children }: LayoutEmailProps) => (
	<Tailwind
		config={{
			theme: {
				extend: {
					colors: {
						brand: "#FF4438",
					},
					fontFamily: {
						sans: ["Plus Jakarta Sans", "Arial", "sans-serif"],
					},
				},
			},
		}}
	>
		<Html lang="en-US">
			<Head>
				<Font
					fontFamily="Plus Jakarta Sans"
					fallbackFontFamily="Arial"
					webFont={{
						url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2",
						format: "woff2",
					}}
					fontWeight={400}
				/>
				<Font
					fontFamily="Plus Jakarta Sans"
					fallbackFontFamily="Arial"
					webFont={{
						url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2",
						format: "woff2",
					}}
					fontWeight={700}
				/>
				<Font
					fontFamily="Plus Jakarta Sans"
					fallbackFontFamily="Arial"
					webFont={{
						url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2",
						format: "woff2",
					}}
					fontWeight={800}
				/>
			</Head>
			<Body className="bg-gray-100 py-8">
				<Container className="mx-auto my-0 max-w-xl p-8 bg-white rounded-3xl shadow-lg">
					<Section className="">
						<Img src="https://pyro.host/logo_email.png" width={96} height={36} className="" />
					</Section>
					<Hr className="my-8 border-t border-gray-300" />
					<Section>{children}</Section>
				</Container>

				<Section className="mt-8 text-center">
					<Text className="text-sm text-gray-600">
						For support inquiries, contact us in our{" "}
						<Link href="https://pyro.host/discord" className="text-brand underline">
							Discord server
						</Link>{" "}
						or{" "}
						<Link href="mailto:team@pyro.host" className="text-brand underline">
							shoot us an email
						</Link>
						.
					</Text>
					<Text className="mt-2 text-sm text-gray-600">© {new Date().getFullYear()} Pyro Host Inc. All rights reserved.</Text>
				</Section>
			</Body>
		</Html>
	</Tailwind>
);

export default LayoutEmail;
