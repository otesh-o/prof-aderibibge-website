import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Building,
  GraduationCap,
  Award,
  ArrowRight,
  Users,
  FileText,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { careerTimeline } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Biography & Why I Stayed | Prof. Adebola Aderibigbe",
  description:
    "Explore the biography, career timeline, and 'Why I Stayed' national conviction piece of Prof. Adebola Adewunmi Aderibigbe, Professor of Mass Communication at FUOYE.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* 1. Header & Executive Bio */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
            <span>Academic Biography</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">
            About Prof. Adebola Aderibigbe
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            Scholar, Mentor, and Champion of Strategic & Development Communication
          </p>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Prof. Adebola Adewunmi Aderibigbe is a Professor in the Department of Mass Communication,
            Faculty of Communication and Media Studies at the Federal University Oye-Ekiti (FUOYE), Nigeria.
            With a distinguished academic career spanning over eighteen years, his scholarship and advisory
            footprint connect mass media research, emerging technology discourse, institutional quality assurance,
            and youth empowerment.
          </p>
        </div>

        {/* 2. Detailed Biography & Institutional Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-[#E5E7EB]/90 leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-white tracking-tight pb-2 border-b border-white/10">
              Academic Background & Scholarly Journey
            </h2>
            <p>
              Prof. Aderibigbe earned his Bachelor of Science (BSc) in Mass Communication from Bowen University,
              Iwo in 2006, where his outstanding scholarship began. He subsequently obtained his Master of Science (MSc)
              from the University of Lagos (UNILAG) in 2011, culminating in his Doctor of Philosophy (PhD) in Communication
              and Media Studies from Babcock University in 2014.
            </p>
            <p>
              Throughout his eighteen years in higher education, he has taught more than thirty university-level courses,
              bridging theoretical rigor and real-world media strategy. Recognising the need for character-driven and
              practical communication education, he pioneered innovative modules including <em>Public Speaking Essentials</em> and{" "}
              <em>Principles of Excellent Living</em>.
            </p>
            <p>
              His research contributions have appeared in high-impact peer-reviewed journals including{" "}
              <em>Frontiers in Psychology</em>, <em>Communication and the Public</em>, and the <em>Journal of African Union Studies</em>.
              He has successfully executed competitive grants from international and domestic foundations, notably the Ford Foundation
              and Bowen University.
            </p>

            <h2 className="text-2xl font-bold text-white tracking-tight pt-6 pb-2 border-b border-white/10">
              Institutional Leadership & Public Service
            </h2>
            <p>
              Beyond teaching and publication, Prof. Aderibigbe serves as the Director of the Career Services Centre at FUOYE,
              spearheading university-industry partnerships, student mentorship programs, and career readiness frameworks for thousands
              of Nigerian undergraduates. He is an elected Fellow of the Institute of Security of Nigeria (FISN), a Fellow of the Institute
              of Corporate Administration (FCIA), and a Charter Member of the Nigeria Association of Artificial Intelligence Practitioners.
            </p>
            <p>
              His statutory contributions to higher education quality assurance include serving as External Examiner for postgraduate and
              undergraduate degrees in more than ten Nigerian universities, and chairing National Universities Commission (NUC) accreditation panels.
            </p>
          </div>

          {/* CV & Quick Fact Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
                  <span className="text-xs text-gray-400">Comprehensive Record</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                Download the complete academic profile, including exhaustive publications, conference papers, grants, and administrative roles.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="/documents/Prof_Adebola_Aderibigbe_CV.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full CV (PDF)</span>
                </a>
                <p className="text-[11px] text-center text-gray-500">
                  Updated October 2026 • Official Copy
                </p>
              </div>
            </div>

            {/* Core Snapshot */}
            <div className="rounded-3xl bg-[#161822] border border-white/10 p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Institutional Snapshot
              </h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Federal University Oye-Ekiti (FUOYE)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>PhD Babcock (2014) • MSc UNILAG (2011)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Africa Leadership Award (2026)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Director, Career Services Centre</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. The Core Manifesto: "Why I Stayed" */}
        <div id="why-i-stayed" className="scroll-mt-24 rounded-3xl bg-[#161822] border border-white/10 p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-gray-400">
                Personal Manifesto & Conviction
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Why I Stayed: Building Nigeria’s Communicators from Within
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 self-start sm:self-auto">
              Nigerian by Choice, Global by Impact
            </span>
          </div>

          <div className="space-y-6 text-gray-200 leading-relaxed text-base sm:text-lg">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">1. The Pull</h3>
              <p className="text-gray-300">
                The contemporary wave of “japa” has touched every classroom, faculty lounge, and research cluster in Nigeria.
                The prospects of foreign academic tenure, international research endowments, and predictable environments are real
                and understandable. Many valued colleagues answered that call, and their contributions on the global stage remain commendable.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">2. The Conviction</h3>
              <p className="text-gray-300">
                Yet, for me, the conviction to stay was grounded in a simple truth: <strong>a nation cannot outsource the training of its communicators.</strong>{" "}
                Communication is the lifeblood of national cohesion, democratic stability, and socio-economic development. If our most experienced
                scholars vacate our universities, who guides the 200-level undergraduate learning broadcast ethics? Who mentors the PhD researcher
                investigating the impact of disinformation on Nigerian elections?
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">3. What We Have Built Here</h3>
              <p className="text-gray-300">
                By staying, we built institutional legacies that cannot be quantified solely by paper citations:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-base text-gray-300">
                <li>Over thirty undergraduate and postgraduate courses taught across eighteen years.</li>
                <li>MSc and PhD scholars successfully supervised who now serve as journalists, lecturers, and corporate directors.</li>
                <li>Curricular innovations such as <em>Public Speaking Essentials</em> that instill executive confidence in students.</li>
                <li>Federal accreditation panels chaired under the NUC, ensuring quality standards in newly established faculties.</li>
                <li>Directing FUOYE’s Career Services Centre, linking thousands of ambitious youths with national and multinational opportunities.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <h3 className="text-lg font-bold text-white">4. A Word to the Next Generation</h3>
              <p className="italic font-serif text-white text-lg sm:text-xl">
                “Nigeria will not be built by spectators. It will be built by those who choose to plant their feet, roll up their sleeves,
                and impart excellence right here. My life’s work is dedicated to proving that world-class communicators can be formed right here in Nigeria.”
              </p>
              <p className="text-sm font-semibold text-gray-400 pt-2">
                — Prof. Adebola Adewunmi Aderibigbe
              </p>
            </div>
          </div>
        </div>

        {/* 4. Career Timeline */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
                Chronology of Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E5E7EB] mt-1">
                Career Milestones (2006 – Present)
              </h2>
            </div>
            <Link
              href="/credentials"
              className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>Explore Credentials Bento Grid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-8">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#0F1117] group-hover:scale-125 transition-transform" />

                <div className="p-5 rounded-2xl bg-[#161822] border border-white/10 hover:border-white/20 transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-white">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Photo Gallery Placeholders (Mixed-Size Grid) */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              Visual Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E5E7EB] mt-1">
              Field, Academic & Mentorship Gallery
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              A curated selection from international conferences, faculty events, and classroom lectures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="aspect-[4/3] rounded-2xl bg-[#161822] border border-white/10 p-6 flex flex-col justify-end">
              <span className="text-xs font-bold text-white">1st Africa Leadership Summit</span>
              <span className="text-[11px] text-gray-400">Accra, Ghana (October 2026)</span>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-[#161822] border border-white/10 p-6 flex flex-col justify-end">
              <span className="text-xs font-bold text-white">EU-SDGN II Journalist Training</span>
              <span className="text-[11px] text-gray-400">Ado-Ekiti (April 2026)</span>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-[#161822] border border-white/10 p-6 flex flex-col justify-end">
              <span className="text-xs font-bold text-white">NUC Accreditation Panel</span>
              <span className="text-[11px] text-gray-400">Chrisland University (November 2025)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
