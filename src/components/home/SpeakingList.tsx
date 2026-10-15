import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";

/**
 * A slim strip, not a section: his most notable engagement, a route to the full list, and a way to
 * invite him. Event organisers get the proof and the next step in one glance.
 */
export default function SpeakingList() {
  const featured =
    profileData.speakingHighlights.find((s) => s.featured) ?? profileData.speakingHighlights[0];
  const total = profileData.speakingHighlights.length;

  return (
    <div className="tone-dark bg-bg text-ink">
      <section
        id="featured"
        aria-label="Featured"
        className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-12"
      >
        <div className="flex items-start gap-5">
          <span aria-hidden className="mt-1 hidden h-14 w-0.5 shrink-0 bg-accent sm:block" />
          <div>
            <p className="text-sm font-medium text-accent">Featured</p>
            <p className="mt-1 text-xl font-semibold leading-snug text-ink">{featured.event}</p>
            <p className="mt-1 text-mute">
              {featured.role} · {featured.host} · {featured.location} ·{" "}
              <span className="tabular-nums">{featured.year}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/featured"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            All {total} engagements
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent active:scale-[0.98]"
          >
            Invite him to speak
          </Link>
        </div>
      </section>
    </div>
  );
}
