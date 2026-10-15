import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact | Prof. Adebola Aderibigbe",
  description:
    "Contact Prof. Adebola Aderibigbe for speaking invitations, collaboration, media requests, mentorship and accreditation work.",
};

const wrap = "mx-auto max-w-[1400px] px-5 sm:px-8";

const links = [
  { label: "Google Scholar", href: profileData.socialLinks.googleScholar, external: true },
  { label: "LinkedIn", href: profileData.socialLinks.linkedIn, external: true },
];

export default function ContactPage() {
  return (
    <>
      <section className={`${wrap} pb-4 pt-4 lg:pt-6`}>
        <Link
          href="/"
          className="group -ml-2 mb-2 inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-mute transition-colors hover:bg-tile hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to main site
        </Link>
        <p className="text-sm font-medium text-accent">Contact</p>
        <h1 className="mt-0.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Get in touch
        </h1>
        <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-mute">
          For speaking invitations, collaboration, media requests, mentorship and accreditation work.
        </p>
      </section>

      <div className="border-t border-line">
        <div className={`${wrap} grid gap-10 py-8 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-7">
            <Suspense fallback={<p className="py-10 text-sm text-mute">Loading the form…</p>}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div>
              <h2 className="font-semibold text-ink">Office</h2>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mute" />
                  <span>
                    <span className="block text-ink">Department of Mass Communication</span>
                    <span className="text-mute">Federal University Oye-Ekiti, Ekiti State, Nigeria</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-mute" />
                  <a
                    href={`mailto:${profileData.socialLinks.email}`}
                    className="break-all text-ink underline-offset-4 hover:underline"
                  >
                    {profileData.socialLinks.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-line pt-5">
              <h2 className="font-semibold text-ink">Profiles and CV</h2>
              <ul className="mt-3 divide-y divide-line border-y border-line text-sm">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-ink transition-colors hover:text-accent"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                    download
                    className="group flex items-center justify-between py-3 text-ink transition-colors hover:text-accent"
                  >
                    Download CV (PDF)
                    <Download className="h-4 w-4 text-mute group-hover:text-accent" />
                  </a>
                </li>
              </ul>
            </div>

            <p className="border-t border-line pt-5 text-sm leading-relaxed text-mute">
              Messages go straight to his office. Please include dates and the nature of the event or request.
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}
