"use client";

import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, label: "Campaigns Delivered" },
  { value: 100, label: "Satisfied Clients" },
  { value: 100, label: "Websites Launched" },
  { value: 60, label: "Growth Stories" },
];

const DURATION_MS = 2000;
const TICK_MS = 16; // ~60fps

function useCountUp(end: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let rafId: number;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      // easeOutQuart
      const eased = 1 - (1 - progress) ** 4;
      setCount(Math.floor(eased * end));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [end, start]);

  return count;
}

function StatCard({
  value,
  label,
  inView,
}: {
  value: number;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, inView);
  return (
    <div
      className="rounded-2xl p-[1px]"
      style={{
        background: "linear-gradient(135deg, #0007bf 0%, #8e44ad 50%, #502961 100%)",
      }}
    >
      <div className="rounded-2xl bg-neutral-800/95 p-6 md:p-8">
        <p className="text-4xl font-bold text-white md:text-5xl">{count}+</p>
        <p className="mt-2 text-base text-white/90">{label}</p>
      </div>
    </div>
  );
}

export default function MarketingStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-900 py-16 md:py-20"
    >
      {/* White wavy lines behind counter – two main waves passing behind the boxes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Upper wavy line – passes behind first two counter boxes */}
          <path
            d="M -50 120 Q 200 80 400 120 T 850 120 T 1250 120"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          <path
            d="M -30 140 Q 250 100 450 140 T 800 100 T 1220 140"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          {/* Lower wavy line – passes behind last two counter boxes */}
          <path
            d="M -80 260 Q 150 220 450 260 T 900 260 T 1280 260"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          <path
            d="M -50 280 Q 200 240 500 280 T 850 240 T 1250 280"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          {/* Extra faint curves that intersect for depth */}
          <path
            d="M 100 80 Q 500 180 900 80 Q 1100 40 1300 100"
            stroke="white"
            strokeWidth="0.75"
            strokeOpacity="0.15"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
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
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
