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
      {/* Mobile "More" Drawer Backdrop & Popover */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-45 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute bottom-24 left-4 right-4 bg-[#161822] border border-white/10 rounded-2xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#9CA3AF]">
                Additional Sections
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-white"
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
                    className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
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

      {/* Floating Bottom Center Dock */}
      <nav
        aria-label="Floating navigation dock"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      >
        <div className="glass-dock px-3 py-2 rounded-full shadow-2xl flex items-center gap-1 sm:gap-1.5 border border-white/10 ring-1 ring-black/40">
          {/* Desktop Full Navigation View */}
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
                  {/* Floating tooltip */}
                  {isHovered && (
                    <div className="absolute -top-10 px-2.5 py-1 bg-[#111827] text-xs font-medium text-white rounded-md shadow-lg border border-white/10 whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                      {item.name}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[#111827] rotate-45 border-r border-b border-white/10" />
                    </div>
                  )}

                  <Link
                    href={item.href}
                    className={`relative p-2.5 rounded-full transition-all duration-200 flex items-center justify-center group ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                        : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-white/10"
                    }`}
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Trimmed Dock (Top 5 + More button) */}
          <div className="flex md:hidden items-center gap-1">
            {mobilePrimaryItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-2.5 rounded-full transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-white/10"
                  }`}
                  aria-label={item.name}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}

            {/* "More" Trigger on Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full transition-all duration-200 flex items-center justify-center ${
                mobileMenuOpen || isMoreActive
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-white/10"
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
