import Link from "next/link";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

export default function BentoGrid() {
  return (
    <section className="py-20 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-6 border-b border-[#20232E] gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
              Academic & Professional Highlights
            </h2>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
              Keynotes · Curriculum · Research Agendas · Public Discourse
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Full Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Architectural Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* CELL 1: Speaker at — Editorial Ledger Table (Spans 8 columns on lg) */}
          <div className="lg:col-span-8 bg-[#14161E] border border-[#20232E] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between pb-4 mb-4 border-b border-[#20232E]">
                <h3 className="font-serif text-xl sm:text-2xl text-white">
                  Speaker at
                </h3>
                <Link
                  href="/speaking"
                  className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  <span>View All Speaking Engagements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Clean Editorial Ledger Rows (No nested cards) */}
              <div className="divide-y divide-[#20232E]">
                {profileData.speakingHighlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white">
                        {item.event}
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {item.host} · {item.location}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <span className="text-xs font-mono text-neutral-300 block">
                        {item.role}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#20232E] flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px]">Keynote, chair and facilitation invitations</span>
              <Link
                href="/contact?reason=speaking"
                className="text-neutral-200 hover:text-white font-medium flex items-center gap-1"
              >
                <span>Invite to Speak</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* CELL 2: Featured Lecture Video (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 bg-[#14161E] border border-[#20232E] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[#20232E]">
                <h3 className="font-serif text-xl text-white">
                  Featured Lecture
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  MAC 805 · Postgraduate Seminar
                </span>
              </div>

              {/* Stark Media Container */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0A0C10] border border-[#20232E] flex items-center justify-center mb-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-transparent transition-colors">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/80 text-neutral-300">
                  28m
                </span>
              </div>

              <h4 className="text-sm font-semibold text-white leading-snug">
                Strategic Communication in African Governance
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Frameworks for public trust, voice, and administrative accountability across Sub-Saharan institutions.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#20232E]">
              <Link
                href="/teaching"
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
              >
                <span>Open Lecture Vault</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* CELL 3: Research Agenda (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 bg-[#14161E] border border-[#20232E] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[#20232E]">
                <h3 className="font-serif text-xl text-white">
                  Research Pillars
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  Primary Scholarly Inquiries
                </span>
              </div>

              <ul className="divide-y divide-[#20232E]">
                {profileData.researchInterests.map((interest, idx) => (
                  <li key={idx} className="py-3 space-y-1">
                    <span className="text-xs font-semibold text-neutral-200 block">
                      {interest.title}
                    </span>
                    <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
                      {interest.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-[#20232E]">
              <Link
                href="/research"
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
              >
                <span>Publications & PhD Thesis</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* CELL 4: Signature Modules Created (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 bg-[#14161E] border border-[#20232E] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[#20232E]">
                <h3 className="font-serif text-xl text-white">
                  Curriculum Innovations
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  Signature Modules
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-white">
                      Public Speaking Essentials
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">PSE 101</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Rhetorical structure, vocal stamina, and executive delivery for rising scholars and professionals.
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-[#20232E]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-white">
                      Principles of Excellent Living
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">PEL 201</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Character architecture, ethical decision-making, and life mastery in higher education.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#20232E]">
              <Link
                href="/teaching"
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
              >
                <span>Course Syllabi & Outlines</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* CELL 5: Honours & Distinctions (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 bg-[#14161E] border border-[#20232E] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[#20232E]">
                <h3 className="font-serif text-xl text-white">
                  Honours & Leadership
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  Recognitions
                </span>
              </div>

              <ul className="divide-y divide-[#20232E]">
                {profileData.awards.slice(0, 3).map((award, idx) => (
                  <li key={idx} className="py-2.5 flex items-baseline justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {award.title}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        {award.organization}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 shrink-0">
                      {award.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-[#20232E]">
              <Link
                href="/credentials"
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
              >
                <span>Fellowships & Accreditation</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
