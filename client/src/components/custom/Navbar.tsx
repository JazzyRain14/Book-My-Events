"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from "clsx";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Fascinate_Inline } from 'next/font/google'
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()
    const router = useRouter();


    // Step 1: Define threshold per page
    const getScrollThreshold = () => {
        switch (pathname) {
            case "/":
                return 300;
            case "/about":
                return 80;
            case "/about":
                return 80;
            case "/about":
                return 80;
            case "/explore-events":
                return 20;
            default:
                return 80;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const threshold = getScrollThreshold();
            setScrolled(window.scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const getNavbarClass = () => {
        switch (pathname) {
            case "/":
                return scrolled
                    ? "bg-slate-200/80 backdrop-blur border-b border-white/40 shadow"
                    : "bg-slate-200/20 backdrop-blur-md border-b border-white/30";
            case "/explore-events":
                return scrolled
                    ? "bg-slate-200/80 backdrop-blur border-b border-white/40 shadow"
                    : "bg-slate-200/20 backdrop-blur border-b border-white/40";
            case "/about/goals&mission":
                return scrolled
                    ? "bg-slate-200/80 backdrop-blur border-b border-white/40 shadow"
                    : "bg-slate-200/20 backdrop-blur border-b border-white/40";
            case "/about/faq":
                return scrolled
                    ? "bg-slate-200/80 backdrop-blur border-b border-white/40 shadow"
                    : "bg-slate-200/20 backdrop-blur border-b border-white/40";
            case "/about/how-it-works":
                return scrolled
                    ? "bg-slate-200/80 backdrop-blur border-b border-white/40 shadow"
                    : "bg-slate-200/20 backdrop-blur border-b border-white/40";
            default:
                return scrolled
                    ? "bg-slate-200/80 backdrop-blur border-b border-white/40 shadow"
                    : "bg-slate-200/20 backdrop-blur border-b border-white/40";
        }
    }


    return (
        <>
            <div
                className={clsx(
                    "fixed top-0 left-0 z-[1000] px-10 h-20 rounded-lg w-full border-b border-white/30 flex justify-between items-center", getNavbarClass()
                )}>
                {/* Logo */}
                <div className='relative p-2 flex justify-center'>
                    <h1>
                        <span className='text-3xl font-bold text-[#130f54]'>Book</span>
                        <span className='text-3xl font-bold ml-1.5 text-[#FBBF24]'>My</span>
                        <span className='text-3xl font-bold ml-1.5'>Event</span>
                    </h1>
                    <span className='absolute top-0 left-0 text-xl -z-10'>🎉</span>
                    <span className='absolute -top-2 -z-10 text-xl'>🥳</span>
                    <span className='absolute -z-10 right-0 bottom-0 text-xl'>🎊</span>
                </div>
                {/* Nav links */}
                <NavigationMenu viewport={false}>
                    <NavigationMenuList className="gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className='bg-transparent hover:bg-transparent focus:bg-transparent'>
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className='bg-transparent hover:bg-transparent'>
                            <NavigationMenuLink asChild className='bg-transparent hover:bg-transparent focus:bg-transparent'>
                                <Link href="/explore-events">Explore Events</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className='bg-transparent hover:bg-transparent'>
                            <NavigationMenuTrigger className='font-normal'>About</NavigationMenuTrigger>
                            <NavigationMenuContent className='!bg-[#FBBF24]/50 hover:bg-transparent border border-[#FBBF24]'>
                                <ul className="grid w-[200px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/about/goals&mission" className="flex-row items-center gap-2">
                                                Goals & Mission
                                            </Link>
                                        </NavigationMenuLink>

                                        <NavigationMenuLink asChild>
                                            <Link href="/about/faq" className="flex-row items-center gap-2">
                                                FAQ
                                            </Link>
                                        </NavigationMenuLink>

                                        <NavigationMenuLink>
                                            <Link href="/about/how-it-works">How it works</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {/* Auth btns */}
                <div className='flex items-center gap-5'>
                    <button
                        onClick={()=> router.push("/auth/signup")}
                        className='px-10 py-2 text-[#111827] border border-[#FBBF24] rounded-lg cursor-pointer'>Get Started</button>
                    <button
                        onClick={()=> router.push("/auth/login")}
                        className='px-10 py-2 text-[#111827] bg-[#FBBF24] rounded-lg cursor-pointer'>Log In</button>
                </div>
            </div >

        </>
    )
}
