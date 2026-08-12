"use client";

import { useEffect, useRef } from "react";

const EASE = "transform 400ms cubic-bezier(0.65, 0, 0.25, 1), opacity 400ms ease";

/**
 * Hero signature: roles slide vertically, the cobalt caret marking the end of
 * whichever role is showing. The mask is a fixed number of lines tall (two
 * below md, where the longest role cannot fit one line of expanded display
 * type), so a role swap never shifts the copy under it.
 * Under prefers-reduced-motion it stays put on the first role.
 */
export default function RoleCycler({ roles }) {
  const slideRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const slide = slideRef.current;
    const text = textRef.current;
    if (!slide || !text || roles.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let i = 0;
    let swapTimer = 0;
    const tick = setInterval(() => {
      slide.style.transition = EASE;
      slide.style.transform = "translateY(-105%)";
      slide.style.opacity = "0";
      swapTimer = setTimeout(() => {
        i = (i + 1) % roles.length;
        // Only the text node swaps, so the caret survives the change.
        text.textContent = roles[i];
        slide.style.transition = "none";
        slide.style.transform = "translateY(105%)";
        // Force reflow so the next transition starts from below.
        void slide.offsetWidth;
        slide.style.transition = EASE;
        slide.style.transform = "translateY(0)";
        slide.style.opacity = "1";
      }, 400);
    }, 2600);

    return () => {
      clearInterval(tick);
      clearTimeout(swapTimer);
    };
  }, [roles]);

  return (
    <>
      <span aria-hidden="true" className="role-mask">
        <span ref={slideRef} className="role-slide">
          <span ref={textRef}>{roles[0]}</span>
          <span className="caret-blink role-caret" />
        </span>
      </span>
      <span className="sr-only">{roles.join(", ")}</span>
    </>
  );
}
