import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  const routes = [
    { href: "/about", label: "His story" },
    { href: "/research", label: "Research" },
    { href: "/teaching", label: "Lectures" },
    { href: "/writing", label: "Articles" },
    { href: "/featured", label: "Featured" },
  ];

  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-[1400px] flex-col justify-center px-5 py-16 sm:px-8">
      <p className="text-sm font-medium text-accent">Page not found</p>
      <h1 className="mt-2 text-5xl font-semibold tracking-tight text-ink sm:text-6xl">404</h1>
      <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-mute">
        That page doesn&apos;t exist, or it has moved. Try the main site, or one of the sections below.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-on-accent transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Back to main site
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        {routes.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {r.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
