"use client";

import clsx from "clsx";

import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
	const pathname = usePathname();
	const router = useRouter();

	const getLinkClasses = (linkPath: string) =>
		clsx("flex select-none h-fit w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition", {
			"hover:bg-[#ffffff22]": pathname !== linkPath,
			"bg-white text-black": pathname === linkPath,
		});

	return (
		<li>
			<button
				type="button"
				onMouseDown={() => router.push(href)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						router.push(href);
					}
				}}
				role="link"
				aria-current={pathname === href ? "page" : undefined}
				className={getLinkClasses(href)}
			>
				{children}
			</button>
		</li>
	);
};

const AuthedHeaderLinks = () => {
	return (
		<>
			<NavLink href="/account">Overview</NavLink>
			<NavLink href="/for">Store</NavLink>
		</>
	);
};

export default AuthedHeaderLinks;
