import { Metadata } from "next";
import NeighborhoodCard from "@/components/NeighborhoodCard";
import { client } from "@/lib/sanity";
import { allNeighborhoodsQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Neighborhoods",
  description: "Explore Houston's best neighborhoods. Guides, median prices, vibes, and what to expect from The Heights to River Oaks and beyond.",
};

export const revalidate = 60;

export default async function NeighborhoodsPage() {
  const neighborhoods = await client.fetch(allNeighborhoodsQuery).catch(() => []);

  return (
    <>
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container-site">
          <span className="tag mb-4 inline-block">Neighborhoods</span>
          <h1 className="text-h1 font-heading font-bold mb-4">Find Your Houston</h1>
          <p className="font-body text-body-lg text-white/60 max-w-2xl">Every Houston neighborhood has a story. From historic bungalows in The Heights to modern lofts in EaDo &mdash; find the one that fits.</p>
        </div>
        <div className="h-1 bg-rust mt-16" />
      </section>
      <section className="container-site py-16">
        {neighborhoods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((n: any) => (<NeighborhoodCard key={n._id} neighborhood={n} />))}
          </div>
        ) : (
          <div className="bg-sand rounded-card p-16 text-center max-w-xl mx-auto">
            <h2 className="font-heading text-h3 text-black mb-3">Neighborhood guides loading up</h2>
            <p className="font-body text-body text-clay">We&apos;re documenting Houston&apos;s best neighborhoods &mdash; their vibe, their prices, and what makes them worth exploring. Check back soon.</p>
          </div>
        )}
      </section>
    </>
  );
}
