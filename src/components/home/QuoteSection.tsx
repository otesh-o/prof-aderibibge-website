import { profileData } from "@/data/profile";

export default function QuoteSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0B0F17]">
      {/* Thin Blue Accent Divider Line Above Quote */}
      <div className="max-w-2xl mx-auto px-4 mb-16">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Subtle Decorative Quotation Mark */}
        <span className="text-6xl sm:text-7xl font-serif text-blue-500/20 select-none block leading-none">
          “
        </span>

        {/* The Quote */}
        <blockquote className="-mt-8 text-xl sm:text-3xl lg:text-4xl font-serif italic text-white/95 leading-relaxed tracking-wide">
          {profileData.quote.text}
        </blockquote>

        {/* Attribution */}
        <div className="pt-4 space-y-1">
          <cite className="not-italic text-base sm:text-lg font-bold text-blue-400 block tracking-tight">
            {profileData.quote.author}
          </cite>
          <span className="text-xs sm:text-sm text-gray-400 block font-normal">
            {profileData.quote.subtext}
          </span>
        </div>
      </div>
    </section>
  );
}
