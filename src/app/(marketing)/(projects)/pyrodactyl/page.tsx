import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PyroButton } from "@/components/ui/PyroButton";
import PyroPill from "@/components/ui/PyroPill";

export const metadata: Metadata = {
	title: "Pyro - Pyrodactyl",
	description:
		"Pyrodactyl is Pyro's open, secure, and scalable server management platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
	openGraph: {
		title: "Pyro - Pyrodactyl",
		description:
			"Pyrodactyl is Pyro's open, secure, and scalable server management platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
		images: [
			{
				url: "./og_pyrodactyl.png",
			},
		],
	},
};

const Page = () => {
	return (
		<>
			<div className="relative z-10 h-full max-h-[800px] w-full overflow-clip rounded-3xl bg-brand text-white">
				<div className="relative mx-auto flex h-full w-full container flex-col items-center px-6">
					{" "}
					<div className="z-10 mx-auto mt-12 flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
						<h1 className="w-full font-extrabold text-[max(30px,min(5vw,42px))] leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2">
							Pyrodactyl is Pyro&apos;s open, secure, and scalable servers platform
						</h1>
						<div className="flex w-full flex-col gap-8 lg:w-1/3 lg:gap-4">
							<p className="text-[#ffffffbb] text-[20px] leading-[155%]">
								It&apos;s the world&apos;s best Pterodacyl panel. Unmatched performance and features.
							</p>
							<PyroButton variant="secondary" href="https://github.com/pyrohost/panel">
								Star on GitHub
							</PyroButton>
						</div>
					</div>
					<div className="relative mt-8 min-h-[750px] w-full scale-[1.08]">
						<Image src="/img/panelhero_2x.png" width={4144} height={2464} className="w-full" alt="" quality={100} />
					</div>
				</div>
			</div>
			<section className="relative z-10 w-full overflow-clip rounded-3xl rounded-b-none bg-gradient-to-b from-[#000] to-black">
				<div
					className="container relative grid gap-12 pt-24 lg:pt-24 pb-20 lg:gap-20 lg:py-40"
					style={
						{
							"--circle-background": "#FF4438",
						} as React.CSSProperties
					}
				>
					<div className="pointer-events-none absolute bottom-0 left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-70% to-[transparent] opacity-[12%] xl:right-[50px] xl:left-auto" />
					<div className="relative z-[14] flex max-w-[750px] flex-col items-start justify-start">
						<PyroPill>Pyrodactyl by the numbers</PyroPill>
						<h1 className="mb-6 max-w-4xl font-extrabold text-[max(48px,min(5vw,90px))] leading-[1.09] tracking-tighter">
							170x smaller. <br />
							17x faster.
						</h1>
						<p className="mb-6 font-medium text-[#ffffff99] text-xl leading-[190%]">
							We've rebuilt Pterodactyl from the ground up. Pyrodactyl is 170 times smaller and 17 times faster than the original panel. No one else can say
							that.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
						<div className="col-span-1">
							<div className="flex flex-col gap-1">
								<span className="font-bold text-brand text-lg">Built with Vite</span>
								<span className="">Pyrodactyl is built with Vite, the fastest and most reliable build tool for JavaScript.</span>
							</div>
						</div>
						<div className="col-span-1">
							<div className="flex flex-col gap-1">
								<span className="font-bold text-brand text-lg">Accessibility at the core</span>
								<span className="">Pyro is commited to making our software accessible to everyone. Pyrodactyl is no exception.</span>
							</div>
						</div>
						<div className="col-span-1">
							<div className="flex flex-col gap-1">
								<span className="font-bold text-brand text-lg">Optimized to pieces</span>
								<span className="">Pyrodactyl builds in less than 150 milliseconds, and renders up to 70% faster than the original panel.</span>
							</div>
						</div>
						<div className="col-span-1">
							<div className="flex flex-col gap-1">
								<span className="font-bold text-brand text-lg">Modern, scalable, and secure</span>
								<span className="">The only outdated aspect of Pyrodactyl is the name. Everything else is absolutely cutting-edge.</span>
							</div>
						</div>
						<div className="col-span-1">
							<div className="flex flex-col gap-1">
								<span className="font-bold text-brand text-lg">Batteries included</span>
								<span className="">It's everything you need, out-of-the-box. There's no need to install plugins or themes.</span>
							</div>
						</div>
						<div className="col-span-1">
							<div className="flex flex-col gap-1">
								<span className="font-bold text-brand text-lg">Open source</span>
								<span className="">Pyrodactyl is the first (and only) panel that a company has made its source publicly available.</span>
							</div>
						</div>
					</div>

					{/* <div className="relative chart w-full flex flex-col gap-4">
						<div className="absolute right-0 top-8 bottom-8 w-0.5 bg-[#ffffff44]" />
						<div className="absolute -right-4 bottom-0 text-xs opacity-50">45 sec</div>
						<h1 className="mb-2 max-w-4xl font-extrabold text-[max(30px,min(5vw,42px))] leading-[1.09] tracking-tighter">Build times comparison</h1>
						<div className="chart-row flex flex-row items-center gap-8">
							<p className="text-sm font-bold whitespace-nowrap w-60">Pyrodactyl (Vite and Turbo)</p>
							<div className="w-full flex flex-row items-center gap-2">
								<div className="chart-bar bg-brand rounded-sm h-4" style={{ width: "0.145%" }} />
								<span className="text-xs font-bold whitespace-nowrap">87 ms</span>
							</div>
						</div>

						<div className="chart-row flex flex-row items-center gap-8">
							<p className="text-sm font-bold whitespace-nowrap w-60">Pterodactyl v1 (Webpack 4)</p>
							<div className="w-full flex flex-row items-center gap-2">
								<div className="chart-bar bg-[#ffffff77] rounded-sm h-4" style={{ width: "77.7%" }} />
								<span className="text-xs font-bold whitespace-nowrap">35.3 sec</span>
							</div>
						</div>

						<div className="chart-row flex flex-row items-center gap-8">
							<p className="text-sm font-bold whitespace-nowrap w-60">Pterodactyl v2 (Webpack 4)</p>
							<div className="w-full flex flex-row items-center gap-2">
								<div className="chart-bar bg-[#ffffff77] rounded-sm h-4" style={{ width: "87.62%" }} />
								<span className="text-xs font-bold whitespace-nowrap">39.42 sec</span>
							</div>
						</div>

						<div className="chart-row flex flex-row items-center gap-8">
							<p className="text-sm font-bold whitespace-nowrap w-60">Pelican (Webpack 4)</p>
							<div className="w-full flex flex-row items-center gap-2">
								<div className="chart-bar bg-[#ffffff77] rounded-sm h-4" style={{ width: "90.88%" }} />
								<span className="text-xs font-bold whitespace-nowrap">40.9 sec</span>
							</div>
						</div>

						<p className="text-xs max-w-sm opacity-50">
							Tested on a 16-inch Macbook Pro, M3 Max, 48 GB RAM. Caching options for Webpack and Turbo were enabled. Build commands were run in
							iTerm2 with no other applications active. npm v10.8.1.
						</p>
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Page;
