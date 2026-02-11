"use client";

import { useState } from "react";
import { housingAgencyNav, type NavNode } from "../app/navigation-data";

const getTopLevelLabel = (name: string) => {
  const index = name.indexOf(" (");
  return index === -1 ? name : name.slice(0, index);
};

type ColumnProps = {
  items: NavNode[];
  title?: string;
  onHoverItem?: (item: NavNode | null) => void;
};

function Column({ items, title, onHoverItem }: ColumnProps) {
  if (!items.length) return null;

  return (
    <div className="min-w-[13rem] border-l border-emerald-800/80 first:border-l-0">
      {title ? (
        <div className="px-4 pb-2 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
          {title}
        </div>
      ) : null}
      <ul className="px-2 pb-3 pt-1">
        {items.map((item) => (
          <li key={item.name}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-xs text-emerald-50/90 hover:bg-emerald-800/70 hover:text-white active:bg-emerald-700"
              >
                <span className="truncate">{item.name}</span>
                <span aria-hidden="true" className="text-[11px] text-emerald-200/80">
                  ↗
                </span>
              </a>
            ) : (
              <button
                type="button"
                onMouseEnter={() => onHoverItem?.(item)}
                className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-xs text-emerald-50/90 hover:bg-emerald-800/70 hover:text-white active:bg-emerald-700"
              >
                <span className="truncate">{item.name}</span>
                {item.children?.length ? (
                  <span
                    aria-hidden="true"
                    className="text-[11px] text-emerald-200/80"
                  >
                    ▸
                  </span>
                ) : null}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MainNav() {
  const [openRootIndex, setOpenRootIndex] = useState<number | null>(null);
  const [level1Hover, setLevel1Hover] = useState<NavNode | null>(null);
  const [level2Hover, setLevel2Hover] = useState<NavNode | null>(null);

  const level2Items = level1Hover?.children ?? [];
  const level3Items = level2Hover?.children ?? [];

  return (
    <nav
      className="relative hidden items-stretch gap-4 text-sm font-medium text-emerald-50/90 md:flex"
      aria-label="Main navigation"
      onMouseLeave={() => {
        setOpenRootIndex(null);
        setLevel1Hover(null);
        setLevel2Hover(null);
      }}
    >
      {housingAgencyNav.map((item, index) => {
        const hasChildren = !!item.children?.length;
        const isOpen = openRootIndex === index;
        const level1Items = item.children ?? [];

        return (
          <div key={item.name} className="relative flex items-stretch">
            <button
              type="button"
              onMouseEnter={() => {
                setOpenRootIndex(index);
                setLevel1Hover(null);
                setLevel2Hover(null);
              }}
              className="inline-flex max-w-[13rem] items-center gap-1 px-2 py-2 text-left hover:text-white active:scale-[0.98] active:text-emerald-100"
            >
              <span className="truncate">
                {getTopLevelLabel(item.name)}
              </span>
              {hasChildren ? <span aria-hidden="true">▾</span> : null}
            </button>
            {isOpen && level1Items.length > 0 ? (
              <div className="absolute left-0 top-full z-30 w-max rounded-xl border border-emerald-800 bg-slate-950 shadow-subtle">
                <div className="flex max-h-[22rem] min-w-[18rem] overflow-hidden">
                  <Column
                    items={level1Items}
                    title={item.name}
                    onHoverItem={(hoveredItem) => {
                      setLevel1Hover(hoveredItem);
                      setLevel2Hover(null);
                    }}
                  />
                  {level2Items.length > 0 ? (
                    <Column
                      items={level2Items}
                      title={level1Hover?.name}
                      onHoverItem={(hoveredItem) => {
                        setLevel2Hover(hoveredItem);
                      }}
                    />
                  ) : null}
                  {level3Items.length > 0 ? (
                    <Column items={level3Items} title={level2Hover?.name} />
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}

