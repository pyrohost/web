import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pyro.host/"),
  title: "pyro.host",
  description:
    "pyro is a better way to host games. Instantly available, lag-free servers with unmatched value.",
  openGraph: {
    title: "pyro",
    description:
      "pyro is a better way to host games. Instantly available, lag-free servers with unmatched value.",
    images: [
      {
        url: "./newogimage.png",
      },
    ],
    url: "https://pyro.host",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff4b40",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark relative h-fit w-full bg-dark-950 text-white antialiased [font-synthesis-weight:none]"
    >
      <body
        className={`${jakarta.className} relative flex min-h-full w-full flex-col overflow-x-hidden`}
      >
        <>
          <div className="relative h-full w-full overflow-hidden">
            <NavBar />
            {children}
            <Footer />
          </div>
        </>
      </body>
      <GoogleAnalytics gaId="G-NWVJ0FNXG1" />
    </html>
  );
}
