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
    <div className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#20232E]">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Public Discourse & Keynotes
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight">
              Speaking Engagements
            </h1>

            <p className="text-sm sm:text-base text-[#9FA6B2] leading-relaxed max-w-2xl">
              Invited keynotes, national electoral media workshops, and institutional addresses delivering
              authoritative insights on strategic communication, ethical AI, and national development.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact?reason=speaking"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] text-xs font-mono border border-[#2F364C] transition-colors"
            >
              <span>Invite Prof. Aderibigbe to Speak</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8A90A2]" />
            </Link>
          </div>
        </div>

        {/* 2. Topics I Speak On (Clean Ledger) */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Keynote Focus Areas
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Topics & Master Lecture Themes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-6 border border-[#20232E] bg-[#14161E] space-y-2.5"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#71788E] block">
                  Focus Area
                </span>
                <h3 className="font-serif text-lg font-normal text-[#EDEFEF] leading-snug">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#8A92A6] leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Engagements Ledger (Chronological) */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Record of Engagements
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Featured & Recent Engagements
            </h2>
          </div>

          <div className="border border-[#20232E] bg-[#14161E] divide-y divide-[#1D202B]">
            {allSpeakingEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 sm:p-7 flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-[#181B24] transition-colors"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044]">
                      {event.role}
                    </span>
                    <span className="font-mono text-xs text-[#71788E]">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#EDEFEF] leading-snug">
                    {event.event}
                  </h3>

                  <div className="p-3 bg-[#0D0E12] border border-[#20232E]">
                    <span className="font-mono text-[10px] uppercase text-[#71788E] block mb-1">
                      Theme / Address:
                    </span>
                    <p className="font-serif text-sm text-[#D8DCE6] italic">
                      “{event.topic}”
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8A92A6] pt-1">
                    <span className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#6E7588]" />
                      <span>{event.host}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#6E7588]" />
                      <span>{event.location}</span>
                    </span>
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-baseline">
                  {event.recordingUrl ? (
                    <a
                      href={event.recordingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#1A1D27] hover:bg-[#202432] text-[#EDEFEF] font-mono text-xs border border-[#262A38] transition-colors"
                    >
                      <Video className="w-3.5 h-3.5 text-[#8A90A2]" />
                      <span>Session Video</span>
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-[#5A6072]">
                      Documented Event
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Speaking Invitation Consultation Box */}
        <div className="border border-[#20232E] bg-[#14161E] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
            Institutional Keynote Inquiries
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF]">
            Invite Prof. Aderibigbe for Your Conference or Summit
          </h2>

          <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed max-w-xl mx-auto">
            Please include proposed dates, host organisation, audience composition, and the core theme when submitting your inquiry.
            The office will respond promptly with availability and speaker materials.
          </p>

          <div className="pt-2">
            <Link
              href="/contact?reason=speaking"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] font-mono text-xs border border-[#2F364C] transition-colors"
            >
              <span>Submit Speaking Invitation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8A90A2]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
