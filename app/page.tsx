import Link from "next/link";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import NeighborhoodCard from "@/components/NeighborhoodCard";
import ListingCard from "@/components/ListingCard";
import { client } from "@/lib/sanity";
import { recentBlogsQuery, allNeighborhoodsQuery, featuredListingsQuery } from "@/lib/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [blogs, neighborhoods, listings] = await Promise.all([
    client.fetch(recentBlogsQuery).catch(() => []),
    client.fetch(allNeighborhoodsQuery).catch(() => []),
    client.fetch(featuredListingsQuery).catch(() => []),
  ]);

  return (
    <>
      <Hero title="The Story of Houses in Houston" subtitle="Neighborhoods with character. A market that moves. Homes that tell a story. This is Houston real estate \u2014 from the inside." cta={{ label: "Explore Neighborhoods", href: "/neighborhoods" }} secondaryCta={{ label: "Read the Blog", href: "/blog" }} />

      <section className="container-site py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="tag mb-3 inline-block">Neighborhoods</span>
            <h2 className="text-h2 font-heading font-bold">Find Your Houston</h2>
          </div>
          <Link href="/neighborhoods" className="hidden md:inline-block font-heading font-medium text-rust hover:text-rust-deep transition-colors">View all &rarr;</Link>
        </div>
        {neighborhoods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.slice(0, 6).map((n: any) => (<NeighborhoodCard key={n._id} neighborhood={n} />))}
          </div>
        ) : (
          <div className="bg-sand rounded-card p-12 text-center">
            <p className="font-heading text-h4 text-clay mb-2">Neighborhoods coming soon</p>
            <p className="font-body text-body text-clay/70">We&apos;re building out Houston&apos;s neighborhood guides. Check back soon.</p>
          </div>
        )}
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="tag mb-3 inline-block">Active Listings</span>
              <h2 className="text-h2 font-heading font-bold">On the Market</h2>
            </div>
          </div>
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((l: any) => (<ListingCard key={l._id} listing={l} />))}
            </div>
          ) : (
            <div className="bg-white rounded-card p-12 text-center">
              <p className="font-heading text-h4 text-clay mb-2">Listings coming soon</p>
              <p className="font-body text-body text-clay/70">Featured Houston listings will appear here.</p>
            </div>
          )}
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="tag mb-3 inline-block">From the Blog</span>
            <h2 className="text-h2 font-heading font-bold">Houston Housing Stories</h2>
          </div>
          <Link href="/blog" className="hidden md:inline-block font-heading font-medium text-rust hover:text-rust-deep transition-colors">All posts &rarr;</Link>
        </div>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post: any) => (<BlogCard key={post._id} post={post} />))}
          </div>
        ) : (
          <div className="bg-sand rounded-card p-12 text-center">
            <p className="font-heading text-h4 text-clay mb-2">Blog posts coming soon</p>
            <p className="font-body text-body text-clay/70">Houston housing stories, market updates, and neighborhood guides.</p>
          </div>
        )}
      </section>

      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-site text-center">
          <h2 className="text-h2 md:text-h1 font-heading font-bold mb-4">Ready to find your Houston?</h2>
          <p className="font-body text-body-lg text-white/60 mb-8 max-w-2xl mx-auto">Whether you&apos;re moving to Houston or exploring a new neighborhood, we&apos;ve got the stories and data to help you decide.</p>
          <div className="flex justify-center gap-4">
            <Link href="/neighborhoods" className="btn-primary">Explore Neighborhoods</Link>
          </div>
        </div>
      </section>
    </>
  );
}
