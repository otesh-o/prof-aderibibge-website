import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Mail,
  Building,
  MapPin,
  ExternalLink,
  Download,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact Office | Prof. Adebola Aderibigbe",
  description:
    "Direct contact channels for keynote invitations, academic collaborations, accreditation panels, and mentorship masterclasses with Prof. Adebola Aderibigbe.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Official Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
            Contact & Advisory Office
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Reach out for speaking invitations, academic collaboration, accreditation panel appointments,
            or masterclass participation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form (Spans 7 columns on lg) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Institutional Office Details (Spans 5 columns on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-base font-bold text-white pb-3 border-b border-white/5">
                Official Department & Affiliation
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Department of Mass Communication</span>
                    <span className="text-gray-400">Faculty of Communication and Media Studies</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Federal University Oye-Ekiti (FUOYE)</span>
                    <span className="text-gray-400">Ekiti State, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Institutional Email</span>
                    <a
                      href={`mailto:${profileData.socialLinks.email}`}
                      className="text-blue-400 hover:underline break-all"
                    >
                      {profileData.socialLinks.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  Academic Profiles & CV
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={profileData.socialLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0B0F17] border border-white/10 hover:border-blue-500/40 text-xs text-white flex items-center justify-between transition-colors"
                  >
                    <span>Google Scholar Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  </a>

                  <a
                    href={profileData.socialLinks.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0B0F17] border border-white/10 hover:border-blue-500/40 text-xs text-white flex items-center justify-between transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  </a>

                  <a
                    href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                    download
                    className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 text-xs text-blue-400 flex items-center justify-between transition-colors font-medium"
                  >
                    <span>Download Complete CV (PDF)</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Guidance */}
            <div className="p-5 rounded-2xl bg-[#0E1524] border border-blue-500/20 text-xs text-gray-400 leading-relaxed space-y-1">
              <span className="font-bold text-blue-400 block">Official Communication Policy:</span>
              <p>
                Inquiries for accreditation panel chairmanships and keynote lectures are typically reviewed and acknowledged within 48 to 72 business hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
