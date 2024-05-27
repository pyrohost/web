import Image from "next/image";

import { PyroButton } from "@/components/ui/PyroButton";
import PyroPill from "@/components/ui/PyroPill";

const BetterHosting = () => {
	return (
		<section className="relative z-10 w-full overflow-clip rounded-3xl rounded-b-none bg-gradient-to-b from-[#000] to-black">
			<Image
				src="/img/minecrafthero.jpg"
				alt=""
				width={1920}
				height={1080}
				className="absolute inset-0 mx-auto w-full opacity-15 grayscale"
				style={{
					maskImage:
						"radial-gradient(85% 100% at 50% 100%, transparent 55.5%, white)",
				}}
			/>
			<div
				className="container relative grid gap-12 pb-20 pt-24 lg:gap-20 lg:py-40"
				style={
					{
						"--circle-background": "#FF4438",
					} as React.CSSProperties
				}
			>
				<div className="pointer-events-none absolute bottom-0 left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:left-auto xl:right-[50px]"></div>
				<div className="relative z-[14] flex max-w-[750px] flex-col items-start justify-start">
					<PyroPill
						leftChild={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.9996 1.25C11.3523 1.25 10.8873 1.65936 10.641 1.90644C10.5378 2.01 10.4419 2.13129 10.3448 2.25393C10.1612 2.48602 9.97372 2.723 9.72585 2.85411C9.45986 2.99481 9.12847 2.89996 8.84314 2.8183L8.84312 2.8183C8.79246 2.8038 8.74325 2.78972 8.69612 2.77744C8.39818 2.69989 7.94408 2.58244 7.46289 2.64649C7.25379 2.67432 6.97942 2.74083 6.76685 2.9301C6.51511 3.15425 6.47447 3.43315 6.51128 3.64394C6.55607 3.9004 6.71491 4.11086 6.87083 4.31102L7.76315 5.4599L7.80338 5.51191C8.01996 5.79212 8.23862 6.07503 8.5264 6.28636C8.75278 6.4526 9.03923 6.5 9.32009 6.5H14.679C14.9599 6.5 15.2463 6.4526 15.4727 6.28636C15.7605 6.07504 15.9791 5.79215 16.1957 5.51194L16.236 5.4599L17.1283 4.31102C17.2842 4.11086 17.443 3.90039 17.4878 3.64394C17.5246 3.43315 17.484 3.15425 17.2323 2.9301C17.0197 2.74083 16.7453 2.67432 16.5362 2.64649C16.055 2.58244 15.6009 2.69989 15.303 2.77744C15.2559 2.78972 15.2066 2.80381 15.156 2.81831C14.8706 2.89996 14.5393 2.99481 14.2733 2.85411C14.0254 2.723 13.8379 2.48602 13.6543 2.25393C13.5572 2.13129 13.4613 2.01001 13.3581 1.90644C13.1118 1.65936 12.6468 1.25 11.9996 1.25ZM21.4339 16.8954C20.8804 13.5816 19.2507 10.4506 16.8355 8.11274L16.8355 8.11274C16.7348 8.01526 16.6844 7.9665 16.5724 7.88473C16.3473 7.72042 15.945 7.5576 15.6691 7.51914C15.5317 7.5 15.4329 7.5 15.2354 7.5H8.76409C8.56657 7.5 8.46781 7.5 8.33046 7.51914C8.05447 7.5576 7.65216 7.72042 7.42712 7.88473C7.32296 7.96078 7.23045 8.04847 7.13799 8.13796C5.31986 9.89741 3.23574 12.883 2.56564 16.8954C2.28233 18.5918 2.93708 20.0804 4.0623 21.12C5.17625 22.1493 6.75561 22.75 8.40281 22.75H15.5967C17.2439 22.75 18.8233 22.1493 19.9372 21.12C21.0624 20.0804 21.7172 18.5918 21.4339 16.8954ZM12.6628 11.8047C12.6628 11.3905 12.327 11.0547 11.9128 11.0547C11.4986 11.0547 11.1628 11.3905 11.1628 11.8047V11.9182C10.7744 12.0091 10.416 12.1703 10.1148 12.3925C9.62718 12.7523 9.24976 13.31 9.24976 13.9941C9.24976 14.5757 9.4606 15.1396 10.0155 15.5134C10.507 15.8445 11.1688 15.954 11.9128 15.954C12.5661 15.954 12.9068 16.0546 13.0683 16.1599C13.1623 16.2212 13.2498 16.3109 13.2498 16.6155C13.2498 16.8375 13.1709 16.9552 13.0023 17.0565C12.7882 17.185 12.4209 17.2771 11.9128 17.2771C11.3794 17.2771 10.9649 17.1019 10.747 16.9069C10.4383 16.6307 9.96415 16.657 9.68792 16.9656C9.41168 17.2743 9.43797 17.7484 9.74662 18.0246C10.1229 18.3614 10.6188 18.5922 11.1628 18.7026V18.8047C11.1628 19.2189 11.4986 19.5547 11.9128 19.5547C12.327 19.5547 12.6628 19.2189 12.6628 18.8047V18.7221C13.0586 18.6605 13.4421 18.5421 13.7747 18.3423C14.3615 17.9899 14.7498 17.4018 14.7498 16.6155C14.7498 15.9119 14.4894 15.2959 13.8877 14.9035C13.3536 14.5551 12.6508 14.454 11.9128 14.454C11.2655 14.454 10.9708 14.3484 10.8536 14.2694C10.7998 14.2332 10.7498 14.1921 10.7498 13.9941C10.7498 13.8987 10.8006 13.7506 11.0054 13.5995C11.2099 13.4486 11.5283 13.3326 11.9128 13.3326C12.4476 13.3326 12.8285 13.5521 12.9854 13.7585C13.2361 14.0883 13.7066 14.1524 14.0364 13.9018C14.3661 13.6511 14.4302 13.1806 14.1796 12.8508C13.8227 12.3813 13.2753 12.0619 12.6628 11.9185V11.8047Z"
									fill="#FF4438"
								/>
							</svg>
						}
					>
						Better Hosting
					</PyroPill>
					<h1 className="mb-6 max-w-4xl text-[max(48px,min(5vw,90px))] font-extrabold leading-[1.09] tracking-tighter">
						<div
							className=""
							style={{
								textShadow: "0 4px 12px rgba(0,0,0,.9)",
							}}
						>
							All your games, {""}
							<span className="text-brand">powered by Pyro</span>
						</div>
					</h1>
					<p className="mb-6 text-xl font-medium leading-[190%] text-[#ffffff99]">
						Never pay more to play a specific game. With Pyro, you get unlimited
						storage, a powerful software suite, and efficient hardware. No
						hidden fees, zero add-ons, it&apos;s just included.
					</p>

					<PyroButton
						isArrow
						variant="quaternary"
						href="https://pay.pyro.host"
						external
					>
						Host your server, risk-free
					</PyroButton>
				</div>
				<div className="relative flex w-full flex-col gap-5 md:flex-row">
					<div className="relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5">
						<div className="xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-white/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6">
							<div className="flex h-full flex-col items-center text-center">
								<Image
									src="/img/backups_dark.png"
									width={576}
									height={400}
									alt=""
									className="relative mb-8 w-full opacity-75 grayscale"
								/>
								<div className="mb-2 mt-auto text-2xl font-bold tracking-tight">
									Free backups included. Never lose your worlds or data again
								</div>
							</div>
						</div>
					</div>
					<div className="relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5">
						<div className="xl:px-auto relative grid place-items-center overflow-hidden rounded-[32px] border-2 border-white/10 p-4 sm:py-6 lg:p-4 2xl:px-6 2xl:py-6">
							<div className="flex h-full flex-col items-center text-center">
								<Image
									src="/img/storage_dark.png"
									width={576}
									height={400}
									alt=""
									className="relative mb-8 w-full opacity-75"
								/>
								<div className="mb-2 mt-auto text-2xl font-bold tracking-tight">
									Unlimited storage for all of your files, mods, and worlds
								</div>
							</div>
						</div>
					</div>
					<div className="relative z-[14] grid w-full grid-flow-row gap-3 xl:gap-5">
						<div className="xl:px-auto relative grid w-full place-items-center overflow-hidden rounded-[32px] bg-brand/10 p-4 text-center sm:py-6 lg:p-4 2xl:px-6 2xl:py-6">
							<div className="flex flex-col items-center">
								<Image
									src="/img/lock_color_fix.png"
									width={576}
									height={400}
									alt=""
									className="relative mb-8"
								/>
								<div className="mb-2 mt-auto text-2xl font-bold tracking-tight text-brand">
									Secure and private. We don&apos;t sell advertisements or your
									data
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
					<div className="col-span-1">
						<div className="flex flex-col gap-1">
							<span className="text-lg font-bold text-brand">
								Overflow Memory
							</span>
							<span className="">
								NVMe-based memory that kicks in when you need it most. No more
								lag.
							</span>
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-1">
							<span className="text-lg font-bold text-brand">
								Incredibly low latency
							</span>
							<span className="">
								Pyro provides the lowest latency possible for your game server,
								no matter where you are.
							</span>
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-1">
							<span className="text-lg font-bold text-brand">
								Zero player limits
							</span>
							<span className="">
								Bring as many friends as you want to your server. Pyro has no
								player limits.
							</span>
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-1">
							<span className="text-lg font-bold text-brand">
								Free subdomain
							</span>
							<span className="">
								Get a free pyro.host subdomain with every server you host with
								Pyro.
							</span>
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-1">
							<span className="text-lg font-bold text-brand">
								Mods, plugins, and more
							</span>
							<span className="">
								Pyro supports all mods and plugins, no matter how complex they
								are.
							</span>
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-1">
							<span className="text-lg font-bold text-brand">
								Phenomenal support
							</span>
							<span className="">
								Direct access to our engineers and designers over Discord.
								We&apos;re here to help.
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BetterHosting;
