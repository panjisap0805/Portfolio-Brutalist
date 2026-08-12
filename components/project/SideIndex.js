"use client";

import { useEffect, useState } from "react";

/**
 * Sticky reading position for the case study. The caret tracks the section
 * currently in view; numbers match the section headers.
 */
export default function SideIndex({ items }) {
  const [active, setActive] = useState(items[0]?.id ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-24 hidden self-start xl:block">
      <ul className="border-l border-grid">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`t-label flex items-baseline gap-2 py-1.5 pl-4 transition-[color,padding] duration-150 ease-mech ${
                  isActive ? "pl-5 text-cobalt" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span aria-hidden="true" className={`font-mono ${isActive ? "" : "invisible"}`}>
                  &gt;
                </span>
                <span>
                  {item.num} {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
