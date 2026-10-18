"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, GraduationCap, Mic, FileText, Compass } from "lucide-react";
import { publicationsData } from "@/data/research";
import { universityCoursesData, featuredModulesData, lectureVideosData } from "@/data/teaching";
import { allSpeakingEvents } from "@/data/speaking";
import { articlesData } from "@/data/writing";

type Category = "Page" | "Research" | "Course" | "Featured" | "Article";

interface Entry {
  title: string;
  category: Category;
  url: string;
  subtitle?: string;
}

const icons: Record<Category, typeof Search> = {
  Page: Compass,
  Research: BookOpen,
  Course: GraduationCap,
  Featured: Mic,
  Article: FileText,
};

function buildIndex(): Entry[] {
  return [
    { title: "Home", category: "Page", url: "/", subtitle: "Overview" },
    { title: "About and his story", category: "Page", url: "/about", subtitle: "Biography, why he stayed, timeline" },
    { title: "Why I stayed in Nigeria", category: "Page", url: "/about#why-i-stayed", subtitle: "His position" },
    { title: "Research and publications", category: "Page", url: "/research", subtitle: "Articles, chapters, reports, thesis" },
    { title: "Lectures and teaching", category: "Page", url: "/teaching", subtitle: "Lecture videos, modules, course outlines" },
    { title: "Master classes", category: "Page", url: "/teaching#master-classes", subtitle: "Register interest" },
    { title: "Featured", category: "Page", url: "/featured", subtitle: "Keynotes, panels and appearances" },
    { title: "Gallery", category: "Page", url: "/gallery", subtitle: "Photographs: portraits, lectures, events" },
    { title: "Personal articles", category: "Page", url: "/writing", subtitle: "Essays and reflections" },
    { title: "Contact", category: "Page", url: "/contact", subtitle: "Invitations, collaboration, media" },

    ...publicationsData.map<Entry>((p) => ({
      title: p.title,
      category: "Research",
      url: "/research",
      subtitle: `${p.journal} · ${p.year}`,
    })),
    ...universityCoursesData.map<Entry>((c) => ({
      title: `${c.code}: ${c.title}`,
      category: "Course",
      url: "/teaching#courses",
      subtitle: `${c.level} · ${c.semester}`,
    })),
    ...lectureVideosData.map<Entry>((v) => ({
      title: v.title,
      category: "Course",
      url: "/teaching#lectures",
      subtitle: `Lecture · ${v.courseTitle}`,
    })),
    ...featuredModulesData.map<Entry>((m) => ({
      title: m.title,
      category: "Course",
      url: "/teaching#modules",
      subtitle: "Module created by Prof. Aderibigbe",
    })),
    ...allSpeakingEvents
      .filter((e) => e.confirmed !== false)
      .map<Entry>((e) => ({
        title: e.event,
        category: "Featured",
        url: "/featured",
        subtitle: `${e.role} · ${e.location} · ${e.year}`,
      })),
    ...articlesData.map<Entry>((a) => ({
      title: a.title,
      category: "Article",
      url: `/writing/${a.slug}`,
      subtitle: `${a.topic} · ${a.readTime}`,
    })),
  ];
}

/**
 * A plain search bar for the header. Results drop down under it as you type; arrow keys and
 * Enter work, Escape closes it, and Ctrl/Cmd+K or "/" jumps to it from anywhere.
 */
export default function SiteSearch({ onActiveChange }: { onActiveChange?: (open: boolean) => void }) {
  const router = useRouter();
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(0);

  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .map((e) => {
        const title = e.title.toLowerCase();
        const hay = `${title} ${e.subtitle?.toLowerCase() ?? ""} ${e.category.toLowerCase()}`;
        if (!terms.every((t) => hay.includes(t))) return null;
        const inTitle = terms.every((t) => title.includes(t));
        return { e, score: (inTitle ? 2 : 0) + (title.startsWith(terms[0]) ? 1 : 0) };
      })
      .filter((r): r is { e: Entry; score: number } => r !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.e);
  }, [index, query]);

  const show = open && query.trim().length > 0;

  useEffect(() => {
    onActiveChange?.(show);
  }, [show, onActiveChange]);

  // Ctrl/Cmd+K or "/" focuses the bar.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target as HTMLElement)?.tagName ?? "");
      if (((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") || (e.key === "/" && !typing)) {
        e.preventDefault();
        input.current?.focus();
        input.current?.select();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside closes the list.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const go = (entry: Entry) => {
    setOpen(false);
    setQuery("");
    input.current?.blur();
    router.push(entry.url);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (query) setQuery("");
      setOpen(false);
      input.current?.blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && results[cursor]) {
      e.preventDefault();
      go(results[cursor]);
    }
  };

  return (
    <div ref={root} className="relative" role="search">
      <label className="relative block">
        <span className="sr-only">Search the site</span>
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mute" />
        <input
          ref={input}
          type="text"
          inputMode="search"
          autoComplete="off"
          value={query}
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
            setCursor(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={show}
          aria-controls="site-search-results"
          aria-autocomplete="list"
          className="h-10 w-36 rounded-full border border-line bg-transparent pl-10 pr-9 text-sm text-ink placeholder:text-mute transition-[width,border-color] duration-300 focus:w-52 focus:border-accent focus:outline-none sm:w-44 sm:focus:w-64"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              input.current?.focus();
            }}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-mute transition-colors hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </label>

      {show && (
        <div
          id="site-search-results"
          role="listbox"
          className="absolute right-0 top-full z-[60] mt-2 w-[min(92vw,26rem)] overflow-hidden rounded-xl border border-line bg-tile shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
        >
          {results.length === 0 ? (
            <p className="px-4 py-5 text-sm text-mute">Nothing found for “{query.trim()}”.</p>
          ) : (
            <ul className="max-h-[60vh] overflow-y-auto py-1">
              {results.map((r, i) => {
                const Icon = icons[r.category];
                const active = i === cursor;
                return (
                  <li key={`${r.url}-${r.title}`} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onMouseEnter={() => setCursor(i)}
                      onClick={() => go(r)}
                      className={`flex w-full items-start gap-3 px-4 py-2.5 text-left transition-colors ${
                        active ? "bg-line" : ""
                      }`}
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-mute" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-ink">{r.title}</span>
                        {r.subtitle && <span className="block truncate text-xs text-mute">{r.subtitle}</span>}
                      </span>
                      <span className="shrink-0 pt-0.5 text-xs text-mute">{r.category}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
