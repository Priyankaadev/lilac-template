"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  //    useEffect(() => {
  //   document.body.style.overflow = open ? "hidden" : "auto";
  // }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between md:px-8 py-5 px-5">
        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="md:hidden w-10 h-10 flex items-center justify-center  z-50 relative "
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute  h-0.5 w-8
                 md:w-10 bg-current transition-all duration-300 ease-in-out  ${open ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-1.5"}`}
          />
          <span
            className={`absolute md:w-10 h-0.5  w-8
                bg-current transition-all ease-in-out duration-300 ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5 rotate-0"} `}
          />
        </button>
        <Link href="/" className="text-lg font-semibold primary-text md:text-2xl">
          Lilac Template
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:text-xl  gap-8 text-lg">
          <Link href="/blog"> Blog</Link>
          <Link href="/contact"> Contact</Link>
        </nav>
      </div>
      {/* Mobile view */}
      {open && (
        <div className="fixed inset-0 bg-red-200 flex items-center justify-center md:hidden z-40">
          <nav className="flex flex-col gap-10 text-5xl h-full items-center justify-center">
            <Link href="./blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="./contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
