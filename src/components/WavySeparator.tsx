export default function WavySeparator() {
  return (
    <div className="relative w-full" aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wavy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="50%" stopColor="#c026d3" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wavy-gradient)"
          d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
        />
        <path
          fill="url(#wavy-gradient)"
          opacity="0.9"
          d="M0,80 C400,40 800,100 1440,60 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
