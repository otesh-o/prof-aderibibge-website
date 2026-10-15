import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ArticlesFilter from "@/components/writing/ArticlesFilter";
import { articlesData } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing & Reflections | Prof. Adebola Aderibigbe",
  description:
    "Essays, reflections and commentary on generative AI, development communication and higher education by Prof. Adebola Aderibigbe.",
};

const wrap = "mx-auto max-w-[1400px] px-5 sm:px-8";

export default function WritingPage() {
  const topics = new Set(articlesData.map((a) => a.topic)).size;
  const stats = [
    { value: String(articlesData.length), label: "articles" },
    { value: String(topics), label: "topics" },
    { value: articlesData[0]?.date ?? "", label: "latest" },
  ];

  return (
    <>
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
            <p className="text-sm font-medium text-accent">Writing</p>
            <h1 className="mt-0.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Personal articles
            </h1>
            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-mute">
              Essays and reflections on higher education, media ethics and building a career in Nigeria.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-x-6 border-t border-line pt-3 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-lg font-semibold tabular-nums tracking-tight text-accent">{s.value}</dt>
                <dd className="mt-0.5 text-xs leading-snug text-mute">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="articles" className={`${wrap} pb-12`}>
        <ArticlesFilter articles={articlesData} />
      </section>
    </>
  );
}
