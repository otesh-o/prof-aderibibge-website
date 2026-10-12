"use client";

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { publicationsData, Publication } from "@/data/research";

const categories = [
  "All",
  "Journal Article",
  "Conference Proceeding",
  "Book Chapter",
  "Policy Report",
];

export default function PublicationsList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesCategory =
      selectedCategory === "All" || pub.type === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#161822] border border-white/10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-[#0F1117] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors"
          />
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPublications.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-[#161822] border border-white/10 text-sm text-gray-400">
            No publications found matching your search criteria.
          </div>
        ) : (
          filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="p-6 rounded-2xl bg-[#161822] border border-white/10 hover:border-white/20 transition-all space-y-3 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                  {pub.type} • {pub.year}
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  {pub.journal}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-white transition-colors leading-snug">
                {pub.title}
              </h3>

              <p className="text-xs text-gray-400 font-medium">
                {pub.authors}
              </p>

              {pub.abstract && (
                <p className="text-xs text-gray-300/80 leading-relaxed pt-1">
                  {pub.abstract}
                </p>
              )}

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <a
                  href={pub.scholarUrl || "https://scholar.google.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:underline font-medium transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View on Google Scholar</span>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
