import type { Metadata } from "next";
import { PenTool } from "lucide-react";
import ArticlesFilter from "@/components/writing/ArticlesFilter";
import { articlesData } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing & Reflections | Prof. Adebola Aderibigbe",
  description:
    "Essays, philosophical reflections, and commentary on generative AI, development communication, and higher education by Prof. Adebola Aderibigbe.",
};

export default function WritingPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20">
            <PenTool className="w-3.5 h-3.5" />
            <span>Public Intellectual Discourse</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
            Writing & Commentary
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Analytical essays, academic commentary, and personal reflections on media ethics,
            the impact of artificial intelligence in Africa, and the purpose of higher education.
          </p>
        </div>

        {/* Filter & Articles Listing */}
        <ArticlesFilter articles={articlesData} />

      </div>
    </div>
  );
}
