import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { profileData } from "@/data/profile";

const tile =
  "group relative flex flex-col rounded-3xl bg-tile p-6 sm:p-8 ring-1 ring-inset ring-line transition-[box-shadow,background-color] duration-300 hover:ring-accent/40";

/** Heading link that stretches across the whole tile, so the tile is one target. */
function TileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-2xl text-ink after:absolute after:inset-0 after:rounded-3xl">
      {children}
      <ArrowUpRight className="ml-1 inline h-5 w-5 -translate-y-0.5 text-mute transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:text-accent" />
    </Link>
  );
}

export default function BentoGrid() {
  const speaking = profileData.speakingHighlights.slice(0, 3);
  const awards = profileData.awards.slice(0, 3);
  const modules = profileData.courses.filter((c) => c.isCustomModule);
  const latest = profileData.latestWriting[0];
  const interests = profileData.researchInterests;

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
      <SectionHeader eyebrow="Profile" title="At a glance" />
      <div className="grid gap-4 lg:grid-cols-6 lg:gap-5">
        {/* Speaker at — large */}
        <div className={`${tile} lg:col-span-4 lg:row-span-2`}>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-3xl text-ink">Speaker at</h2>
            <Link href="/speaking" className="text-sm text-mute transition-colors hover:text-accent">
              All engagements
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-line">
            {speaking.map((s) => (
              <li key={s.event} className="grid gap-1 py-5 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <p className="text-lg font-medium leading-snug text-ink">{s.event}</p>
                  <p className="mt-1 text-sm text-mute">
                    {s.host} · {s.location}
                  </p>
                </div>
                <p className="text-sm text-mute sm:text-right">
                  <span className="block text-ink">{s.role}</span>
                  <span className="tabular-nums">{s.year}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Research — tall */}
        <div className={`${tile} lg:col-span-2 lg:row-span-2`}>
          <TileLink href="/research">Research</TileLink>
          <ul className="mt-8 flex-1 space-y-6">
            {interests.map((r) => (
              <li key={r.title}>
                <p className="font-medium leading-snug text-ink">{r.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-mute">{r.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Credentials */}
        <div className={`${tile} lg:col-span-3`}>
          <TileLink href="/credentials">Credentials</TileLink>
          <ul className="mt-6 divide-y divide-line">
            {awards.map((a) => (
              <li key={a.title} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                <span className="text-ink">{a.title}</span>
                <span className="text-sm tabular-nums text-mute">{a.year}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Teaching */}
        <div className={`${tile} lg:col-span-3`}>
          <TileLink href="/teaching">Teaching</TileLink>
          <p className="mt-4 text-sm text-mute">Two modules he created, alongside 30+ courses taught.</p>
          <ul className="mt-5 space-y-2">
            {modules.map((m) => (
              <li key={m.code} className="text-ink">
                {m.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Mentorship */}
        <div className={`${tile} lg:col-span-2`}>
          <TileLink href="/mentorship">Mentorship</TileLink>
          <p className="mt-4 text-sm leading-relaxed text-mute">
            Next master class: Public Speaking Essentials. Date to be announced.
          </p>
          <p className="mt-auto pt-6 text-sm font-medium text-accent">Register interest</p>
        </div>

        {/* Latest writing */}
        <div className={`${tile} lg:col-span-2`}>
          <TileLink href={`/writing/${latest.slug}`}>Latest writing</TileLink>
          <p className="mt-4 leading-snug text-ink">{latest.title}</p>
          <p className="mt-auto pt-6 text-sm text-mute">
            {latest.date} · {latest.readTime}
          </p>
        </div>

        {/* Contact — the one blue tile */}
        <div
          className={`${tile} bg-accent ring-0 hover:ring-0 hover:brightness-110 lg:col-span-2`}
        >
          <Link
            href="/contact"
            className="text-2xl text-white after:absolute after:inset-0 after:rounded-3xl"
          >
            Get in touch
            <ArrowUpRight className="ml-1 inline h-5 w-5 -translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Speaking invitations, collaboration, media requests and mentorship.
          </p>
        </div>
      </div>
    </section>
  );
}
