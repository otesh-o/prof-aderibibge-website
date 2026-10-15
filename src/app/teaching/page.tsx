import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import LectureLibrary from "@/components/teaching/LectureLibrary";
import SpotlightCard from "@/components/SpotlightCard";
import { masterClassesData } from "@/data/mentorship";
import { featuredModulesData, universityCoursesData, lectureVideosData } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching, Modules & Lectures | Prof. Adebola Aderibigbe",
  description:
    "Lecture videos, course outlines and the modules he created (Public Speaking Essentials, Principles of Excellent Living) by Prof. Adebola Adewunmi Aderibigbe at FUOYE.",
};

const wrap = "mx-auto max-w-[1400px] px-5 sm:px-8";

export default function TeachingPage() {
  // Offer an outline download only when that file is really in /public.
  const hasFile = (url?: string) => !!url && existsSync(path.join(process.cwd(), "public", url));

  const stats = [
    { value: String(lectureVideosData.length), label: "recorded lectures" },
    { value: String(universityCoursesData.length), label: "course outlines" },
    { value: String(featuredModulesData.length), label: "modules he created" },
    { value: "18+", label: "years of teaching" },
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
            <p className="text-sm font-medium text-accent">Teaching</p>
            <h1 className="mt-0.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Lectures and teaching
            </h1>
            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-mute">
              Recorded lectures, course outlines and the modules created by Prof. Aderibigbe for African higher
              education.
            </p>
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

      {/* Lecture library */}
      <section id="lectures" className={`${wrap} pb-8`}>
        <LectureLibrary />
      </section>

      {/* Modules: his profile names these two and nothing more yet */}
      <section id="modules" className="border-t border-line">
        <div className={`${wrap} py-8`}>
          <p className="text-sm font-medium text-accent">Curriculum</p>
          <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">Modules he created</h2>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {featuredModulesData.map((m) => (
              <li key={m.code} className="rounded-xl bg-tile p-5 ring-1 ring-inset ring-line">
                <h3 className="text-lg font-semibold leading-snug text-ink">{m.title}</h3>
                <p className="mt-1 text-sm text-mute">Created by Prof. Aderibigbe. Syllabus to be added.</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Master classes: only the one his brief describes, with its details still to come */}
      <section id="master-classes" className="border-t border-line">
        <div className={`${wrap} py-8`}>
          <p className="text-sm font-medium text-accent">Mentorship</p>
          <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">Master classes</h2>
          <p className="mt-1 max-w-[62ch] text-sm leading-relaxed text-mute">
            Practical programmes for students and professionals. Register your interest and his office will
            confirm the date.
          </p>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {masterClassesData
              .filter((mc) => mc.confirmed !== false)
              .map((mc) => (
                <SpotlightCard
                  as="li"
                  key={mc.id}
                  className="group flex flex-col rounded-xl bg-tile p-5 ring-1 ring-inset ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50"
                >
                  <h3 className="font-semibold leading-snug text-ink">{mc.title}</h3>

                  <dl className="mt-3 grid grid-cols-3 gap-x-4 border-t border-line pt-3 text-sm">
                    <div>
                      <dt className="text-xs text-mute">Format</dt>
                      <dd className="mt-0.5 text-ink">To be confirmed</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-mute">Date</dt>
                      <dd className="mt-0.5 text-ink">To be agreed</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-mute">Audience</dt>
                      <dd className="mt-0.5 text-ink">Students, professionals</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-4">
                    <Link
                      href={`/contact?reason=mentorship&class=${encodeURIComponent(mc.title)}`}
                      className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      Register interest
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </SpotlightCard>
              ))}
          </ul>
        </div>
      </section>

      {/* Course outlines */}
      <section id="courses" className="border-t border-line">
        <div className={`${wrap} py-8`}>
          <p className="text-sm font-medium text-accent">University courses</p>
          <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-ink">Course outlines</h2>

          <ul className="mt-4 divide-y divide-line border-y border-line">
            {universityCoursesData.map((c) => {
              const available = hasFile(c.outlineDownloadUrl);
              return (
                <li
                  key={c.code}
                  className="grid gap-2 py-4 md:grid-cols-[7rem_1fr_auto] md:items-start md:gap-6"
                >
                  <div>
                    <p className="font-semibold text-ink">{c.code}</p>
                    <p className="mt-0.5 text-sm text-mute">
                      {c.credits} credits · {c.level}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold leading-snug text-ink">{c.title}</h3>
                    <p className="mt-0.5 text-sm text-mute">{c.semester}</p>
                    <p className="mt-1.5 max-w-[70ch] text-sm leading-relaxed text-mute line-clamp-2">{c.description}</p>
                  </div>
                  <div className="md:text-right">
                    {available ? (
                      <a
                        href={c.outlineDownloadUrl}
                        download
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                      >
                        <Download className="h-4 w-4" />
                        Outline (PDF)
                      </a>
                    ) : (
                      <span className="text-sm text-mute">Outline to be added</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
