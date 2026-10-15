"use client";

import { useLayoutEffect, useRef } from "react";

interface CountUpProps {
  /** A figure such as "18+" or "30+". The leading integer animates; the rest is kept as is. */
  value: string;
  durationMs?: number;
}

/**
 * Counts up from 0 the first time it scrolls into view. The final value is what the server renders,
 * so search engines, no-JS visitors and reduced-motion users all see the real number.
 */
export default function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\d+)(.*)$/);
    if (!el || !match) return;

    const target = Number(match[1]);
    const suffix = match[2];

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window) || document.visibilityState === "hidden") return;

    el.textContent = `0${suffix}`;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} aria-label={value}>
      {value}
    </span>
  );
}
