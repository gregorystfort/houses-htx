import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlay?: boolean;
}

export default function Hero({ title, subtitle, cta, secondaryCta, overlay = true }: HeroProps) {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(45deg, #C45A3C 25%, transparent 25%, transparent 75%, #C45A3C 75%), linear-gradient(45deg, #C45A3C 25%, transparent 25%, transparent 75%, #C45A3C 75%)", backgroundSize: "60px 60px", backgroundPosition: "0 0, 30px 30px" }} />
      </div>
      <div className="container-site relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-h1 md:text-[3.5rem] md:leading-[4rem] lg:text-[4.5rem] lg:leading-[5rem] font-heading font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-body-lg md:text-xl font-body text-white/70 mb-10 max-w-2xl">{subtitle}</p>}
          {(cta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {cta && <Link href={cta.href} className="btn-primary">{cta.label}</Link>}
              {secondaryCta && <Link href={secondaryCta.href} className="bg-transparent text-white border border-white/30 font-heading font-medium px-6 py-3 rounded-button hover:bg-white hover:text-black transition-colors duration-200">{secondaryCta.label}</Link>}
            </div>
          )}
        </div>
      </div>
      <div className="h-1 bg-rust" />
    </section>
  );
}
