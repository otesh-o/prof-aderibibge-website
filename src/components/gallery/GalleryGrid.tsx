"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryCategory, GalleryItem } from "@/data/gallery";

type Filter = "All" | GalleryCategory;

const label: Record<GalleryCategory, string> = {
  Portrait: "Portraits",
  Event: "Events",
  Lecture: "Lectures",
  Award: "Awards",
  Certificate: "Certificates",
};

/** A filterable photo grid. Clicking a photo opens a viewer with arrow-key navigation. */
export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const categories = [...new Set(items.map((i) => i.category))];
  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);
  const count = (f: Filter) => (f === "All" ? items.length : items.filter((i) => i.category === f).length);

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length)),
    [shown.length],
  );

  // Viewer: Escape closes, arrows move, and the page behind does not scroll.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : shown[open];

  return (
    <div>
      {categories.length > 1 && (
        <div className="sticky top-16 z-30 -mx-5 border-b border-line bg-bg/90 px-5 py-2.5 backdrop-blur-md sm:-mx-8 sm:px-8">
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
            {(["All", ...categories] as Filter[]).map((f) => {
              const active = filter === f;
              return (
                <li key={f} className="shrink-0">
                  <button
                    onClick={() => setFilter(f)}
                    aria-pressed={active}
                    className={`inline-flex h-9 items-center gap-2 rounded-full px-3.5 text-sm transition-colors ${
                      active
                        ? "bg-accent font-medium text-on-accent"
                        : "border border-line text-mute hover:border-accent hover:text-ink"
                    }`}
                  >
                    {f === "All" ? "All photos" : label[f]}
                    <span className="tabular-nums opacity-70">{count(f)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <ul className="mt-4 columns-2 gap-3 md:columns-3 xl:columns-4 [&>li]:mb-3">
        {shown.map((p, i) => (
          <li key={p.id} className="break-inside-avoid">
            <button
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Open photo: ${p.alt}`}
              className="group relative block w-full overflow-hidden rounded-xl bg-tile2 ring-1 ring-inset ring-line"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {(p.caption || p.year) && (
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-left text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {p.caption}
                  {p.caption && p.year ? " · " : ""}
                  {p.year}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[70] flex flex-col bg-black/92 text-white"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-3 text-sm text-white/70">
            <span className="tabular-nums">
              {(open ?? 0) + 1} / {shown.length}
            </span>
            <button
              onClick={close}
              aria-label="Close viewer"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-14" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.id}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              priority
              className="max-h-full w-auto max-w-full object-contain"
            />
            {shown.length > 1 && (
              <>
                <button
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <p className="px-5 py-4 text-center text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
            {current.caption ?? current.alt}
            {current.year ? ` · ${current.year}` : ""}
            {current.credit ? ` · Photo: ${current.credit}` : ""}
          </p>
        </div>
      )}
    </div>
  );
}
