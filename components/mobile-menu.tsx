"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { housingAgencyNav, type NavNode } from "../app/navigation-data";

const getTopLevelLabel = (name: string) => {
  const index = name.indexOf(" (");
  return index === -1 ? name : name.slice(0, index);
};

const utilityLinks = ["News & Events", "Resources", "Contact Us"];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [navStack, setNavStack] = useState<NavNode[]>([]);

  const currentItems =
    navStack.length > 0
      ? (navStack[navStack.length - 1].children ?? [])
      : housingAgencyNav;
  const currentTitle =
    navStack.length > 0 ? getTopLevelLabel(navStack[navStack.length - 1].name) : "";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200/50 bg-emerald-900/40 text-emerald-50/80 shadow-subtle hover:border-emerald-100 hover:text-white md:hidden"
        aria-label="Open navigation menu"
        onClick={() => {
          setNavStack([]);
          setIsOpen(true);
        }}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 6h14M3 10h14M3 14h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isMounted && isOpen
        ? createPortal(
        <div
          className="fixed inset-0 z-[200] bg-slate-950/35 backdrop-blur-sm md:hidden"
          onClick={() => {
            setIsOpen(false);
            setNavStack([]);
          }}
        >
          <div
            className="absolute inset-y-0 right-0 w-full max-w-[30rem] overflow-y-auto bg-emerald-900 text-emerald-50 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 border-b border-emerald-800 bg-brand.darkAlt px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-emerald-300/50 bg-emerald-800/80 text-emerald-50">
                    <span className="text-sm font-semibold tracking-tight">
                      HA
                    </span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-100/80">
                      An Ghniomhaireacht Tithiochta
                    </span>
                    <span className="text-sm font-semibold text-white">
                      The Housing Agency
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-emerald-50/90 hover:bg-emerald-800/60"
                    aria-label="Search (placeholder)"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M13.5 13.5l4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-emerald-50/90 hover:bg-emerald-800/60"
                    aria-label="Close navigation menu"
                    onClick={() => {
                      setIsOpen(false);
                      setNavStack([]);
                    }}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 5l10 10M15 5L5 15"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <nav aria-label="Mobile navigation" className="px-4 py-4">
              {navStack.length > 0 ? (
                <div className="mb-3 flex items-center justify-between border-b border-emerald-800/80 pb-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-emerald-100/90 hover:bg-emerald-800/45 hover:text-white"
                    onClick={() => {
                      setNavStack((prev) => prev.slice(0, -1));
                    }}
                    aria-label="Go back to previous menu level"
                  >
                    <span aria-hidden="true">‹</span>
                    <span>Back</span>
                  </button>
                  <span className="text-sm font-medium text-emerald-100/90">
                    {currentTitle}
                  </span>
                </div>
              ) : null}

              <ul className="space-y-1">
                {currentItems.map((item) => {
                  const hasChildren = !!item.children?.length;

                  return (
                    <li key={item.name}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-4 text-left text-[2rem] font-medium leading-tight text-emerald-50/95 hover:bg-emerald-800/45"
                        onClick={() => {
                          if (hasChildren) {
                            setNavStack((prev) => [...prev, item]);
                          }
                        }}
                      >
                        <span>{getTopLevelLabel(item.name)}</span>
                        {hasChildren ? (
                          <span
                            aria-hidden="true"
                            className="text-2xl text-amber-400/90"
                          >
                            &#8250;
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div
                className={
                  navStack.length === 0
                    ? "mt-4 border-t border-emerald-800/80 pt-4"
                    : "mt-5 border-t border-emerald-800/70 pt-4"
                }
              >
                <ul className="space-y-1">
                  {(navStack.length === 0 ? utilityLinks : []).map((label) => (
                    <li key={label}>
                      <button
                        type="button"
                        className="w-full rounded-md px-3 py-3 text-left text-lg text-emerald-50/90 hover:bg-emerald-800/45"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>,
            document.body
          )
        : null}
    </>
  );
}
