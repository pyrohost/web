import { PyroLink } from './PyroLink';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(['relative', 'flex', 'items-center', 'justify-center', 'rounded-full', 'font-black'], {
    variants: {
        color: {
            brand: ['bg-brand', 'text-white'],
            white: ['bg-white', 'text-black'],
            black: ['bg-black', 'text-white'],
        },
        type: {
            primary: ['border-2', 'border-brand'],
            outline: ['border-2', 'border-white'],
        },
        size: {
            small: ['py-2', 'px-4', 'text-sm'],
            medium: ['py-3', 'px-6', 'text-base'],
            large: ['py-4', 'px-8', 'text-lg'],
        },
    },
    defaultVariants: {
        color: 'brand',
        type: 'primary',
        size: 'medium',
    },
});

export const PyroButton = ({
    href,
    external = false,
    children,
    className = '',
    ...props
}: {
    href: string;
    external?: boolean;
    children: React.ReactNode;
    className?: string;
} & VariantProps<typeof button>) => {
    return (
        <PyroLink href={href} external={external} className={twMerge(cx(button(props), className))}>
            {children}
        </PyroLink>
    );
};
