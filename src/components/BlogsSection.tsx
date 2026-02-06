"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "What is Social Media Marketing? Tips & Benefits",
    excerpt:
      "A business that has not adopted social media marketing is missing out on a golden opportunity to...",
    author: "ORIXA Agency",
    date: "27 Jan 2023",
    views: "480",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=320&fit=crop",
    href: "/blog/social-media-marketing-tips-benefits",
  },
  {
    title: "Build a High Impact SEO Strategy in 2022",
    excerpt:
      "Jumping into optimization seems a bit daunting as the algorithm, competition, and website functionality are...",
    author: "Admin",
    date: "14 Feb 2022",
    views: "447",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=320&fit=crop",
    href: "/blog/high-impact-seo-strategy-2022",
  },
  {
    title: "How to Choose the Best Social Media Marketing Agency?",
    excerpt:
      "Finding a suitable agency for SMM (Social Media Marketing) may not seem difficult. However, not every...",
    author: "ORIXA Agency",
    date: "21 Jun 2023",
    views: "693",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=320&fit=crop",
    href: "/blog/choose-best-social-media-marketing-agency",
  },
];

export default function BlogsSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
      {/* Subtle striped/lined background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 12px,
            #cbd5e1 12px,
            #cbd5e1 13px
          )`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center gap-3 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Blogs
          </h2>
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Blog cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[6/4] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                {/* Meta: author, date, views */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {post.views}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-neutral-900 md:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700"
                >
                  Read More
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
