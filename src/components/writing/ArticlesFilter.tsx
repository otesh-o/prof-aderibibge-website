"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock, Calendar } from "lucide-react";
import { Article } from "@/data/writing";

interface Props {
  articles: Article[];
}

export default function ArticlesFilter({ articles }: Props) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tags = ["All", ...Array.from(new Set(articles.map((a) => a.topic)))];

  const filteredArticles = articles.filter((art) => {
    const matchesTag = selectedTag === "All" || art.topic === selectedTag;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredArticle = filteredArticles.find((a) => a.isFeatured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter((a) => a.slug !== featuredArticle?.slug);

  return (
    <div className="space-y-10">
      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-[#20232E] bg-[#14161E]">
        <div className="flex flex-wrap items-center gap-1">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                selectedTag === tag
                  ? "bg-[#1E2230] text-[#EDEFEF] border border-[#2F364C]"
                  : "text-[#7B8296] hover:text-[#EDEFEF] hover:bg-[#181B24]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-[#6E7588] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search essays & reflections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-sm bg-[#0D0E12] border border-[#20232E] text-xs text-[#EDEFEF] placeholder-[#5A6072] font-mono focus:outline-none focus:border-[#383E54] transition-colors"
          />
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="p-8 text-center border border-[#20232E] bg-[#14161E] text-xs font-mono text-[#7B8296]">
          No essays found matching your query.
        </div>
      ) : (
        <div className="space-y-10">
          {/* Featured Essay Banner */}
          {featuredArticle && (
            <div className="border border-[#20232E] bg-[#14161E] p-8 sm:p-10 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#71788E]">
                <span className="px-2 py-0.5 bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044] uppercase tracking-wider text-[10px]">
                  Featured Essay
                </span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] hover:text-white transition-colors leading-tight">
                <Link href={`/writing/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="font-serif text-base text-[#C5CAD6] italic">
                {featuredArticle.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed max-w-3xl">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/writing/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] text-xs font-mono border border-[#2F364C] transition-colors"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8A90A2]" />
                </Link>
              </div>
            </div>
          )}

          {/* Ledger of Other Articles */}
          {regularArticles.length > 0 && (
            <div className="border border-[#20232E] bg-[#14161E] divide-y divide-[#1D202B]">
              {regularArticles.map((art) => (
                <div
                  key={art.slug}
                  className="p-6 sm:p-7 flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-[#181B24] transition-colors"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-baseline gap-3 text-[11px] font-mono text-[#71788E]">
                      <span className="px-2 py-0.5 bg-[#0D0E12] border border-[#20232E] text-[#9AA1B2]">
                        {art.topic}
                      </span>
                      <span>{art.readTime}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#EDEFEF] leading-snug">
                      <Link href={`/writing/${art.slug}`} className="hover:underline">
                        {art.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="shrink-0 self-start md:self-baseline">
                    <Link
                      href={`/writing/${art.slug}`}
                      className="font-mono text-xs text-[#EDEFEF] hover:underline flex items-center gap-1.5"
                    >
                      <span>Read Essay</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8A90A2]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
