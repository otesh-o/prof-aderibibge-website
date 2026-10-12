import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { publicationsData } from "@/data/research";

export default function CareerTimelineSection() {
  const booksAndChapters = publicationsData.filter(
    (p) => p.type === "Book Chapter" || p.type === "Policy Report"
  );

  return (
    <section className="py-20 lg:py-28 bg-[#0D0E12] border-t border-[#1E212B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-[#20232E] gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
              Academic Record & Scholarly Impact
            </h2>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
              Chronological Career Track · Books & Publications · Curriculum Architecture
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
              download
              className="text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-neutral-400" />
              <span>Full CV (PDF)</span>
            </a>
            <span className="text-neutral-600">·</span>
            <Link
              href="/credentials"
              className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Verified Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* TOP ROW: Experience Timeline (Left) & Comprehensive Bio (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Karpathy-Style Chronological Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="pb-3 border-b border-[#20232E] flex items-baseline justify-between">
              <h3 className="font-serif text-2xl text-white">
                Career Chronology & Education
              </h3>
              <span className="font-mono text-xs text-neutral-500">
                2002 to Present
              </span>
            </div>

            {/* Timeline Spine */}
            <div className="relative pl-0 sm:pl-2 space-y-8 before:hidden sm:before:block before:absolute before:left-[110px] before:top-3 before:bottom-3 before:w-px before:bg-[#20232E]">

              {/* Item 1: 2026 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2026</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-sky-950/30 border border-sky-800/50 flex items-center justify-center font-mono font-bold text-[11px] text-sky-200 text-center p-1 shadow-sm">
                  IPC/EU
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">Africa Leadership Award</strong> by Global Skills Hub (UK) in Accra. Lead Consultant Facilitator for <strong className="text-sky-300 font-medium">EU-SDGN II</strong> & International Press Council electoral training.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Accra, Ghana · IPC / European Union
                  </div>
                </div>
              </div>

              {/* Item 2: 2025 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2025</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-emerald-950/30 border border-emerald-800/50 flex items-center justify-center font-mono font-bold text-[11px] text-emerald-200 text-center p-1 shadow-sm">
                  NUC
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Appointed by the <strong className="text-white font-semibold">National Universities Commission (NUC)</strong> as Chairman of the Ad-hoc Accreditation Panel for Mass Communication at Chrisland University.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    National Universities Commission · Quality Assurance
                  </div>
                </div>
              </div>

              {/* Item 3: 2024 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2024</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-amber-500 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-amber-950/30 border border-amber-800/50 flex items-center justify-center font-mono font-bold text-[11px] text-amber-200 text-center p-1 shadow-sm">
                  PRIZE
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">Peter Okebukola Distinction Prize</strong> for distinguished contributions to higher education pedagogy and media research.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Higher Education Academic Distinction
                  </div>
                </div>
              </div>

              {/* Item 4: 2020 – pres */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2020 – pres</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-indigo-950/30 border border-indigo-800/50 flex items-center justify-center font-mono font-bold text-[11px] text-indigo-200 text-center p-1 shadow-sm">
                  FUOYE
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Appointed <strong className="text-white font-semibold">Director, Career Services Centre</strong> at FUOYE. Spearheading university-wide employability programs, internships, and corporate partnerships.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Federal University Oye-Ekiti · Directorate Office
                  </div>
                </div>
              </div>

              {/* Item 5: 2018 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2018</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-slate-900/60 border border-slate-700/60 flex items-center justify-center font-mono font-bold text-[11px] text-slate-200 text-center p-1 shadow-sm">
                  FISN
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Elected <strong className="text-white font-semibold">Fellow of the Institute of Security of Nigeria (FISN)</strong> for contributions at the intersection of strategic communication and national security.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Institute of Security of Nigeria (Chartered)
                  </div>
                </div>
              </div>

              {/* Item 6: 2011 – 2014 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2011 – 2014</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-blue-500 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-950/30 border border-blue-800/50 flex items-center justify-center font-mono font-bold text-[11px] text-blue-200 text-center p-1 shadow-sm">
                  BU
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Earned <strong className="text-white font-semibold">PhD in Communication and Media Studies</strong> at Babcock University. Dissertation modeled participatory development communication for socio-economic transformation.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Doctoral Dissertation · Babcock University
                  </div>
                </div>
              </div>

              {/* Item 7: 2008 – 2011 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2008 – 2011</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-red-500 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-red-950/20 border border-red-800/40 flex items-center justify-center font-mono font-bold text-[11px] text-red-200 text-center p-1 shadow-sm">
                  UNILAG
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Completed <strong className="text-white font-semibold">Master of Science (MSc) in Mass Communication</strong> at the University of Lagos (UNILAG), specializing in broadcasting governance and communication theory.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    University of Lagos · Department of Mass Communication
                  </div>
                </div>
              </div>

              {/* Item 8: 2007 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2007</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-green-500 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-green-950/30 border border-green-800/50 flex items-center justify-center font-mono font-bold text-[11px] text-green-200 text-center p-1 shadow-sm">
                  NYSC
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">NYSC Presidential Honours Award</strong> by The Presidency, Federal Republic of Nigeria for outstanding national youth service.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    The Presidency · Federal Republic of Nigeria
                  </div>
                </div>
              </div>

              {/* Item 9: 2002 – 2006 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2002 – 2006</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-blue-500 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-950/30 border border-blue-800/50 flex items-center justify-center font-mono font-bold text-[11px] text-blue-200 text-center p-1 shadow-sm">
                  BOWEN
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Graduated with top academic honours, earning a <strong className="text-white font-semibold">Bachelor of Science (BSc) in Mass Communication</strong> from Bowen University, Iwo.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Bowen University, Iwo · Bowen Distinguished Alumni (2017)
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Comprehensive Bio & Institutional Appointments (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Profile */}
            <div className="rounded-xl border border-[#20232E] bg-[#14161E] p-6 sm:p-8 space-y-5">
              <div className="pb-3 border-b border-[#20232E] flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-white">
                  Academic Profile
                </h3>
                <span className="font-mono text-[11px] text-neutral-500">
                  FUOYE Faculty
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-white font-medium">Prof. Adebola Adewunmi Aderibigbe</strong> is a Professor of Mass Communication in the Faculty of Communication and Media Studies at the Federal University Oye-Ekiti (FUOYE).
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed">
                With eighteen years in Nigerian higher education, he has pioneered modular pedagogy in African rhetoric and civic character, authored peer-reviewed works in top international journals (<em className="text-neutral-300">Frontiers in Psychology</em>, <em className="text-neutral-300">Routledge</em>), and served as External Examiner across ten Nigerian universities.
              </p>

              {/* Statutory Leadership Strip */}
              <div className="pt-4 border-t border-[#1D202B] space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Institutional Directorship:</span>
                  <span className="font-medium text-white">Director, Career Services Centre</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Professional Fellowships:</span>
                  <span className="font-medium text-white">FISN (Security) · FCIA (Corporate)</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Accreditation Leadership:</span>
                  <span className="font-medium text-white">NUC Panel Chairman</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Postgraduate Mentorship:</span>
                  <span className="font-medium text-white">MSc & PhD Candidates</span>
                </div>
              </div>
            </div>

            {/* Quick Credentials Summary Card */}
            <div className="rounded-xl border border-[#20232E] bg-[#14161E] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">
                Statutory Appointments
              </span>
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="rounded-lg p-3 bg-[#0D0E12] border border-[#20232E] space-y-1">
                  <span className="font-mono text-[10px] text-neutral-500 block">National Quality Assurance</span>
                  <p className="font-medium text-white">NUC Ad-hoc Accreditation Panel Chairman</p>
                  <p className="text-neutral-400 text-[11px]">Chrisland University Mass Communication Programme (2025)</p>
                </div>
                <div className="rounded-lg p-3 bg-[#0D0E12] border border-[#20232E] space-y-1">
                  <span className="font-mono text-[10px] text-neutral-500 block">International Development</span>
                  <p className="font-medium text-white">Lead Consultant Facilitator — EU-SDGN II</p>
                  <p className="text-neutral-400 text-[11px]">International Press Council & European Union Media Program (2026)</p>
                </div>
              </div>
            </div>

            {/* Books & Policy Monographs - DIRECTLY UNDER STATUTORY APPOINTMENTS */}
            <div className="rounded-xl border border-[#20232E] bg-[#14161E] p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#20232E] flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-neutral-400" />
                    <h3 className="font-serif text-xl text-white">
                      Books & Monographs
                    </h3>
                  </div>
                  <Link href="/research" className="font-mono text-[11px] text-neutral-400 hover:text-white">
                    Vault
                  </Link>
                </div>

                <div className="space-y-3.5">
                  {booksAndChapters.map((item, idx) => {
                    const coverImg =
                      item.id === "pub-7"
                        ? "/images/book-routledge-ethics.jpg"
                        : "/images/monograph-electoral-journalism.jpg";
                    return (
                      <div
                        key={idx}
                        className="flex gap-4 items-start p-3 rounded-lg bg-[#0D0E12] border border-[#20232E] hover:border-neutral-700 transition-colors group"
                      >
                        <div className="relative w-14 sm:w-16 aspect-[3/4] shrink-0 rounded overflow-hidden shadow-lg border border-[#20232E]/80">
                          <Image
                            src={coverImg}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="70px"
                          />
                        </div>
                        <div className="space-y-1 flex-1 min-w-0">
                          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                            <span className="text-neutral-300 font-medium truncate">{item.journal}</span>
                            <span className="shrink-0 ml-2">{item.year}</span>
                          </div>
                          <h4 className="text-xs font-serif font-medium text-white leading-snug line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
                            {item.abstract}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1D202B]">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-300 hover:text-white hover:underline"
                >
                  <span>View Routledge Chapter & Reports</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
