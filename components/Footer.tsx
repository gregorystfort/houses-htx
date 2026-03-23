import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">HOUSES <span className="text-rust">HTX</span></h3>
            <p className="font-body text-body-sm text-white/60 max-w-xs">The insider guide to Houston homes. Neighborhood stories, market insights, and the listings that matter.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-h5 uppercase tracking-wider mb-4 text-rust">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/neighborhoods" className="font-body text-body-sm text-white/60 hover:text-white transition-colors">Neighborhoods</Link>
              <Link href="/blog" className="font-body text-body-sm text-white/60 hover:text-white transition-colors">Blog</Link>
              <Link href="/about" className="font-body text-body-sm text-white/60 hover:text-white transition-colors">About</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-h5 uppercase tracking-wider mb-4 text-rust">Popular Neighborhoods</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/neighborhoods/the-heights" className="font-body text-body-sm text-white/60 hover:text-white transition-colors">The Heights</Link>
              <Link href="/neighborhoods/montrose" className="font-body text-body-sm text-white/60 hover:text-white transition-colors">Montrose</Link>
              <Link href="/neighborhoods/eado" className="font-body text-body-sm text-white/60 hover:text-white transition-colors">EaDo</Link>
              <Link href="/neighborhoods/river-oaks" className="font-body text-body-sm text-white/60 hover:text-white transition-colors">River Oaks</Link>
            </nav>
          </div>
        </div>
        <div className="section-divider mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-body-sm text-white/40">&copy; {new Date().getFullYear()} Houses HTX. All rights reserved.</p>
          <p className="font-body text-body-sm text-white/40">Houston, Texas</p>
        </div>
      </div>
    </footer>
  );
}
