"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Plus, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/work", label: "Work" },
    { href: "/resources", label: "Labs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-6">
      <div
        className={`relative flex items-center gap-4 sm:gap-10 rounded-full bg-neutral-950/90 px-4 py-2 sm:px-10 sm:py-3.5 shadow-2xl backdrop-blur-2xl transition-all duration-500 ${
          isScrolled ? "scale-95 border border-white/10" : "scale-100"
        }`}
      >
        <Link href="/" className="flex items-center gap-4 group z-10 focus-ring rounded-lg">
          <div className="flex flex-col text-left">
            <span className="font-manrope text-sm font-extrabold tracking-tight text-white leading-none text-left">NeuroMark</span>
            <span className="font-mono text-[10px] text-white/60 font-bold uppercase leading-none mt-1.5 text-left">Agency</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="h-5 w-px bg-white/10" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-bold tracking-widest text-white/60 transition-all hover:text-white hover:text-tech-blue focus-ring rounded-md py-2 px-1 text-left"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/contact"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 sm:px-8 sm:py-3.5 font-manrope text-xs font-black text-black transition-all hover:scale-105 active:scale-95 focus-ring"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">GET DEMO</span>
            <span className="sm:hidden">DEMO</span>
          </Link>

          <button
            className="flex h-12 w-12 items-center justify-center lg:hidden text-white/70 hover:text-white transition-colors focus-ring rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/98 backdrop-blur-3xl transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-manrope text-4xl font-black tracking-tighter text-white hover:text-tech-blue transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-16 font-mono text-xs text-tech-blue font-bold tracking-[0.3em] uppercase opacity-80">
          NeuroMark Agency
        </div>
      </div>
    </nav>
  );
};

export default Navbar;