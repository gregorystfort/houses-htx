import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { client } from "@/lib/sanity";
import { allBlogsQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Blog",
  description: "Houston housing stories, market updates, neighborhood guides, and buyer tips from Houses HTX.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(allBlogsQuery).catch(() => []);

  return (
    <>
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container-site">
          <span className="tag mb-4 inline-block">Blog</span>
          <h1 className="text-h1 font-heading font-bold mb-4">Houston Housing Stories</h1>
          <p className="font-body text-body-lg text-white/60 max-w-2xl">Market updates, neighborhood deep dives, and the insights you need to navigate Houston real estate.</p>
        </div>
        <div className="h-1 bg-rust mt-16" />
      </section>
      <section className="container-site py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (<BlogCard key={post._id} post={post} />))}
          </div>
        ) : (
          <div className="bg-sand rounded-card p-16 text-center max-w-xl mx-auto">
            <h2 className="font-heading text-h3 text-black mb-3">First post dropping soon</h2>
            <p className="font-body text-body text-clay">We&apos;re writing the definitive guide to Houston housing. Neighborhood stories, market data, and the listings that matter &mdash; all coming soon.</p>
          </div>
        )}
      </section>
    </>
  );
}
