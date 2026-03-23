import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity";
import { neighborhoodBySlugQuery } from "@/lib/queries";
import ListingCard from "@/components/ListingCard";
import BlogCard from "@/components/BlogCard";
import { notFound } from "next/navigation";

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = await client.fetch(neighborhoodBySlugQuery, { slug: params.slug });
  if (!n) return { title: "Neighborhood Not Found" };
  return { title: `${n.name} \u2014 Neighborhood Guide`, description: n.overview };
}

export const revalidate = 60;

export default async function NeighborhoodPage({ params }: Props) {
  const n = await client.fetch(neighborhoodBySlugQuery, { slug: params.slug });
  if (!n) notFound();

  return (
    <>
      <section className="relative bg-black text-white">
        {n.heroImage && <Image src={urlFor(n.heroImage).width(1920).height(800).url()} alt={n.heroImage.alt || n.name} fill className="object-cover opacity-40" priority />}
        <div className="container-site relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            {n.region && <span className="tag mb-4 inline-block">{n.region.replace("-", " ")}</span>}
            <h1 className="text-h1 md:text-[3.5rem] md:leading-[4rem] font-heading font-bold mb-2">{n.name}</h1>
            {n.tagline && <p className="font-body text-xl text-rust italic mb-6">{n.tagline}</p>}
            {n.overview && <p className="font-body text-body-lg text-white/70 max-w-2xl">{n.overview}</p>}
            <div className="flex flex-wrap gap-6 mt-8">
              {n.medianPrice && (<div><span className="font-body text-body-sm text-white/50 uppercase tracking-wider">Median Price</span><p className="font-mono text-2xl font-bold text-rust">{n.medianPrice}</p></div>)}
              {n.priceRange && (<div><span className="font-body text-body-sm text-white/50 uppercase tracking-wider">Price Range</span><p className="font-mono text-2xl font-bold">{n.priceRange}</p></div>)}
            </div>
          </div>
        </div>
        <div className="h-1 bg-rust" />
      </section>

      {(n.vibe?.length > 0 || n.highlights?.length > 0) && (
        <section className="bg-sand py-10">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {n.vibe?.length > 0 && (<div><h3 className="font-heading font-semibold text-h5 uppercase tracking-wider mb-4 text-clay">The Vibe</h3><div className="flex flex-wrap gap-2">{n.vibe.map((tag: string) => (<span key={tag} className="tag">{tag}</span>))}</div></div>)}
              {n.highlights?.length > 0 && (<div><h3 className="font-heading font-semibold text-h5 uppercase tracking-wider mb-4 text-clay">Highlights</h3><ul className="space-y-2">{n.highlights.map((h: string) => (<li key={h} className="font-body text-body text-black flex items-start gap-2"><span className="text-rust mt-1">&#9656;</span>{h}</li>))}</ul></div>)}
            </div>
          </div>
        </section>
      )}

      {n.body && (<section className="container-site py-16"><div className="max-w-3xl mx-auto portable-text"><PortableText value={n.body} /></div></section>)}

      {n.listings?.length > 0 && (
        <section className="bg-sand py-16">
          <div className="container-site">
            <h2 className="text-h2 font-heading font-bold mb-8">Active Listings in {n.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{n.listings.map((l: any) => (<ListingCard key={l._id} listing={l} />))}</div>
          </div>
        </section>
      )}

      {n.blogs?.length > 0 && (
        <section className="container-site py-16">
          <h2 className="text-h2 font-heading font-bold mb-8">Stories from {n.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{n.blogs.map((post: any) => (<BlogCard key={post._id} post={post} />))}</div>
        </section>
      )}

      <section className="container-site py-12">
        <Link href="/neighborhoods" className="font-heading font-medium text-rust hover:text-rust-deep transition-colors">&larr; All Neighborhoods</Link>
      </section>
    </>
  );
}
