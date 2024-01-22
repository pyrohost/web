'use client'

import Link from 'next/link'
import Logo from '../Logo'
import { useEffect, useRef, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isScrolled = window.scrollY > 120;
    setScrolled(isScrolled);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`isolate fixed left-0 right-0 top-0 px-4 md:px-16 w-full z-[9999]`}>
      <nav className={`main-nav nav-controller transform-gpu will-change-transform max-w-[1620px] w-full relative mx-auto backdrop-blur-xl rounded-full p-2 mt-4 flex flex-row items-center gap-4 overflow-hidden transition-all [transition-duration:550ms] ${scrolled ? "!max-w-[750px] !p-1 !px-8 !mt-0 !rounded-t-none bg-[#ffffff08] border-[1px] border-[#ffffff08] border-solid" : "bg-[#ffffff05] border-[1px] border-[#ffffff00] border-solid"
        }`}>
        <Link className='shrink-0 p-4 w-fit font-bold text-sm' href="/">
          <div className='h-8'>
            <Logo />
          </div>
        </Link>

        <div className='desktop-links-controller hidden lg:contents'>
          <a className='shrink-0 p-4 w-fit font-bold text-sm' rel='noopener noreferrer' target='_blank' href="https://vps.pyro.host?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH">
            VPS Panel
          </a>
          <a className='shrink-0 p-4 w-fit font-bold text-sm' rel='noopener noreferrer' target='_blank' href="https://panel.pyro.host?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH">
            Game Panel
          </a>
          <a className='shrink-0 p-4 w-fit font-bold text-sm' rel='noopener noreferrer' target='_blank' href="https://billing.pyro.host/index.php/client/login/?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH">
            Billing
          </a>

          <div className={`h-[16px] shrink-0 ml-auto w-[1px] bg-[#ffffff29] ${scrolled ? 'opacity-100 mr-2' : 'opacity-0'} `}></div>

          <a className='flex items-center gap-2 shrink-0 p-4 w-fit font-bold text-sm' rel='noopener noreferrer' target='_blank' href="https://discord.gg/fxeRFRbhQh?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4"><path fill="currentColor" d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"></path></svg>
            Discord
          </a>
        </div>

        <div className='mobile-links-controller contents lg:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='p-4 ml-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={24}>
              <DropdownMenuItem>Games</DropdownMenuItem>
              <DropdownMenuItem>Pricing</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Game Panel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>

        <div className={`glow-controller transition-all [transition-duration:750ms] ${scrolled ? "opacity-0" : "opacity-100"
          }`}>
          <div aria-hidden tabIndex={-1} className='select-none pointer-events-none w-[300px] h-[1px] absolute bottom-0 right-[4%]' style={{
            background: 'radial-gradient(62.87% 100% at 50% 100%, rgb(219 99 99 / 62%) 0%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
          <div aria-hidden tabIndex={-1} className='select-none pointer-events-none w-[200px] h-[1px] absolute top-0 left-[3%]' style={{
            background: 'radial-gradient(62.87% 100% at 50% 100%, rgb(219 99 99 / 62%) 0%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar