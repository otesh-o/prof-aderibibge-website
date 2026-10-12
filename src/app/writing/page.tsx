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
    <div className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#20232E]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
            Public Intellectual Commentary
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight">
            Writing & Commentary
          </h1>

          <p className="text-sm sm:text-base text-[#9FA6B2] leading-relaxed max-w-2xl">
            Analytical essays, academic commentary, and personal reflections on media ethics,
            the trajectory of artificial intelligence in Africa, and the purpose of higher education.
          </p>
        </div>

        {/* Filter & Articles Listing */}
        <ArticlesFilter articles={articlesData} />

      </div>
    </div>
  );
}
