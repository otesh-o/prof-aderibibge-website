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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-[#20232E] bg-[#14161E]">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? "bg-[#1E2230] text-[#EDEFEF] border border-[#2F364C]"
                  : "text-[#7B8296] hover:text-[#EDEFEF] hover:bg-[#181B24]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-[#6E7588] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-sm bg-[#0D0E12] border border-[#20232E] text-xs text-[#EDEFEF] placeholder-[#5A6072] font-mono focus:outline-none focus:border-[#383E54] transition-colors"
          />
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-3">
        {filteredPublications.length === 0 ? (
          <div className="p-8 text-center border border-[#20232E] bg-[#14161E] text-xs font-mono text-[#7B8296]">
            No publications found matching your search criteria.
          </div>
        ) : (
          filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="p-6 border border-[#20232E] bg-[#14161E] hover:border-[#2C3142] transition-colors space-y-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-mono text-[11px] text-[#71788E] uppercase tracking-wider">
                  {pub.type} • {pub.year}
                </span>
                <span className="font-mono text-xs text-[#8A92A6]">
                  {pub.journal}
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-normal text-[#EDEFEF] leading-snug">
                {pub.title}
              </h3>

              <p className="font-mono text-xs text-[#6F778A]">
                {pub.authors}
              </p>

              {pub.abstract && (
                <p className="text-xs sm:text-sm text-[#9FA6B2] leading-relaxed pt-1">
                  {pub.abstract}
                </p>
              )}

              <div className="flex items-center gap-4 pt-3 border-t border-[#1D202B]">
                <a
                  href={pub.scholarUrl || "https://scholar.google.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#EDEFEF] hover:text-white flex items-center gap-1.5 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#6E7588]" />
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
