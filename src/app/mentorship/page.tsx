import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Video,
  FileText,
  Mail,
} from "lucide-react";
import { masterClassesData } from "@/data/mentorship";

export const metadata: Metadata = {
  title: "Mentorship & Master Classes | Prof. Adebola Aderibigbe",
  description:
    "Executive and student mentorship master classes in Public Speaking Essentials, Principles of Excellent Living, and Thesis Writing by Prof. Adebola Aderibigbe.",
};

export default function MentorshipPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#20232E]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
            Human Capital & Leadership Clinics
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight">
            Mentorship Masterclasses
          </h1>

          <p className="text-sm sm:text-base text-[#9FA6B2] leading-relaxed max-w-2xl">
            Structured leadership, public speaking, and academic writing masterclasses designed to empower
            emerging communication leaders, undergraduate students, and young scholars.
          </p>
        </div>

        {/* 2. Target Scholars Ledger */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Focus Groups
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Who These Masterclasses Are Designed For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-[#20232E] bg-[#14161E] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#71788E] block">
                Track 01
              </span>
              <h3 className="font-serif text-lg font-normal text-[#EDEFEF]">
                Undergraduate Scholars
              </h3>
              <p className="text-xs text-[#8A92A6] leading-relaxed">
                Equipping ambitious university students with executive public speaking, interview confidence, and career architecture as they prepare for the marketplace.
              </p>
            </div>

            <div className="p-6 border border-[#20232E] bg-[#14161E] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#71788E] block">
                Track 02
              </span>
              <h3 className="font-serif text-lg font-normal text-[#EDEFEF]">
                Rising Media Practitioners
              </h3>
              <p className="text-xs text-[#8A92A6] leading-relaxed">
                Guiding early-career journalists, PR consultants, and content strategists through ethical media practice, AI navigation, and leadership resilience.
              </p>
            </div>

            <div className="p-6 border border-[#20232E] bg-[#14161E] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#71788E] block">
                Track 03
              </span>
              <h3 className="font-serif text-lg font-normal text-[#EDEFEF]">
                Postgraduate Researchers
              </h3>
              <p className="text-xs text-[#8A92A6] leading-relaxed">
                Mentoring MSc and PhD candidates on theoretical modeling, empirical survey design, defense rhetoric, and publishing in reputable international journals.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Master Classes Offerings Ledger */}
        <div className="space-y-6">
          <div className="border-b border-[#20232E] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Curated Sessions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF] mt-1">
              Active & Archived Masterclasses
            </h2>
          </div>

          <div className="border border-[#20232E] bg-[#14161E] divide-y divide-[#1D202B]">
            {masterClassesData.map((mc) => (
              <div
                key={mc.id}
                className="p-6 sm:p-8 flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-[#181B24] transition-colors"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044]">
                      {mc.format}
                    </span>
                    <span className="font-mono text-xs text-[#71788E]">
                      {mc.date} • Audience: {mc.audience}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#EDEFEF]">
                    {mc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed">
                    {mc.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#71788E] block">
                      Curriculum Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8A92A6]">
                      {mc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#5A6072] font-mono">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-baseline">
                  {mc.status === "Watch Recording" ? (
                    <a
                      href={mc.recordingUrl || "https://youtube.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#1A1D27] hover:bg-[#202432] text-[#EDEFEF] font-mono text-xs border border-[#262A38] transition-colors"
                    >
                      <Video className="w-3.5 h-3.5 text-[#8A90A2]" />
                      <span>Watch Recording</span>
                    </a>
                  ) : (
                    <Link
                      href={`/contact?reason=mentorship&class=${encodeURIComponent(mc.title)}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] font-mono text-xs border border-[#2F364C] transition-colors"
                    >
                      <span>Register Interest</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8A90A2]" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Cohort Registration Form CTA */}
        <div className="border border-[#20232E] bg-[#14161E] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
            Direct Enrollment Inquiries
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDEFEF]">
            Join the Next Mentorship Cohort
          </h2>

          <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed max-w-xl mx-auto">
            Spaces for live intensives are limited to ensure direct critique and personalized coaching. Register early to receive enrollment materials.
          </p>

          <div className="pt-2">
            <Link
              href="/contact?reason=mentorship"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] font-mono text-xs border border-[#2F364C] transition-colors"
            >
              <span>Register Interest in Masterclasses</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8A90A2]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
