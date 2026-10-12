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
    <div className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#20232E]">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Scholarship & Scientific Inquiries
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight">
              Research & Publications
            </h1>

            <p className="text-sm sm:text-base text-[#9FA6B2] leading-relaxed max-w-2xl">
              Investigating the intersection of strategic communication, artificial intelligence in African media,
              development paradigms, and media and information literacy.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={profileData.socialLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#1A1D27] hover:bg-[#202432] text-[#EDEFEF] font-mono text-xs border border-[#262A38] transition-colors"
            >
              <span>Google Scholar Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8A90A2]" />
            </a>
          </div>
        </div>

        {/* 2. Research Pillars */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Theoretical & Empirical Focus
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Active Research Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileData.researchInterests.map((interest, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 border border-[#20232E] bg-[#14161E] flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#71788E] block mb-2">
                    {interest.tag}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-[#EDEFEF] mb-2 leading-snug">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-[#8A92A6] leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Doctoral Dissertation Feature */}
        <section className="border border-[#20232E] bg-[#14161E]">
          <div className="p-6 sm:p-8 border-b border-[#20232E] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 bg-[#10121A]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#71788E] block">
                Doctoral Dissertation • Babcock University ({thesisData.year})
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#EDEFEF] mt-1">
                {thesisData.title}
              </h2>
            </div>
            <a
              href="/documents/Prof_Adebola_Aderibigbe_PhD_Thesis_Summary.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] font-mono text-xs border border-[#2F364C] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#8A90A2]" />
              <span>Download Thesis Summary</span>
            </a>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm text-[#9FA6B2] leading-relaxed">
              {thesisData.summary}
            </p>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#71788E] block">
                Key Contributions & Policy Frameworks:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {thesisData.keyContributions.map((contrib, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-[#20232E] bg-[#0D0E12] text-xs text-[#8A92A6] leading-relaxed"
                  >
                    {contrib}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Peer-Reviewed Works */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Peer-Reviewed Works
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Publications & Monographs
            </h2>
          </div>

          <PublicationsList />
        </div>

        {/* 5. Grants & Supervision Ledgers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Research Grants */}
          <div className="border border-[#20232E] bg-[#14161E]">
            <div className="p-5 sm:p-6 border-b border-[#20232E] bg-[#10121A]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#71788E] block">
                Funded Projects
              </span>
              <h3 className="font-serif text-lg font-normal text-[#EDEFEF] mt-0.5">
                Executed Research Grants
              </h3>
            </div>

            <div className="divide-y divide-[#1D202B]">
              {researchGrantsData.map((grant, idx) => (
                <div key={idx} className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#8A92A6]">
                      {grant.fundingBody}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044]">
                      {grant.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#EDEFEF]">
                    {grant.title}
                  </h4>
                  <p className="text-xs text-[#6F778A] leading-relaxed">
                    {grant.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Postgraduate Supervision */}
          <div className="border border-[#20232E] bg-[#14161E]">
            <div className="p-5 sm:p-6 border-b border-[#20232E] bg-[#10121A]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#71788E] block">
                Research Mentorship
              </span>
              <h3 className="font-serif text-lg font-normal text-[#EDEFEF] mt-0.5">
                Postgraduate Supervision
              </h3>
            </div>

            <div className="divide-y divide-[#1D202B]">
              {supervisionsData.map((sup, idx) => (
                <div key={idx} className="p-5 sm:p-6 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#EDEFEF]">
                      {sup.level} Research
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044]">
                      {sup.status}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm text-[#8A92A6]">
                    {sup.area}
                  </h4>
                  <span className="font-mono text-[11px] text-[#5A6072] block">
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
