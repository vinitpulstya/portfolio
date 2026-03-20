"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/portfolio-data";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  // Safely toggle theme by explicitly handling system theme
  const handleThemeToggle = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
    else setTheme("dark"); // Default to dark if system
  };

  return (
    <>
      {/* Floating Glass Pill Header */}
      <div className="fixed inset-x-0 top-6 z-30 mx-auto flex h-16 w-[90%] max-w-4xl items-center justify-between rounded-full border border-card-border bg-nav-bg px-5 shadow-2xl max-md:backdrop-blur-none md:backdrop-blur-xl transition-all duration-300">
        <nav className="relative flex w-full items-center justify-between text-foreground">
          <div className="flex items-center justify-center">
            <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Home">
              <div className="h-8 w-8 rounded-[8px] bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <span className="text-white font-bold font-mono text-lg leading-none">V</span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ol className="flex list-none items-center gap-6 p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.href} className="text-sm font-semibold hover:text-primary transition-colors">
                  <a href={link.href}>{link.displayText}</a>
                </li>
              ))}
            </ol>
            <div className="flex items-center gap-4 ml-2 border-l border-card-border pl-4">
              <a
                className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
                href={withBasePath("/Vinit%20Sharma.pdf")} target="_blank" rel="noopener noreferrer"
              >
                Resume
              </a>
              {mounted && (
                <button
                  onClick={handleThemeToggle}
                  className="p-2 rounded-full hover:bg-secondary/20 transition-colors text-primary"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={handleThemeToggle}
                className="p-3 text-primary flex items-center justify-center active:bg-secondary/20 rounded-full"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button type="button" onClick={toggleMenu} className="z-40 text-primary relative p-2 active:bg-secondary/20 rounded-full" aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center">
          <div className="absolute top-6 right-[5%] flex h-16 items-center px-6">
            <button type="button" onClick={toggleMenu} className="text-primary rounded-full bg-nav-bg p-3 border border-card-border active:bg-secondary/20" aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          <ol className="flex flex-col items-center gap-8 list-none p-0">
            {navLinks.map((link) => (
              <li key={`mobile-${link.href}`} className="text-4xl font-black tracking-tight text-foreground">
                <a href={link.href} onClick={closeMenu} className="hover:text-primary transition-colors block py-2 px-4">
                  {link.displayText}
                </a>
              </li>
            ))}
            <li className="mt-8">
              <a href={withBasePath("/Vinit%20Sharma.pdf")} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary/10 px-10 py-4 text-xl font-bold text-primary transition-all hover:bg-primary/20" onClick={closeMenu}>
                Resume
              </a>
            </li>
          </ol>
        </div>
      )}
    </>
  );
}
