import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import CountUp from "@/components/CountUp";

const figures = [
  { value: "18+", label: "years in higher education" },
  { value: "30+", label: "courses taught" },
  { value: "10", label: "universities as external examiner" },
];

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-medium text-ink">{children}</strong>
);

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-8 sm:px-8 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:gap-12 lg:py-6">
      <div className="lg:col-span-4">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl ring-1 ring-line lg:aspect-auto lg:h-[min(520px,calc(100dvh-8rem))] lg:max-w-none">
          <Image
            src="/images/prof-aderibigbe.jpg"
            alt="Prof. Adebola Adewunmi Aderibigbe"
            fill
            priority
            sizes="(min-width: 1024px) 380px, 300px"
            className="object-cover object-[50%_20%]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-5 lg:col-span-8">
        <div className="rise" style={step(0)}>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Adebola Adewunmi Aderibigbe
          </h1>
          <p className="mt-2 text-lg font-medium tracking-wide text-ink">BSc, MSc, PhD</p>
        </div>

        <div className="rise max-w-[90ch] space-y-3 text-[15px] leading-relaxed text-mute" style={step(2)}>
          <p>
            With <B>over 18 years</B> at the front of mass communication, strategic and development communication, media
            studies and emerging technology discourse, Prof. Adebola Aderibigbe is one of the few professionals who had
            every reason to leave, and chose instead to stay in Nigeria and build the country&apos;s communicators from
            within.
          </p>
          <p>
            Winner of the <B>Africa Leadership Award (2026)</B>, the <B>Peter Okebukola Distinction Prize</B> and the{" "}
            <B>NYSC Presidential Award</B>, and a recipient of <B>Bowen University&apos;s Distinguished Alumni Award</B>,
            he is a Fellow of the <B>Institute of Security of Nigeria</B> and the{" "}
            <B>Institute of Corporate Administration</B>, and a charter member of the Nigeria Association of Artificial
            Intelligence Practitioners.
          </p>
          <p>
            He directs the Career Services Centre at FUOYE, has taught more than thirty university courses, created the
            Public Speaking Essentials and Principles of Excellent Living modules, and supervises MSc and PhD scholars.
            His research has appeared in Frontiers in Psychology and has been funded by the Ford Foundation. Nationally,
            he chairs NUC accreditation panels, examines for universities across the country and advises media and
            development organisations.
          </p>
        </div>

        <dl className="rise grid grid-cols-3 gap-4 border-t border-line pt-4" style={step(3)}>
          {figures.map((f) => (
            <div key={f.label}>
              <dt className="text-2xl font-semibold tabular-nums tracking-tight text-accent sm:text-3xl">
                <CountUp value={f.value} />
              </dt>
              <dd className="mt-0.5 text-sm leading-snug text-mute">{f.label}</dd>
            </div>
          ))}
        </dl>

        <div className="rise flex flex-wrap items-center gap-x-6 gap-y-3" style={step(4)}>
          <Link
            href="/about"
            className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(180deg,color-mix(in_srgb,var(--accent),white_22%)_0%,var(--accent)_55%,color-mix(in_srgb,var(--accent),black_22%)_100%)] pl-6 pr-5 text-sm font-semibold text-on-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_26px_-10px_var(--accent)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_16px_32px_-10px_var(--accent)] active:translate-y-0 active:scale-[0.98]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
            />
            Read my story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent active:scale-[0.98]"
          >
            Contact Me
          </Link>
          <span className="flex items-center gap-5 text-sm text-mute">
            <a
              href={profileData.socialLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-ink"
            >
              Google Scholar <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={profileData.socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-ink"
            >
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
