"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop)`,
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#502961]/90 via-[#8e44ad]/85 to-[#502961]/90"
        aria-hidden
      />

      {/* Content container */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center">
        <div className="px-6 pt-24 pb-16 md:px-12 lg:px-16">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-lg font-medium tracking-wide text-white/95 md:text-xl">
              Powering Your Digital Growth
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Driving Digital Success with Trust
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Accelerating brand growth through insight-led strategies and results-focused execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg bg-[#0007bf] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#060b84]"
              >
                Get Started
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center rounded-lg border-2 border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
