import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Download,
  Sparkles,
  ExternalLink,
  Users,
} from "lucide-react";
import PublicationsList from "@/components/research/PublicationsList";
import { thesisData, researchGrantsData, supervisionsData } from "@/data/research";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research, Publications & Thesis | Prof. Adebola Aderibigbe",
  description:
    "Explore peer-reviewed publications, PhD thesis showcase, funded research grants, and supervision records of Prof. Adebola Adewunmi Aderibigbe.",
};

export default function ResearchPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-gray-400" />
              <span>Scholarship & Inquiry</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
              Research & Publications
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Investigating the intersection of strategic communication, artificial intelligence in African media,
              development paradigms, and media and information literacy.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={profileData.socialLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161822] border border-white/10 text-xs text-white hover:border-white/20 transition-colors"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Research Interests Bento Grid */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Active Research Interests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileData.researchInterests.map((interest, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all space-y-4"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/5 text-gray-300 border border-white/10 mb-3">
                    {interest.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Doctoral Thesis Showcase */}
        <div className="rounded-3xl bg-[#161822] border border-white/10 p-8 sm:p-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Doctoral Dissertation • Babcock University ({thesisData.year})
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {thesisData.title}
              </h2>
            </div>
            <a
              href="/documents/Prof_Adebola_Aderibigbe_PhD_Thesis_Summary.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 self-start sm:self-auto shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Thesis Summary</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {thesisData.summary}
          </p>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Key Contributions & Policy Frameworks:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {thesisData.keyContributions.map((contrib, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-xl bg-[#0F1117] border border-white/5 text-xs text-gray-300 leading-relaxed"
                >
                  {contrib}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Publications List Section */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Peer-Reviewed Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Publications & Monographs
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Filter by journal papers, conference proceedings, policy monographs, or book chapters.
            </p>
          </div>

          <PublicationsList />
        </div>

        {/* 5. Grants & Supervision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Research Grants */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Grants & Funded Projects</h3>
                <span className="text-xs text-gray-400">Executed Research Grants</span>
              </div>
            </div>

            <div className="space-y-4">
              {researchGrantsData.map((grant, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0F1117] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-200">
                      {grant.fundingBody}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                      {grant.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    {grant.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {grant.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Postgraduate Supervision */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Postgraduate Supervision</h3>
                <span className="text-xs text-gray-400">MSc & PhD Research Mentorship</span>
              </div>
            </div>

            <div className="space-y-4">
              {supervisionsData.map((sup, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0F1117] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-200">
                      {sup.level} Research
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {sup.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-white">
                    {sup.area}
                  </h4>
                  <span className="text-[11px] text-gray-500 block">
                    {sup.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
