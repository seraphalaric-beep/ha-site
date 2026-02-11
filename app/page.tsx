export default function HomePage() {
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
              Delivering Homes
              <br />
              That People Need
            </h1>
            <p className="max-w-xl text-sm text-emerald-100/85 sm:text-base">
              We help people get access housing supports, guide professionals
              with trusted standards and research, and share data to improve
              housing across Ireland.
            </p>
          </div>

          <div className="pt-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-emerald-200/70 bg-transparent px-5 py-2.5 text-sm font-medium text-emerald-50 shadow-subtle transition hover:border-emerald-100 hover:bg-emerald-500/10">
              <span>More About Us</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Right column: image placeholder / wireframe */}
        <div className="relative">
          <div className="absolute -inset-6 hidden rounded-[2rem] bg-emerald-900/25 blur-2xl lg:block" />
          <div className="relative aspect-[4/3] w-full rounded-2xl border border-emerald-200/40 bg-slate-900/80 shadow-subtle">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-xs text-emerald-100/75">
              <span className="rounded-full border border-dashed border-emerald-300/60 px-3 py-1">
                Hero image placeholder
              </span>
              <p className="max-w-[14rem] text-[11px] text-emerald-100/70">
                This area stands in for photography in the real design. It keeps
                the layout and proportions of the Housing Agency hero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

