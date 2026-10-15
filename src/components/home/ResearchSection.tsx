import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ResearchBrowser from "@/components/home/ResearchBrowser";
import { thesisData } from "@/data/research";
import { profileData } from "@/data/profile";

/** Research as one filterable, dated list (the Kari-style layout), with the thesis as its own row. */
export default function ResearchSection() {
  // Only offer the download when the file is actually in /public.
  const thesisAvailable = existsSync(path.join(process.cwd(), "public", thesisData.downloadUrl));

  return (
    <section id="research" className="tone-dark bg-bg text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-16">
        <SectionHeader
          eyebrow="Research"
          title="Research and publications"
          description="Empirical work on AI adoption in African newsrooms, strategic state-citizen communication and participatory development."
        >
          <a
            href={profileData.socialLinks.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
          >
            Google Scholar
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link href="/research" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
            Full research page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionHeader>

        <ResearchBrowser thesisAvailable={thesisAvailable} />
      </div>
    </section>
  );
}
