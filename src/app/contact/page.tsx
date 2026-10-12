import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Mail,
  Building,
  MapPin,
  ExternalLink,
  Download,
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
    <div className="py-16 sm:py-24 bg-[#0D0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#20232E]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#71788E] block">
            Institutional Communications
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#EDEFEF] tracking-tight">
            Contact & Advisory Office
          </h1>

          <p className="text-sm sm:text-base text-[#9FA6B2] leading-relaxed max-w-2xl">
            Reach out for speaking invitations, academic collaboration, accreditation panel appointments,
            or masterclass participation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form (Spans 7 columns on lg) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-[#71788E]">Loading communication form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Institutional Office Directory (Spans 5 columns on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="border border-[#20232E] bg-[#14161E] p-6 sm:p-7 space-y-6">
              <div className="border-b border-[#20232E] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#71788E] block">
                  Official Directory
                </span>
                <h3 className="font-serif text-lg font-normal text-[#EDEFEF] mt-0.5">
                  Department & Affiliation
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#6E7588] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDEFEF] font-semibold block">Department of Mass Communication</span>
                    <span className="text-[#8A92A6]">Faculty of Communication and Media Studies</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#6E7588] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDEFEF] font-semibold block">Federal University Oye-Ekiti (FUOYE)</span>
                    <span className="text-[#8A92A6]">Ekiti State, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#6E7588] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDEFEF] font-semibold block">Institutional Email</span>
                    <a
                      href={`mailto:${profileData.socialLinks.email}`}
                      className="text-[#9AA1B2] hover:text-[#EDEFEF] underline break-all font-mono"
                    >
                      {profileData.socialLinks.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1D202B] space-y-2.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#71788E] block">
                  Academic Profiles & Verified CV
                </span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href={profileData.socialLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0D0E12] border border-[#20232E] hover:border-[#2C3142] text-xs font-mono text-[#EDEFEF] flex items-center justify-between transition-colors"
                  >
                    <span>Google Scholar Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#6E7588]" />
                  </a>

                  <a
                    href={profileData.socialLinks.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0D0E12] border border-[#20232E] hover:border-[#2C3142] text-xs font-mono text-[#EDEFEF] flex items-center justify-between transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#6E7588]" />
                  </a>

                  <a
                    href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                    download
                    className="p-3 bg-[#1A1D27] border border-[#262A38] hover:bg-[#202432] text-xs font-mono text-[#EDEFEF] flex items-center justify-between transition-colors"
                  >
                    <span>Download Complete CV (PDF)</span>
                    <Download className="w-3.5 h-3.5 text-[#8A90A2]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Guidance */}
            <div className="p-4 border border-[#20232E] bg-[#10121A] text-xs text-[#71788E] leading-relaxed space-y-1 font-mono">
              <span className="text-[#9AA1B2] block uppercase tracking-wider text-[10px]">
                Protocol & Response Timing:
              </span>
              <p>
                Inquiries for accreditation panel appointments and keynotes are acknowledged within 48 to 72 business hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
