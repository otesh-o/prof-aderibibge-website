import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  const organizations = [
    {
      name: "Federal University Oye-Ekiti",
      role: "Faculty & CSC Directorate",
      abbr: "FUOYE",
      badgeClass: "bg-emerald-950/40 border-emerald-800/40 text-emerald-300",
      dot: "bg-emerald-500",
    },
    {
      name: "National Universities Commission",
      role: "Accreditation Panel Chair",
      abbr: "NUC",
      badgeClass: "bg-amber-950/40 border-amber-800/40 text-amber-300",
      dot: "bg-amber-500",
    },
    {
      name: "European Union / IPC",
      role: "Lead Consultant Facilitator",
      abbr: "EU · IPC",
      badgeClass: "bg-sky-950/40 border-sky-800/40 text-sky-300",
      dot: "bg-sky-500",
    },
    {
      name: "Ford Foundation",
      role: "Research Grant Lead",
      abbr: "FORD",
      badgeClass: "bg-indigo-950/40 border-indigo-800/40 text-indigo-300",
      dot: "bg-indigo-500",
    },
    {
      name: "Babcock University",
      role: "Doctor of Philosophy (PhD)",
      abbr: "BABCOCK",
      badgeClass: "bg-blue-950/40 border-blue-800/40 text-blue-300",
      dot: "bg-blue-500",
    },
    {
      name: "University of Lagos",
      role: "Master of Science (MSc)",
      abbr: "UNILAG",
      badgeClass: "bg-red-950/40 border-red-800/40 text-red-300",
      dot: "bg-red-500",
    },
    {
      name: "Bowen University",
      role: "BSc & Distinguished Alumni",
      abbr: "BOWEN",
      badgeClass: "bg-cyan-950/40 border-cyan-800/40 text-cyan-300",
      dot: "bg-cyan-500",
    },
  ];

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#1E212B] bg-[#0D0E12] overflow-hidden">
      
      {/* Editorial Gradient-Out Atmospheric Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/lecture-series-auditorium.jpg"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-[0.14] filter contrast-125 saturate-50"
        />
        {/* Multi-directional vignette gradients to softly feather the background out into dark gray */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/80 to-[#0D0E12]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12] via-transparent to-[#0D0E12]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_20%,_#0D0E12_80%)]" />
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

        {/* Prestigious Statutory Organizations & Institutional Trust Strip */}
        <div className="pt-8 border-t border-[#1E212B]/80">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                Statutory Appointments · Academic Institutions & Grant Partners
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                Federal · International · Academic Governance
              </span>
            </div>

            {/* Responsive Institutional Logos Ledger */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {organizations.map((org, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#20232E] bg-[#14161E]/90 hover:bg-[#1A1D27] hover:border-neutral-700 transition-colors p-3.5 flex flex-col justify-between space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${org.badgeClass}`}>
                      {org.abbr}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${org.dot} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white group-hover:text-neutral-100 line-clamp-1">
                      {org.name}
                    </h4>
                    <p className="text-[10px] font-mono text-neutral-400 line-clamp-1">
                      {org.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
