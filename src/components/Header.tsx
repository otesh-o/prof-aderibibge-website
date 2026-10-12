"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchModal from "@/components/search/SearchModal";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0D0E12]/95 border-b border-[#1E212B] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="group flex flex-col justify-center">
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                Adebola Aderibigbe
              </span>
              <span className="text-xs font-mono font-medium text-neutral-400">
                BSc, MSc, PhD
              </span>
            </div>
            <span className="text-[11px] tracking-wider text-neutral-400 font-mono">
              FUOYE · Mass Communication
            </span>
          </Link>

          {/* Right side: Austere search trigger and contact route */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14161E] border border-[#232733] text-xs text-neutral-400 hover:text-white hover:border-[#383E50] transition-colors"
              aria-label="Search site"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/contact"
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-[#14161E] border border-[#232733] text-neutral-300 hover:text-white hover:border-[#383E50] transition-colors"
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
