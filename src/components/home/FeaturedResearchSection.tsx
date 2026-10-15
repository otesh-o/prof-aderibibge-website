import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Download, BookOpen } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CountUp from "@/components/CountUp";
import { publicationsData, thesisData } from "@/data/research";
import { profileData } from "@/data/profile";

export default function FeaturedResearchSection() {
  const flagshipPaper = publicationsData[0]; // Frontiers in Psychology (2025)

  return (
    <section className="tone-dark bg-bg text-ink">
      <div className="mx-auto max-w-[1400px] space-y-12 px-5 py-16 sm:px-8 lg:py-24">
        
        <SectionHeader
          eyebrow="Research"
          title="Research and publications"
          description="Empirical work on AI adoption in African newsrooms, strategic state-citizen communication and participatory development."
        >
          <a
            href={profileData.socialLinks.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
          >
            Google Scholar
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link href="/research" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
            All publications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionHeader>

        {/* 1. Flagship Investigation Spotlight (2025 Study) with Real Journal Publication Cover */}
        <div className="border-t border-line pt-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Publication Details */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-2 text-sm font-mono pb-3 border-b border-line">
                <span className="px-2.5 py-1 rounded-md bg-tile2 border border-line text-neutral-200 font-semibold">
                  Flagship 2025 Study
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-300 font-medium">Frontiers in Psychology</span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-400">Published {flagshipPaper.year}</span>
              </div>

              {/* Title & Authors */}
              <div className="space-y-2.5">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
                  {flagshipPaper.title}
                </h3>
                <p className="text-sm sm:text-sm font-mono text-neutral-400">
                  Principal Investigator: <span className="text-neutral-200 font-medium">{flagshipPaper.authors}</span>
                </p>
              </div>

              {/* Abstract & Empirical Framework */}
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {flagshipPaper.abstract}
                </p>
                <p className="text-sm sm:text-sm text-neutral-400 leading-relaxed">
                  Articulating an indigenized ethical framework for generative AI deployment in West African journalism, analyzing workflow disruptions, newsroom autonomy, and algorithmic gatekeeping across national dailies.
                </p>
              </div>

              {/* Empirical Pillars Tags & Scholar Link */}
              <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-sm font-mono text-neutral-400">
                  <span className="rounded-md px-2.5 py-1 bg-bg border border-line">
                    Newsroom Field Audits
                  </span>
                  <span className="rounded-md px-2.5 py-1 bg-bg border border-line">
                    Algorithmic Gatekeeping
                  </span>
                  <span className="rounded-md px-2.5 py-1 bg-bg border border-line">
                    AI Media Ethics
                  </span>
                </div>

                <a
                  href={flagshipPaper.scholarUrl || profileData.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  <span>Google Scholar Citation</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>

            </div>

            {/* Right Column: Real Publication Journal Cover */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[220px] sm:max-w-[250px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-line group bg-bg">
                <Image
                  src="/images/journal-frontiers-ai.jpg"
                  alt="Frontiers in Psychology - Algorithmic Media and Public Discourse in Africa"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 220px, 250px"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* 3. Doctoral Dissertation & Theoretical Landmark Card with Real Hardbound Book */}
        <div className="border-t border-line pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-sm font-mono text-neutral-400">
                <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
                <span>Doctoral Dissertation • Babcock University ({thesisData.year})</span>
              </div>
              <h3 className="text-xl sm:text-2xl text-white font-normal leading-snug">
                {thesisData.title}
              </h3>
              <p className="text-sm sm:text-sm text-neutral-300 leading-relaxed">
                {thesisData.summary}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-sm font-mono text-neutral-400">
                <span className="rounded-md px-2.5 py-1 bg-bg border border-line">
                  Formulated: Indigenized Development Communication Index (IDCI)
                </span>
                <span className="rounded-md px-2.5 py-1 bg-bg border border-line">
                  Participatory Radio & Mobile Channels
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={thesisData.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-tile2 hover:bg-tile2 text-white font-mono text-sm border border-line hover:border-neutral-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Download Thesis Summary (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Real Hardbound Thesis Book Mockup */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[200px] sm:max-w-[220px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-line group bg-bg">
                <Image
                  src="/images/phd-thesis-monograph.jpg"
                  alt="Doctoral Dissertation Monograph - Babcock University"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 200px, 220px"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* 4. Scholarly Authority Ledger */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-line text-sm font-mono">
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block"><CountUp value="15+" /> Works</span>
            <span className="text-neutral-400 text-sm">Peer-Reviewed Publications</span>
          </div>
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block"><CountUp value="10+" /> Universities</span>
            <span className="text-neutral-400 text-sm">External Examiner (PG)</span>
          </div>
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block">Routledge & Frontiers</span>
            <span className="text-neutral-400 text-sm">International Publishers</span>
          </div>
          <div>
            <span className="text-white font-semibold text-sm sm:text-base block">NUC Panel Chair</span>
            <span className="text-neutral-400 text-sm">National Quality Assurance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
