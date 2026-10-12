"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, BookOpen, GraduationCap, Mic, FileText, ArrowRight, User } from "lucide-react";
import { publicationsData } from "@/data/research";
import { universityCoursesData, featuredModulesData } from "@/data/teaching";
import { allSpeakingEvents } from "@/data/speaking";
import { articlesData } from "@/data/writing";

interface SearchResult {
  title: string;
  category: "Page" | "Publication" | "Course" | "Speaking" | "Article";
  url: string;
  subtitle?: string;
}

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const allItems: SearchResult[] = [
    { title: "Home", category: "Page", url: "/", subtitle: "Main overview & positioning" },
    { title: "About & Biography", category: "Page", url: "/about", subtitle: "Life journey & Why I Stayed" },
    { title: "Why I Stayed in Nigeria", category: "Page", url: "/about#why-i-stayed", subtitle: "Personal conviction manifesto" },
    { title: "Credentials & Honours", category: "Page", url: "/credentials", subtitle: "Awards, fellowships & qualifications" },
    { title: "Research & Publications", category: "Page", url: "/research", subtitle: "Peer-reviewed research agenda" },
    { title: "Teaching & Syllabi", category: "Page", url: "/teaching", subtitle: "Course outlines & lecture videos" },
    { title: "Mentorship Masterclasses", category: "Page", url: "/mentorship", subtitle: "Public Speaking & life skills clinics" },
    { title: "Speaking & Keynotes", category: "Page", url: "/speaking", subtitle: "Summits, workshops & invited talks" },
    { title: "Writing & Commentary", category: "Page", url: "/writing", subtitle: "Essays & thought leadership" },
    { title: "Contact Office", category: "Page", url: "/contact", subtitle: "Inquiries & advisory requests" },

    ...publicationsData.map((p) => ({
      title: p.title,
      category: "Publication" as const,
      url: "/research",
      subtitle: `${p.journal} (${p.year})`,
    })),

    ...universityCoursesData.map((c) => ({
      title: `${c.code}: ${c.title}`,
      category: "Course" as const,
      url: "/teaching",
      subtitle: `${c.level} • ${c.semester}`,
    })),

    ...featuredModulesData.map((m) => ({
      title: `${m.code}: ${m.title}`,
      category: "Course" as const,
      url: "/teaching",
      subtitle: m.subtitle,
    })),

    ...allSpeakingEvents.map((s) => ({
      title: s.event,
      category: "Speaking" as const,
      url: "/speaking",
      subtitle: `${s.role} • ${s.location} (${s.year})`,
    })),

    ...articlesData.map((a) => ({
      title: a.title,
      category: "Article" as const,
      url: `/writing/${a.slug}`,
      subtitle: `${a.topic} • ${a.readTime}`,
    })),
  ];

  const results = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle?.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 8);

  const getCategoryIcon = (category: SearchResult["category"]) => {
    switch (category) {
      case "Publication":
        return <BookOpen className="w-4 h-4 text-gray-400" />;
      case "Course":
        return <GraduationCap className="w-4 h-4 text-gray-400" />;
      case "Speaking":
        return <Mic className="w-4 h-4 text-gray-400" />;
      case "Article":
        return <FileText className="w-4 h-4 text-gray-400" />;
      default:
        return <User className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-4 sm:p-6 pt-20"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#14161E] border border-[#20232E] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center px-4 sm:px-5 py-3.5 border-b border-[#20232E] gap-3 bg-[#10121A]">
          <Search className="w-4 h-4 text-[#71788E]" />
          <input
            autoFocus
            type="text"
            placeholder="Search publications, courses, events & essays..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm text-[#EDEFEF] placeholder-[#5A6072] font-mono focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#71788E] hover:text-[#EDEFEF]"
            aria-label="Close search modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#1D202B]">
          {results.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[#71788E]">
              No matching records found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                onClick={onClose}
                className="flex items-center justify-between p-3.5 hover:bg-[#181B24] transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0 pr-4">
                  <div className="p-1.5 bg-[#0D0E12] border border-[#20232E] shrink-0 text-[#8A90A2]">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-serif font-normal text-[#EDEFEF] group-hover:text-white transition-colors truncate">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-[11px] font-mono text-[#71788E] truncate">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044]">
                    {item.category}
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#5A6072] group-hover:text-[#EDEFEF] transition-colors" />
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 border-t border-[#20232E] bg-[#0D0E12] flex items-center justify-between text-[10px] font-mono text-[#5A6072]">
          <span>Press ESC to close</span>
          <span>adebolaaderibigbe.com</span>
        </div>
      </div>
    </div>
  );
}
