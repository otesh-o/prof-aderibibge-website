import { profileData } from "@/data/profile";

export default function QuoteSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0D0E12] border-t border-[#1E212B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-5xl text-neutral-100 leading-snug tracking-tight">
          “{profileData.quote.text}”
        </blockquote>

        <div className="pt-2 space-y-1">
          <cite className="not-italic text-xs font-mono uppercase tracking-widest text-neutral-300 block">
            {profileData.quote.author}
          </cite>
          <span className="text-xs font-mono text-neutral-500 block">
            {profileData.quote.subtext}
          </span>
        </div>
      </div>
    </section>
  );
}
