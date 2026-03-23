import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

interface NeighborhoodCardProps {
  neighborhood: {
    name: string;
    slug: { current: string };
    tagline?: string;
    heroImage?: any;
    overview?: string;
    medianPrice?: string;
    vibe?: string[];
    region?: string;
  };
}

export default function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <Link href={`/neighborhoods/${neighborhood.slug.current}`} className="group">
      <article className="card overflow-hidden">
        <div className="aspect-[16/10] relative overflow-hidden bg-sand">
          {neighborhood.heroImage ? (
            <Image src={urlFor(neighborhood.heroImage).width(640).height(400).url()} alt={neighborhood.heroImage.alt || neighborhood.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center"><span className="font-heading text-rust text-3xl font-bold">{neighborhood.name}</span></div>
          )}
          {neighborhood.medianPrice && (
            <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-button"><span className="font-mono text-body-sm">{neighborhood.medianPrice}</span></div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-heading font-bold text-h4 mb-1 group-hover:text-rust transition-colors">{neighborhood.name}</h3>
          {neighborhood.tagline && <p className="font-body text-body-sm text-rust italic mb-3">{neighborhood.tagline}</p>}
          {neighborhood.overview && <p className="font-body text-body text-clay line-clamp-2 mb-4">{neighborhood.overview}</p>}
          {neighborhood.vibe && neighborhood.vibe.length > 0 && (
            <div className="flex flex-wrap gap-2">{neighborhood.vibe.slice(0, 3).map((tag) => (<span key={tag} className="tag-dark text-[11px]">{tag}</span>))}</div>
          )}
        </div>
      </article>
    </Link>
  );
}
