"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { lectureVideosData } from "@/data/teaching";

/** Placeholder id used while real recordings are pending; it must never be embedded or linked. */
const PLACEHOLDER_ID = "dQw4w9WgXcQ";

const card =
  "group flex flex-col rounded-xl bg-tile p-3 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50";

/** Every lecture as a card, filterable by course. Each video loads only when you press play. */
export default function LectureLibrary() {
  const [course, setCourse] = useState<string>("All");
  const [playing, setPlaying] = useState<string | null>(null);

  const courses = ["All", ...new Set(lectureVideosData.map((v) => v.courseCode))];
  const shown = course === "All" ? lectureVideosData : lectureVideosData.filter((v) => v.courseCode === course);

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 border-b border-line bg-bg/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
        <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
          {courses.map((c) => {
            const active = course === c;
            const n = c === "All" ? lectureVideosData.length : lectureVideosData.filter((v) => v.courseCode === c).length;
            return (
              <li key={c} className="shrink-0">
                <button
                  onClick={() => setCourse(c)}
                  aria-pressed={active}
                  className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-colors ${
                    active
                      ? "bg-accent font-medium text-on-accent"
                      : "border border-line text-mute hover:border-accent hover:text-ink"
                  }`}
                >
                  {c === "All" ? "All lectures" : c}
                  <span className="tabular-nums opacity-70">{n}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map((v) => {
          const ready = v.youtubeId !== PLACEHOLDER_ID;
          const active = playing === v.id;
          return (
            <SpotlightCard as="li" key={v.id} className={card}>
              <div className="relative aspect-video overflow-hidden rounded-lg bg-tile2 ring-1 ring-inset ring-line">
                {active ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                    title={v.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    onClick={() => ready && setPlaying(v.id)}
                    disabled={!ready}
                    aria-label={ready ? `Play ${v.title}` : `${v.title}: recording to be added`}
                    style={
                      ready
                        ? {
                            backgroundImage: `linear-gradient(to top, rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.1) 60%), url(https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : undefined
                    }
                    className="group/play absolute inset-0 flex flex-col items-start justify-between p-3 text-left disabled:cursor-default"
                  >
                    <span className={`text-xs ${ready ? "text-white" : "text-mute"}`}>{v.courseCode}</span>
                    <span className="flex w-full items-end justify-between">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 ${
                          ready ? "bg-accent text-on-accent group-hover/play:scale-110" : "bg-line text-mute"
                        }`}
                      >
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </span>
                      <span className={`text-xs ${ready ? "text-white" : "text-mute"}`}>{ready ? v.duration : "Recording to be added"}</span>
                    </span>
                  </button>
                )}
              </div>

              <div className="px-1 pb-1 pt-3">
                <p className="text-xs text-mute line-clamp-1">
                  {v.courseTitle} · {v.date}
                </p>
                <h3 className="mt-1 text-sm font-semibold leading-snug text-ink line-clamp-2">{v.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mute line-clamp-2">{v.description}</p>
              </div>
            </SpotlightCard>
          );
        })}
      </ul>
    </div>
  );
}
