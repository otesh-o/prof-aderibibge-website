import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 lg:py-24 border-b border-[#1E212B] bg-[#0D0E12] overflow-hidden">
      
      {/* Blurred Editorial Atmospheric Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/lecture-series-auditorium.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.22] filter blur-[6px] scale-105 contrast-125 saturate-75"
        />
        {/* Multi-directional vignette gradients to softly feather the background out into dark gray */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/75 to-[#0D0E12]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12]/95 via-transparent to-[#0D0E12]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#0D0E12_85%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photography Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden bg-[#14161E] border border-[#20232E] shadow-2xl flex flex-col justify-end p-6 group">
              {/* Professor Portrait */}
              <Image
                src="/images/prof-aderibigbe.jpg"
                alt="Prof. Adebola Adewunmi Aderibigbe"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Subtle Atmospheric Gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/30 to-transparent pointer-events-none" />

              {/* Bottom Slate Overlay */}
              <div className="relative z-10 bg-[#14161E]/90 backdrop-blur-md border border-[#232733] p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {profileData.shortName}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono">
                      FUOYE · Babcock PhD (2014)
                    </p>
                  </div>
                  <span className="text-[11px] text-neutral-300 font-mono px-2 py-0.5 rounded bg-[#1F232F] border border-[#2A2F40]">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-100 text-neutral-900 font-medium text-xs hover:bg-white transition-colors"
              >
                <span>Contact Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#14161E] text-neutral-200 font-medium text-xs border border-[#232733] hover:border-neutral-500 hover:text-white transition-colors"
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
