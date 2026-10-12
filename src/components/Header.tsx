"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchModal from "@/components/search/SearchModal";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0F1117]/85 border-b border-white/[0.06] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="group flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#E5E7EB] group-hover:text-white transition-colors">
              Adebola Aderibigbe
            </span>
            <span className="text-[11px] font-medium tracking-wide text-[#9CA3AF] uppercase">
              Professor of Mass Communication
            </span>
          </Link>

          {/* Right side: Search trigger and clean contact link */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161822] border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-colors"
              aria-label="Search site"
            >
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-gray-400">
                ⌘K
              </kbd>
            </button>

            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              FUOYE
            </span>

            <Link
              href="/contact"
              className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
