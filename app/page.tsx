"use client";

import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [heroError, setHeroError] = useState(false);
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-950/40 shadow-subtle ring-1 ring-emerald-900/60">
      {/* Hero background tint */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_55%),linear-gradient(to_bottom,_rgba(15,23,42,0.7),_rgba(15,23,42,0.95))]" />

      <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:px-12 lg:py-14">
        {/* Left column: text */}
        <div className="space-y-6 text-slate-50">
          <div className="space-y-2 text-xs font-medium tracking-[0.28em] text-emerald-200/80">
            <div className="h-px w-10 bg-emerald-300/80" />
            <p>THE HOUSING AGENCY OF IRELAND</p>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Delivering Homes People Need
            </h1>
            <p className="max-w-xl text-sm text-emerald-100/85 sm:text-base">
              The Agency’s purpose is to accelerate housing supply, in
              partnership with our key stakeholders, by providing our
              expertise, support and resources to deliver high-quality homes in
              vibrant communities.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.housingagency.ie/sites/default/files/2024-11/HA_Strategy24-WEB-singles.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-200/70 bg-transparent px-5 py-2.5 text-sm font-medium text-emerald-50 shadow-subtle transition hover:border-emerald-100 hover:bg-emerald-500/10"
            >
              <span>More About Us</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right column: hero image – use an Irish housing estate image (e.g. from Glenveagh/Cairn with permission) at public/hero.jpg */}
        <div className="relative">
          <div className="absolute -inset-6 hidden rounded-[2rem] bg-emerald-900/25 blur-2xl lg:block" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-emerald-200/40 bg-slate-800/60 shadow-subtle">
            {heroError ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-sm text-emerald-100/80">
                <span className="rounded border border-dashed border-emerald-400/50 px-3 py-1.5">
                  Irish housing estate image
                </span>
                <p className="max-w-[14rem] text-[11px] text-emerald-200/70">
                  Add <code className="rounded bg-slate-800 px-1 py-0.5">public/hero.jpg</code> (e.g. Glenveagh or Cairn development)
                </p>
              </div>
            ) : (
              <Image
                src="/hero.jpg"
                alt="Irish housing estate"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                onError={() => setHeroError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

