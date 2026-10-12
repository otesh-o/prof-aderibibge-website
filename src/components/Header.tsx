import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0F17]/80 border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="group flex flex-col justify-center"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tight text-[#E5E7EB] group-hover:text-blue-400 transition-colors">
            Adebola Aderibigbe
          </span>
          <span className="text-[11px] font-medium tracking-wide text-[#9CA3AF] uppercase">
            Professor of Mass Communication
          </span>
        </Link>

        {/* Right side left clean and free of menus as requested */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            FUOYE
          </span>
          <Link
            href="/contact"
            className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
