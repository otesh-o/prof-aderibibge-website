import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function WhyIStayedBand() {
  return (
    <section className="py-20 sm:py-28 bg-[#111319] border-y border-[#20232E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Manifesto Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Personal Conviction · Position Paper
            </p>

            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Why I Stayed in Nigeria
            </h2>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-neutral-200 leading-relaxed">
              “The pull to leave touches every university department. But building this country requires communicators trained right here, with global excellence and local commitment.”
            </blockquote>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
              {profileData.whyIStayedExcerpt}
            </p>

            <div className="pt-2">
              <Link
                href="/about#why-i-stayed"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-100 text-neutral-900 font-medium text-xs hover:bg-white transition-colors"
              >
                <span>Read the Complete Statement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Proof of Institutional Impact (No decorative icon boxes) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#20232E] border border-[#20232E] rounded-xl overflow-hidden">
            <div className="p-6 bg-[#14161E] space-y-1">
              <span className="text-xs font-mono text-neutral-400 block">Postgraduate Scholars</span>
              <h3 className="text-sm font-semibold text-white">MSc & PhD Supervision</h3>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                Mentoring graduates who now lead communication departments and editorial desks across West Africa.
              </p>
            </div>

            <div className="p-6 bg-[#14161E] space-y-1">
              <span className="text-xs font-mono text-neutral-400 block">Quality Assurance</span>
              <h3 className="text-sm font-semibold text-white">National Standards</h3>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                Chairing National Universities Commission (NUC) accreditation panels to benchmark communication pedagogy.
              </p>
            </div>

            <div className="p-6 bg-[#14161E] space-y-1">
              <span className="text-xs font-mono text-neutral-400 block">Institutional Office</span>
              <h3 className="text-sm font-semibold text-white">Career Services Director</h3>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                Directing professional skills transition and university partnerships at Federal University Oye-Ekiti.
              </p>
            </div>

            <div className="p-6 bg-[#14161E] space-y-1">
              <span className="text-xs font-mono text-neutral-400 block">International Standing</span>
              <h3 className="text-sm font-semibold text-white">Global Recognition</h3>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                Africa Leadership Award (Accra, 2026) and Ford Foundation research grants executed while anchored in Nigeria.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
