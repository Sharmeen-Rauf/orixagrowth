"use client";

const stats = [
  { value: "500+", label: "Campaigns Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "100+", label: "Websites Launched" },
  { value: "60+", label: "Growth Stories" },
];

export default function MarketingStatsSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-16 md:py-20">
      {/* Subtle abstract line graphics */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 right-0 h-2/3 w-2/3" viewBox="0 0 400 300" fill="none">
          <path d="M0 150 Q100 50 200 150 T400 150" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M0 200 Q150 100 300 200 T500 200" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M50 250 Q200 150 350 250" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
        <svg className="absolute left-0 top-1/2 h-1/2 w-1/3 opacity-60" viewBox="0 0 200 200" fill="none">
          <path d="M0 100 L80 80 L120 120 L200 40" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Linear slider heading: "Marketing – Karachi" */}
        <div className="mb-12 overflow-hidden md:mb-16">
          <div className="flex w-max animate-marquee items-baseline gap-8 whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                Marketing – Karachi
              </span>
            ))}
          </div>
        </div>

        {/* Stat cards with gradient border */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-[1px]"
              style={{
                background: "linear-gradient(135deg, #ea580c 0%, #c026d3 50%, #7c3aed 100%)",
              }}
            >
              <div className="rounded-2xl bg-neutral-800/95 p-6 md:p-8">
                <p className="text-4xl font-bold text-white md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-base text-white/90">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
