"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock, Calendar, Tag } from "lucide-react";
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
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#111827] border border-white/10">
        <div className="flex flex-wrap items-center gap-1.5">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedTag === tag
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles & reflections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-[#0B0F17] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-[#111827] border border-white/10 text-sm text-gray-400">
          No articles found matching your query.
        </div>
      ) : (
        <div className="space-y-10">
          {/* Featured Large Tile */}
          {featuredArticle && (
            <div className="rounded-3xl bg-gradient-to-br from-[#1E293B]/80 via-[#111827] to-[#0B0F17] border border-blue-500/30 p-8 sm:p-12 hover:border-blue-400 transition-all group">
              <div className="max-w-4xl space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Featured Analysis
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-blue-400 transition-colors leading-tight">
                  <Link href={`/writing/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-base sm:text-lg text-blue-300/90 font-medium">
                  {featuredArticle.subtitle}
                </p>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-1">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/writing/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other Articles */}
          {regularArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((art) => (
                <div
                  key={art.slug}
                  className="rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                        {art.topic}
                      </span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      <Link href={`/writing/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-gray-300/80 leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-gray-500">{art.date}</span>
                    <Link
                      href={`/writing/${art.slug}`}
                      className="text-blue-400 font-medium hover:underline flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
