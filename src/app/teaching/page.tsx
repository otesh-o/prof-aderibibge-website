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
    <div className="py-12 sm:py-20 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
              <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
              <span>Pedagogy & Curriculum</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
              Teaching & Lecture Vault
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Eighteen years of university instruction spanning over thirty undergraduate and postgraduate courses,
              featuring two flagship character and rhetoric modules created for African higher education.
            </p>
          </div>
        </div>

        {/* 1. Flagship Modules (Large Tiles) */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Signature Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Featured Modules Created by Prof. Aderibigbe
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Custom modules developed to bridge academic theory with practical leadership and oratory poise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredModulesData.map((module, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#161822] border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-gray-200 border border-white/10">
                      {module.code}
                    </span>
                    <span className="text-xs text-gray-400">
                      {module.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {module.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium">
                    {module.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Core Syllabus Pillars:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      {module.corePillars.map((pillar, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-gray-400 font-bold">•</span>
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Audience: {module.targetAudience}</span>
                  <Link
                    href="/mentorship"
                    className="text-blue-400 font-medium hover:underline flex items-center gap-1"
                  >
                    <span>Register interest</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. University Course Outlines & Syllabi */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Departmental Courses
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Active University Syllabi
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Outlines and reading lists for undergraduate and postgraduate courses at FUOYE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {universityCoursesData.map((course, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-200">
                      {course.code}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                      {course.credits} Credits
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {course.level} • {course.semester}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed pt-1">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-semibold uppercase text-gray-400">
                      Selected Topics:
                    </span>
                    <ul className="space-y-1 text-xs text-gray-400">
                      {course.topics.slice(0, 3).map((topic, tIdx) => (
                        <li key={tIdx} className="truncate">
                          - {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href={course.outlineDownloadUrl || "/documents/Prof_Adebola_Aderibigbe_CV.pdf"}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white text-xs font-medium hover:bg-white/10 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Course Outline (PDF)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Lecture Video Vault (YouTube Embeds) */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Multimedia Vault
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Recorded Lectures & Video Presentations
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Streaming-optimized for fast playback on mobile networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lectureVideosData.map((video) => (
              <div
                key={video.id}
                className="rounded-3xl bg-[#161822] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all space-y-4 group"
              >
                <div>
                  {/* Video Thumbnail Box */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0F1117] border border-white/10 flex items-center justify-center mb-4 group/play cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/15 group-hover/play:bg-blue-600 group-hover/play:border-transparent transition-all">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/80 text-gray-200 backdrop-blur-md">
                      {video.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-gray-300">
                      {video.courseCode}
                    </span>
                    <span className="text-[10px] text-gray-500">•</span>
                    <span className="text-[10px] text-gray-400">
                      {video.date}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed pt-1 line-clamp-3">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <a
                    href={`https://youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:underline font-medium"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Watch Full Lecture on YouTube</span>
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
