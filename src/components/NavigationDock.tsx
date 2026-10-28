"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  BookOpen,
  PlayCircle,
  PenLine,
  Star,
  Quote,
  Mail,
  Download,
  Library,
  MoreHorizontal,
  X,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { useScrolled, useScrollHidden, useActiveSection } from "@/components/useScrolled";

type Icon = typeof Home;

const Linkedin = ((props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h3.96V21H3V9.75Zm6.44 0h3.8v1.54h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.74 2.63 4.74 6.05V21h-3.95v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21H9.44V9.75Z" />
  </svg>
)) as unknown as Icon;

/**
 * A dock destination. `section` items are real sections of the home page: they scroll there when
 * you are already on the home page and route to `/#id` otherwise. The rest are separate pages.
 */
interface DockItem {
  name: string;
  href: string;
  icon: Icon;
  section?: string;
  mobile?: boolean;
}

interface ExternalItem {
  name: string;
  href: string;
  icon: Icon;
  download?: boolean;
}

const pages: DockItem[] = [
  { name: "Home", href: "/", icon: Home, mobile: true },
  { name: "Experience", href: "/#experience", icon: Briefcase, section: "experience", mobile: true },
  { name: "Research", href: "/#research", icon: BookOpen, section: "research", mobile: true },
  { name: "Lectures", href: "/#lectures", icon: PlayCircle, section: "lectures", mobile: true },
  { name: "Articles", href: "/#articles", icon: PenLine, section: "articles" },
  { name: "Testimonials", href: "/#testimonials", icon: Quote, section: "testimonials" },
  { name: "Featured", href: "/#featured", icon: Star, section: "featured" },
];

const contact: DockItem = { name: "Contact", href: "/contact", icon: Mail, mobile: true };

const externals: ExternalItem[] = [
  { name: "Download CV", href: "/documents/Prof_Adebola_Aderibigbe_CV.pdf", icon: Download, download: true },
  { name: "LinkedIn", href: profileData.socialLinks.linkedIn, icon: Linkedin },
  { name: "Google Scholar", href: profileData.socialLinks.googleScholar, icon: Library },
];

/** Section ids in page order, for the scroll-spy. */
const SECTION_IDS = pages.flatMap((p) => (p.section ? [p.section] : []));

/** Icon button: a 40px (36px on desktop) circle that widens smoothly when it becomes the active item. */
const slot =
  "group relative flex h-10 items-center rounded-full px-3 z-10 transition-[background-color,color,transform] duration-300 ease-out active:scale-95 lg:h-9 lg:px-[10px]";

function Tip({ children }: { children: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-bg opacity-0 transition-[opacity,transform] duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
    >
      {children}
    </span>
  );
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export default function NavigationDock() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const hiddenByScroll = useScrollHidden();
  const activeSection = useActiveSection(SECTION_IDS);
  const [moreOpen, setMoreOpen] = useState(false);
  // Which page item was just clicked, and from where, so it lights up before the new page arrives.
  const [pending, setPending] = useState<{ name: string; from: string } | null>(null);
  // The glide: where the hover highlight sits, and whether it is currently shown.
  const [glide, setGlide] = useState<{ left: number; width: number; show: boolean; animate: boolean }>({
    left: 0,
    width: 0,
    show: false,
    animate: false,
  });
  const bar = useRef<HTMLDivElement>(null);
  const moreButton = useRef<HTMLButtonElement>(null);

  const onHome = pathname === "/";

  const isActive = (item: DockItem) => {
    if (pending && pending.from === pathname) return pending.name === item.name;
    if (item.section) return onHome && activeSection === item.section;
    if (item.href === "/") return onHome && activeSection === "";
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  // On the home page, move within the page ourselves so repeat clicks always scroll.
  const goTo = (e: React.MouseEvent, item: DockItem) => {
    setMoreOpen(false);
    const leavesPage = !item.section && item.href !== pathname && item.href !== "/";
    if (leavesPage || (!onHome && item.href === "/")) setPending({ name: item.name, from: pathname });
    if (!onHome) return;
    if (item.href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: scrollBehavior() });
      history.replaceState(null, "", "/");
    } else if (item.section) {
      const el = document.getElementById(item.section);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
      history.replaceState(null, "", `#${item.section}`);
    }
  };

  // Escape closes the More sheet and hands focus back to the button that opened it.
  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        moreButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [moreOpen]);

  const glideTo = (e: React.MouseEvent | React.FocusEvent) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>("a, button");
    if (!target || !bar.current || !bar.current.contains(target)) return;
    setGlide((g) => ({
      left: target.offsetLeft,
      width: target.offsetWidth,
      show: true,
      // Only slide between items; the first appearance snaps into place and fades in.
      animate: g.show,
    }));
  };
  const glideAway = () => setGlide((g) => ({ ...g, show: false }));

  // Left/Right arrows move between the visible dock buttons, Home/End jump to the ends.
  const onBarKeyDown = (e: React.KeyboardEvent) => {
    const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!keys.includes(e.key) || !bar.current) return;
    const items = Array.from(bar.current.querySelectorAll<HTMLElement>("a, button")).filter(
      (el) => el.offsetParent !== null,
    );
    const i = items.indexOf(document.activeElement as HTMLElement);
    if (i === -1) return;
    e.preventDefault();
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? items.length - 1
          : (i + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
    items[next].focus();
  };

  const renderPage = (item: DockItem, accent = false) => {
    const ItemIcon = item.icon;
    const active = isActive(item);
    const tone = active
      ? "bg-accent text-on-accent shadow-[0_6px_18px_-8px_var(--accent)]"
      : accent
        ? "bg-accent/15 text-accent hover:bg-accent hover:text-on-accent"
        : "text-mute hover:text-ink";
    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={(e) => goTo(e, item)}
        aria-label={item.name}
        aria-current={active ? (item.section ? "location" : "page") : undefined}
        className={`${slot} ${tone}`}
      >
        <ItemIcon className="h-4 w-4 shrink-0" />
        <span
          className={`overflow-hidden whitespace-nowrap text-[13px] font-medium transition-[max-width,opacity,margin] duration-300 ease-out ${
            active ? "ml-1.5 max-w-[110px] opacity-100" : "ml-0 max-w-0 opacity-0"
          }`}
        >
          {item.name}
        </span>
        {!active && <Tip>{item.name}</Tip>}
      </Link>
    );
  };

  const renderExternal = (item: ExternalItem) => {
    const ItemIcon = item.icon;
    return (
      <a
        key={item.name}
        href={item.href}
        aria-label={item.name}
        {...(item.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
        className={`${slot} text-mute hover:text-ink`}
      >
        <ItemIcon className="h-4 w-4" />
        <Tip>{item.name}</Tip>
      </a>
    );
  };

  const hiddenOnMobile = pages.filter((p) => !p.mobile);
  const moreActive = hiddenOnMobile.some((p) => isActive(p));
  const slideAway = hiddenByScroll && !moreOpen;

  return (
    <>
      {moreOpen && (
        <div className="fixed inset-0 z-40 bg-bg/70 backdrop-blur-sm md:hidden" onClick={() => setMoreOpen(false)}>
          <div
            role="dialog"
            aria-label="More navigation"
            className="absolute left-4 right-4 top-36 rounded-3xl border border-line bg-tile p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-1 flex items-center justify-between px-3 pt-1">
              <span className="text-sm text-mute">More</span>
              <button
                onClick={() => setMoreOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-mute hover:text-ink"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="grid grid-cols-2 gap-1">
              {hiddenOnMobile.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => goTo(e, item)}
                      className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm text-ink hover:bg-line"
                    >
                      <ItemIcon className={`h-4 w-4 ${isActive(item) ? "text-accent" : "text-mute"}`} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              {externals.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      {...(item.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                      className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm text-ink hover:bg-line"
                    >
                      <ItemIcon className="h-4 w-4 text-mute" />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <nav
        aria-label="Primary"
        onKeyDown={onBarKeyDown}
        className={`fixed left-1/2 top-[72px] z-50 max-w-[calc(100vw-1.5rem)] -translate-x-1/2 transition-transform duration-300 ease-out lg:top-[10px] ${
          slideAway ? "max-lg:-translate-y-[150%]" : ""
        }`}
      >
        <div
          ref={bar}
          onMouseOver={glideTo}
          onFocus={glideTo}
          onMouseLeave={glideAway}
          onBlur={glideAway}
          className={`relative flex items-center gap-0.5 rounded-full border p-1 backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] duration-500 ease-out ${
            scrolled
              ? "scale-100 border-line bg-tile/95 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
              : "scale-[1.03] border-line/60 bg-tile/50 shadow-none"
          }`}
        >
          <span
            aria-hidden
            className={`pointer-events-none absolute bottom-1 left-0 top-1 rounded-full bg-line ease-[cubic-bezier(0.22,1,0.36,1)] ${
              glide.animate
                ? "transition-[transform,width,opacity] duration-300"
                : "transition-opacity duration-150"
            } ${glide.show ? "opacity-100" : "opacity-0"}`}
            style={{ width: glide.width, transform: `translateX(${glide.left}px)` }}
          />
          <div className="hidden items-center gap-0.5 md:flex">
            {pages.map((p) => renderPage(p))}
            <span className="mx-1.5 h-5 w-px bg-line" aria-hidden />
            {renderPage(contact, true)}
            {externals.map(renderExternal)}
          </div>

          <div className="flex items-center gap-0.5 md:hidden">
            {pages.filter((p) => p.mobile).map((p) => renderPage(p))}
            {renderPage(contact, true)}
            <button
              ref={moreButton}
              onClick={() => setMoreOpen((o) => !o)}
              aria-label="More"
              aria-expanded={moreOpen}
              className={`${slot} ${moreOpen || moreActive ? "bg-line text-ink" : "text-mute hover:text-ink"}`}
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
