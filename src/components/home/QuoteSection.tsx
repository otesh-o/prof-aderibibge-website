import { profileData } from "@/data/profile";

export default function QuoteSection() {
  return (
    <section className="tone-dark bg-bg px-5 py-24 text-ink sm:px-8 sm:py-32">
      <figure className="mx-auto max-w-4xl text-center">
        <span aria-hidden className="mx-auto mb-10 block h-px w-16 bg-accent" />
        <blockquote className="text-3xl font-medium leading-snug tracking-tight text-ink sm:text-4xl">
          “{profileData.quote.text}”
        </blockquote>
        <figcaption className="mt-10 text-sm text-mute">
          <span className="text-ink">{profileData.quote.author}</span>
        </figcaption>
      </figure>
    </section>
  );
}
