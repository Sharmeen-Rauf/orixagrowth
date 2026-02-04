export default function WavySeparator() {
  return (
    <div className="relative w-full overflow-visible" aria-hidden>
      <svg
        viewBox="0 0 1440 200"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="ribbon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="30%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#c026d3" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        {/* Thick ribbon: S-curve from left (purple) through center loop to right (orange) */}
        <path
          d="M -40 100 C 220 20 420 20 560 90 C 700 160 820 80 960 100 C 1100 120 1220 60 1360 95 L 1520 95"
          fill="none"
          stroke="url(#ribbon-gradient)"
          strokeWidth="88"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
