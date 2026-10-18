import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { galleryItems } from "@/data/gallery";

/** A few photographs on the home page, leading to the full gallery. */
export default function GalleryStrip() {
  const all = galleryItems.filter((p) => p.confirmed !== false);
  // Photos flagged `home: true` lead; wide shots fill in if fewer than five are flagged.
  const wide = all.filter((p) => p.category !== "Certificate" && p.width >= p.height);
  const picks = [...wide.filter((p) => p.home), ...wide.filter((p) => !p.home)].slice(0, 5);
  if (picks.length === 0) return null;

  return (
    <div className="tone-dark bg-bg text-ink">
    <section id="gallery" className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-16">
      <SectionHeader
        eyebrow="Gallery"
        title="Photographs"
        description="From summits, panels and lectures."
      >
        <Link
          href="/gallery"
          className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-4 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          See all {all.length} photos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionHeader>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
        {picks.map((p, i) => (
          <li key={p.id} className={i === 0 ? "col-span-2 md:row-span-2" : ""}>
            <Link
              href="/gallery"
              aria-label={`Open the gallery: ${p.alt}`}
              className="group relative block h-full min-h-40 overflow-hidden rounded-xl bg-tile2 ring-1 ring-inset ring-line"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {p.caption && (
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.caption}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
}
