"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import type { Article } from "@/data/writing";

const card =
  "group flex flex-col rounded-xl bg-tile p-5 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50";

/** Articles as cards with topic filters and search. The featured one spans two columns. */
export default function ArticlesFilter({ articles }: { articles: Article[] }) {
  const [topic, setTopic] = useState("All");
  const [query, setQuery] = useState("");

  const topics = useMemo(() => ["All", ...new Set(articles.map((a) => a.topic))], [articles]);
  const count = (t: string) => (t === "All" ? articles.length : articles.filter((a) => a.topic === t).length);

  const q = query.trim().toLowerCase();
  const shown = articles.filter(
    (a) =>
      (topic === "All" || a.topic === topic) &&
      (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q)),
  );

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 border-b border-line bg-bg/90 px-5 py-2.5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
            {topics.map((t) => {
              const active = topic === t;
              return (
                <li key={t} className="shrink-0">
                  <button
                    onClick={() => setTopic(t)}
                    aria-pressed={active}
                    className={`inline-flex h-9 items-center gap-2 rounded-full px-3.5 text-sm transition-colors ${
                      active
                        ? "bg-accent font-medium text-on-accent"
                        : "border border-line text-mute hover:border-accent hover:text-ink"
                    }`}
                  >
                    {t}
                    <span className="tabular-nums opacity-70">{count(t)}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <label className="relative block lg:w-64">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mute" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="h-9 w-full rounded-full border border-line bg-transparent pl-10 pr-4 text-sm text-ink placeholder:text-mute focus:border-accent focus:outline-none"
            />
          </label>
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="py-16 text-center text-mute">No articles match that search.</p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((a, i) => {
            const lead = i === 0 && topic === "All" && !q;
            return (
              <SpotlightCard as="li" key={a.slug} className={`${card} ${lead ? "sm:col-span-2 xl:col-span-2" : ""}`}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="inline-flex rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                    {a.topic}
                  </span>
                  <span className="text-xs text-mute">
                    {a.date} · {a.readTime}
                  </span>
                </div>

                <h3 className={`mt-3 font-semibold leading-snug text-ink ${lead ? "text-xl" : "text-base"}`}>
                  <Link href={`/writing/${a.slug}`} className="after:absolute after:inset-0">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute line-clamp-2">{a.subtitle}</p>
                {lead && <p className="mt-2 text-sm leading-relaxed text-mute line-clamp-3">{a.excerpt}</p>}

                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-accent">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </SpotlightCard>
            );
          })}
        </ul>
      )}
    </div>
  );
}
