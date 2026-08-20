"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import InitialPreloader from "@/components/ui/InitialPreloader";
import RootLoading from "@/app/loading";
import CaseStudyLoading from "@/app/work/[slug]/loading";

export default function LoadingPreviewPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const [activeTab, setActiveTab] = useState("preloader");
  const [manualProgress, setManualProgress] = useState(48);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setManualProgress(0);
      const start = performance.now();
      const duration = 2000;

      const step = (now) => {
        const elapsed = now - start;
        const p = Math.min(100, Math.floor((elapsed / duration) * 100));
        setManualProgress(p);
        if (p < 100) {
          requestAnimationFrame(step);
        } else {
          setIsPlaying(false);
        }
      };
      requestAnimationFrame(step);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink pb-24 pt-6">
      {/* Top Spec Header */}
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink pb-4">
          <div>
            <Link href="/" className="t-label link-draw text-cobalt">
              &larr; Back to Portfolio
            </Link>
            <h1 className="t-display mt-2 text-2xl md:text-4xl">
              LOADING SYSTEM // PREVIEW & AUDIT
            </h1>
            <p className="t-label text-ink-soft mt-1">
              INSPECTING INITIAL PRELOADER & NEXT.JS ROUTE SKELETONS
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="t-label border border-ink bg-tint px-3 py-1.5">
              STATUS: PREVIEW_ACTIVE
            </span>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("preloader")}
            className={`t-label px-4 py-2 border border-ink cursor-pointer transition-all ${
              activeTab === "preloader"
                ? "bg-ink text-paper shadow-[3px_3px_0px_0px_var(--color-cobalt)]"
                : "bg-paper text-ink hover:bg-tint"
            }`}
          >
            01 / Initial Blueprint Preloader
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("casestudy")}
            className={`t-label px-4 py-2 border border-ink cursor-pointer transition-all ${
              activeTab === "casestudy"
                ? "bg-ink text-paper shadow-[3px_3px_0px_0px_var(--color-cobalt)]"
                : "bg-paper text-ink hover:bg-tint"
            }`}
          >
            02 / Case Study Loading Skeleton (/work/[slug])
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("root")}
            className={`t-label px-4 py-2 border border-ink cursor-pointer transition-all ${
              activeTab === "root"
                ? "bg-ink text-paper shadow-[3px_3px_0px_0px_var(--color-cobalt)]"
                : "bg-paper text-ink hover:bg-tint"
            }`}
          >
            03 / Root Loading Skeleton (/loading)
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        {activeTab === "preloader" && (
          <div className="space-y-6">
            {/* Interactive Controller */}
            <div className="border border-ink bg-tint p-4 md:p-6 shadow-[4px_4px_0px_0px_var(--color-ink)]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="t-label font-bold text-cobalt">
                  [ LIVE CALIBRATION CONTROLS ]
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="t-label border border-ink bg-paper px-3 py-1.5 hover:border-cobalt cursor-pointer"
                  >
                    {isPlaying ? "PAUSE" : "PLAY SEQUENCE (2s)"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setManualProgress(0)}
                    className="t-label border border-ink bg-paper px-3 py-1.5 hover:border-cobalt cursor-pointer"
                  >
                    RESET (000%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setManualProgress(100)}
                    className="t-label border border-ink bg-paper px-3 py-1.5 hover:border-cobalt cursor-pointer"
                  >
                    COMPLETE (100%)
                  </button>
                </div>
              </div>

              {/* Progress Scrub Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>SCRUB PROGRESS:</span>
                  <span className="text-cobalt font-bold">{manualProgress}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={manualProgress}
                  onChange={(e) => {
                    setIsPlaying(false);
                    setManualProgress(Number(e.target.value));
                  }}
                  className="w-full accent-cobalt cursor-pointer h-2 bg-grid"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-grid text-xs text-ink-soft font-mono">
                💡 <strong>Tips:</strong> Kamu juga bisa membuka home page langsung dalam mode preview dengan URL:{" "}
                <code className="text-cobalt font-semibold">http://localhost:3000/?preview=loading</code> atau{" "}
                <code className="text-cobalt font-semibold">http://localhost:3000/?freeze=true&p=75</code>
              </div>
            </div>

            {/* Embedded Live Preloader */}
            <div className="border border-ink shadow-[6px_6px_0px_0px_var(--color-ink)] overflow-hidden">
              <InitialPreloader forcedProgress={manualProgress} isEmbedded={true} />
            </div>
          </div>
        )}

        {activeTab === "casestudy" && (
          <div className="border border-ink bg-paper shadow-[6px_6px_0px_0px_var(--color-ink)] overflow-hidden">
            <div className="border-b border-ink bg-ink px-4 py-2 text-paper flex items-center justify-between">
              <span className="t-label text-paper">PREVIEW: /work/[slug]/loading.js</span>
              <span className="t-label text-grid">NEXT.JS SUSPENSE BOUNDARY</span>
            </div>
            <CaseStudyLoading />
          </div>
        )}

        {activeTab === "root" && (
          <div className="border border-ink bg-paper shadow-[6px_6px_0px_0px_var(--color-ink)] overflow-hidden">
            <div className="border-b border-ink bg-ink px-4 py-2 text-paper flex items-center justify-between">
              <span className="t-label text-paper">PREVIEW: /loading.js</span>
              <span className="t-label text-grid">GLOBAL ROUTE SKELETON</span>
            </div>
            <RootLoading />
          </div>
        )}
      </div>
    </div>
  );
}
