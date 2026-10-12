import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { careerTimeline } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Biography & Why I Stayed | Prof. Adebola Aderibigbe",
  description:
    "Biography, career timeline, and 'Why I Stayed' position statement of Prof. Adebola Adewunmi Aderibigbe, Professor of Mass Communication at FUOYE.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Header & Executive Bio */}
        <div className="max-w-4xl space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Curriculum Vitae · Biography
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight">
            Adebola Adewunmi Aderibigbe
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-300 font-sans">
            Professor of Mass Communication, Federal University Oye-Ekiti
          </p>

          <p className="text-base text-neutral-400 leading-relaxed pt-2">
            Prof. Adebola Adewunmi Aderibigbe is an academic leader and researcher in the Department of Mass Communication,
            Faculty of Communication and Media Studies at the Federal University Oye-Ekiti (FUOYE), Nigeria.
            With eighteen years in higher education, his work focuses on strategic and development communication,
            media literacy, and the governance of emerging media technologies.
          </p>
        </div>

        {/* 2. Detailed Biography & Institutional Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-neutral-300 leading-relaxed text-base">
            <h2 className="font-serif text-2xl text-white pb-3 border-b border-[#20232E]">
              Academic Background & Scholarly Journey
            </h2>
            <p>
              Prof. Aderibigbe earned his Bachelor of Science (BSc) in Mass Communication from Bowen University,
              Iwo in 2006. He obtained his Master of Science (MSc) from the University of Lagos (UNILAG) in 2011,
              and his Doctor of Philosophy (PhD) in Communication and Media Studies from Babcock University in 2014.
            </p>
            <p>
              Over eighteen years in university pedagogy, he has developed and taught more than thirty courses,
              bridging classical communication theory with contemporary media practice. To foster personal character
              and public rhetoric among undergraduate scholars, he designed signature modules including{" "}
              <em>Public Speaking Essentials</em> and <em>Principles of Excellent Living</em>.
            </p>
            <p>
              His peer-reviewed scholarship has appeared in international journals including{" "}
              <em>Frontiers in Psychology</em>, <em>Communication and the Public</em>, and the{" "}
              <em>Journal of African Union Studies</em>. He has executed competitive research grants from the
              Ford Foundation and Bowen University.
            </p>

            <h2 className="font-serif text-2xl text-white pt-6 pb-3 border-b border-[#20232E]">
              Institutional Administration & National Quality Assurance
            </h2>
            <p>
              Prof. Aderibigbe serves as the Director of the Career Services Centre at FUOYE, leading employability
              partnerships and mentorship initiatives across all faculties. He is an elected Fellow of the Institute
              of Security of Nigeria (FISN), a Fellow of the Institute of Corporate Administration (FCIA), and a
              Charter Member of the Nigeria Association of Artificial Intelligence Practitioners.
            </p>
            <p>
              His statutory contributions to higher education quality include serving as External Examiner for postgraduate
              and undergraduate degrees across ten Nigerian universities, and chairing National Universities Commission (NUC)
              accreditation panels.
            </p>
          </div>

          {/* Quick CV & Office Ledger */}
          <div className="lg:col-span-4 bg-[#14161E] border border-[#20232E] rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-serif text-xl text-white">
                Academic Curriculum Vitae
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Complete record of publications, panels, and administrative service.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neutral-100 text-neutral-900 font-medium text-xs hover:bg-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>
              <span className="text-[11px] font-mono text-neutral-500 block text-center mt-2">
                Verified Copy · October 2026
              </span>
            </div>

            <div className="pt-6 border-t border-[#20232E] space-y-3 font-mono text-xs">
              <span className="text-neutral-400 uppercase tracking-widest text-[11px] block">
                Institutional Affiliation
              </span>
              <div className="text-neutral-300 space-y-1">
                <p>FUOYE · Mass Communication</p>
                <p>PhD Babcock (2014)</p>
                <p>MSc UNILAG (2011)</p>
                <p>BSc Bowen (2006)</p>
                <p>Africa Leadership Award (2026)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. The Core Manifesto: "Why I Stayed" */}
        <div id="why-i-stayed" className="scroll-mt-24 bg-[#111319] border border-[#20232E] rounded-xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#20232E]">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Position Statement
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                Why I Stayed in Nigeria
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              National Stewardship
            </span>
          </div>

          <div className="space-y-6 text-neutral-300 leading-relaxed text-base">
            <div className="space-y-2">
              <h3 className="font-serif text-lg text-white">1. The Pull</h3>
              <p className="text-neutral-400">
                The pull to relocate abroad has touched every university faculty in Nigeria. Foreign tenure, international
                endowments, and predictable infrastructure are compelling. Many colleagues chose that route, and their
                international contributions are recognized.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg text-white">2. The Conviction</h3>
              <p className="text-neutral-400">
                Yet, the conviction to stay rests on an enduring principle: a sovereign society cannot outsource the formation
                of its communicators. Communication underpins democratic resilience, policy adoption, and community development.
                If experienced academics abandon the lecture rooms, who anchors the standards for the next generation?
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg text-white">3. What We Built Here</h3>
              <p className="text-neutral-400">
                By remaining on ground, we established tangible institutional foundations:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm text-neutral-300">
                <li>More than thirty undergraduate and postgraduate courses taught over eighteen years.</li>
                <li>Postgraduate MSc and PhD scholars supervised into newsroom leadership and academia.</li>
                <li>Curricular programs including <em>Public Speaking Essentials</em> established.</li>
                <li>National Universities Commission accreditation panels chaired to safeguard degree standards.</li>
                <li>FUOYE Career Services Centre directed to prepare graduates for domestic and international employment.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#20232E]">
              <h3 className="font-serif text-lg text-white">4. To the Rising Generation</h3>
              <p className="font-serif italic text-xl text-neutral-200">
                “Nigeria will not be built by spectators. It is built by those who choose to plant their feet, roll up their sleeves,
                and impart excellence right here.”
              </p>
              <p className="text-xs font-mono text-neutral-500 pt-1">
                Prof. Adebola Adewunmi Aderibigbe
              </p>
            </div>
          </div>
        </div>

        {/* 4. Career Timeline (Ledger Format) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-[#20232E]">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Chronology
              </p>
              <h2 className="font-serif text-3xl text-white mt-1">
                Career Milestones (2006 to Present)
              </h2>
            </div>
            <Link
              href="/credentials"
              className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
            >
              <span>Credentials Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-[#20232E] border-y border-[#20232E]">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="sm:w-32 shrink-0 font-mono text-xs text-neutral-400">
                  {item.year}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {item.institution}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
                <div className="sm:w-32 shrink-0 sm:text-right font-mono text-[11px] text-neutral-500">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
