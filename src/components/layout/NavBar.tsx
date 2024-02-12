"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "Minecraft Hosting",
    href: "/",
    description:
      "Remarkable performance and reliability for your Minecraft server.",
  },
  {
    title: "Terarria Hosting",
    href: "/",
    description:
      "Calamity, Thorium, and more. Peak performance for your Terraria server.",
  },
  {
    title: "Garry's Mod Hosting",
    href: "/",
    description:
      "With more than enough hardware for all your workshop items and trolling.",
  },
  {
    title: "Factorio Hosting",
    href: "/",
    description: "Because your factory must grow. Always-on Factorio servers.",
  },
];

const LogoLink = () => {
  return (
    <Link className="w-fit shrink-0 p-4 text-sm font-bold" href="/">
      <div className="h-8">
        <Logo />
      </div>
    </Link>
  );
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const isScrolled = window.scrollY > 120;
    setScrolled(isScrolled);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 isolate z-[9999] w-full md:px-16`}
    >
      <nav
        className={`main-nav nav-controller relative mx-auto flex w-full max-w-[1620px] transform-gpu flex-row items-center gap-4 p-2 backdrop-blur-xl transition-all will-change-transform [transition-duration:550ms] md:mt-4 md:rounded-full ${
          scrolled
            ? "!mt-0 !max-w-[770px] !rounded-t-none bg-[#ffffff08] !p-1 md:border-[1px] md:border-solid md:border-[#ffffff08] md:!px-8"
            : "bg-[#ffffff05] md:border-[1px] md:border-solid md:border-[#ffffff00]"
        }`}
      >
        <LogoLink />

        <NavigationMenu className="hidden text-sm font-bold md:block">
          <NavigationMenuList>
            <NavigationMenuItem asChild>
              <Link
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/pricing"
              >
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-bold">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {solutions.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-bold">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-brand p-6 no-underline outline-none focus:shadow-md"
                        href="https://panel.pyro.host?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH"
                      >
                        <div className="mb-2 mt-4 text-lg font-bold">
                          Game Panel
                        </div>
                        <p className="text-sm leading-tight">
                          Manage your Minecraft server.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vps.pyro.host?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH"
                    title="VPS Panel"
                  >
                    Manage your VPS instance.
                  </ListItem>
                  <ListItem
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.gg/fxeRFRbhQh?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH"
                    title="Support"
                  >
                    Join our Discord and open a ticket.
                  </ListItem>
                  <ListItem
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.gg/fxeRFRbhQh?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH"
                    title="Billing"
                  >
                    Manage your billing and invoices.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem asChild>
              <Link
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/about"
              >
                Company
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div
          className={`ml-auto hidden h-[16px] w-[1px] shrink-0 bg-[#ffffff29] md:block ${
            scrolled ? "mr-2 opacity-100" : "opacity-0"
          } `}
        ></div>

        <a
          className="mr-4 hidden w-fit shrink-0 items-center gap-2 p-4 text-sm font-bold md:flex"
          rel="noopener noreferrer"
          target="_blank"
          href="https://discord.gg/fxeRFRbhQh?utm_source=marketing_site&utm_medium=navbar&utm_campaign=PRELAUNCH&utm_id=PRELAUNCH"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
            <path
              fill="currentColor"
              d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
            ></path>
          </svg>
          Discord
        </a>

        <div className="ml-auto block p-4 text-sm font-bold md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <HamburgerMenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[99999]" sideOffset={24}>
              <DropdownMenuItem>Games</DropdownMenuItem>
              <DropdownMenuItem>Pricing</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Game Panel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {isHome && (
          <div
            className={`glow-controller contents transition-all [transition-duration:750ms] ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              aria-hidden
              tabIndex={-1}
              className="pointer-events-none absolute bottom-0 right-[4%] h-[1px] w-[300px] select-none"
              style={{
                background:
                  "radial-gradient(62.87% 100% at 50% 100%, rgb(219 99 99 / 62%) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
            <div
              aria-hidden
              tabIndex={-1}
              className="pointer-events-none absolute left-[3%] top-0 h-[1px] w-[200px] select-none"
              style={{
                background:
                  "radial-gradient(62.87% 100% at 50% 100%, rgb(219 99 99 / 62%) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm font-medium leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
