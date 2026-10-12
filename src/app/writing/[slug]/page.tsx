import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
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
    <article className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Back Link */}
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Writing</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20">
              {article.topic}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-blue-300/90 font-medium leading-relaxed">
            {article.subtitle}
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-gray-400">
            <span>By Prof. Adebola Adewunmi Aderibigbe</span>
            <span>•</span>
            <span>Federal University Oye-Ekiti</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Bio Footer in Article */}
        <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 space-y-4 mt-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            About the Author
          </span>
          <h3 className="text-lg font-bold text-white">
            Prof. Adebola Adewunmi Aderibigbe
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Professor of Mass Communication, Faculty of Communication and Media Studies,
            Federal University Oye-Ekiti (FUOYE). Specialises in Strategic and Development Communication,
            emerging tech ethics, and curriculum development.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="text-xs font-semibold text-blue-400 hover:underline"
            >
              Read full biography & why he chose to build in Nigeria →
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
