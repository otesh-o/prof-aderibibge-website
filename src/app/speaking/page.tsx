import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  Calendar,
  MapPin,
  Building,
  ArrowRight,
  Video,
} from "lucide-react";
import { allSpeakingEvents, speakingTopics } from "@/data/speaking";

export const metadata: Metadata = {
  title: "Keynotes & Speaking Engagements | Prof. Adebola Aderibigbe",
  description:
    "Keynote addresses, national media training facilitations, and panel discussions by Prof. Adebola Adewunmi Aderibigbe across Nigeria, Ghana, and Africa.",
};

export default function SpeakingPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
              <Mic className="w-3.5 h-3.5 text-gray-400" />
              <span>Public Discourse & Keynotes</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
              Speaking Engagements
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Invited keynotes, national electoral media workshops, and institutional addresses delivering
              authoritative insights on strategic communication, ethical AI, and national development.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact?reason=speaking"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
            >
              <span>Invite Prof. Aderibigbe to Speak</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2. Topics I Speak On */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Keynote Focus Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Topics & Master Lecture Themes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#161822] border border-white/10 space-y-2 hover:border-white/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 text-gray-300 flex items-center justify-center font-bold text-xs mb-3 border border-white/10">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">
                  {topic.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Engagements Bento & Tiles (Newest First) */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Record of Engagements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Featured & Recent Engagements
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Chronological log of international summits, federal training workshops, and university guest lectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSpeakingEvents.map((event) => (
              <div
                key={event.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all group bg-[#161822] border border-white/10 hover:border-white/20 ${
                  event.isFeatured ? "md:col-span-2 lg:col-span-2 border-white/15" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {event.role}
                    </span>
                    <span className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>{event.date}</span>
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-white group-hover:text-white transition-colors leading-snug ${
                      event.isFeatured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                    }`}
                  >
                    {event.event}
                  </h3>

                  <div className="p-4 rounded-2xl bg-[#0F1117] border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block">
                      Topic / Focus:
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-gray-200">
                      “{event.topic}”
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-gray-400" />
                      <span>{event.host}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{event.location}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Documented Academic Event</span>
                  {event.recordingUrl && (
                    <a
                      href={event.recordingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline flex items-center gap-1 font-medium"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Watch Session</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Speaking Invitation Card */}
        <div className="rounded-3xl bg-[#161822] border border-white/10 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center mx-auto">
            <Mic className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Invite Prof. Aderibigbe for Your Next Conference or Summit
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            Please include proposed dates, event location, audience composition, and the theme when submitting your inquiry.
            The office will respond promptly with availability and speaker materials.
          </p>

          <div>
            <Link
              href="/contact?reason=speaking"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
            >
              <span>Submit Speaking Invitation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
