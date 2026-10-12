import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareerTimelineSection() {
  return (
    <section className="py-20 bg-[#0D0E12] border-t border-[#1E212B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-[#20232E] gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
              Experience & Education
            </h2>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
              Academic Appointments · National Commissions · Formal Qualifications
            </p>
          </div>
          <Link
            href="/credentials"
            className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Verified Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Karpathy-Style Timeline Track */}
        <div className="relative pl-0 sm:pl-4 space-y-12 before:hidden sm:before:block before:absolute before:left-[118px] before:top-3 before:bottom-3 before:w-px before:bg-[#20232E]">

          {/* Item 1: 2026 - Africa Leadership & EU-SDGN II */}
          <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
              <span>2026</span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
            </div>
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
              IPC/EU
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Conferred the <strong className="text-white font-semibold">Africa Leadership Award</strong> by the Global Skills Hub (UK) at the 1st Africa Leadership Summit in Accra, Ghana. Appointed Lead Consultant Facilitator by the <a href="https://ipcng.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">International Press Council (IPC)</a> and the European Union (<strong className="text-white font-medium">EU-SDGN II</strong>) to conduct election reporting masterclasses for journalists ahead of the Ekiti State gubernatorial polls.
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
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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

          {/* Item 6: 2011 - 2014 - PhD Babcock University */}
          <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
              <span>2011 – 2014</span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[21px] z-10" />
            </div>
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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
            <div className="w-14 h-14 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-xs text-neutral-300 text-center p-1">
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
    </section>
  );
}
