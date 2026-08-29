"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Stamp from "@/components/ui/Stamp";
import { experiences } from "@/data/experience";

export default function Experience() {
  // All accordions start collapsed by default
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="scroll-mt-20 border-t border-grid">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-24">
        {/* Section Header */}
        <Reveal>
          <h2 className="t-display rv text-[clamp(1.75rem,4vw,2.75rem)]">
            Experience & Track Record
          </h2>
          <p
            className="rv mt-3 max-w-[60ch] text-ink-soft"
            style={{ "--ri": 1 }}
          >
            5+ years across fintech, high-volume logistics, and government
            systems. Transforming complex operational bottlenecks into
            validated, high-performing digital products.
          </p>
        </Reveal>

        {/* Timeline Container */}
        <Reveal className="mt-14 border-t border-ink pt-10">
          <div className="relative ml-2 border-l border-ink pl-6 sm:pl-8 md:ml-4 md:pl-10 space-y-12 md:space-y-14">
            {experiences.map((exp, i) => {
              const isOpen = !!openItems[exp.id];
              const isCurrent =
                exp.stamp?.label?.toLowerCase() === "current";

              return (
                <div
                  key={exp.id}
                  className="rv relative group"
                  style={{ "--ri": i + 1 }}
                >
                  {/* Timeline Node Marker */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[31px] sm:-left-[39px] md:-left-[48px] top-1.5 h-3.5 w-3.5 md:h-4 md:w-4 border-2 border-ink bg-paper flex items-center justify-center transition-colors duration-200 ${
                      isCurrent ? "border-cobalt" : "group-hover:border-cobalt"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 transition-colors duration-200 ${
                        isCurrent
                          ? "bg-cobalt"
                          : "bg-transparent group-hover:bg-cobalt"
                      }`}
                    />
                  </span>

                  {/* Period & Status Stamp */}
                  <div className="flex items-center gap-2.5">
                    <span className="t-label font-bold text-ink">
                      {exp.period}
                    </span>
                    {isCurrent && exp.stamp && (
                      <Stamp
                        label={exp.stamp.label}
                        tone={exp.stamp.tone}
                        className="!text-[0.5625rem] !py-0.5 !px-1.5"
                      />
                    )}
                  </div>

                  {/* Role & Company */}
                  <div className="mt-2">
                    <h3 className="t-statement text-xl md:text-2xl text-ink">
                      {exp.role}{" "}
                      <span className="text-ink-soft font-normal text-lg md:text-xl">
                        &mdash; {exp.company}
                      </span>
                    </h3>
                  </div>

                  {/* Location & Domain */}
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-ink-soft">
                      {exp.location}
                    </span>
                    <span className="text-ink-soft" aria-hidden="true">
                      &bull;
                    </span>
                    <span className="font-mono text-cobalt font-medium">
                      {exp.domain}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 max-w-[70ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                    {exp.summary}
                  </p>

                  {/* Accordion Trigger Button */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => toggleItem(exp.id)}
                        className="group/btn inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1.5 font-mono text-[0.75rem] uppercase tracking-wider text-ink transition-all duration-150 hover:bg-tint hover:border-cobalt active:translate-y-px cursor-pointer"
                        aria-expanded={isOpen}
                        aria-controls={`impact-log-${exp.id}`}
                      >
                        <span className="font-bold text-cobalt text-sm transition-transform duration-150">
                          {isOpen ? "−" : "+"}
                        </span>
                        <span className="font-semibold">
                          {isOpen
                            ? "Tutup Impact Log"
                            : `Lihat Impact & Deliverables (${exp.highlights.length})`}
                        </span>
                        <span className="text-[0.6875rem] text-ink-soft font-normal hidden sm:inline">
                          [{isOpen ? "COLLAPSE" : "EXPAND"}]
                        </span>
                      </button>

                      {/* Collapsible Content */}
                      <div
                        id={`impact-log-${exp.id}`}
                        className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                          isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr] mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border border-ink bg-tint/50 p-4 md:p-5">
                            <div className="flex items-center justify-between pb-2.5 border-b border-grid text-ink-soft mb-1">
                              <span className="t-label text-cobalt font-bold">
                                KEY METRICS & DELIVERABLES
                              </span>
                              <span className="t-label text-[0.625rem]">
                                {exp.highlights.length} VERIFIED HIGHLIGHTS
                              </span>
                            </div>

                            <div className="divide-y divide-grid">
                              {exp.highlights.map((item, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="py-2.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                                >
                                  <span className="t-label font-bold text-cobalt sm:w-44 sm:shrink-0">
                                    {item.metric}
                                  </span>
                                  <p className="text-[0.875rem] leading-relaxed text-ink">
                                    {item.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
