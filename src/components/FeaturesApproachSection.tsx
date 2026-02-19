"use client";

import Image from "next/image";

const features2 = [
  {
    title: "Full-Service Team",
    description:
      "In-house specialists covering SEO, ads, content, and analytics end to end.",
    icon: "grid",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Goal-driven strategies and clear communication focused entirely on your success.",
    icon: "plane",
  },
  {
    title: "Proven Results",
    description:
      "Real-time data for performance optimization and measurable outcomes.",
    icon: "chart",
  },
];

function IconGrid() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}
function IconPlane() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

const iconMap = { grid: IconGrid, plane: IconPlane, chart: IconChart };

export default function FeaturesApproachSection() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div
        className="mx-auto max-w-7xl px-6 md:px-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Why Brands Trust Us image */}
          <div className="flex-shrink-0 lg:w-[45%]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/Why%20Brands%20Trust%20Us.png"
                alt="Why Brands Trust Us"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Right: Full-Service Team, Client-Centric, Proven Results */}
          <div className="flex-1 space-y-8 lg:space-y-10">
            {features2.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={feature.title} className="border-b border-[#8e44ad]/40 pb-8 last:border-0 last:pb-0">
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#8e44ad]/20 text-[#502961] [transform:rotate(-3deg)]">
                      {Icon && <Icon />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{feature.title}</h3>
                      <p className="mt-2 text-neutral-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
