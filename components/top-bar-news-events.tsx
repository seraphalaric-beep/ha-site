"use client";

import { useEffect, useRef, useState } from "react";

const newsEventsLinks = [
  { name: "News", href: "#" },
  { name: "Events", href: "#" },
  { name: "Corporate Publications", href: "#" },
  { name: "Newsletter", href: "#" },
] as const;

const CLOSE_DELAY_MS = 200;

export function TopBarNewsEvents() {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center gap-1 hover:text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="true"
        >
          News &amp; Events
          <span
            aria-hidden
            className={`inline-block transition-transform ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>
        {open ? (
          <div
            className="absolute left-0 top-full z-[100] mt-0.5 min-w-[12rem] rounded-md border border-emerald-800/80 bg-slate-950 py-1 shadow-lg"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {newsEventsLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-left text-emerald-50/90 hover:bg-emerald-800/60 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
