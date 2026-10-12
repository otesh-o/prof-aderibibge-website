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

        {/* 4. Karpathy-Style Chronological Experience Log */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-[#20232E]">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Experience & Education
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                Chronological Record
              </h2>
            </div>
            <Link
              href="/credentials"
              className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
            >
              <span>Verified Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Timeline Track */}
          <div className="relative pl-0 sm:pl-4 space-y-12 before:hidden sm:before:block before:absolute before:left-[118px] before:top-3 before:bottom-3 before:w-px before:bg-[#20232E]">

            {/* Item 1: 2026 - Africa Leadership & EU-SDGN II */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2026</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                IPC/EU
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Conferred the <strong className="text-white font-semibold">Africa Leadership Award</strong> by the Global Skills Hub (UK) at the 1st Africa Leadership Summit in Accra, Ghana.
                  Appointed Lead Consultant Facilitator by the <a href="https://ipcng.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">International Press Council (IPC)</a> and the European Union (<strong className="text-white font-medium">EU-SDGN II</strong>) to conduct election reporting masterclasses for journalists ahead of the Ekiti State gubernatorial polls.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  Global Skills Hub (UK) · International Press Council · European Union
                </div>
              </div>
            </div>

            {/* Item 2: 2025 - NUC Accreditation Chairmanship */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2025</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                NUC
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Appointed by the <strong className="text-white font-semibold">National Universities Commission (NUC)</strong> as Chairman of the Ad-hoc Accreditation Panel for Mass Communication at Chrisland University. Directed national quality assurance inspection of academic curricula, faculty qualifications, broadcast facilities, and departmental infrastructure.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  National Universities Commission · Quality Assurance Directorate
                </div>
              </div>
            </div>

            {/* Item 3: 2024 - Peter Okebukola Distinction Prize */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2024</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                PRIZE
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Conferred the <strong className="text-white font-semibold">Peter Okebukola Distinction Prize</strong> in recognition of distinguished scholarship, university pedagogy innovations, and sustained contributions to media education standards in Nigeria.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  Higher Education Distinction Honour
                </div>
              </div>
            </div>

            {/* Item 4: 2020 - Present - Director, Career Services Centre FUOYE */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2020 – pres</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                FUOYE
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Appointed <strong className="text-white font-semibold">Director, Career Services Centre</strong> at Federal University Oye-Ekiti (FUOYE). Pioneered university-wide career guidance systems, corporate transition internships, and industry partnerships across eight faculties.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  Federal University Oye-Ekiti · Directorate Office
                </div>
              </div>
            </div>

            {/* Item 5: 2018 - Fellow, Institute of Security of Nigeria */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2018</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                FISN
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Elected <strong className="text-white font-semibold">Fellow of the Institute of Security of Nigeria (FISN)</strong> for research and policy contributions at the nexus of strategic communication, national security discourse, and counter-disinformation.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  Institute of Security of Nigeria (Chartered)
                </div>
              </div>
            </div>

            {/* Item 6: 2014 - PhD Babcock University */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2011 – 2014</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                BU
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Completed <strong className="text-white font-semibold">Doctor of Philosophy (PhD) in Communication and Media Studies</strong> at <a href="https://babcock.edu.ng" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Babcock University</a>. Doctoral dissertation investigated strategic communication frameworks for development interventions, community engagement, and public sphere governance in Nigeria.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  Doctoral Dissertation · Babcock University, Ilishan-Remo
                </div>
              </div>
            </div>

            {/* Item 7: 2008 - 2011 - MSc University of Lagos */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2008 – 2011</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                UNILAG
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Earned <strong className="text-white font-semibold">Master of Science (MSc) in Mass Communication</strong> at the <a href="https://unilag.edu.ng" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">University of Lagos</a>. Advanced graduate coursework and thesis focused on media theory, broadcasting regulations, and public relations policy in West Africa.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  University of Lagos · Department of Mass Communication
                </div>
              </div>
            </div>

            {/* Item 8: 2007 - NYSC Presidential Honours Award */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2007</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                NYSC
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Conferred the <strong className="text-white font-semibold">NYSC Presidential Honours Award</strong> by The Presidency, Federal Republic of Nigeria. Conferred for exemplary national service, youth mobilization, and community development interventions.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  The Presidency · Federal Republic of Nigeria
                </div>
              </div>
            </div>

            {/* Item 9: 2002 - 2006 - BSc Bowen University */}
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                <span>2002 – 2006</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
              </div>
              <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-sm text-neutral-300">
                BOWEN
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Graduated with a <strong className="text-white font-semibold">Bachelor of Science (BSc) in Mass Communication</strong> from <a href="https://bowen.edu.ng" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Bowen University</a>, Iwo. Later conferred the Bowen Distinguished Alumni Award (2017) for exemplary academic trajectory.
                </p>
                <div className="text-xs font-mono text-neutral-400">
                  Bowen University, Iwo · Faculty of Social and Management Sciences
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
