"use client";

import Image from "next/image";
import Link from "next/link";

export default function LaunchCTASection() {
  return (
    <section className="relative px-6 py-16 md:px-10 md:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-neutral-800 px-8 py-12 md:flex md:items-center md:gap-12 md:px-14 md:py-16">
        {/* Subtle concentric circles – upper left */}
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-20">
          <div className="absolute left-4 top-4 h-32 w-32 rounded-full border border-neutral-500" />
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-neutral-500" />
          <div className="absolute left-12 top-12 h-16 w-16 rounded-full border border-neutral-500" />
        </div>

        {/* Left: Headline + CTA */}
        <div className="relative z-10 flex-1">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Let&apos;s Launch Something That Performs
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-[#0007bf] px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[#060b84]"
          >
            Connect & Grow
          </Link>
        </div>

        {/* Right: Team image + purple arrow overlay */}
        <div className="relative mt-10 flex-1 md:mt-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Team collaborating"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Purple arrow/ribbon shape overlay */}
            <div className="absolute -bottom-4 -right-4 hidden h-32 w-40 md:block">
              <svg viewBox="0 0 160 128" fill="none" className="h-full w-full opacity-90">
                <path
                  d="M0 80 L80 0 L160 40 L120 128 Z"
                  fill="url(#launch-arrow-gradient)"
                />
                <defs>
                  <linearGradient id="launch-arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#502961" />
                  <stop offset="100%" stopColor="#8e44ad" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
