import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  Landmark,
  Download,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { credentialsCategories } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Credentials & Honours | Prof. Adebola Aderibigbe",
  description:
    "Official qualifications, awards, professional fellowships, NUC accreditation panel appointments, and external examination roles of Prof. Adebola Aderibigbe.",
};

const iconMap = {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  Landmark,
};

export default function CredentialsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>Official Record</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
              Academic Credentials & Honours
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Eighteen years of statutory academic appointments, doctoral qualification, fellowships of chartered institutes,
              and national accreditation leadership across Nigerian universities.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified CV</span>
            </a>
          </div>
        </div>

        {/* Bento Grid of Credential Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentialsCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName as keyof typeof iconMap] || Award;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {cat.title}
                      </h2>
                      <p className="text-xs text-gray-400">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-4 rounded-2xl bg-[#0B0F17]/80 border border-white/5 space-y-1"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-semibold text-[#E5E7EB] leading-snug">
                            {item.primary}
                          </h3>
                          {item.meta && (
                            <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                              {item.meta}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-blue-300/90 font-medium">
                          {item.secondary}
                        </p>
                        {item.description && (
                          <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <span className="text-[11px] text-gray-400 flex items-center justify-between">
                    <span>Verified Academic Record</span>
                    <span className="text-blue-400 font-semibold">{cat.items.length} items</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#111827] via-[#1E293B] to-[#111827] border border-white/10 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Request External Examination or Accreditation Service
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Available to chair or participate in institutional accreditation exercises, external examination boards, and academic advisory panels.
            </p>
          </div>
          <Link
            href="/contact?reason=accreditation"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
          >
            <span>Submit Institutional Request</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
