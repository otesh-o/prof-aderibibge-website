import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articlesData } from "@/data/writing";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found | Prof. Adebola Aderibigbe" };
  return {
    title: `${article.title} | Prof. Adebola Aderibigbe`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) notFound();

  const more = articlesData.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-[1400px] px-5 pb-12 pt-4 sm:px-8 lg:pt-6">
      <Link
        href="/writing"
        className="group -ml-2 inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-mute transition-colors hover:bg-tile hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to all articles
      </Link>

      <div className="mx-auto mt-4 max-w-[68ch]">
        <header className="border-b border-line pb-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
              {article.topic}
            </span>
            <span className="text-sm text-mute">
              {article.date} · {article.readTime}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-mute">{article.subtitle}</p>
          <p className="mt-4 text-sm text-mute">
            By <span className="text-ink">Prof. Adebola Adewunmi Aderibigbe</span>, Federal University Oye-Ekiti
          </p>
        </header>

        <div className="space-y-5 pt-6 text-[17px] leading-[1.8] text-ink">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <aside className="mt-10 border-t border-line pt-6">
          <p className="text-sm text-mute">About the author</p>
          <p className="mt-1 font-semibold text-ink">Prof. Adebola Adewunmi Aderibigbe</p>
          <p className="mt-1 text-sm leading-relaxed text-mute">
            Professor of Mass Communication at the Federal University Oye-Ekiti. He specialises in strategic and
            development communication, emerging technology ethics and curriculum development.
          </p>
          <Link
            href="/about"
            className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Read his story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </aside>
      </div>

      {more.length > 0 && (
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="text-xl font-semibold tracking-tight text-ink">More articles</h2>
          <ul className="mt-4 grid gap-6 md:grid-cols-3">
            {more.map((a) => (
              <li key={a.slug} className="border-t border-line pt-3">
                <p className="text-sm text-mute">
                  {a.topic} · {a.date}
                </p>
                <h3 className="mt-1 font-semibold leading-snug text-ink">
                  <Link href={`/writing/${a.slug}`} className="transition-colors hover:text-accent">
                    {a.title}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
