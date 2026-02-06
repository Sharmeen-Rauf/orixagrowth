"use client";

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
          {/* Left: Same illustration + counters */}
          <div className="flex-shrink-0 lg:w-[45%]">
            <div className="relative rounded-2xl border-2 border-orange-400 bg-gradient-to-br from-amber-100 to-orange-200 p-6 shadow-lg md:p-8">
              <div className="absolute -top-2 left-8 h-2 w-2 rotate-45 bg-neutral-800" />
              <div className="absolute -top-1 left-16 h-1.5 w-1.5 rotate-45 bg-neutral-700" />
              <div className="absolute top-0 left-24 h-2 w-2 rotate-45 bg-neutral-800" />
              <div className="flex justify-center">
                <div className="relative">
                  <div className="h-48 w-40 rounded-full bg-purple-200/80 md:h-56 md:w-44" />
                  <div className="absolute -right-2 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                    <svg className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-around gap-4 rounded-xl bg-white/80 px-4 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </span>
                  <span className="font-bold text-neutral-900">150K</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <span className="font-bold text-neutral-900">80K</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                  <span className="font-bold text-neutral-900">75K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Full-Service Team, Client-Centric, Proven Results */}
          <div className="flex-1 space-y-8 lg:space-y-10">
            {features2.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={feature.title} className="border-b border-purple-200/60 pb-8 last:border-0 last:pb-0">
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 [transform:rotate(-3deg)]">
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
