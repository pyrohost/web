import { ArrowRightIcon } from '@radix-ui/react-icons';
import { PyroLink } from './PyroLink';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(['relative', 'flex', 'items-center', 'justify-center', 'rounded-full', 'font-bold', 'gap-4', 'select-none'], {
    variants: {
        color: {
            brand: ['bg-brand', 'text-white'],
            white: ['bg-white', 'text-black'],
            black: ['bg-black', 'text-white'],
            ghostWhite: ['bg-transparent', 'text-white'],
            ghostBlack: ['bg-transparent', 'text-black'],
        },
        type: {
            primary: ['border-2', 'border-brand'],
            outline: ['border-2', 'border-white'],
            outlineLight: ['border-2', 'border-white/10'],
            ghost: ['border-2', 'border-transparent'],
        },
        size: {
            ghost: [],
            small: ['py-2', 'px-4', 'text-sm'],
            medium: ['py-3', 'px-8', 'text-base'],
            large: ['py-4', 'px-10', 'text-lg'],
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
    leftChild,
    rightChild,
    useArrow,
    className = '',
    ...props
}: {
    href: string;
    external?: boolean;
    children: React.ReactNode;
    leftChild?: React.ReactNode;
    rightChild?: React.ReactNode;
    useArrow?: boolean;
    className?: string;
} & VariantProps<typeof button>) => {
    return (
        <PyroLink href={href} external={external} className={twMerge(cx(button(props), className))}>
            {leftChild}
            {children}
            {rightChild}
            {useArrow && <ArrowRightIcon className='h-4 w-4' />}
        </PyroLink>
    );
};
