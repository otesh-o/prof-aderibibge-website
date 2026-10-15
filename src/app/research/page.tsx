import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import PublicationsList from "@/components/research/PublicationsList";
import { thesisData, publicationsData, researchGrantsData, supervisionsData } from "@/data/research";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research, Publications & Thesis | Prof. Adebola Aderibigbe",
  description:
    "The full research library of Prof. Adebola Adewunmi Aderibigbe: peer-reviewed publications, book chapters, reports, conference papers and his doctoral thesis.",
};

const wrap = "mx-auto max-w-[1400px] px-5 sm:px-8";

export default function ResearchPage() {
  // Only offer the thesis download when the file is actually in /public.
  const thesisAvailable = existsSync(path.join(process.cwd(), "public", thesisData.downloadUrl));

  const articles = publicationsData.filter((p) => p.type === "Journal Article").length;
  const years = publicationsData.map((p) => p.year);
  const span = `${Math.min(...years)}–${Math.max(...years)}`;
  const stats = [
    { value: String(publicationsData.length + 1), label: "works in the library" },
    { value: String(articles), label: "peer-reviewed articles" },
    { value: String(researchGrantsData.length), label: "funded projects" },
    { value: span, label: "years of output" },
  ];

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
            <p className="text-sm font-medium text-accent">Research</p>
            <h1 className="mt-0.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Research and publications
            </h1>
            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-mute">
              Articles, chapters, reports, conference papers and the doctoral thesis of Prof. Aderibigbe.
            </p>
            <a
              href={profileData.socialLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-9 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Google Scholar profile
              <ExternalLink className="h-4 w-4" />
            </a>
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

      {/* Library */}
      <section id="library" className={`${wrap} pb-8`}>
        <PublicationsList thesisAvailable={thesisAvailable} />
      </section>

      {/* Supporting record */}
      <section className="border-t border-line">
        <div className={`${wrap} grid gap-10 py-8 lg:grid-cols-2`}>
          <div>
            <p className="text-sm font-medium text-accent">Funded projects</p>
            <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">Executed research grants</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {researchGrantsData.map((g) => (
                <li key={g.title} className="py-4">
                  <p className="text-sm text-mute">
                    {g.fundingBody} · <span className="tabular-nums">{g.year}</span>
                  </p>
                  <h3 className="mt-0.5 font-semibold leading-snug text-ink">{g.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute line-clamp-2">{g.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-accent">Research mentorship</p>
            <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">Postgraduate supervision</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {supervisionsData.map((s) => (
                <li key={`${s.area}-${s.year}`} className="flex items-start justify-between gap-6 py-4">
                  <div>
                    <p className="text-sm text-mute">
                      {s.level} · <span className="tabular-nums">{s.year}</span>
                    </p>
                    <h3 className="mt-1 font-semibold leading-snug text-ink">{s.area}</h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      s.status === "Completed" ? "bg-accent/15 text-accent" : "bg-line text-mute"
                    }`}
                  >
                    {s.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
