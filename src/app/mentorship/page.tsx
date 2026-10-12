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
    <div className="py-12 sm:py-20 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Header */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
            <Users className="w-3.5 h-3.5 text-gray-400" />
            <span>Human Capital & Youth Mentorship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
            Mentorship Master Classes
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Structured leadership, public speaking, and academic writing masterclasses designed to empower
            emerging communication leaders, undergraduate students, and young professionals.
          </p>
        </div>

        {/* 2. Philosophy & Target Audience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#161822] border border-white/10 space-y-3">
            <div className="p-3 rounded-2xl bg-white/5 text-gray-300 w-fit border border-white/10">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Undergraduate Scholars</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Equipping ambitious university students with executive public speaking, interview confidence, and career architecture as they prepare for the marketplace.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#161822] border border-white/10 space-y-3">
            <div className="p-3 rounded-2xl bg-white/5 text-gray-300 w-fit border border-white/10">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Rising Media Practitioners</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Guiding young journalists, PR consultants, and content strategists through ethical media practice, AI navigation, and leadership resilience.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#161822] border border-white/10 space-y-3">
            <div className="p-3 rounded-2xl bg-white/5 text-gray-300 w-fit border border-white/10">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Postgraduate Researchers</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Mentoring MSc and PhD candidates on theoretical modeling, empirical survey design, defense rhetoric, and publishing in reputable international journals.
            </p>
          </div>
        </div>

        {/* 3. Master Classes Offerings */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Curated Sessions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Upcoming & Archived Master Classes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {masterClassesData.map((mc) => (
              <div
                key={mc.id}
                className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {mc.format}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {mc.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug">
                    {mc.title}
                  </h3>

                  <div className="text-xs text-gray-300 font-medium">
                    Audience: {mc.audience}
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed pt-1">
                    {mc.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Deliverables & Outcomes:
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-400">
                      {mc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  {mc.status === "Watch Recording" ? (
                    <a
                      href={mc.recordingUrl || "https://youtube.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white text-xs font-medium hover:bg-white/10 transition-colors"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Watch Recording</span>
                    </a>
                  ) : (
                    <Link
                      href={`/contact?reason=mentorship&class=${encodeURIComponent(mc.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                    >
                      <span>Register Interest</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Cohort Registration Form CTA */}
        <div className="rounded-3xl bg-[#161822] border border-white/10 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Join the Next Mentorship Cohort
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Spaces for live intensives are limited to ensure direct critique and personalized coaching. Register early to receive enrollment details.
          </p>
          <div>
            <Link
              href="/contact?reason=mentorship"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Register Interest in Masterclasses</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
