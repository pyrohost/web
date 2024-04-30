import { ArrowRightIcon } from '@radix-ui/react-icons';

const ExternalLinkButton = ({ href, text, ...other }: { href: string; text: string }) => {
    return (
        <a
            data-standard-pyro-component='ExternalLinkButton'
            className='bg flex items-center justify-center gap-4 rounded-full bg-brandGrad py-3 pl-8 pr-6 text-sm font-bold'
            href={href}
            {...other}
        >
            <p data-standard-pyro-component='ExternalLinkButton'>{text}</p>
            <ArrowRightIcon />
        </a>
    );
};

export default ExternalLinkButton;
