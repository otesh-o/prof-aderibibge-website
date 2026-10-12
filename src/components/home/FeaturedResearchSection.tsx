import Link from "next/link";
import { ArrowRight, ExternalLink, Download, BookOpen, Sparkles, FileText } from "lucide-react";
import { publicationsData, thesisData } from "@/data/research";
import { profileData } from "@/data/profile";

export default function FeaturedResearchSection() {
  const flagshipPaper = publicationsData[0]; // Frontiers in Psychology (2025)
  const journalArticles = publicationsData.filter(
    (p) => p.id !== flagshipPaper.id && p.type === "Journal Article"
  ).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#0D0E12] border-t border-[#1E212B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#20232E]">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
              Scholarly Inquiries · Peer-Reviewed Publications · Theoretical Frameworks
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight mt-1.5">
              Research & High-Impact Publications
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2 leading-relaxed">
              Eighteen years of empirical investigation spanning artificial intelligence adoption in African newsrooms,
              strategic state-citizen communication, and participatory development paradigms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono shrink-0">
            <a
              href={profileData.socialLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#14161E] hover:bg-[#1A1D27] text-neutral-200 border border-[#20232E] hover:border-neutral-500 transition-colors"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Publications Vault (15+ Works)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 1. Flagship Investigation Spotlight (2025 Study) */}
        <div className="rounded-xl border border-[#20232E] bg-[#14161E] p-6 sm:p-10 relative">
          <div className="space-y-6">
            
            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#20232E]">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-[#1B1E29] border border-[#262A38] text-neutral-200 font-semibold">
                  Flagship 2025 Investigation
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-300 font-medium">Frontiers in Psychology</span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-400">Peer-Reviewed Journal Article</span>
              </div>
              <span className="font-mono text-xs text-neutral-400">
                Published {flagshipPaper.year}
              </span>
            </div>

            {/* Title & Authors */}
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
                {flagshipPaper.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-neutral-400">
                Principal Investigator: <span className="text-neutral-200">{flagshipPaper.authors}</span>
              </p>
            </div>

            {/* Abstract & Empirical Framework */}
            <div className="space-y-3 max-w-4xl">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                {flagshipPaper.abstract}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                This study articulates the first indigenized ethical framework for generative AI deployment in West African journalism, analyzing workflow disruptions, newsroom autonomy, algorithmic gatekeeping, and copyright governance across national dailies.
              </p>
            </div>

            {/* Empirical Pillars Tags & Scholar Link */}
            <div className="pt-4 border-t border-[#1D202B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400">
                <span className="rounded-md px-2.5 py-1 bg-[#0D0E12] border border-[#20232E]">
                  Empirical Newsroom Audits
                </span>
                <span className="rounded-md px-2.5 py-1 bg-[#0D0E12] border border-[#20232E]">
                  Algorithmic Gatekeeping
                </span>
                <span className="rounded-md px-2.5 py-1 bg-[#0D0E12] border border-[#20232E]">
                  Global South Media Ethics
                </span>
              </div>

              <a
                href={flagshipPaper.scholarUrl || profileData.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <span>Access Citation on Google Scholar</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>

          </div>
        </div>

        {/* 2. Grid of Major Peer-Reviewed Journal Articles */}
        <div className="space-y-4">
          <div className="flex items-baseline justify-between pb-2 border-b border-[#20232E]">
            <h3 className="font-serif text-xl sm:text-2xl text-white">
              Selected Journal Publications
            </h3>
            <span className="text-xs font-mono text-neutral-500">
              International & Continental Indices
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journalArticles.map((pub) => (
              <div
                key={pub.id}
                className="rounded-xl border border-[#20232E] bg-[#14161E] p-6 sm:p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-200 font-semibold">{pub.journal}</span>
                    <span className="text-neutral-500">{pub.year}</span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-white leading-snug">
                    {pub.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-4">
                    {pub.abstract}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1D202B]">
                  <a
                    href={pub.scholarUrl || profileData.socialLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    <span>View Scholar Index</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Doctoral Dissertation & Theoretical Landmark Card */}
        <div className="rounded-xl border border-[#20232E] bg-[#14161E] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
                <span>Doctoral Dissertation • Babcock University ({thesisData.year})</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug">
                {thesisData.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {thesisData.summary}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400">
                <span className="rounded-md px-2.5 py-1 bg-[#0D0E12] border border-[#20232E]">
                  Formulated: Indigenized Development Communication Index (IDCI)
                </span>
                <span className="rounded-md px-2.5 py-1 bg-[#0D0E12] border border-[#20232E]">
                  Participatory Radio & Mobile Channels
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right space-y-3">
              <a
                href={thesisData.downloadUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1B1E29] hover:bg-[#232735] text-white font-mono text-xs border border-[#2B3040] hover:border-neutral-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-neutral-300" />
                <span>Download Thesis Summary (PDF)</span>
              </a>
              <p className="text-[11px] font-mono text-neutral-500">
                Verified doctoral dissertation dossier
              </p>
            </div>

          </div>
        </div>

        {/* 4. Scholarly Authority Ledger */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#20232E] text-xs font-mono">
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block">15+ Works</span>
            <span className="text-neutral-400 text-[11px]">Peer-Reviewed Publications</span>
          </div>
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block">10+ Universities</span>
            <span className="text-neutral-400 text-[11px]">External Examiner (PG)</span>
          </div>
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block">Routledge & Frontiers</span>
            <span className="text-neutral-400 text-[11px]">International Publishers</span>
          </div>
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block">NUC Panel Chair</span>
            <span className="text-neutral-400 text-[11px]">National Quality Assurance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
