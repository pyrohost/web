import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "@/components/ui/layout/Footer";
import Omnibar from "@/components/ui/layout/Omnibar";
import { Toaster } from "sonner";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://pyro.host/"),
	title: "pyro.host",
	description: "Pyro is where your world plays. Instantly available, lag-free servers with unmatched value.",
	openGraph: {
		title: "Pyro",
		description: "Pyro is where your world plays. Instantly available, lag-free servers with unmatched value.",
		images: [
			{
				url: "./ogimage_refresh.png",
			},
		],
		url: "https://pyro.host",
	},
};

export const viewport: Viewport = {
	themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html data-pyro-html="" lang="en" className="no-scrollbar min-h-screen w-full overflow-x-hidden bg-black antialiased [font-synthesis-weight:none]">
			<head>
				<meta name="darkreader-lock" />
			</head>
			<body
				data-pyro-body=""
				// biome-ignore lint/nursery/useSortedClasses: I fucking hate Biome and I love Prettier and I think we should bring it back also Prettier is also Rust based just like Biome
				className={`${jakarta.className} no-scrollbar flex min-h-screen w-full flex-col overflow-x-hidden bg-black text-white`}
			>
				<div data-pyro-index="" className="relative flex h-fit min-h-screen w-full flex-1 shrink-0 flex-col">
					<Omnibar />
					<main className="relative z-10 flex min-h-[calc(100vh-72px)] w-full flex-1 flex-col overflow-clip rounded-3xl">{children}</main>
					<Footer />
				</div>
				<Toaster
					theme="dark"
					toastOptions={{
						unstyled: true,
						classNames: {
							toast: "p-4 bg-[#ffffff09] border border-[#ffffff12] rounded-2xl shadow-lg backdrop-blur-2xl flex items-center w-full gap-2",
						},
					}}
				/>
			</body>
			<Script id="x-insights">
				{`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','om9ft');`}
			</Script>
			<GoogleAnalytics gaId="G-NWVJ0FNXG1" />
		</html>
	);
}
