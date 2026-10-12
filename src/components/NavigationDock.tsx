"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Mic,
  PenTool,
  Mail,
  MoreHorizontal,
  X,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: typeof Home;
  primaryOnMobile?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home, primaryOnMobile: true },
  { name: "About", href: "/about", icon: User, primaryOnMobile: true },
  { name: "Credentials", href: "/credentials", icon: Award, primaryOnMobile: false },
  { name: "Research", href: "/research", icon: BookOpen, primaryOnMobile: true },
  { name: "Teaching", href: "/teaching", icon: GraduationCap, primaryOnMobile: false },
  { name: "Mentorship", href: "/mentorship", icon: Users, primaryOnMobile: false },
  { name: "Speaking", href: "/speaking", icon: Mic, primaryOnMobile: true },
  { name: "Writing", href: "/writing", icon: PenTool, primaryOnMobile: false },
  { name: "Contact", href: "/contact", icon: Mail, primaryOnMobile: true },
];

export default function NavigationDock() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const mobilePrimaryItems = navItems.filter((item) => item.primaryOnMobile);
  const mobileSecondaryItems = navItems.filter((item) => !item.primaryOnMobile);
  const isMoreActive = mobileSecondaryItems.some((item) => pathname === item.href);

  return (
    <>
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-45 bg-black/75 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute bottom-20 left-4 right-4 bg-[#14161E] border border-[#232733] rounded-xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#20232E]">
              <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded text-neutral-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {mobileSecondaryItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#2563EB] text-white"
                        : "text-neutral-300 hover:bg-[#1C1F2B] hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Center Solid Graphite Dock */}
      <nav
        aria-label="Bottom navigation dock"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-200"
      >
        <div className="bg-[#14161E] border border-[#232733] px-2 py-1.5 rounded-xl shadow-2xl flex items-center gap-1">
          {/* Desktop View */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const isHovered = hoveredItem === item.name;

              return (
                <div
                  key={item.href}
                  className="relative flex items-center justify-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Tooltip */}
                  {isHovered && (
                    <div className="absolute -top-9 px-2 py-1 bg-[#1A1D27] text-[11px] font-mono text-neutral-200 rounded border border-[#2D3242] whitespace-nowrap pointer-events-none shadow-lg">
                      {item.name}
                    </div>
                  )}

                  <Link
                    href={item.href}
                    className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                      isActive
                        ? "bg-[#2563EB] text-white"
                        : "text-neutral-400 hover:text-white hover:bg-[#1E212D]"
                    }`}
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Trimmed Dock */}
          <div className="flex md:hidden items-center gap-1">
            {mobilePrimaryItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                    isActive
                      ? "bg-[#2563EB] text-white"
                      : "text-neutral-400 hover:text-white hover:bg-[#1E212D]"
                  }`}
                  aria-label={item.name}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                mobileMenuOpen || isMoreActive
                  ? "bg-[#2563EB]/20 text-blue-400"
                  : "text-neutral-400 hover:text-white hover:bg-[#1E212D]"
              }`}
              aria-label="More navigation items"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
