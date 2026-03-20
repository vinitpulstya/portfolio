"use client";

import { useState } from "react";
import { navLinks } from "@/lib/portfolio-data";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="fixed top-0 z-11 flex h-40 w-full items-center justify-between bg-[rgba(10,25,47,0.85)] px-16 backdrop-blur-[10px] transition-all max-[600px]:h-28 max-[600px]:px-8">
      <nav className="relative z-12 flex w-full items-center justify-between text-[#ccd6f6] [counter-reset:item_0]">
        <div className="fadedown-enter-done font-mono text-[1.6rem] font-semibold" style={{ animationDelay: "0ms" }}>
          <a href="/#">Vinit</a>
        </div>

        <div className="hidden items-center max-[600px]:hidden min-[601px]:flex">
          <ol className="m-0 flex list-none items-center justify-between p-0">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="fadedown-enter-done relative mx-1.25 text-[1.3rem] font-mono [counter-increment:item_1] before:mr-1.25 before:text-[1.2rem] before:text-[#64ffda] before:content-['0'_counter(item)_'.']"
                style={{ animationDelay: `${link.animationDelayMs}ms` }}
              >
                <a href={link.href}>{link.displayText}</a>
              </li>
            ))}
          </ol>
          <div className="fadedown-enter-done" style={{ animationDelay: "400ms" }}>
            <a
              className="ml-3.75 rounded-[0.4rem] border border-[#64ffda] bg-transparent px-4 py-3 font-mono text-[1.3rem] leading-none text-[#64ffda] transition-all hover:bg-[rgba(100,255,218,0.1)]"
              href="/Vinit%20Sharma.pdf"
              target="_self"
              download
            >
              Resume
            </a>
          </div>
        </div>

        <div className="min-[601px]:hidden">
          <button type="button" onClick={toggleMenu} className="relative z-2000 inline-flex h-12 w-12 items-center justify-center text-[#64ffda]" aria-label="Toggle menu">
            <span className="text-[2.4rem] leading-none">{showMenu ? "x" : "="}</span>
          </button>
          <div
            className={`fixed inset-0 z-1500 bg-[radial-gradient(#020c1b,#233554)] transition-all duration-300 ${
              showMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <ol className="absolute left-1/2 top-[35%] w-full -translate-x-1/2 -translate-y-1/2 list-none p-0 text-center font-mono text-[1.6rem]">
              {navLinks.map((link) => (
                <li className="m-4" key={`mobile-${link.href}`}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.displayText}
                  </a>
                </li>
              ))}
              <li className="m-4">
                <a href="/Vinit%20Sharma.pdf" target="_self" download onClick={closeMenu}>
                  Resume
                </a>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </div>
  );
}
