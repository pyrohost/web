'use client';

import Link from 'next/link';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import LogoColored from '@/components/LogoColored';


const ExternalLinkIcon = () => (
    <svg
        className='flex h-4 w-4'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.1152 2.90115C12.1697 3.45073 11.7684 3.94049 11.2188 3.99506C7.166 4.39745 4 7.81845 4 11.9777C4 16.4083 7.59169 20 12.0223 20C16.1815 20 19.6025 16.834 20.0049 12.7811C20.0595 12.2315 20.5492 11.8302 21.0988 11.8848C21.6484 11.9394 22.0497 12.4291 21.9951 12.9787C21.4922 18.0444 17.2198 22 12.0223 22C6.48712 22 2 17.5128 2 11.9777C2 6.78018 5.9556 2.50779 11.0212 2.00484C11.5708 1.95028 12.0606 2.35157 12.1152 2.90115Z'
            fill='currentColor'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M20.3023 2.11815C19.2561 1.93287 17.5062 2.00814 16.6278 2.05969C15.4682 2.12775 14.9931 3.51657 15.7786 4.3021L17.0302 5.55371L14.3003 8.26282C14.2412 8.32154 14.1907 8.38574 14.149 8.45379L10.2945 12.2913C9.90307 12.681 9.90167 13.3142 10.2913 13.7055C10.681 14.0969 11.3142 14.0983 11.7055 13.7087L15.6707 9.76105C15.6916 9.7434 15.712 9.72476 15.7317 9.70515L18.4671 6.99058L19.698 8.22141C20.4836 9.007 21.8724 8.53179 21.9404 7.37214C21.9919 6.49371 22.067 4.74418 21.882 3.69821C21.8141 3.31484 21.6424 2.97543 21.3948 2.70812L21.3861 2.69873C21.1066 2.40101 20.7322 2.19428 20.3023 2.11815Z'
            fill='currentColor'
        />
    </svg>
);

const NavLinkItem = ({
    href,
    children,
    external = false,
}: {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}) => {
    return (
        <Link
            data-pyro-ui='pagenav-link'
            target={external ? '_blank' : ''}
            rel={external ? 'noopener noreferrer' : ''}
            className='flex h-fit w-full items-center gap-2 text-3xl font-extrabold'
            href={href}
        >
            {children}
            {external && <ExternalLinkIcon />}
        </Link>
    );
};

const PageNavigation = () => {
    return (
        <>
            <NavigationMenu.Root delayDuration={0}>
                <header className='relative flex min-h-[72px] w-full items-center justify-between px-8'>
                    <div className="flex w-full items-center gap-8 [&>div[style='position:relative']]:!w-full">
                        <Link aria-label='Pyro Home Page' className='shrink-0' href='/'>
                            <LogoColored />
                        </Link>

                        <NavigationMenu.List asChild className='flex w-full items-center'>
                            <div className='flex w-full items-center'>
                                <ul className='hidden w-full items-center md:flex'>
                                    <NavigationMenu.Item>
                                        <Link
                                            className='flex h-fit w-fit items-center gap-2 px-4 py-4 text-sm font-extrabold'
                                            href='/for'
                                        >
                                            Games
                                        </Link>
                                    </NavigationMenu.Item>

                                    <NavigationMenu.Item>
                                        <NavigationMenu.Trigger className='flex h-fit w-fit items-center gap-2 px-4 py-4 text-sm font-extrabold'>
                                            Products
                                        </NavigationMenu.Trigger>
                                        <NavigationMenu.Content className='navContent flex flex-col gap-4 pb-12 pl-[234px] '>
                                            <NavLinkItem href='/pyrodactyl'>Pyrodactyl Panel</NavLinkItem>
                                            <NavLinkItem href='/pay'>Pyro Pay</NavLinkItem>
                                            <NavLinkItem href='/alerion'>Alerion</NavLinkItem>
                                        </NavigationMenu.Content>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item>
                                        <NavigationMenu.Trigger className='flex h-fit w-fit items-center gap-2 px-4 py-4 text-sm font-extrabold'>
                                            Resources
                                        </NavigationMenu.Trigger>
                                        <NavigationMenu.Content className='navContent flex flex-col gap-4 pb-12 pl-[330px] '>
                                            <NavLinkItem href='https://panel.pyro.host' external>
                                                Game Panel
                                            </NavLinkItem>
                                            <NavLinkItem href='https://vps.pyro.host' external>
                                                VPS Panel
                                            </NavLinkItem>
                                            <NavLinkItem href='https://pay.pyro.host' external>
                                                Billing
                                            </NavLinkItem>
                                            <NavLinkItem href='https://pyro.host/discord' external>
                                                Support
                                            </NavLinkItem>
                                            <NavLinkItem href='https://status.pyro.host' external>
                                                Status & Uptime
                                            </NavLinkItem>
                                        </NavigationMenu.Content>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item>
                                        <Link
                                            className='flex h-fit w-fit items-center gap-2 px-4 py-4 text-sm font-extrabold'
                                            href='/about'
                                        >
                                            Company
                                        </Link>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item>
                                        <Link
                                            className='flex h-fit w-fit items-center gap-2 px-4 py-4 text-sm font-extrabold'
                                            rel='noopener noreferrer'
                                            target='_blank'
                                            href='https://discord.gg/fxeRFRbhQh'
                                        >
                                            <span>Discord</span>
                                            <ExternalLinkIcon />
                                        </Link>
                                    </NavigationMenu.Item>
                                </ul>

                                <ul className='ml-auto flex items-center md:hidden'>
                                    <NavigationMenu.Item>
                                        <NavigationMenu.Trigger className='flex h-fit w-fit items-center gap-2 px-4 py-4 text-sm font-extrabold'>
                                            <HamburgerMenuIcon />
                                        </NavigationMenu.Trigger>
                                        <NavigationMenu.Content className='navContent flex flex-col gap-4 px-[1.75rem] pb-12'>

                                            <NavLinkItem href='/for'>Games</NavLinkItem>
                                            <h2 className='-mb-2 mt-8 text-sm font-black uppercase opacity-50'>
                                                Products
                                            </h2>
                                            <NavLinkItem href='/pyrodactyl'>Pyrodactyl Panel</NavLinkItem>
                                            <NavLinkItem href='/pay'>Pyro Pay</NavLinkItem>
                                            <NavLinkItem href='/alerion'>Alerion</NavLinkItem>

                                            <h2 className='-mb-2 mt-8 text-sm font-black uppercase opacity-50'>
                                                Resources
                                            </h2>
                                            <NavLinkItem href='https://panel.pyro.host' external>
                                                Game Panel
                                            </NavLinkItem>
                                            <NavLinkItem href='https://vps.pyro.host' external>
                                                VPS Panel
                                            </NavLinkItem>
                                            <NavLinkItem href='https://pay.pyro.host' external>
                                                Billing
                                            </NavLinkItem>
                                            <NavLinkItem href='https://pyro.host/discord' external>
                                                Support
                                            </NavLinkItem>
                                            <NavLinkItem href='https://status.pyro.host' external>
                                                Status & Uptime
                                            </NavLinkItem>
                                            <div className='min-h-[1rem]'></div>
                                            <NavLinkItem href='/about'>Company</NavLinkItem>

                                            <div className='min-h-[1rem]'></div>
                                            <NavLinkItem href='https://discord.gg/fxeRFRbhQh' external>
                                                Discord
                                            </NavLinkItem>
                                        </NavigationMenu.Content>
                                    </NavigationMenu.Item>
                                </ul>
                            </div>
                        </NavigationMenu.List>
                    </div>
                </header>
                <NavigationMenu.Viewport className='navTransition h-[var(--radix-navigation-menu-viewport-height)] overflow-hidden data-[state=closed]:animate-heightOut data-[state=open]:animate-heightIn' />
            </NavigationMenu.Root>


        </>
    );
};

export default PageNavigation;
