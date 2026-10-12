import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#090A0D] border-t border-[#1C1F28] pt-16 pb-28 text-xs text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Department */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="font-serif text-xl text-white tracking-tight">
              Prof. Adebola Adewunmi Aderibigbe
            </h2>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              Department of Mass Communication, Faculty of Communication and Media Studies,
              Federal University Oye-Ekiti (FUOYE), Nigeria.
            </p>
            <p className="font-mono text-[11px] text-neutral-400">
              Specialisation: Strategic and Development Communication
            </p>
            <div className="flex items-center gap-4 pt-2 font-mono text-[11px]">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>·</span>
              <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                Contact Office
              </Link>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 mb-4">
              Academic
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link href="/teaching" className="hover:text-white transition-colors">
                  Course Outlines & Syllabi
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="hover:text-white transition-colors">
                  Honours & Accreditation
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="hover:text-white transition-colors">
                  Mentorship Masterclasses
                </Link>
              </li>
            </ul>
          </div>

          {/* Engagements & Public Discourse */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 mb-4">
              Public Discourse
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/speaking" className="hover:text-white transition-colors">
                  Keynotes & Speaking
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-white transition-colors">
                  Essays & Commentary
                </Link>
              </li>
              <li>
                <Link href="/about#why-i-stayed" className="hover:text-white transition-colors">
                  Why I Stayed in Nigeria
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Advisory Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C1F28] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <p>© {currentYear} Prof. Adebola Adewunmi Aderibigbe. All rights reserved.</p>
          <p>adebolaaderibigbe.com · Federal University Oye-Ekiti</p>
        </div>
      </div>
    </footer>
  );
}
