import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { articlesData } from "@/data/writing";

/** His own writing: the featured article leads, the rest sit beside it as a dated list. */
export default function ArticlesSection() {
  const lead = articlesData.find((a) => a.isFeatured) ?? articlesData[0];
  const rest = articlesData.filter((a) => a.slug !== lead.slug).slice(0, 4);

  return (
    <section id="articles" className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-16">
      <SectionHeader
        eyebrow="Writing"
        title="Personal articles"
        description="Essays and reflections on higher education, media ethics and building a career in Nigeria."
      >
        <Link href="/writing" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
          All articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionHeader>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Lead article */}
        <article className="lg:col-span-5">
          <Link
            href={`/writing/${lead.slug}`}
            className="group relative flex h-full flex-col rounded-2xl bg-tile p-6 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-mute">
              <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent">
                {lead.topic}
              </span>
              <span>
                {lead.date} · {lead.readTime}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-ink">{lead.title}</h3>
            <p className="mt-3 leading-relaxed text-mute">{lead.subtitle}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-accent">
              Read the article
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </article>

        {/* Other articles */}
        <ol className="divide-y divide-line border-y border-line lg:col-span-7">
          {rest.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/writing/${a.slug}`}
                className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
              >
                <div>
                  <p className="text-sm text-mute">
                    {a.topic} · {a.date}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                    {a.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-mute sm:pt-6">
                  {a.readTime}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
