import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 lg:py-24 border-b border-[#1E212B] bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photography Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden bg-[#14161E] border border-[#20232E] shadow-xl flex flex-col justify-end p-6">
              {/* Clean Academic Portrait Canvas Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#111319]">
                <div className="w-24 h-24 rounded-full border border-[#2B303E] bg-[#171A23] flex items-center justify-center mb-4">
                  <span className="font-serif italic text-2xl text-neutral-400">AA</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Portrait Photoshoot
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Studio photography in progress
                  </p>
                </div>
              </div>

              {/* Bottom Slate Overlay */}
              <div className="relative z-10 bg-[#14161E] border border-[#232733] p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {profileData.shortName}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono">
                      FUOYE · Babcock PhD (2014)
                    </p>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    Director, CSC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero & Academic Identity */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                Department of Mass Communication · FUOYE
              </p>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
                Adebola Adewunmi Aderibigbe{" "}
                <span className="text-sm sm:text-lg lg:text-xl font-mono text-neutral-400 font-normal align-middle ml-2">
                  BSc, MSc, PhD
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 font-sans">
                Professor of Strategic and Development Communication
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
              Over eighteen years of academic leadership across mass communication, strategic policy, media literacy,
              and artificial intelligence ethics. Director of the Career Services Centre at Federal University Oye-Ekiti,
              mentoring postgraduate scholars and chairing national accreditation panels.
            </p>

            {/* Credential Strip (Replaces giant numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#20232E] text-xs font-mono">
              <div>
                <span className="text-neutral-200 font-semibold block">18+ Years</span>
                <span className="text-neutral-500">Higher Education</span>
              </div>
              <div>
                <span className="text-neutral-200 font-semibold block">30+ Courses</span>
                <span className="text-neutral-500">Taught & Created</span>
              </div>
              <div>
                <span className="text-neutral-200 font-semibold block">10+ Universities</span>
                <span className="text-neutral-500">External Examiner</span>
              </div>
              <div>
                <span className="text-neutral-200 font-semibold block">NUC Chair</span>
                <span className="text-neutral-500">Accreditation Panels</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-neutral-100 text-neutral-900 font-medium text-xs hover:bg-white transition-colors"
              >
                <span>Contact Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#14161E] text-neutral-200 font-medium text-xs border border-[#232733] hover:border-neutral-500 hover:text-white transition-colors"
              >
                <span>Download Verified CV</span>
              </a>

              {/* Scholar and LinkedIn */}
              <div className="flex items-center gap-3 sm:ml-auto text-xs font-mono text-neutral-400">
                <a
                  href={profileData.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>·</span>
                <a
                  href={profileData.socialLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
