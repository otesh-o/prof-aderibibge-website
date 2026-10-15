"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import type { SpeakingEvent } from "@/data/speaking";

type Filter = "All" | SpeakingEvent["role"];

const roleLabel: Record<SpeakingEvent["role"], string> = {
  "Keynote Speaker": "Keynote",
  "Lead Consultant Facilitator": "Facilitator",
  "Panel Chairman": "Panel chair",
  Panellist: "Panellist",
  "Guest Lecturer": "Guest lecture",
  "Award Recipient": "Award",
};

const card =
  "group flex flex-col rounded-xl bg-tile p-5 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50";

/** Every engagement as a card, newest first, filterable by the role he played. */
export default function FeaturedList({ events }: { events: SpeakingEvent[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const roles = [...new Set(events.map((e) => e.role))];
  const sorted = [...events].sort((a, b) => b.year - a.year);
  const shown = filter === "All" ? sorted : sorted.filter((e) => e.role === filter);
  const count = (f: Filter) => (f === "All" ? events.length : events.filter((e) => e.role === f).length);

  return (
    <div>
      {roles.length > 1 && (
        <div className="sticky top-16 z-30 -mx-5 border-b border-line bg-bg/90 px-5 py-2.5 backdrop-blur-md sm:-mx-8 sm:px-8">
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
            {(["All", ...roles] as Filter[]).map((f) => {
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
                    {f === "All" ? "All" : roleLabel[f]}
                    <span className="tabular-nums opacity-70">{count(f)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((e) => (
          <SpotlightCard as="li" key={e.id} className={card}>
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                {roleLabel[e.role]}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-mute">
                <CalendarDays className="h-3.5 w-3.5" />
                {e.date}
              </span>
            </div>

            <h3 className="mt-3 text-base font-semibold leading-snug text-ink">{e.event}</h3>
            <p className="mt-1.5 text-sm text-mute">{e.host}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-mute">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {e.location}
            </p>

            <p className="mt-3 border-t border-line pt-3 text-[13px] leading-relaxed text-mute">
              <span className="text-ink">Topic: </span>
              {e.topic}
            </p>

            {e.recordingUrl && (
              <a
                href={e.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Watch recording <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </SpotlightCard>
        ))}
      </ul>
    </div>
  );
}
