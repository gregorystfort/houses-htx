"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-clay/10">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl md:text-2xl tracking-wide text-black">
              HOUSES <span className="text-rust">HTX</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/neighborhoods" className="font-body text-body-sm font-medium text-clay hover:text-black transition-colors uppercase tracking-wider">Neighborhoods</Link>
            <Link href="/blog" className="font-body text-body-sm font-medium text-clay hover:text-black transition-colors uppercase tracking-wider">Blog</Link>
            <Link href="/about" className="font-body text-body-sm font-medium text-clay hover:text-black transition-colors uppercase tracking-wider">About</Link>
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-black transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-black transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-black transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        {mobileOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4">
            <Link href="/neighborhoods" onClick={() => setMobileOpen(false)} className="font-body text-body font-medium text-clay hover:text-black transition-colors">Neighborhoods</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="font-body text-body font-medium text-clay hover:text-black transition-colors">Blog</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="font-body text-body font-medium text-clay hover:text-black transition-colors">About</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
