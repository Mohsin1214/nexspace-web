"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",        href: "/"            },
  { label: "IT Services", href: "/it-services" },
  { label: "Furniture",   href: "/furniture"   },
  { label: "Projects",    href: "/projects"    },
  { label: "About",       href: "/about"       },
  { label: "Contact",     href: "/contact"     },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[600ms] ease-[cubic-bezier(0.2,0,0,1)] ${
        scrolled
          ? "bg-[#f9f9f9]/80 backdrop-blur-xl border-b border-zinc-900/10 shadow-[0px_1px_0px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 sm:px-8 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-white text-sm"
            style={{ background: "linear-gradient(135deg, #845400 0%, #ffb347 100%)" }}
          >
            N
          </div>
          <span
            className="text-xl font-extrabold tracking-tight text-[#1a1c1c]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            NexSpace
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-[#845400] font-semibold border-b-2 border-[#845400] pb-0.5"
                  : "text-zinc-600 hover:text-[#845400]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm px-6 py-2.5">
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#1a1c1c] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#1a1c1c] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#1a1c1c] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f9f9f9]/95 backdrop-blur-xl border-t border-zinc-900/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#845400] font-semibold"
                    : "text-zinc-600 hover:text-[#845400]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3 justify-center text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
