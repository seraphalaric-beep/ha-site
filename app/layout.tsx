import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { MainNav } from "../components/main-nav";
import { MobileMenu } from "../components/mobile-menu";
import { TopBarResources } from "../components/top-bar-resources";

export const metadata: Metadata = {
  title: "Housing Agency | Navigation Demo",
  description:
    "A simple demo of the Housing Agency main navigation using Next.js and Tailwind CSS."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950">
        <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-brand.dark to-slate-950">
          {/* Thin top bar – elevated so Resources dropdown appears above main nav */}
          <div className="relative z-[60] border-b border-emerald-900/60 bg-brand.dark/95">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-emerald-50/80 lg:px-6">
              <div className="flex items-center gap-6">
                <button className="hover:text-white">Contact Us</button>
              </div>
              <div className="flex items-center gap-6">
                <button className="hover:text-white">News &amp; Events</button>
                <TopBarResources />
              </div>
            </div>
          </div>

          {/* Main nav bar – will later be driven by JSON */}
          <header className="relative z-50 border-b border-emerald-900/70 bg-brand.darkAlt/95 nav-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 lg:px-6">
              {/* Logo / lockup */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-emerald-300/50 bg-emerald-800/80 text-emerald-50 shadow-subtle">
                  <span className="text-sm font-semibold tracking-tight">
                    HA
                  </span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-100/80">
                    An Ghníomhaireacht Tithíochta
                  </span>
                  <span className="text-sm font-semibold text-white">
                    The Housing Agency
                  </span>
                </div>
              </div>

              {/* Main nav items – JSON‑driven with hover dropdowns */}
              <MainNav />

              {/* Search / mobile trigger */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="hidden h-9 w-9 items-center justify-center rounded-full border border-emerald-200/50 bg-emerald-900/40 text-emerald-50/80 shadow-subtle hover:border-emerald-100 hover:text-white md:flex"
                  aria-label="Search"
                >
                  <span aria-hidden="true">🔍</span>
                </button>
                <MobileMenu />
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="relative z-0 flex-1">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:px-6 lg:py-12">
              {children}
            </div>
          </main>

          <footer className="border-t border-emerald-900/70 bg-brand.darkAlt/95">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-emerald-100/80 lg:px-6">
              <span>Housing Agency – demo only</span>
              <span>Navigation prototype · Next.js + Tailwind</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

