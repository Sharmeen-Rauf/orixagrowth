"use client";

export default function WhyBrandsTrustSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-24">
      {/* Subtle grid/dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative gear/starburst – right side */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/4 md:block">
        <svg
          className="h-64 w-64 text-neutral-200"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 50 + 35 * Math.cos(angle);
            const y1 = 50 + 35 * Math.sin(angle);
            const x2 = 50 + 48 * Math.cos(angle);
            const y2 = 50 + 48 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            );
          })}
          <circle cx="50" cy="50" r="32" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Karachi Digital Marketing – linear slider */}
        <div className="mb-10 overflow-hidden md:mb-12">
          <div className="flex w-max animate-marquee items-baseline gap-8 whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-3xl font-bold tracking-tight text-neutral-800 md:text-4xl lg:text-5xl"
              >
                Karachi Digital Marketing
              </span>
            ))}
          </div>
        </div>

        {/* Why Brands Trust Us + tagline */}
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            Why Brands Trust Us
          </h2>
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700 md:text-xl">
          Because{" "}
          <span className="border-b-4 border-orange-500 font-semibold text-neutral-900">
            results speak louder
          </span>{" "}
          than words.
        </p>
      </div>
    </section>
  );
}
