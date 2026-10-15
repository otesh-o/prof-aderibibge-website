import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { existsSync } from "node:fs";
import path from "node:path";
import { thesisData } from "@/data/research";

export default function CareerTimelineSection() {
  // Only offer the download when the file is actually in /public.
  const thesisAvailable = existsSync(path.join(process.cwd(), "public", thesisData.downloadUrl));

  return (
    <section id="experience">
      <div className="mx-auto max-w-[1400px] space-y-12 px-5 py-16 sm:px-8 lg:py-24">
        
        <SectionHeader
          eyebrow="Experience"
          title="Academic record and career"
          description="Appointments, qualifications, honours and national service, from 2002 to the present."
        >
          <a
            href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
            download
            className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <Link href="/about#timeline" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
            All credentials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionHeader>

        {/* TOP ROW: Experience Timeline (Left) & Comprehensive Bio (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Karpathy-Style Chronological Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Timeline Spine */}
            <div className="relative pl-0 sm:pl-2 space-y-8 before:hidden sm:before:block before:absolute before:left-[110px] before:top-3 before:bottom-3 before:w-px before:bg-line">

              {/* Item 1: 2026 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2026</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-tile2 text-center text-sm font-semibold leading-tight text-ink ring-1 ring-inset ring-line">
                  IPC/EU
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">Africa Leadership Award</strong> by Global Skills Hub (UK) in Accra. Lead Consultant Facilitator for <strong className="text-ink font-semibold">EU-SDGN II</strong> & International Press Council electoral training.
                  </p>
                  <div className="text-sm text-mute">
                    Accra, Ghana · IPC / European Union
                  </div>
                </div>
              </div>

              {/* Item 2: 2025 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2025</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-line">
                  <Image src="/logos/nuc.png" alt="National Universities Commission logo" fill sizes="56px" className="object-contain p-1.5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Appointed by the <strong className="text-white font-semibold">National Universities Commission (NUC)</strong> as Chairman of the Ad-hoc Accreditation Panel for Mass Communication at Chrisland University.
                  </p>
                  <div className="text-sm text-mute">
                    National Universities Commission · Quality Assurance
                  </div>
                </div>
              </div>

              {/* Item 3: 2024 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2024</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-tile2 text-center text-sm font-semibold leading-tight text-ink ring-1 ring-inset ring-line">
                  PRIZE
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">Peter Okebukola Distinction Prize</strong> for distinguished contributions to higher education pedagogy and media research.
                  </p>
                  <div className="text-sm text-mute">
                    Higher Education Academic Distinction
                  </div>
                </div>
              </div>

              {/* Item 4: 2020 - pres */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2020 - pres</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-line">
                  <Image src="/logos/fuoye.png" alt="Federal University Oye-Ekiti logo" fill sizes="56px" className="object-contain p-1.5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Appointed <strong className="text-white font-semibold">Director, Career Services Centre</strong> at FUOYE. Spearheading university-wide employability programs, internships, and corporate partnerships.
                  </p>
                  <div className="text-sm text-mute">
                    Federal University Oye-Ekiti · Directorate Office
                  </div>
                </div>
              </div>

              {/* Item 5: 2018 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2018</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-tile2 text-center text-sm font-semibold leading-tight text-ink ring-1 ring-inset ring-line">
                  FISN
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Elected <strong className="text-white font-semibold">Fellow of the Institute of Security of Nigeria (FISN)</strong> for contributions at the intersection of strategic communication and national security.
                  </p>
                  <div className="text-sm text-mute">
                    Institute of Security of Nigeria (Chartered)
                  </div>
                </div>
              </div>

              {/* Item 6: 2011 - 2014 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2011 - 2014</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-line">
                  <Image src="/logos/babcock.png" alt="Babcock University logo" fill sizes="56px" className="object-contain p-1.5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Earned <strong className="text-white font-semibold">PhD in Communication and Media Studies</strong> at Babcock University. Dissertation modeled participatory development communication for socio-economic transformation.
                  </p>
                  <div className="text-sm text-mute">
                    Doctoral Dissertation · Babcock University
                  </div>
                </div>
              </div>

              {/* Item 7: 2008 - 2011 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2008 - 2011</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-line">
                  <Image src="/logos/unilag.png" alt="University of Lagos logo" fill sizes="56px" className="object-contain p-1.5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Completed <strong className="text-white font-semibold">Master of Science (MSc) in Mass Communication</strong> at the University of Lagos (UNILAG), specializing in broadcasting governance and communication theory.
                  </p>
                  <div className="text-sm text-mute">
                    University of Lagos · Department of Mass Communication
                  </div>
                </div>
              </div>

              {/* Item 8: 2007 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2007</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-tile2 text-center text-sm font-semibold leading-tight text-ink ring-1 ring-inset ring-line">
                  NYSC
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Conferred the <strong className="text-white font-semibold">NYSC Presidential Honours Award</strong> by The Presidency, Federal Republic of Nigeria for outstanding national youth service.
                  </p>
                  <div className="text-sm text-mute">
                    The Presidency · Federal Republic of Nigeria
                  </div>
                </div>
              </div>

              {/* Item 9: 2002 - 2006 */}
              <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                <div className="sm:w-24 shrink-0 sm:text-right pt-1 text-sm text-mute flex items-center sm:justify-end gap-2">
                  <span>2002 - 2006</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-accent ring-4 ring-bg translate-x-[17px] z-10" />
                </div>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-line">
                  <Image src="/logos/bowen.webp" alt="Bowen University logo" fill sizes="56px" className="object-contain p-1.5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Graduated with top academic honours, earning a <strong className="text-white font-semibold">Bachelor of Science (BSc) in Mass Communication</strong> from Bowen University, Iwo.
                  </p>
                  <div className="text-sm text-mute">
                    Bowen University, Iwo · Bowen Distinguished Alumni (2017)
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Comprehensive Bio & Institutional Appointments (5 cols) */}
          <div className="space-y-10 lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            
            {/* Quick Credentials Summary Card */}
            <div className="border-t border-line pt-6 space-y-4">
              <span className="text-xl font-semibold text-ink block">
                Statutory Appointments
              </span>
              <div className="space-y-5 text-sm text-neutral-300">
                <div className="border-l-2 border-accent pl-4 space-y-1">
                  <span className="text-sm text-mute block">National Quality Assurance</span>
                  <p className="font-medium text-white">NUC Ad-hoc Accreditation Panel Chairman</p>
                  <p className="text-mute text-sm">Chrisland University Mass Communication Programme (2025)</p>
                </div>
                <div className="border-l-2 border-accent pl-4 space-y-1">
                  <span className="text-sm text-mute block">International Development</span>
                  <p className="font-medium text-white">Lead Consultant Facilitator - EU-SDGN II</p>
                  <p className="text-mute text-sm">International Press Council & European Union Media Program (2026)</p>
                </div>
              </div>
            </div>

            {/* The doctoral thesis: the one major written work his profile confirms */}
            <div className="border-t border-line pt-6">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-neutral-400" />
                <h3 className="text-xl font-semibold text-white">Doctoral thesis</h3>
              </div>

              <p className="mt-3 text-sm text-mute">
                {thesisData.degree}, {thesisData.institution} · {thesisData.year}
              </p>
              <h4 className="mt-1 text-lg font-semibold leading-snug text-ink">{thesisData.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mute line-clamp-3">{thesisData.summary}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                {thesisAvailable ? (
                  <a
                    href={thesisData.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                  >
                    <Download className="h-4 w-4" />
                    Summary (PDF)
                  </a>
                ) : (
                  <span className="text-mute">Summary PDF to be added</span>
                )}
                <Link
                  href="/research"
                  className="group inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                >
                  See all research
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
