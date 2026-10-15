import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FeaturedList from "@/components/featured/FeaturedList";
import { allSpeakingEvents, speakingTopics } from "@/data/speaking";

export const metadata: Metadata = {
  title: "Featured: Keynotes, Panels & Appearances | Prof. Adebola Aderibigbe",
  description:
    "Where Prof. Adebola Aderibigbe has been featured: keynotes, facilitation, panels and invited lectures, with the topics he speaks on.",
};

const wrap = "mx-auto max-w-[1400px] px-5 sm:px-8";

export default function FeaturedPage() {
  // Entries marked `confirmed: false` are drafts that have not been verified with him yet.
  const events = allSpeakingEvents.filter((e) => e.confirmed !== false);

  const years = events.map((e) => e.year);
  const since = events.length ? Math.min(...years) : new Date().getFullYear();
  const hosts = new Set(events.map((e) => e.host)).size;
  const stats = [
    { value: String(events.length), label: "featured engagements" },
    { value: String(since), label: "since" },
    { value: String(hosts), label: "host organisations" },
    { value: String(speakingTopics.length), label: "topics he speaks on" },
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
            <p className="text-sm font-medium text-accent">Featured</p>
            <h1 className="mt-0.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Keynotes, panels and appearances
            </h1>
            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-mute">
              Where Prof. Aderibigbe has been featured, newest first. Each new invitation is added here.
            </p>
            <Link
              href="/contact?reason=speaking"
              className="group mt-3 inline-flex h-9 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Invite him to speak
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
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

      {/* Engagements */}
      <section id="engagements" className={`${wrap} pb-8`}>
        <FeaturedList events={events} />
      </section>

      {/* Topics */}
      <section id="topics" className="border-t border-line">
        <div className={`${wrap} py-8`}>
          <p className="text-sm font-medium text-accent">Topics</p>
          <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">Topics he speaks on</h2>
          <ul className="mt-4 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {speakingTopics.map((t) => (
              <li key={t.title} className="border-t border-line pt-3">
                <h3 className="font-semibold leading-snug text-ink">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-mute">{t.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
