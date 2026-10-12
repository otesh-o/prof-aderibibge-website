import Link from "next/link";
import { ExternalLink, Mail, Award, BookOpen, GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#080B11] border-t border-white/[0.08] pt-16 pb-28 text-sm text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Department */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-[#E5E7EB] tracking-tight">
              Prof. Adebola Adewunmi Aderibigbe
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed max-w-md">
              Professor of Mass Communication, Faculty of Communication and Media Studies,
              Federal University Oye-Ekiti (FUOYE), Nigeria.
            </p>
            <p className="text-xs text-blue-400 font-medium">
              Specialisation: Strategic and Development Communication
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 text-xs text-[#E5E7EB] hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 text-xs text-[#E5E7EB] hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-xs text-blue-400 hover:bg-blue-600/20 transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>Contact Office</span>
              </Link>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E5E7EB] mb-4">
              Academic & Teaching
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/research" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400/80" />
                  <span>Research & Publications</span>
                </Link>
              </li>
              <li>
                <Link href="/teaching" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400/80" />
                  <span>Course Outlines & Lectures</span>
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-blue-400/80" />
                  <span>Honours & Fellowships</span>
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="hover:text-blue-400 transition-colors">
                  Mentorship Masterclasses
                </Link>
              </li>
            </ul>
          </div>

          {/* Engagements & Public Discourse */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E5E7EB] mb-4">
              Public & Professional
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/speaking" className="hover:text-blue-400 transition-colors">
                  Keynotes & Speaking
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-blue-400 transition-colors">
                  Essays & Commentary
                </Link>
              </li>
              <li>
                <Link href="/about#why-i-stayed" className="hover:text-blue-400 transition-colors">
                  Why I Stayed in Nigeria
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Media & Advisory Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Prof. Adebola Adewunmi Aderibigbe. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>adebolaaderibigbe.com</span>
            <span>•</span>
            <span className="text-gray-400">Federal University Oye-Ekiti</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
