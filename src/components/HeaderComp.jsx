"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HeaderComp = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
<div className="fixed top-0 left-0 w-full z-50 bg-[#F4F7F8] text-[#2C3E44]">
      <div className="flex items-center justify-between md:px-8 py-5 px-8">
        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="md:hidden w-10 h-10 flex items-center justify-center  z-50 relative "
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute  h-0.5 w-7
                 md:w-10 bg-current transition-all duration-300 ease-in-out  ${open ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-1.5"}`}
          />
          <span
            className={`absolute md:w-10 h-0.5  w-7
                bg-current transition-all ease-in-out duration-300 ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5 rotate-0"} `}
          />
        </button>
        <Link
          href="/"
          className="text-sm md:text-lg font-semibold primary-text lg:text-2xl"
          
        >
          Dr. Maya Reynolds, PsyD
        </Link>

        <nav className="hidden md:flex md:text-xl  gap-8 text-md">
          <Link href="/blog"> Blog</Link>
          <Link href="/about"> About</Link>
          <Link href="/contact"> Contact</Link>
        </nav>
      </div>
      
      {open && (
        <div className="fixed top-15 left-0 right-0 bottom-0 bg-[#F4F7F8] text-[#2C3E44] md:hidden z-40">
          <nav className="flex flex-col gap-10 text-2xl lg:text-4xl h-full items-center justify-center">
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HeaderComp;
