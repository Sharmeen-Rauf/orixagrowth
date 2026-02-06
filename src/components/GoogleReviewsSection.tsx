"use client";

const reviews = [
  {
    name: "Kamran",
    title: "Admin Officer at The Academy",
    stars: 5,
    text: "Outstanding digital marketing support. Our reach and engagement have grown significantly since we started working with the team.",
  },
  {
    name: "Hareem Baig",
    title: "Sr. Marketing Associate at Shine Humanity",
    stars: 5,
    text: "Professional, responsive, and results-driven. They delivered exactly what we needed for our campaigns.",
  },
  {
    name: "Shafqat Yousaf",
    title: "Senior Manager at DWWLG",
    stars: 5,
    text: "Highly recommend. Clear strategy, creative execution, and measurable outcomes. A true partner for growth.",
  },
];

function GoogleLogo() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, title, stars, text }: { name: string; title: string; stars: number; text: string }) {
  return (
    <div className="flex h-full w-[320px] flex-shrink-0 flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <GoogleLogo />
      <p className="mt-4 font-bold text-neutral-900">{name}</p>
      <p className="text-sm text-neutral-500">{title}</p>
      <div className="mt-2">
        <StarRating count={stars} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{text}</p>
    </div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
      {/* Subtle diagonal pattern */}
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

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-neutral-900 md:mb-12 md:text-4xl">
          Google Reviews
        </h2>

        {/* Reviews linear slider (marquee) */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-8">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard
                key={`${review.name}-${i}`}
                name={review.name}
                title={review.title}
                stars={review.stars}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
