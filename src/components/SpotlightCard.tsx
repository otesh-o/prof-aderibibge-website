"use client";

import { useRef } from "react";

interface SpotlightCardProps {
  as?: "div" | "article" | "li";
  className?: string;
  children: React.ReactNode;
}

/**
 * A card with a soft accent glow that follows the cursor. The pointer position is written to CSS
 * variables, so hovering costs no React re-render. Touch devices simply get the resting state.
 */
export default function SpotlightCard({ as: Tag = "div", className = "", children }: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      onPointerMove={onPointerMove}
      className={`spotlight ${className}`}
    >
      {children}
    </Tag>
  );
}
