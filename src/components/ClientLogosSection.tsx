"use client";

const clients = [
  { name: "SARA ELECTRIC", tagline: "", color: "text-blue-600" },
  { name: "ZARBAHAAR", tagline: "Jewellery", color: "text-neutral-900" },
  { name: "HUSSAIN TEXTILES", tagline: "The House of Quality", color: "text-blue-700" },
  { name: "VELOZMATRIX", tagline: "", color: "text-red-600" },
  { name: "Z ZIEW", tagline: "SOLAR ENERGY", color: "text-emerald-600" },
];

export default function ClientLogosSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
      {/* Subtle diagonal line pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            #cbd5e1 8px,
            #cbd5e1 9px
          )`,
        }}
      />

      {/* Decorative star shape - left */}
      <div className="pointer-events-none absolute -left-20 top-1/2 hidden -translate-y-1/2 md:block">
        <svg
          className="h-40 w-40 text-white opacity-90"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 5 L61 35 L92 35 L67 55 L78 85 L50 65 L22 85 L33 55 L8 35 L39 35 Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Trust statement */}
        <p className="mb-10 text-lg text-neutral-700 md:mb-12 md:text-xl">
          Trusted by{" "}
          <span className="font-semibold text-purple-600 underline decoration-orange-500 decoration-2 underline-offset-2">
            100+ Happy Clients
          </span>{" "}
          – from startups to enterprise brands.
        </p>

        {/* Logos linear slider (marquee) */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex h-28 w-52 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-center">
                  <p className={`font-bold ${client.color}`}>{client.name}</p>
                  {client.tagline && (
                    <p className="mt-0.5 text-sm text-neutral-500">{client.tagline}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
