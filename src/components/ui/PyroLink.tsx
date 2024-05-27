import Link from "next/link";

export const PyroLink = ({
	href,
	external = false,
	className = "text-brand",
	children,
	...props
}: {
	href: string;
	external?: boolean;
	className?: string;
	children: React.ReactNode;
}) => {
	const { ...rest } = props;

	return (
		<Link data-pyro-ui="link" target={external ? "_blank" : ""} rel={external ? "noopener noreferrer" : ""} href={href} className={className} {...rest}>
			{children}
		</Link>
	);
};
