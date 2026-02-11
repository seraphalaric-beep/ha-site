"use client";

import { useEffect, useRef, useState } from "react";

const resourceLinks = [
  { name: "Housing Manual", href: "http://www.housingmanual.ie/" },
  { name: "Housing Training Portal", href: "https://housingtraining.ie/" },
  { name: "Affordable Home", href: "https://affordablehomes.ie/" },
  { name: "Age Friendly Homes", href: "https://agefriendlyhomes.ie/" },
  { name: "Homes and Supports Hub", href: "https://www.homeandsupportshub.ie/" },
] as const;

const CLOSE_DELAY_MS = 200;

export function TopBarResources() {
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
          Resources
          <span
            aria-hidden
            className={`inline-block transition-transform ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>
        {open ? (
          <div
            className="absolute right-0 top-full z-[100] mt-0.5 min-w-[12rem] rounded-md border border-emerald-800/80 bg-slate-950 py-1 shadow-lg"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {resourceLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
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
