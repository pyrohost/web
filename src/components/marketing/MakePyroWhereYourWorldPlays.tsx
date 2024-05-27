import Link from "next/link";

import { ArrowRightIcon } from "@radix-ui/react-icons";

const MakePyroWhereYourWorldPlays = () => {
	return (
		<section className="relative z-10 flex flex-col items-center gap-8 overflow-hidden rounded-b-3xl px-4 py-48 text-center  xl:px-24">
			<div className="relative top-12">
				<div
					className="pointer-events-none absolute left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]"
					style={
						{
							"--circle-background": "rgba(113 64 253 / 100%)",
						} as React.CSSProperties
					}
				></div>
				<div
					className="pointer-events-none absolute left-0 top-[-80px] z-[0] hidden h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:block"
					style={
						{
							"--circle-background": "rgba(246 111 143 / 100%)",
						} as React.CSSProperties
					}
				></div>
				<div
					className="pointer-events-none absolute right-0 top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]"
					style={
						{
							"--circle-background": "rgba(25 146 215 / 100%)",
						} as React.CSSProperties
					}
				></div>
				<div
					className="pointer-events-none absolute left-[220px] top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]"
					style={
						{
							"--circle-background": "rgba(255 125 70 / 100%)",
						} as React.CSSProperties
					}
				></div>
				<div
					className="pointer-events-none absolute right-[200px] top-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]"
					style={
						{
							"--circle-background": "rgba(255 125 70 / 100%)",
						} as React.CSSProperties
					}
				></div>
			</div>
			<h1 className="max-w-3xl py-4 pb-3 pt-5 text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter lg:pb-5">
				Make Pyro where your world plays
			</h1>
			<p className="mb-8 max-w-[750px] text-xl leading-[195%] text-[#ffffff99]">
				You&apos;ve never played on a server like this before. Try a Pyro server
				risk-free with a 24-hour money-back guarantee. No questions asked.
			</p>
			<div className="inline-flex items-center gap-5 rounded-full border border-dashed border-brand/50 p-2">
				<Link
					href="https://pay.pyro.host"
					className="flex w-full items-center justify-center gap-4 rounded-full bg-brandGrad px-12 py-5 text-sm font-bold  shadow-lg"
				>
					<p>Start a game server in minutes</p>
					<ArrowRightIcon />
				</Link>
			</div>
		</section>
	);
};

export default MakePyroWhereYourWorldPlays;
