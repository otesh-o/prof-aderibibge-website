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
    <div className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#20232E]">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
              Official Academic Dossier
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight">
              Credentials & Honours
            </h1>

            <p className="text-sm sm:text-base text-[#9FA6B2] leading-relaxed max-w-2xl">
              Eighteen years of statutory academic appointments, doctoral qualification, fellowships of chartered institutes,
              and national accreditation panel appointments across Nigerian universities.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#1A1D27] hover:bg-[#202432] text-[#EDEFEF] font-mono text-xs border border-[#262A38] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#8A90A2]" />
              <span>Download Verified CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Academic Dossier Ledger */}
        <div className="space-y-12">
          {credentialsCategories.map((cat, idx) => (
            <section key={idx} className="border border-[#20232E] bg-[#14161E]">
              <div className="p-5 sm:p-6 border-b border-[#20232E] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 bg-[#10121A]">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#EDEFEF]">
                    {cat.title}
                  </h2>
                  <p className="text-xs text-[#71788E] mt-0.5 font-mono">
                    {cat.subtitle}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#5B6275]">
                  {cat.items.length} records verified
                </span>
              </div>

              <div className="divide-y divide-[#1D202B]">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-5 sm:p-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:bg-[#181B24] transition-colors"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-sm sm:text-base font-semibold text-[#EDEFEF] leading-snug">
                          {item.primary}
                        </h3>
                        {item.meta && (
                          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044]">
                            {item.meta}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#8A92A6]">
                        {item.secondary}
                      </p>
                      {item.description && (
                        <p className="text-xs text-[#6F778A] leading-relaxed pt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Statutory Consultation Callout */}
        <div className="border border-[#20232E] bg-[#14161E] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#71788E] block">
              Institutional Service
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#EDEFEF]">
              External Examination & NUC Accreditation
            </h3>
            <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed">
              Available to chair or participate in institutional accreditation exercises, doctoral external examination boards, and academic advisory councils.
            </p>
          </div>
          <Link
            href="/contact?reason=accreditation"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] text-xs font-mono border border-[#2F364C] transition-colors"
          >
            <span>Submit Institutional Request</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8A92A6]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
