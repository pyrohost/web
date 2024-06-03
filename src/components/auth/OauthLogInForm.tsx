import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/primitives/Tooltip";

const OauthLogIn = () => {
	return (
		<div className="mb-2 grid grid-cols-2 gap-2">
			<form action={"/oauth/modrinth/"} method="get">
				<button
					className="flex max-h-[36px] min-h-[36px] w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#ffffff17] px-4 py-2 font-bold text-sm outline-none transition hover:bg-[#ffffff24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:duration-0"
					type="submit"
				>
					<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="512" height="514" viewBox="0 0 512 514">
						<path
							fill="currentColor"
							fillRule="evenodd"
							d="M503.16 323.56c11.39-42.09 12.16-87.65.04-132.8C466.57 54.23 326.04-26.8 189.33 9.78 83.81 38.02 11.39 128.07.69 230.47h43.3c10.3-83.14 69.75-155.74 155.76-178.76 106.3-28.45 215.38 28.96 253.42 129.67l-42.14 11.27c-19.39-46.85-58.46-81.2-104.73-95.83l-7.74 43.84c36.53 13.47 66.16 43.84 77 84.25 15.8 58.89-13.62 119.23-67 144.26l11.53 42.99c70.16-28.95 112.31-101.86 102.34-177.02l41.98-11.23a210.18 210.18 0 0 1-3.86 84.16l42.61 15.49Z"
							clipRule="evenodd"
						/>
						<path
							fill="currentColor"
							d="M321.99 504.22C185.27 540.8 44.75 459.77 8.11 323.24A257.556 257.556 0 0 1 0 275.46h43.27c1.09 11.91 3.2 23.89 6.41 35.83 3.36 12.51 7.77 24.46 13.11 35.78l38.59-23.15c-3.25-7.5-5.99-15.32-8.17-23.45-24.04-89.6 29.2-181.7 118.92-205.71 17-4.55 34.1-6.32 50.8-5.61L255.19 133c-10.46.05-21.08 1.42-31.66 4.25-66.22 17.73-105.52 85.7-87.78 151.84 1.1 4.07 2.38 8.04 3.84 11.9l49.35-29.61-14.87-39.43 46.6-47.87 58.9-12.69 17.05 20.99-27.15 27.5-23.68 7.45-16.92 17.39 8.29 23.07s16.79 17.84 16.82 17.85l23.72-6.31 16.88-18.54 36.86-11.67 10.98 24.7-38.03 46.63-63.73 20.18-28.58-31.82-49.82 29.89c25.54 29.08 63.94 45.23 103.75 41.86l11.53 42.99c-59.41 7.86-117.44-16.73-153.49-61.91l-38.41 23.04c50.61 66.49 138.2 99.43 223.97 76.48 61.74-16.52 109.79-58.6 135.81-111.78l42.64 15.5c-30.89 66.28-89.84 118.94-166.07 139.34Z"
						/>
					</svg>
				</button>
			</form>

			<form action={"/oauth/discord/"} method="get">
				<button
					className="flex max-h-[36px] min-h-[36px] w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#ffffff17] px-4 py-2 font-bold text-sm outline-none transition hover:bg-[#ffffff24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:duration-0"
					type="submit"
				>
					<svg viewBox="0 0 16 16" className="h-4 w-4">
						<path
							fill="currentColor"
							d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
						/>
					</svg>
				</button>
			</form>

			<form action={"/oauth/twitch/"} method="get">
				<button
					className="flex max-h-[36px] min-h-[36px] w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#ffffff17] px-4 py-2 font-bold text-sm outline-none transition hover:bg-[#ffffff24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:duration-0"
					type="submit"
				>
					<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2400 2800">
						<g>
							<g id="Layer_1-2">
								<path
									fill="currentColor"
									d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600    V1300z"
								/>
								<rect fill="currentColor" x="1700" y="550" width="200" height="600" />
								<rect fill="currentColor" x="1150" y="550" width="200" height="600" />
							</g>
						</g>
					</svg>
				</button>
			</form>

			<form action={"/oauth/github/"} method="get">
				<button
					className="flex max-h-[36px] min-h-[36px] w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#ffffff17] px-4 py-2 font-bold text-sm outline-none transition hover:bg-[#ffffff24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:duration-0"
					type="submit"
				>
					<svg height="16" viewBox="0 0 14 14" width="16">
						<path
							d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
							fill="currentColor"
							fillRule="nonzero"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default OauthLogIn;
