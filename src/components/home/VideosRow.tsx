"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import ScrollRow from "@/components/ScrollRow";
import LocalVideo from "@/components/LocalVideo";
import { lectureVideosData } from "@/data/teaching";

/** Placeholder id used while real recordings are pending; it must never be embedded or linked. */
const PLACEHOLDER_ID = "dQw4w9WgXcQ";

export default function VideosRow() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <ScrollRow
      id="lectures"
      eyebrow="Lectures"
      title="Lectures and master classes"
      intro="Recorded lectures and course sessions. Each video loads only when you press play."
      action={
        <Link
          href="/teaching"
          className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-4 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          See all lectures
          <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      {lectureVideosData.map((v) => {
        const ready = !!v.youtubeId && v.youtubeId !== PLACEHOLDER_ID;
        const active = playing === v.id;
        return (
          <li key={v.id} className="w-[82%] shrink-0 snap-start sm:w-[400px]">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-tile2 ring-1 ring-inset ring-line">
              {v.videoSrc ? (
                <LocalVideo src={v.videoSrc} title={v.title} duration={v.duration} label={v.courseCode} />
              ) : active ? (
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
                  className="group absolute inset-0 flex flex-col items-start justify-between p-4 text-left disabled:cursor-default"
                >
                  <span className={`text-sm font-medium ${ready ? "text-white" : "text-mute"}`}>{v.courseCode}</span>
                  <span className="flex w-full items-end justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 ${
                        ready ? "bg-accent text-on-accent group-hover:scale-110" : "bg-line text-mute"
                      }`}
                    >
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                    <span className={`text-sm ${ready ? "text-white" : "text-mute"}`}>{ready ? v.duration : "Recording to be added"}</span>
                  </span>
                </button>
              )}
            </div>
            <h3 className="mt-4 text-lg leading-snug text-ink">{v.title}</h3>
            <p className="mt-1 text-sm text-mute">
              {v.courseTitle} · {v.duration}
            </p>
          </li>
        );
      })}
      <li className="w-[70%] shrink-0 snap-start sm:w-[280px]">
        <Link
          href="/teaching"
          className="group flex aspect-video flex-col items-start justify-between rounded-2xl border border-dashed border-line p-5 transition-colors hover:border-accent"
        >
          <span className="text-sm text-mute">More recordings and course outlines</span>
          <span className="inline-flex items-center gap-2 font-medium text-ink group-hover:text-accent">
            See all lectures
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </li>
    </ScrollRow>
  );
}
