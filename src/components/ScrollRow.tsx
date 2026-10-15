"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface ScrollRowProps {
  /** Anchor id, so the navigation dock can scroll to this row. */
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  action?: React.ReactNode;
  /** "dark" keeps this band on the dark palette even when the site is in light mode. */
  tone?: "dark";
  children: React.ReactNode;
}

/** A titled, horizontally scrolling row with snap points and prev/next buttons. */
export default function ScrollRow({ id, eyebrow, title, intro, action, tone, children }: ScrollRowProps) {
  const track = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 280), behavior: "smooth" });
  };

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-accent hover:text-accent active:scale-95";

  return (
    <div className={tone === "dark" ? "tone-dark bg-bg text-ink" : undefined}>
    <section id={id} className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
      <SectionHeader eyebrow={eyebrow} title={title} description={intro}>
        {action}
        <div className="hidden gap-2 sm:flex">
          <button onClick={() => scrollBy(-1)} className={btn} aria-label={`Scroll ${title} left`}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scrollBy(1)} className={btn} aria-label={`Scroll ${title} right`}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </SectionHeader>

      <ul
        ref={track}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:thin]"
      >
        {children}
      </ul>
    </section>
    </div>
  );
}
