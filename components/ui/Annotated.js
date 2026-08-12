"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/**
 * Signature element: an image with numbered survey markers, each tied to a
 * design decision. Markers draw in on viewport entry; hovering a note
 * highlights its marker. Notes render as a numbered list below the figure,
 * so the layer works on touch and in screen readers too.
 */
export default function Annotated({
  src,
  alt,
  width,
  height,
  caption,
  tone = "cobalt",
  annotations = [],
}) {
  const [active, setActive] = useState(null);
  const toneCls = tone === "redline" ? "text-redline" : "text-cobalt";

  return (
    <Reveal as="figure" className="m-0">
      <div className={`relative border border-ink ${toneCls}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 900px) 100vw, 900px"
          className="h-auto w-full"
        />
        {annotations.map((a, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="anno-marker"
            data-active={active === i}
            style={{ left: `${a.x}%`, top: `${a.y}%`, "--ai": i }}
          >
            <span>{i + 1}</span>
          </span>
        ))}
      </div>
      <figcaption className="t-label mt-3 text-ink-soft">{caption}</figcaption>
      {annotations.length > 0 && (
        <ol className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
          {annotations.map((a, i) => (
            <li
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="flex items-start gap-3 text-[0.9375rem] leading-snug text-ink-soft"
            >
              <span
                className={`mt-[2px] inline-grid h-[18px] w-[18px] flex-none place-items-center border font-mono text-[10px] font-semibold ${toneCls}`}
                style={{ borderColor: "currentColor" }}
              >
                {i + 1}
              </span>
              <span>{a.label}</span>
            </li>
          ))}
        </ol>
      )}
    </Reveal>
  );
}
