import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { articlesData } from "@/data/writing";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Prof. Adebola Aderibigbe",
    };
  }

  return {
    title: `${article.title} | Prof. Adebola Aderibigbe`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Back Link */}
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#71788E] hover:text-[#EDEFEF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Essays & Reflections</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-[#20232E]">
          <div className="flex flex-wrap items-baseline gap-3 text-xs font-mono text-[#71788E]">
            <span className="px-2 py-0.5 bg-[#1E2230] text-[#9AA1B2] border border-[#2B3044] uppercase tracking-wider text-[10px]">
              {article.topic}
            </span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#9FA6B2] italic leading-relaxed">
            {article.subtitle}
          </p>

          <div className="pt-2 flex items-center gap-3 font-mono text-xs text-[#71788E]">
            <span>By Prof. Adebola Adewunmi Aderibigbe</span>
            <span>•</span>
            <span>Federal University Oye-Ekiti</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-[#C8CCD6] font-serif text-base sm:text-lg leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">{paragraph}</p>
          ))}
        </div>

        {/* Author Bio Ledger in Article */}
        <div className="p-6 sm:p-8 border border-[#20232E] bg-[#14161E] space-y-3 mt-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#71788E] block">
            About the Author
          </span>
          <h3 className="font-serif text-lg font-normal text-[#EDEFEF]">
            Prof. Adebola Adewunmi Aderibigbe
          </h3>
          <p className="text-xs sm:text-sm text-[#8A92A6] leading-relaxed">
            Professor of Mass Communication, Faculty of Communication and Media Studies,
            Federal University Oye-Ekiti (FUOYE). Specialises in Strategic and Development Communication,
            emerging tech ethics, and curriculum development.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="font-mono text-xs text-[#EDEFEF] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Read Full Biography & Academic Manifesto</span>
              <ArrowLeft className="w-3 h-3 rotate-180 text-[#8A90A2]" />
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
