import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery | Prof. Adebola Aderibigbe",
  description: "Photographs of Prof. Adebola Aderibigbe: portraits, lectures, events and awards.",
};

const wrap = "mx-auto max-w-[1400px] px-5 sm:px-8";

export default function GalleryPage() {
  // Photos marked `confirmed: false` are not cleared for publishing yet.
  const items = galleryItems.filter((p) => p.confirmed !== false);

  const years = items.map((p) => p.year).filter((y): y is number => typeof y === "number");
  const stats = [
    { value: String(items.length), label: "photographs" },
    { value: String(new Set(items.map((p) => p.category)).size), label: "categories" },
    ...(years.length ? [{ value: String(Math.max(...years)), label: "latest" }] : []),
  ];

  return (
    <>
      <section className={`${wrap} pb-4 pt-4 lg:pt-6`}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Link
              href="/"
              className="group -ml-2 mb-2 inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-mute transition-colors hover:bg-tile hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to main site
            </Link>
            <p className="text-sm font-medium text-accent">Gallery</p>
            <h1 className="mt-0.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Photographs
            </h1>
            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-mute">
              Photographs from events, panels and lectures.
            </p>
          </div>

          {items.length > 0 && (
            <dl className="grid grid-cols-3 gap-x-6 border-t border-line pt-3 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-lg font-semibold tabular-nums tracking-tight text-accent">{s.value}</dt>
                  <dd className="mt-0.5 text-xs leading-snug text-mute">{s.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section id="photos" className={`${wrap} pb-12`}>
        {items.length > 0 ? (
          <GalleryGrid items={items} />
        ) : (
          <div className="mt-4 flex flex-col items-center rounded-xl border border-dashed border-line px-6 py-16 text-center">
            <Images className="h-8 w-8 text-mute" />
            <h2 className="mt-4 text-lg font-semibold text-ink">Photographs are on the way</h2>
            <p className="mt-1.5 max-w-[48ch] text-sm leading-relaxed text-mute">
              Portraits from the photoshoot and pictures from lectures and events will appear here as they are
              added.
            </p>
            <Link
              href="/about"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              Read his story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
