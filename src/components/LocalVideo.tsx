"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

interface LocalVideoProps {
  /** File in /public, for example "/videos/clip.mp4". */
  src: string;
  title: string;
  /** Small label over the first frame, bottom right. */
  duration: string;
  /** Small label over the first frame, top left. */
  label: string;
  /** Slightly smaller controls for the dense library grid. */
  compact?: boolean;
}

/** A video file we host ourselves: shows its first frame, plays on press, and downloads nothing heavy until then. */
export default function LocalVideo({ src, title, duration, label, compact }: LocalVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function start() {
    setStarted(true);
    const el = ref.current;
    if (!el) return;
    el.currentTime = 0;
    void el.play();
  }

  return (
    <>
      <video
        ref={ref}
        src={`${src}#t=0.1`}
        preload="metadata"
        controls={started}
        playsInline
        aria-label={title}
        className="absolute inset-0 h-full w-full bg-black object-contain"
      />
      {!started && (
        <button
          onClick={start}
          aria-label={`Play ${title}`}
          className={`group/play absolute inset-0 flex flex-col items-start justify-between text-left ${
            compact ? "p-3" : "p-4"
          }`}
          style={{ backgroundImage: "linear-gradient(to top, rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.1) 60%)" }}
        >
          <span className={`font-medium text-white ${compact ? "text-xs" : "text-sm"}`}>{label}</span>
          <span className="flex w-full items-end justify-between">
            <span
              className={`flex items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover/play:scale-110 ${
                compact ? "h-9 w-9" : "h-12 w-12"
              }`}
            >
              <Play className={`ml-0.5 fill-current ${compact ? "h-4 w-4" : "h-5 w-5"}`} />
            </span>
            <span className={`text-white ${compact ? "text-xs" : "text-sm"}`}>{duration}</span>
          </span>
        </button>
      )}
    </>
  );
}
