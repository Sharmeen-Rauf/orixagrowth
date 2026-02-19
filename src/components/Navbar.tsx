"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights", dropdown: true },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolledPastHero;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 w-full px-6 py-4 transition-colors duration-300 md:px-10 ${
        isLight ? "bg-white text-neutral-900 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo: white on transparent navbar, colored on white navbar */}
        <Link href="/" className="relative flex items-center" onClick={() => setMobileOpen(false)}>
          <span className="relative block h-9 w-[140px] md:h-10 md:w-[160px]">
            {isLight ? (
              <Image
                src="/OG-Logo_horizontal.jpg.jpeg"
                alt="ORIXA Agency"
                fill
                className="object-contain object-left"
                priority
              />
            ) : (
              <Image
                src="/OG-Logo_horizontal-white.png"
                alt="ORIXA Agency"
                fill
                className="object-contain object-left"
                priority
              />
            )}
          </span>
        </Link>

        {/* Nav links - hidden on small, show from md */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isLight
                  ? `text-neutral-900 hover:bg-neutral-100 ${item.active ? "bg-[#8e44ad]/20 text-[#502961]" : ""}`
                  : `text-white hover:bg-white/10 ${item.active ? "bg-white/20" : ""}`
              }`}
            >
              <span className="flex items-center gap-1">
                {item.label}
                {item.dropdown && (
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className={`rounded-lg p-2 md:hidden ${
              isLight ? "text-neutral-900 hover:bg-neutral-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link
            href="/contact"
            className="rounded-lg bg-[#0007bf] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#060b84]"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className={`absolute left-0 right-0 top-full mt-1 rounded-lg px-6 py-4 shadow-xl backdrop-blur md:hidden ${
            isLight ? "bg-white" : "bg-[#502961]/95"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 ${
                  isLight
                    ? `text-neutral-900 hover:bg-neutral-100 ${item.active ? "bg-neutral-200" : ""}`
                    : `text-white hover:bg-white/10 ${item.active ? "bg-white/20" : ""}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
