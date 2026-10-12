import Link from "next/link";
import {
  Mic,
  Video,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  PenTool,
  ArrowRight,
  Sparkles,
  Play,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function BentoGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Overview & Contributions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#E5E7EB] mt-1">
              Academic & Professional Highlights
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Direct access to keynote records, curriculum innovations, research agendas, and public mentorship classes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* TILE 1: Large Featured "Speaker at" (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5 text-gray-300">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                    <Mic className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Keynote & Speaking Engagements
                  </span>
                </div>
                <Link
                  href="/speaking"
                  className="text-xs font-medium text-gray-400 group-hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>All Events</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Featured Keynotes & National Facilitations
              </h3>

              <div className="space-y-4">
                {profileData.speakingHighlights.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0F1117] border border-white/5 hover:border-white/10 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                          {item.year}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {item.role}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.event}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.host} • {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span>Have an upcoming summit or academic panel?</span>
              <Link
                href="/speaking"
                className="text-blue-400 font-medium hover:underline flex items-center gap-1"
              >
                <span>Request Speaker Pack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* TILE 2: Wide Video Feature / Lecture Preview */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Featured Lecture
                </span>
              </div>

              {/* Video Thumbnail Embed Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0F1117] border border-white/10 flex items-center justify-center mb-5 group/video cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/15 group-hover/video:bg-blue-600 group-hover/video:border-transparent transition-all">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/80 text-gray-300 backdrop-blur-md">
                    28 mins • YouTube Embed
                  </span>
                </div>
              </div>

              <h4 className="text-base font-bold text-white mb-2 leading-snug">
                Strategic Communication in African Governance
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Lecture series excerpt exploring communication paradigms for public trust and institutional transparency.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 mt-4">
              <Link
                href="/teaching"
                className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Browse course lecture vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* TILE 3: Research Pillars & Agendas */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Research Pillars
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-4">
                Investigating Media, AI & Society
              </h3>

              <div className="space-y-3">
                {profileData.researchInterests.map((interest, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0F1117] border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#E5E7EB]">
                        {interest.title}
                      </span>
                      <span className="text-[10px] font-medium text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {interest.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 line-clamp-2">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 mt-4">
              <Link
                href="/research"
                className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>View publications & thesis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* TILE 4: Teaching & Module Innovations */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Teaching & Curriculum
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-4">
                Modules Built for Impact
              </h3>

              <div className="space-y-3">
                {profileData.courses.map((course, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0F1117] border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-gray-200">
                        {course.code}
                      </span>
                      <p className="text-xs font-medium text-gray-300">
                        {course.title}
                      </p>
                    </div>
                    {course.isCustomModule && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                        Custom
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 mt-4">
              <Link
                href="/teaching"
                className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Download course outlines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* TILE 5: Credentials & Honours */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Honours & Leadership
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-4">
                National & International Recognition
              </h3>

              <div className="space-y-3">
                {profileData.awards.slice(0, 3).map((award, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#0F1117] border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {award.title}
                      </span>
                      <span className="text-[10px] text-gray-400 font-semibold">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400">
                      {award.organization}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 mt-4">
              <Link
                href="/credentials"
                className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Full credentials & fellowships</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* TILE 6: Mentorship Master Classes */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Mentorship Hub
                </span>
              </div>

              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-gray-300 border border-white/10 mb-2">
                Master Class Series
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Public Speaking Essentials
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Structured mentorship masterclasses empowering undergraduate scholars and rising communication professionals with rhetoric, poise, and ethical media presence.
              </p>
            </div>

            <div>
              <Link
                href="/mentorship"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* TILE 7: Latest Writing & Thought Leadership */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <PenTool className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Latest Commentary
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-semibold text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {profileData.latestWriting[0].topic} • {profileData.latestWriting[0].readTime}
                </span>
                <h4 className="text-base font-bold text-white leading-snug">
                  {profileData.latestWriting[0].title}
                </h4>
                <p className="text-xs text-gray-400">
                  Published {profileData.latestWriting[0].date}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 mt-4">
              <Link
                href="/writing"
                className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Read all essays & thoughts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* TILE 8: Direct Contact & Advisory */}
          <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Academic Consultations
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Collaborate & Invite
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Available for external examination, keynote addresses, accreditation panels, and media development advisory.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 text-white text-xs font-medium hover:bg-white/5 transition-colors"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
