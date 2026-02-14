"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default to dark for brand alignment

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Initial theme set
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme("dark");
    } else {
      document.documentElement.classList.remove('dark')
      setTheme("light");
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-light/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <ShieldCheck className="h-8 w-8 text-brand-cyan transition-transform group-hover:rotate-12" />
          <span className={cn("text-xl font-bold tracking-tight text-white", isScrolled ? "text-white" : "text-white")}>
            Zero Trust Web
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-light hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="sm" onClick={() => window.location.href='#contact'}>
            Get a Quote
          </Button>
          <button
            onClick={toggleTheme}
            className="p-2 text-brand-light hover:text-brand-cyan transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-4">
            <button
            onClick={toggleTheme}
            className="p-2 text-brand-light hover:text-brand-cyan transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-light hover:text-brand-cyan"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-light/10 absolute top-full left-0 right-0 p-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-brand-light hover:text-brand-cyan block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full" variant="primary" onClick={() => {setIsOpen(false); window.location.href='#contact'}}>
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
