"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Download, Search } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { publicationsData, thesisData, type Publication } from "@/data/research";
import { profileData } from "@/data/profile";

type Kind = Publication["type"] | "Thesis";
type Filter = "All" | Kind;

const filters: { id: Filter; label: string }[] = [
  { id: "All", label: "All" },
  { id: "Journal Article", label: "Journal articles" },
  { id: "Book Chapter", label: "Book chapters" },
  { id: "Policy Report", label: "Reports" },
  { id: "Conference Proceeding", label: "Conference papers" },
  { id: "Thesis", label: "Thesis" },
];

const kindLabel: Record<Kind, string> = {
  "Journal Article": "Article",
  "Book Chapter": "Chapter",
  "Policy Report": "Report",
  "Conference Proceeding": "Conference paper",
  Thesis: "Doctoral thesis",
};

interface Item {
  id: string;
  kind: Kind;
  year: number;
  title: string;
  venue: string;
  authors?: string;
  abstract?: string;
  href?: string;
}

const card =
  "group flex flex-col rounded-xl bg-tile p-4 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50";

/**
 * The full research library: every publication and the thesis as cards, with a sticky bar to
 * filter by type and year or search by title and venue.
 */
export default function PublicationsList({ thesisAvailable }: { thesisAvailable: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [year, setYear] = useState<string>("all");
  const [query, setQuery] = useState("");

  const items: Item[] = useMemo(
    () => [
      {
        id: "thesis",
        kind: "Thesis",
        year: thesisData.year,
        title: thesisData.title,
        venue: `${thesisData.degree}, ${thesisData.institution}`,
        abstract: thesisData.summary,
        href: thesisAvailable ? thesisData.downloadUrl : undefined,
      },
      ...publicationsData.map<Item>((p) => ({
        id: p.id,
        kind: p.type,
        year: p.year,
        title: p.title,
        venue: p.journal,
        authors: p.authors,
        abstract: p.abstract,
        href: p.scholarUrl || profileData.socialLinks.googleScholar,
      })),
    ],
    [thesisAvailable],
  );

  const years = useMemo(() => [...new Set(items.map((i) => i.year))].sort((a, b) => b - a), [items]);
  const count = (id: Filter) => (id === "All" ? items.length : items.filter((i) => i.kind === id).length);

  const q = query.trim().toLowerCase();
  const shown = items
    .filter(
      (i) =>
        (filter === "All" || i.kind === filter) &&
        (year === "all" || String(i.year) === year) &&
        (!q || i.title.toLowerCase().includes(q) || i.venue.toLowerCase().includes(q) || (i.abstract ?? "").toLowerCase().includes(q)),
    )
    .sort((a, b) => b.year - a.year);

  return (
    <div>
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 -mx-5 border-b border-line bg-bg/90 px-5 py-2.5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
            {filters
              .filter((f) => count(f.id) > 0)
              .map((f) => {
                const active = filter === f.id;
                return (
                  <li key={f.id} className="shrink-0">
                    <button
                      onClick={() => setFilter(f.id)}
                      aria-pressed={active}
                      className={`inline-flex h-9 items-center gap-2 rounded-full px-3.5 text-sm transition-colors ${
                        active
                          ? "bg-accent font-medium text-on-accent"
                          : "border border-line text-mute hover:border-accent hover:text-ink"
                      }`}
                    >
                      {f.label}
                      <span className="tabular-nums opacity-70">{count(f.id)}</span>
                    </button>
                  </li>
                );
              })}
          </ul>

          <div className="flex gap-3">
            <label className="shrink-0">
              <span className="sr-only">Year</span>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="h-9 rounded-full border border-line bg-transparent px-3.5 text-sm text-ink focus:border-accent focus:outline-none"
              >
                <option value="all">All years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
            <label className="relative block min-w-0 flex-1 lg:w-64 lg:flex-none">
              <span className="sr-only">Search publications</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mute" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title or journal"
                className="h-9 w-full rounded-full border border-line bg-transparent pl-10 pr-4 text-sm text-ink placeholder:text-mute focus:border-accent focus:outline-none"
              />
            </label>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-mute" aria-live="polite">
        Showing {shown.length} of {items.length}
      </p>

      {shown.length === 0 ? (
        <p className="py-20 text-center text-mute">Nothing matches those filters.</p>
      ) : (
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((i) => {
            const isThesis = i.kind === "Thesis";
            return (
              <SpotlightCard
                as="li"
                key={i.id}
                className={`${card} ${isThesis ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                    {kindLabel[i.kind]}
                  </span>
                  <span className="text-xs tabular-nums text-mute">{i.year}</span>
                </div>

                <h3 className="mt-3 text-sm font-semibold leading-snug text-ink line-clamp-3">{i.title}</h3>
                <p className="mt-1.5 text-[13px] text-mute line-clamp-1">{i.venue}</p>
                {i.authors && <p className="mt-0.5 text-xs text-mute line-clamp-1">{i.authors}</p>}
                {i.abstract && (
                  <p className="mt-2.5 text-[13px] leading-relaxed text-mute line-clamp-3">{i.abstract}</p>
                )}

                {isThesis && (
                  <ol className="mt-3 space-y-1.5 border-t border-line pt-3">
                    {thesisData.keyContributions.map((c, n) => (
                      <li key={c} className="flex gap-3 text-[13px] leading-relaxed text-mute">
                        <span className="font-medium tabular-nums text-accent">0{n + 1}</span>
                        {c}
                      </li>
                    ))}
                  </ol>
                )}

                <div className="mt-auto pt-3 text-sm">
                  {isThesis ? (
                    i.href ? (
                      <a
                        href={i.href}
                        download
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                      >
                        <Download className="h-4 w-4" />
                        Download summary (PDF)
                      </a>
                    ) : (
                      <span className="text-sm text-mute">Summary PDF to be added</span>
                    )
                  ) : (
                    <a
                      href={i.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      Google Scholar <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </ul>
      )}
    </div>
  );
}
