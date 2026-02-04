"use client";

import Link from "next/link";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Rank higher on Google and attract traffic that actually converts.",
    href: "/services/seo",
    color: "bg-orange-500",
    lightOverlay: "bg-orange-400/30",
    icons: (
      <>
        <svg className="absolute right-6 top-8 h-16 w-16 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <svg className="absolute bottom-12 right-16 h-12 w-12 opacity-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      </>
    ),
  },
  {
    title: "Social Media Management",
    description: "Engage your audience and grow your brand across social platforms.",
    href: "/services/social-media",
    color: "bg-pink-500",
    lightOverlay: "bg-pink-400/30",
    icons: (
      <>
        <svg className="absolute right-10 top-12 h-14 w-14 opacity-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg className="absolute bottom-14 right-8 h-10 w-10 opacity-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg className="absolute right-20 bottom-8 h-8 w-8 opacity-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </>
    ),
  },
  {
    title: "Performance Marketing",
    description: "Launch targeted ad campaigns that deliver fast, measurable results.",
    href: "/services/performance-marketing",
    color: "bg-purple-600",
    lightOverlay: "bg-purple-500/30",
    icons: (
      <>
        <svg className="absolute right-8 top-10 h-14 w-14 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <svg className="absolute bottom-10 right-14 h-12 w-12 opacity-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-neutral-100 py-16 md:py-24"
    >
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none text-neutral-200/40 select-none">
        #
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="mb-12 flex items-center gap-3 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Services
          </h2>
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Cards row with connecting wavy dotted line */}
        <div className="relative">
          {/* Wavy dotted line connecting cards (desktop) */}
          <svg
            className="absolute left-0 right-0 top-1/2 hidden h-2 w-full -translate-y-1/2 md:block"
            viewBox="0 0 800 20"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wavy-dotted-path"
                d="M 50 10 Q 200 2 400 10 Q 600 18 750 10"
              />
            </defs>
            <use
              href="#wavy-dotted-path"
              fill="none"
              stroke="#171717"
              strokeWidth="2"
              strokeDasharray="8 6"
              strokeLinecap="round"
            />
          </svg>
          {/* Dots on the line (nodes) */}
          <div className="absolute left-[12%] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-neutral-900 md:block" />
          <div className="absolute left-[50%] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-neutral-900 md:block" />
          <div className="absolute right-[12%] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-neutral-900 md:block" />

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative block transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${service.color} p-6 pb-8 pt-8 shadow-xl transition-shadow group-hover:shadow-2xl md:-rotate-[-3deg] md:[transform:rotate(-3deg)]`}
                >
                  <div
                    className={`absolute inset-0 ${service.lightOverlay}`}
                    aria-hidden
                  />
                  {service.icons}
                  <div className="relative">
                    <div className="mb-4 inline-block rounded-lg bg-neutral-900 px-4 py-2.5">
                      <h3 className="text-lg font-bold leading-tight text-white md:text-xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-white/95 md:text-base">
                      {service.description}
                    </p>
                    <span className="inline-block border-b-2 border-white pb-0.5 text-sm font-medium text-white underline-offset-2 group-hover:border-white/80">
                      Visit →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* See More button */}
        <div className="mt-14 flex justify-center md:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-orange-500/30"
          >
            See More
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
