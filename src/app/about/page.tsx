import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About & Why I Stayed | Prof. Adebola Aderibigbe",
  description:
    "Biography, career timeline and the 'Why I Stayed' position of Prof. Adebola Adewunmi Aderibigbe, Professor of Mass Communication at FUOYE.",
};

const wrap = "mx-auto max-w-[1400px] px-5 sm:px-8";

const stats = [
  { value: "18+", label: "years in higher education" },
  { value: "30+", label: "courses taught" },
  { value: "10", label: "universities as external examiner" },
  { value: "4", label: "national and continental honours" },
];

interface Milestone {
  year: string;
  mark: string;
  logo?: string;
  title: string;
  text: string;
  meta: string;
}

/** Newest first. `logo` is a file in /public/logos; entries without one show a short text mark. */
const timeline: Milestone[] = [
  {
    year: "2026",
    mark: "IPC / EU",
    title: "Africa Leadership Award and EU-SDGN II facilitation",
    text: "Conferred the Africa Leadership Award by Global Skills Hub (UK) in Accra. Lead Consultant Facilitator with the International Press Council and the European Union for election-reporting training in Ekiti.",
    meta: "Global Skills Hub (UK) · International Press Council · European Union",
  },
  {
    year: "2025",
    mark: "NUC",
    logo: "nuc.png",
    title: "Chairman, NUC Ad-hoc Accreditation Panel",
    text: "Chaired the national accreditation exercise for Mass Communication at Chrisland University, covering curriculum, staff qualifications and facilities.",
    meta: "National Universities Commission",
  },
  {
    year: "2024",
    mark: "Prize",
    title: "Peter Okebukola Distinction Prize",
    text: "Recognised for distinguished scholarship, innovation in university teaching and sustained contributions to media education standards.",
    meta: "Higher education distinction",
  },
  {
    year: "2020 – now",
    mark: "FUOYE",
    logo: "fuoye.png",
    title: "Director, Career Services Centre",
    text: "Leads university-wide career guidance, internships and industry partnerships at Federal University Oye-Ekiti.",
    meta: "Federal University Oye-Ekiti",
  },
  {
    year: "2018",
    mark: "FISN",
    title: "Fellow, Institute of Security of Nigeria",
    text: "Elected Fellow for work at the intersection of strategic communication, national security discourse and counter-disinformation.",
    meta: "Institute of Security of Nigeria",
  },
  {
    year: "2011 – 2014",
    mark: "Babcock",
    logo: "babcock.png",
    title: "PhD, Communication and Media Studies",
    text: "Doctoral research on strategic communication frameworks for development interventions, community engagement and public sphere governance in Nigeria.",
    meta: "Babcock University, Ilishan-Remo",
  },
  {
    year: "2008 – 2011",
    mark: "UNILAG",
    logo: "unilag.png",
    title: "MSc, Mass Communication",
    text: "Graduate work on media theory, broadcasting regulation and public relations policy in West Africa.",
    meta: "University of Lagos",
  },
  {
    year: "2007",
    mark: "NYSC",
    title: "NYSC Presidential Honours Award",
    text: "Conferred by The Presidency for exemplary national service, youth mobilisation and community development.",
    meta: "The Presidency, Federal Republic of Nigeria",
  },
  {
    year: "2002 – 2006",
    mark: "Bowen",
    logo: "bowen.webp",
    title: "BSc, Mass Communication",
    text: "Graduated with top honours. Later received the Bowen Distinguished Alumni Award (2017).",
    meta: "Bowen University, Iwo",
  },
];

const facts = [
  { label: "PhD", value: "Babcock University, 2014" },
  { label: "MSc", value: "University of Lagos, 2011" },
  { label: "BSc", value: "Bowen University, 2006" },
  { label: "Fellow", value: "Institute of Security of Nigeria; Institute of Corporate Administration" },
  { label: "Charter member", value: "Nigeria Association of Artificial Intelligence Practitioners" },
  { label: "Honours", value: "Africa Leadership Award (2026), Peter Okebukola Distinction Prize (2024), Bowen Distinguished Alumni Award (2017), NYSC Presidential Award (2007)" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className={`${wrap} pb-4 pt-4 lg:pt-6`}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Link
              href="/"
              className="group -ml-2 mb-2 inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-mute transition-colors hover:bg-tile hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to main site
            </Link>
            <p className="text-sm font-medium text-accent">About</p>
            <h1 className="mt-0.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Prof. Adebola Adewunmi Aderibigbe
            </h1>
            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-mute">
              Professor of Mass Communication, Federal University Oye-Ekiti. Strategic and Development
              Communication.
            </p>
          </div>

          <dl className="grid grid-cols-4 gap-x-6 border-t border-line pt-3 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-lg font-semibold tabular-nums tracking-tight text-accent">{s.value}</dt>
                <dd className="mt-0.5 text-xs leading-snug text-mute">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="border-t border-line">
        <div className={`${wrap} grid gap-10 py-8 lg:grid-cols-12 lg:gap-14`}>
          {/* Main column */}
          <div className="space-y-12 lg:col-span-8">
            {/* The story: one continuous text, with why he stayed told as part of it */}
            <section id="biography">
              <p className="text-sm font-medium text-accent">His story</p>
              <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">
                Building Nigeria&apos;s communicators, from Nigeria
              </h2>

              <div className="mt-4 max-w-[72ch] space-y-4 text-[15px] leading-[1.75] text-mute">
                <p>
                  Prof. Aderibigbe is an academic leader and researcher in the Department of Mass Communication,
                  Faculty of Communication and Media Studies, at the Federal University Oye-Ekiti (FUOYE). In{" "}
                  <strong className="font-semibold text-ink">over eighteen years</strong> in higher education, his work has centred on <strong className="font-semibold text-ink">strategic and development
                  communication</strong>, media literacy and the governance of emerging media technologies.
                </p>
                <p>
                  He earned his <strong className="font-semibold text-ink">BSc in Mass Communication from Bowen University in 2006</strong>, his <strong className="font-semibold text-ink">MSc from the
                  University of Lagos in 2011</strong>, and his <strong className="font-semibold text-ink">PhD in Communication and Media Studies from Babcock
                  University in 2014</strong>. Since then he has taught <strong className="font-semibold text-ink">more than thirty university courses</strong> and designed
                  two modules, <strong className="font-semibold text-ink">Public Speaking Essentials and Principles of Excellent Living</strong>, to build
                  character and public rhetoric among undergraduates.
                </p>
                <p>
                  His peer-reviewed work has appeared in <strong className="font-semibold text-ink">Frontiers in Psychology</strong>, Communication and the Public
                  and the Journal of African Union Studies, and he has executed research grants from the <strong className="font-semibold text-ink">Ford
                  Foundation</strong> and Bowen University. He is a <strong className="font-semibold text-ink">Fellow of the Institute of Security of Nigeria</strong> and the{" "}
                  <strong className="font-semibold text-ink">Institute of Corporate Administration</strong>, and a charter member of the Nigeria Association of
                  Artificial Intelligence Practitioners.
                </p>
                <p id="why-i-stayed" className="scroll-mt-24">
                  The pull to build a career abroad has touched every university faculty in Nigeria. Foreign
                  tenure, international endowments and predictable infrastructure are compelling, and many of his
                  colleagues took that road. <strong className="font-semibold text-ink">He stayed</strong>, on a simple conviction: <strong className="font-semibold text-ink">a sovereign society cannot
                  outsource the formation of its communicators</strong>. If experienced academics leave the lecture rooms,
                  there is no one left to hold the standard for the next generation.
                </p>
                <p>
                  Staying is what made the rest possible. He <strong className="font-semibold text-ink">directs the Career Services Centre at FUOYE</strong>,
                  supervises MSc and PhD scholars who now work in newsrooms and universities, examines for ten
                  Nigerian universities, and <strong className="font-semibold text-ink">chairs National Universities Commission accreditation panels</strong> that
                  protect the standard of the degrees themselves. In 2026 he received the <strong className="font-semibold text-ink">Africa Leadership
                  Award</strong> in Accra and led election-reporting training for journalists in Ekiti with the
                  International Press Council and the European Union.
                </p>
              </div>

              <blockquote className="mt-6 max-w-[72ch] border-l-2 border-accent pl-5">
                <p className="text-lg font-medium leading-snug text-ink">
                  “Nigeria will not be built by spectators. It is built by those who choose to plant their feet,
                  roll up their sleeves, and impart excellence right here.”
                </p>
                <footer className="mt-2 text-sm text-mute">Prof. Adebola Adewunmi Aderibigbe</footer>
              </blockquote>
            </section>

            {/* Timeline */}
            <section id="timeline">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-accent">Experience and education</p>
                  <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">Chronological record</h2>
                </div>
                <Link
                  href="/research"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  His research
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <ol className="relative mt-4 before:absolute before:bottom-8 before:top-8 before:left-[9.25rem] before:hidden before:w-px before:bg-mute/40 sm:before:block">
                {timeline.map((m) => (
                  <li
                    key={m.title}
                    className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 py-4 sm:grid-cols-[6.5rem_3rem_1fr] sm:gap-x-5"
                  >
                    <span className="col-span-2 text-sm tabular-nums text-mute sm:col-span-1 sm:pt-3">{m.year}</span>
                    {m.logo ? (
                      <span className="relative z-10 h-12 w-12 overflow-hidden rounded-lg bg-white p-1.5 ring-4 ring-bg">
                        <Image
                          src={`/logos/${m.logo}`}
                          alt={`${m.meta} logo`}
                          fill
                          sizes="48px"
                          className="object-contain p-1.5"
                        />
                      </span>
                    ) : (
                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-tile2 px-1 text-center text-[11px] font-semibold leading-tight text-ink ring-4 ring-bg">
                        {m.mark}
                      </span>
                    )}
                    <div>
                      <h3 className="font-semibold leading-snug text-ink">{m.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-mute">{m.text}</p>
                      <p className="mt-1 text-xs text-mute">{m.meta}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Side column */}
          <aside className="space-y-5 lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <div>
              <h2 className="font-semibold text-ink">Curriculum vitae</h2>
              <p className="mt-1 text-sm text-mute">
                The full record of publications, panels and administrative service.
              </p>
              <a
                href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                download
                className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                Download CV (PDF)
              </a>
            </div>

            <dl className="border-t border-line pt-5">
              <h2 className="font-semibold text-ink">At a glance</h2>
              <div className="mt-3 divide-y divide-line">
                {facts.map((f) => (
                  <div key={f.label} className="py-2.5 first:pt-0 last:pb-0">
                    <dt className="text-xs text-mute">{f.label}</dt>
                    <dd className="mt-0.5 text-sm leading-snug text-ink">{f.value}</dd>
                  </div>
                ))}
              </div>
            </dl>

            <Link
              href="/contact"
              className="group flex items-center justify-between border-t border-line pt-5"
            >
              <span>
                <span className="block font-semibold text-ink group-hover:text-accent">Get in touch</span>
                <span className="mt-0.5 block text-sm text-mute">Speaking, collaboration, media, mentorship</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
