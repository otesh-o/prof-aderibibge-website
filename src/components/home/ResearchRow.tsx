import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollRow from "@/components/ScrollRow";
import { publicationsData } from "@/data/research";
import { profileData } from "@/data/profile";

export default function ResearchRow() {
  return (
    <ScrollRow
      eyebrow="Publications"
      title="Selected publications"
      intro="Journal articles, chapters and reports, newest first."
      action={
        <Link href="/research" className="font-medium text-accent hover:underline">
          All publications
        </Link>
      }
    >
      {[...publicationsData]
        .sort((a, b) => b.year - a.year)
        .map((p) => (
          <li key={p.id} className="w-[82%] shrink-0 snap-start sm:w-[340px]">
            <article className="flex h-full flex-col rounded-2xl bg-tile p-6 ring-1 ring-inset ring-line transition-shadow duration-300 hover:ring-accent/40">
              <p className="text-sm text-mute">
                {p.type} · <span className="tabular-nums">{p.year}</span>
              </p>
              <h3 className="mt-3 text-lg leading-snug text-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-mute">{p.journal}</p>
              <a
                href={p.scholarUrl || profileData.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-accent hover:underline"
              >
                Google Scholar <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          </li>
        ))}
    </ScrollRow>
  );
}
