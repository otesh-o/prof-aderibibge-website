import SectionHeader from "@/components/SectionHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { testimonialsData } from "@/data/testimonials";

/** What students and colleagues say about him. Hidden until there is at least one cleared testimony. */
export default function TestimonialsSection() {
  const items = testimonialsData.filter((t) => t.confirmed !== false);
  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
      <SectionHeader
        eyebrow="Testimonials"
        title="In their words"
        description="What students, colleagues and organisers say about working with him."
      />

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <SpotlightCard
            as="li"
            key={t.id}
            className="flex flex-col rounded-2xl bg-tile p-6 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50"
          >
            <span aria-hidden className="block h-px w-10 bg-accent" />
            <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
            <div className="mt-6 text-sm">
              <p className="font-medium text-ink">
                {t.sourceUrl ? (
                  <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {t.author}
                  </a>
                ) : (
                  t.author
                )}
              </p>
              <p className="mt-0.5 text-mute">
                {t.context}
                {t.year ? ` · ${t.year}` : ""}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </ul>
    </section>
  );
}
