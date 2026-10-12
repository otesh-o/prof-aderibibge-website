import Link from "next/link";
import { ArrowRight, BookOpen, Award, FileText, ExternalLink, Download } from "lucide-react";
import { publicationsData, thesisData, researchGrantsData } from "@/data/research";
import { featuredModulesData } from "@/data/teaching";

export default function CareerTimelineSection() {
  const booksAndChapters = publicationsData.filter(
    (p) => p.type === "Book Chapter" || p.type === "Policy Report"
  );
  const featuredJournalArticles = publicationsData.filter(
    (p) => p.type === "Journal Article"
  );

  return (
    <section className="py-20 lg:py-28 bg-[#0D0E12] border-t border-[#1E212B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
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

        {/* 2-Column Split: Experience Track on Left, Comprehensive Bio & Scholarly Achievements on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Karpathy-Style Chronological Experience (Spans 7 columns on lg) */}
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
            <div className="relative pl-0 sm:pl-2 space-y-10 before:hidden sm:before:block before:absolute before:left-[110px] before:top-3 before:bottom-3 before:w-px before:bg-[#20232E]">

              {/* Item 1: 2026 - Africa Leadership & EU-SDGN II */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2026</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  IPC/EU
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">Africa Leadership Award</strong> by Global Skills Hub (UK) in Accra. Lead Consultant Facilitator for <strong className="text-white font-medium">EU-SDGN II</strong> & International Press Council electoral training.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Accra, Ghana · IPC / European Union
                  </div>
                </div>
              </div>

              {/* Item 2: 2025 - NUC Accreditation Chairmanship */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2025</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  NUC
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Appointed by the <strong className="text-white font-semibold">National Universities Commission (NUC)</strong> as Chairman of the Ad-hoc Accreditation Panel for Mass Communication at Chrisland University.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    National Universities Commission · Quality Assurance
                  </div>
                </div>
              </div>

              {/* Item 3: 2024 - Peter Okebukola Distinction Prize */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2024</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  PRIZE
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">Peter Okebukola Distinction Prize</strong> for distinguished contributions to higher education pedagogy and media research.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Higher Education Academic Distinction
                  </div>
                </div>
              </div>

              {/* Item 4: 2020 - Present - Director, Career Services Centre FUOYE */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2020 – pres</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  FUOYE
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Appointed <strong className="text-white font-semibold">Director, Career Services Centre</strong> at FUOYE. Spearheading university-wide employability programs, internships, and corporate partnerships.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Federal University Oye-Ekiti · Directorate Office
                  </div>
                </div>
              </div>

              {/* Item 5: 2018 - Fellow, Institute of Security of Nigeria */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2018</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  FISN
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Elected <strong className="text-white font-semibold">Fellow of the Institute of Security of Nigeria (FISN)</strong> for contributions at the intersection of strategic communication and national security.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Institute of Security of Nigeria (Chartered)
                  </div>
                </div>
              </div>

              {/* Item 6: 2011 - 2014 - PhD Babcock University */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2011 – 2014</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  BU
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Earned <strong className="text-white font-semibold">PhD in Communication and Media Studies</strong> at Babcock University. Dissertation modeled participatory development communication for socio-economic transformation.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Doctoral Dissertation · Babcock University
                  </div>
                </div>
              </div>

              {/* Item 7: 2008 - 2011 - MSc University of Lagos */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2008 – 2011</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  UNILAG
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Completed <strong className="text-white font-semibold">Master of Science (MSc) in Mass Communication</strong> at the University of Lagos (UNILAG), specializing in broadcasting governance and communication theory.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    University of Lagos · Department of Mass Communication
                  </div>
                </div>
              </div>

              {/* Item 8: 2007 - NYSC Presidential Honours Award */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2007</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  NYSC
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">NYSC Presidential Honours Award</strong> by The Presidency, Federal Republic of Nigeria for outstanding national youth service.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-500">
                    The Presidency · Federal Republic of Nigeria
                  </div>
                </div>
              </div>

              {/* Item 9: 2002 - 2006 - BSc Bowen University */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 font-mono text-xs text-neutral-400 flex items-center sm:justify-end gap-2">
                  <span>2002 – 2006</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#0D0E12] translate-x-[17px] z-10" />
                </div>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#14161E] border border-[#20232E] flex items-center justify-center font-mono font-bold text-[11px] text-neutral-300 text-center p-1">
                  BOWEN
                </div>
                <div className="flex-1 space-y-1.5">
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

          {/* RIGHT COLUMN: Comprehensive Bio & Scholarly Achievements (Spans 5 columns on lg) */}
          <div className="lg:col-span-5 space-y-10">

            {/* Comprehensive Bio Dossier */}
            <div className="border border-[#20232E] bg-[#14161E] p-6 sm:p-8 space-y-4">
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
              <div className="pt-3 border-t border-[#1D202B] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Institutional Directorship:</span>
                  <span className="font-medium">Director, Career Services Centre</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Professional Fellowships:</span>
                  <span className="font-medium">FISN (Security) · FCIA (Corporate)</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Accreditation Service:</span>
                  <span className="font-medium">NUC Panel Chairman</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Postgraduate Supervision:</span>
                  <span className="font-medium">MSc & PhD Candidates</span>
                </div>
              </div>
            </div>

            {/* Books & Routledge Book Chapters */}
            <div className="border border-[#20232E] bg-[#14161E] p-6 sm:p-8 space-y-4">
              <div className="pb-3 border-b border-[#20232E] flex items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-neutral-400" />
                  <h3 className="font-serif text-xl text-white">
                    Books & Policy Monographs
                  </h3>
                </div>
                <Link href="/research" className="font-mono text-xs text-neutral-400 hover:text-white">
                  View All
                </Link>
              </div>

              <div className="divide-y divide-[#1D202B] space-y-4">
                {booksAndChapters.map((item, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-4 space-y-1.5" : "space-y-1.5"}>
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span className="text-neutral-300 font-medium">{item.journal}</span>
                      <span>{item.year}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-serif font-normal text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      {item.abstract}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Peer-Reviewed Journal Articles */}
            <div className="border border-[#20232E] bg-[#14161E] p-6 sm:p-8 space-y-4">
              <div className="pb-3 border-b border-[#20232E] flex items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neutral-400" />
                  <h3 className="font-serif text-xl text-white">
                    Selected Journal Papers
                  </h3>
                </div>
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="divide-y divide-[#1D202B] space-y-4">
                {featuredJournalArticles.slice(0, 3).map((pub, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-4 space-y-1.5" : "space-y-1.5"}>
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span className="text-neutral-300 font-medium">{pub.journal}</span>
                      <span>{pub.year}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-serif font-normal text-white leading-snug">
                      {pub.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
                      {pub.abstract}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#1D202B]">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-200 hover:underline"
                >
                  <span>Explore Complete Publications Vault</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              </div>
            </div>

            {/* Signature Curriculum Highlight */}
            <div className="border border-[#20232E] bg-[#14161E] p-6 sm:p-8 space-y-3">
              <div className="pb-3 border-b border-[#20232E] flex items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-neutral-400" />
                  <h3 className="font-serif text-xl text-white">
                    Signature Curriculum
                  </h3>
                </div>
                <Link href="/teaching" className="font-mono text-xs text-neutral-400 hover:text-white">
                  Syllabi
                </Link>
              </div>

              <div className="space-y-3">
                {featuredModulesData.map((m, idx) => (
                  <div key={idx} className="p-3 bg-[#0D0E12] border border-[#20232E] space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span className="font-semibold text-neutral-200">{m.code}</span>
                      <span>{m.duration}</span>
                    </div>
                    <h4 className="text-xs font-serif font-normal text-white">
                      {m.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 line-clamp-2">
                      {m.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
