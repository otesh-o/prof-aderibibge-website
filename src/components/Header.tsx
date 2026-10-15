"use client";

import { useState } from "react";
import Link from "next/link";
import SiteSearch from "@/components/search/SiteSearch";
import { useScrolled } from "@/components/useScrolled";

export default function Header() {
  const scrolled = useScrolled();
  // While results are showing, lift the header above the floating dock so they never sit under it.
  const [searching, setSearching] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-[background-color,border-color] duration-500 ${
        searching ? "max-lg:z-[55]" : ""
      } ${scrolled ? "border-line bg-bg/90" : "border-transparent bg-bg/40"}`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-[17px] font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          Adebola Aderibigbe
        </Link>

        <SiteSearch onActiveChange={setSearching} />
      </div>
    </header>
  );
}
