import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { publicationsData, thesisData, type Publication } from "@/data/research";
import { profileData } from "@/data/profile";

const typeLabel: Record<Publication["type"], string> = {
  "Journal Article": "Article",
  "Book Chapter": "Chapter",
  "Policy Report": "Report",
  "Conference Proceeding": "Conference paper",
};

const card =
  "group flex flex-col rounded-2xl bg-tile p-5 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50";

const badge = "inline-flex rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent";

function ScholarLink({ pub }: { pub: Publication }) {
  return (
    <a
      href={pub.scholarUrl || profileData.socialLinks.googleScholar}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
    >
      Google Scholar <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

/** One standout paper, three more entries, and a route to the full list. */
export default function ResearchBrowser({ thesisAvailable }: { thesisAvailable: boolean }) {
  const byYear = [...publicationsData].sort((a, b) => b.year - a.year);
  const featured = byYear.find((p) => p.type === "Journal Article") ?? byYear[0];
  const rest = byYear.filter((p) => p.id !== featured.id);
  // Thesis plus the two newest other entries make the three shown on the home page.
  const more = rest.slice(0, 2);
  const total = publicationsData.length + 1;

  return (
    <div className="space-y-4">
      {/* Featured */}
      <SpotlightCard
        as="article"
        className="group rounded-2xl bg-tile p-6 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50 sm:p-8"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-4 select-none text-[6rem] font-semibold leading-none tracking-tighter text-accent/10 sm:text-[9rem]"
        >
          {featured.year}
        </span>
        <div className="relative max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent">
              Featured
            </span>
            <span className="text-sm text-mute">
              {typeLabel[featured.type]} · {featured.journal}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
            {featured.title}
          </h3>
          {featured.abstract && (
            <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-mute line-clamp-3">{featured.abstract}</p>
          )}
          <div className="mt-4">
            <ScholarLink pub={featured} />
          </div>
        </div>
      </SpotlightCard>

      {/* Three more */}
      <ul className="grid gap-4 md:grid-cols-3">
        <SpotlightCard as="li" className={card}>
          <div className="flex items-center justify-between gap-3">
            <span className={badge}>Doctoral thesis</span>
            <span className="text-sm tabular-nums text-mute">{thesisData.year}</span>
          </div>
          <h3 className="mt-4 text-base font-semibold leading-snug text-ink">{thesisData.title}</h3>
          <p className="mt-2 text-mute">{thesisData.institution}</p>
          <div className="mt-auto pt-4">
            {thesisAvailable ? (
              <a
                href={thesisData.downloadUrl}
                download
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <Download className="h-4 w-4" />
                Summary (PDF)
              </a>
            ) : (
              <span className="text-sm text-mute">Summary PDF to be added</span>
            )}
          </div>
        </SpotlightCard>

        {more.map((p) => (
          <SpotlightCard as="li" key={p.id} className={card}>
            <div className="flex items-center justify-between gap-3">
              <span className={badge}>{typeLabel[p.type]}</span>
              <span className="text-sm tabular-nums text-mute">{p.year}</span>
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug text-ink">{p.title}</h3>
            <p className="mt-2 text-mute">{p.journal}</p>
            <div className="mt-auto pt-4">
              <ScholarLink pub={p} />
            </div>
          </SpotlightCard>
        ))}
      </ul>

      <div className="pt-2 text-center">
        <Link
          href="/research"
          className="group inline-flex h-11 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent active:scale-[0.98]"
        >
          See all {total} publications
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
