"use client";

import { usePathname } from "next/navigation"
import Link from "next/link"



export const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className="flex justify-around w-full items-center py-9">
            <Link href="/" className="text-2xl font-medium">Nu7as Tech <div className="bg-primary w-[5px] h-[5px] inline-block"></div></Link>
            <nav>
                <ul className="list-none flex gap-3">
                    <Link href="/" className={`${pathname === "/" ? "text-primary border-b-2 border-primary pb-1" : "text-white"}`}>Home</Link>
                    <Link href="/About" className={`${pathname === "/About" ? "text-primary border-b-2 border-primary pb-1" : "text-white"}`}>About</Link>
                    <Link href="/Pricing" className={`${pathname === "/Pricing" ? "text-primary border-b-2 border-primary pb-1" : "text-white"}`}>Pricing</Link>
                    <Link href="/Contact" className={`${pathname === "/Contact" ? "text-primary border-b-2 border-primary pb-1" : "text-white"}`}>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}
