import Link from "next/link";
import { ArrowRight, ExternalLink, Mail, Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-white/[0.06]">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photography Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E293B] via-[#111827] to-[#0B0F17] border border-white/10 shadow-2xl flex flex-col justify-end p-6 group">
              {/* Abstract / High-end Academic Portrait Silhouette Placeholder until photoshoot */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent">
                <div className="w-32 h-32 rounded-full bg-blue-600/20 border-2 border-blue-500/30 flex items-center justify-center mb-6 shadow-inner text-blue-400">
                  <GraduationCap className="w-16 h-16 stroke-1" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">
                    Portrait Photoshoot
                  </span>
                  <p className="text-xs text-gray-400">
                    High-resolution studio portrait will be displayed here
                  </p>
                </div>
              </div>

              {/* Bottom Card Overlay on Portrait */}
              <div className="relative z-10 glass-panel p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {profileData.shortName}
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      {profileData.university}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    PhD (2014)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Information & Positioning */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>{profileData.faculty}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#E5E7EB] leading-[1.1]">
                Prof. Adebola Adewunmi Aderibigbe
              </h1>

              <p className="text-lg sm:text-xl font-medium text-blue-400">
                {profileData.specialisation}
              </p>
            </div>

            {/* Positioning Statement Callout */}
            <div className="border-l-2 border-blue-500 pl-4 py-1">
              <p className="text-xl sm:text-2xl font-serif italic text-white/95 tracking-wide">
                “{profileData.positioningLine}”
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              {profileData.shortBio}
            </p>

            {/* Headline Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-y border-white/[0.08]">
              {profileData.heroStats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E5E7EB] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-gray-400 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons & Outbound links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
              >
                <span>Read my story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?reason=speaking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111827] text-[#E5E7EB] font-medium text-sm border border-white/10 hover:border-blue-500/50 hover:text-white transition-colors"
              >
                <span>Invite me to speak</span>
              </Link>

              {/* Scholar and LinkedIn Outbound Links */}
              <div className="flex items-center gap-2 sm:ml-auto">
                <a
                  href={profileData.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111827] text-gray-400 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-colors"
                  aria-label="Google Scholar"
                  title="Google Scholar Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socialLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111827] text-gray-400 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <Users className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
