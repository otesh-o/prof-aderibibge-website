import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Users, Landmark } from "lucide-react";
import { profileData } from "@/data/profile";

export default function WhyIStayedBand() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#0B0F17] via-[#111827]/70 to-[#0B0F17] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Statement & Narrative Excerpt */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>Positioning & National Conviction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why I Stayed: A Commitment to Building from Nigeria
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {profileData.whyIStayedExcerpt}
            </p>

            <div className="pt-2">
              <Link
                href="/about#why-i-stayed"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
              >
                <span>Read the full "Why I Stayed" piece</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Proof Points & Institutional Legacy Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
              <Users className="w-6 h-6 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Generations Mentored</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Supervising MSc and PhD scholars who now lead communication departments and newsrooms across West Africa.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
              <Landmark className="w-6 h-6 text-blue-400" />
              <h3 className="text-sm font-bold text-white">National Standards</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Chairing National Universities Commission (NUC) accreditation panels to set mass communication benchmarks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Institutional Service</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Director of the Career Services Centre at FUOYE, preparing thousands of graduates for the global workforce.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
              <Compass className="w-6 h-6 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Global Impact</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                International research grants executed and the Africa Leadership Award (2026) won while based on home soil.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
