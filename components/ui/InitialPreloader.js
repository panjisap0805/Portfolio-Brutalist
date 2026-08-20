"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";

export const PRELOADER_STAGES = [
  { threshold: 0, text: "INITIALIZING PANJI_OS / SPEC_2026..." },
  { threshold: 24, text: "CALIBRATING BLUEPRINT & DESIGN_TOKENS..." },
  { threshold: 52, text: "MOUNTING CASE_STUDIES & WIREFRAMES..." },
  { threshold: 78, text: "VERIFYING INTERACTION MATRICES..." },
  { threshold: 96, text: "SYSTEM CALIBRATED / READY" },
];

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function getInitialDebugInfo() {
  if (typeof window === "undefined") {
    return { isDebug: false, isFrozen: false, defaultProgress: 0, isDismissed: true };
  }
  try {
    const isDev = process.env.NODE_ENV !== "production";
    const params = new URLSearchParams(window.location.search);
    const hasDebug =
      isDev &&
      (params.get("preview") === "loading" ||
        params.get("freeze") === "true" ||
        params.get("debug") === "true");

    const isFrozen = isDev && params.get("freeze") === "true";
    const p = parseInt(params.get("p") || "65", 10);
    const defaultProgress = isFrozen ? (isNaN(p) ? 65 : p) : 0;
    const isDismissed = !hasDebug && sessionStorage.getItem("ps_preloader_seen") === "1";

    return { isDebug: hasDebug, isFrozen, defaultProgress, isDismissed };
  } catch {
    return { isDebug: false, isFrozen: false, defaultProgress: 0, isDismissed: false };
  }
}

export default function InitialPreloader({
  forcedProgress,
  isEmbedded = false,
}) {
  const isClient = useIsClient();
  const [debugInfo] = useState(getInitialDebugInfo);
  const [internalProgress, setInternalProgress] = useState(() => debugInfo.defaultProgress);
  const [isExiting, setIsExiting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => (isEmbedded ? false : debugInfo.isDismissed));
  const [isFrozen, setIsFrozen] = useState(() => debugInfo.isFrozen);

  const progress = forcedProgress !== undefined ? forcedProgress : internalProgress;

  const dismiss = useCallback(() => {
    if (isEmbedded) return;
    setIsExiting(true);
    try {
      sessionStorage.setItem("ps_preloader_seen", "1");
    } catch {
      // Ignore if sessionStorage is unavailable
    }
    const timer = setTimeout(() => {
      setIsDismissed(true);
    }, 320);
    return () => clearTimeout(timer);
  }, [isEmbedded]);

  useEffect(() => {
    if (isEmbedded || forcedProgress !== undefined || isDismissed || isFrozen) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion && !debugInfo.isDebug) {
      const timer = setTimeout(() => dismiss(), 150);
      return () => clearTimeout(timer);
    }

    const duration = 1200; // 1.2s total snappy calibration
    const startTime = performance.now();

    let animationFrame;
    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, (elapsed / duration) * 100);

      const easedProgress = Math.min(
        100,
        Math.floor(
          rawProgress < 70
            ? rawProgress * 1.05
            : 73.5 + (rawProgress - 70) * 0.883
        )
      );

      setInternalProgress(easedProgress);

      if (rawProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setInternalProgress(100);
        if (!debugInfo.isDebug) {
          setTimeout(() => {
            dismiss();
          }, 180);
        }
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDismissed, isEmbedded, forcedProgress, isFrozen, debugInfo.isDebug, dismiss]);

  if (!isClient || isDismissed) {
    return null;
  }

  const currentStage =
    [...PRELOADER_STAGES].reverse().find((s) => progress >= s.threshold)?.text ||
    PRELOADER_STAGES[0].text;

  const totalBlocks = 18;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio specification"
      className={`${
        isEmbedded
          ? "relative min-h-[540px] w-full"
          : "fixed inset-0 z-[9999]"
      } flex flex-col justify-between overflow-hidden bg-paper p-4 text-ink select-none md:p-8 transition-opacity duration-300 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background blueprint drafting grid & scanline */}
      <div className="sheet-grid absolute inset-0 opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="calib-scan absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Header technical coordinates */}
      <header className="relative z-10 flex items-start justify-between gap-4 border-b border-grid pb-3">
        <div className="flex flex-col gap-0.5">
          <span className="t-label text-ink font-semibold">
            PANJI_SAPUTRO // CALIBRATION_SPEC
          </span>
          <span className="t-label text-ink-soft">
            LOC: -6.2009° S, 106.8624° E [JAKARTA]
          </span>
        </div>
        {!isEmbedded && (
          <button
            type="button"
            onClick={dismiss}
            className="t-label flex items-center gap-1.5 border border-ink bg-paper px-2.5 py-1 text-ink-soft hover:border-cobalt hover:text-cobalt cursor-pointer transition-colors"
            aria-label="Skip loading intro"
          >
            <span className="text-[10px] text-cobalt font-mono">[ESC]</span>
            <span>SKIP INTRO</span>
          </button>
        )}
      </header>

      {/* Center calibration module */}
      <main className="relative z-10 mx-auto my-auto w-full max-w-lg">
        <div className="border border-ink bg-paper p-5 md:p-8 shadow-[6px_6px_0px_0px_var(--color-ink)]">
          {/* Card title bar */}
          <div className="flex items-center justify-between border-b border-ink pb-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 bg-cobalt animate-ping" />
              <span className="t-label font-semibold text-ink">
                CALIBRATING SYSTEM CANVAS
              </span>
            </div>
            <span className="t-label font-mono text-ink-soft">
              DOC-2026/INIT
            </span>
          </div>

          {/* Large percentage display */}
          <div className="my-6 flex items-baseline justify-between">
            <div className="font-mono text-6xl md:text-7xl font-bold tracking-tight text-ink tabular-nums">
              {String(progress).padStart(3, "0")}
              <span className="text-2xl md:text-3xl text-cobalt font-normal ml-1">
                %
              </span>
            </div>
            <div className="text-right">
              <span className="t-label block text-ink-soft">STATUS</span>
              <span className="t-label block font-semibold text-cobalt">
                {progress === 100 ? "VERIFIED" : "PROCESSING"}
              </span>
            </div>
          </div>

          {/* Segmented brutalist progress bar */}
          <div className="space-y-2">
            <div className="flex gap-1 h-3 p-0.5 border border-ink bg-tint">
              {Array.from({ length: totalBlocks }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 transition-colors duration-75 ${
                    i < filledBlocks ? "bg-cobalt" : "bg-grid"
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-ink-soft">
              <span>000</span>
              <span>CALIBRATION GAUGE</span>
              <span>100</span>
            </div>
          </div>

          {/* Live log message */}
          <div className="mt-6 flex items-center gap-2 border-t border-grid pt-3 text-ink-soft">
            <span className="text-cobalt font-mono text-xs">&gt;</span>
            <p className="t-label font-mono text-xs truncate text-ink">
              {currentStage}
            </p>
          </div>
        </div>
      </main>

      {/* Optional Debug / Preview Toolbar (appears when ?preview=loading or ?freeze=true) */}
      {debugInfo.isDebug && !isEmbedded && (
        <div className="relative z-20 mx-auto w-full max-w-lg border border-cobalt bg-paper p-3 mb-2 shadow-[3px_3px_0px_0px_var(--color-cobalt)]">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-cobalt font-bold">[ DEBUG / PREVIEW MODE ]</span>
            <span>{progress}%</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => {
                setIsFrozen(true);
                setInternalProgress(Number(e.target.value));
              }}
              className="w-full accent-cobalt cursor-pointer"
            />
            <button
              type="button"
              onClick={() => {
                setIsFrozen(false);
                setInternalProgress(0);
              }}
              className="t-label px-2 py-1 border border-ink bg-tint hover:bg-ink hover:text-paper cursor-pointer"
            >
              Replay
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="t-label px-2 py-1 border border-ink bg-ink text-paper cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer technical spec strip */}
      <footer className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-grid pt-3">
        <span className="t-label text-ink-soft">
          ENGINEERING BRUTALISM // NEXT.JS 16
        </span>
        <span className="t-label text-cobalt font-mono">
          PORTFOLIO_SYSTEM: ACTIVE
        </span>
      </footer>
    </div>
  );
}
