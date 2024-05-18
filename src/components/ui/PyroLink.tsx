import Link from 'next/link';

export const PyroLink = ({
    href,
    external = false,
    className = 'text-brand',
    children,
}: {
    href: string;
    external: boolean;
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <Link
            data-pyro-ui='link'
            target={external ? '_blank' : ''}
            rel={external ? 'noopener noreferrer' : ''}
            href={href}
            className={className}
        >
            {children}
        </Link>
    );
};
