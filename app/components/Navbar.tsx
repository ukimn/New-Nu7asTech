"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { routers } from "../data/Data";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="flex justify-around w-full items-center py-9 relative">
      <Link href="/" className="text-2xl font-medium">
        Nu7as Tech <div className="bg-primary w-[5px] h-[5px] inline-block"></div>
      </Link>

      <button
        className="md:hidden focus:outline-none relative w-6 h-5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>


      <nav className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="list-none flex gap-3 md:flex-row flex-col md:items-center md:static absolute top-full left-0 right-0 bg-[#1a191d] z-50- md:bg-transparent md:shadow-none shadow-lg p-4">
          {routers.map((router) => (
            <Link
              key={router.id}
              href={router.ref}
              className={`text-lg font-medium ${
                pathname === router.ref
                  ? "text-primary border-b-2 border-primary pb-1"
                  : ""
              }`}
              onClick={handleLinkClick} 
            >
              {router.title}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
