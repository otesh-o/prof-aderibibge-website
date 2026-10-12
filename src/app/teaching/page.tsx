import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Download,
  Video,
  Play,
  ArrowRight,
} from "lucide-react";
import {
  featuredModulesData,
  universityCoursesData,
  lectureVideosData,
} from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching, Modules & Lectures | Prof. Adebola Aderibigbe",
  description:
    "Course outlines, custom modules (Public Speaking Essentials, Principles of Excellent Living), and lecture videos by Prof. Adebola Adewunmi Aderibigbe at FUOYE.",
};

export default function TeachingPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#20232E]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
            Pedagogy & Curriculum
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight">
            Teaching & Lecture Vault
          </h1>

          <p className="text-sm sm:text-base text-[#9FA6B2] leading-relaxed max-w-2xl">
            Eighteen years of university instruction across undergraduate and postgraduate tiers,
            featuring two flagship character and rhetoric modules developed for African higher education.
          </p>
        </div>

        {/* 1. Flagship Modules */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Signature Curriculum
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Modules Created by Prof. Aderibigbe
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredModulesData.map((module, idx) => (
              <div
                key={idx}
                className="border border-[#20232E] bg-[#14161E] p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-[#20232E] pb-3">
                    <span className="font-mono text-xs font-semibold text-[#EDEFEF]">
                      {module.code}
                    </span>
                    <span className="font-mono text-xs text-[#71788E]">
                      {module.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#EDEFEF]">
                    {module.title}
                  </h3>
                  <p className="font-mono text-xs text-[#8A92A6]">
                    {module.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#9FA6B2] leading-relaxed">
                    {module.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#1D202B]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#71788E] block">
                      Core Syllabus Pillars:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8A92A6]">
                      {module.corePillars.map((pillar, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#5A6072] font-mono">—</span>
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1D202B] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#71788E]">Audience: {module.targetAudience}</span>
                  <Link
                    href="/mentorship"
                    className="font-mono text-[#EDEFEF] hover:underline flex items-center gap-1.5"
                  >
                    <span>Register Interest</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8A90A2]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. University Course Outlines Ledger */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Departmental Courses
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Active University Syllabi
            </h2>
          </div>

          <div className="border border-[#20232E] bg-[#14161E] divide-y divide-[#1D202B]">
            {universityCoursesData.map((course, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-[#181B24] transition-colors"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-[#EDEFEF]">
                      {course.code}
                    </span>
                    <span className="font-mono text-[11px] text-[#71788E]">
                      {course.credits} Credits • {course.level} • {course.semester}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#EDEFEF]">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed">
                    {course.description}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono text-[#6F778A]">
                    {course.topics.slice(0, 3).map((topic, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-[#0D0E12] border border-[#20232E]">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-baseline">
                  <a
                    href={course.outlineDownloadUrl || "/documents/Prof_Adebola_Aderibigbe_CV.pdf"}
                    download
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#1A1D27] hover:bg-[#202432] text-[#EDEFEF] font-mono text-xs border border-[#262A38] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#8A90A2]" />
                    <span>Download Outline (PDF)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Recorded Lectures */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Recorded Lectures
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Lecture Presentations & Seminars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lectureVideosData.map((video) => (
              <div
                key={video.id}
                className="border border-[#20232E] bg-[#14161E] p-5 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="relative aspect-video bg-[#0D0E12] border border-[#20232E] flex items-center justify-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#1F2433] text-[#EDEFEF] flex items-center justify-center border border-[#2F364C]">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 font-mono text-[10px] bg-black text-[#EDEFEF]">
                      {video.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-[#71788E]">
                    <span>{video.courseCode}</span>
                    <span>•</span>
                    <span>{video.date}</span>
                  </div>

                  <h3 className="font-serif text-base font-normal text-[#EDEFEF] leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs text-[#8A92A6] leading-relaxed pt-1 line-clamp-3">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1D202B]">
                  <a
                    href={`https://youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#EDEFEF] hover:underline inline-flex items-center gap-1.5"
                  >
                    <Video className="w-3.5 h-3.5 text-[#8A90A2]" />
                    <span>Watch Lecture on YouTube</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
