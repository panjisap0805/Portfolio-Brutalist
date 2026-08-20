"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When route changes, complete the animation and fade out
    const frame = requestAnimationFrame(() => {
      setActive(true);
      setProgress(100);
    });

    const timer = setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 300);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      // Only trigger for internal links that navigate away from current hash
      if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("http://") &&
        !href.startsWith("https://") &&
        target.getAttribute("target") !== "_blank"
      ) {
        setActive(true);
        setProgress(35);
        const bumpTimer = setTimeout(() => {
          setProgress((prev) => (prev < 80 ? 75 : prev));
        }, 120);
        return () => clearTimeout(bumpTimer);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  if (!active && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-cobalt transition-all duration-200 ease-out shadow-[0_0_8px_rgba(15,73,189,0.6)]"
        style={{
          width: `${progress}%`,
          opacity: active ? 1 : 0,
        }}
      />
    </div>
  );
}
