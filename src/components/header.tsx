"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/portfolio-data";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className="fixed top-0 z-30 flex h-24 md:h-28 w-full items-center justify-between bg-nav-bg px-6 md:px-12 backdrop-blur-md transition-all duration-300 shadow-sm shadow-card-border/50">
        <nav className="relative flex w-full items-center justify-between text-foreground">
          <div className="font-mono text-xl font-bold tracking-tighter text-primary">
            <a href="/#" className="hover:text-accent transition-colors">Vinit</a>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ol className="flex list-none items-center gap-6 p-0 m-0">
              {navLinks.map((link, i) => (
                <li key={link.href} className="text-sm font-mono hover:text-primary transition-colors">
                  <span className="text-primary mr-2">0{i + 1}.</span>
                  <a href={link.href}>{link.displayText}</a>
                </li>
              ))}
            </ol>
            <div className="flex items-center gap-4 ml-4">
              <a
                className="rounded border border-primary bg-transparent px-5 py-2.5 font-mono text-sm text-primary transition-all hover:bg-primary/10"
                href="/Vinit%20Sharma.pdf" target="_blank" rel="noopener noreferrer"
              >
                Resume
              </a>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-secondary/20 transition-colors text-primary"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-primary"
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            )}
            <button type="button" onClick={toggleMenu} className="z-40 text-primary relative">
              <Menu size={32} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-lg transition-all duration-300 flex flex-col items-center justify-center ${showMenu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute top-0 right-0 flex h-24 items-center px-6">
          <button type="button" onClick={toggleMenu} className="text-primary">
            <X size={32} />
          </button>
        </div>
        <ol className="flex flex-col items-center gap-8 list-none p-0">
          {navLinks.map((link, i) => (
            <li key={`mobile-${link.href}`} className="text-2xl font-mono text-foreground">
              <span className="text-primary block text-sm text-center mb-1">0{i + 1}.</span>
              <a href={link.href} onClick={closeMenu} className="hover:text-primary transition-colors">
                {link.displayText}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a href="/Vinit%20Sharma.pdf" target="_blank" rel="noopener noreferrer" className="rounded border border-primary bg-transparent px-8 py-4 font-mono text-lg text-primary transition-all hover:bg-primary/10" onClick={closeMenu}>
              Resume
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
