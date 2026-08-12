"use client";

import { useEffect, useRef } from "react";

const EASE = "transform 400ms cubic-bezier(0.65, 0, 0.25, 1), opacity 400ms ease";

/**
 * Hero signature: roles slide vertically behind a blinking cobalt caret.
 * Under prefers-reduced-motion it stays put on the first role.
 */
export default function RoleCycler({ roles }) {
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el || roles.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let i = 0;
    let swapTimer = 0;
    const tick = setInterval(() => {
      el.style.transition = EASE;
      el.style.transform = "translateY(-105%)";
      el.style.opacity = "0";
      swapTimer = setTimeout(() => {
        i = (i + 1) % roles.length;
        el.textContent = roles[i];
        el.style.transition = "none";
        el.style.transform = "translateY(105%)";
        // Force reflow so the next transition starts from below.
        void el.offsetWidth;
        el.style.transition = EASE;
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
      }, 400);
    }, 2600);

    return () => {
      clearInterval(tick);
      clearTimeout(swapTimer);
    };
  }, [roles]);

  return (
    <>
      <span aria-hidden="true" className="inline-flex items-end gap-[0.08em]">
        <span className="inline-block overflow-hidden" style={{ height: "1em", lineHeight: 1 }}>
          <span ref={spanRef} className="inline-block whitespace-nowrap text-cobalt will-change-transform">
            {roles[0]}
          </span>
        </span>
        <span
          className="caret-blink inline-block bg-cobalt"
          style={{ width: "0.085em", height: "0.8em", marginBottom: "0.04em" }}
        />
      </span>
      <span className="sr-only">{roles.join(", ")}</span>
    </>
  );
}
