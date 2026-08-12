"use client";

import { useEffect, useRef, useState } from "react";

/** Odometer-style count-up in mono, fired once on viewport entry. */
export default function CountUp({ value, decimals = 0, prefix = "", suffix = "", className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const finish = () => setDisplay(value.toFixed(decimals));

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      value === 0
    ) {
      finish();
      return undefined;
    }

    let raf = 0;
    const run = () => {
      const duration = 900;
      let start = null;
      const step = (ts) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay((value * eased).toFixed(decimals));
        if (p < 1) raf = requestAnimationFrame(step);
        else finish();
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display ?? value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
