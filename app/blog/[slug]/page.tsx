import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client, urlFor, formatDate } from "@/lib/sanity";
import { blogBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch(blogBySlugQuery, { slug: params.slug });
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export const revalidate = 60;

const categoryLabels: Record<string, string> = {
  "market-update": "Market Update", "neighborhood-guide": "Neighborhood Guide",
  "buyer-tips": "Buyer Tips", "houston-story": "Houston Story", listings: "Listings",
};

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <Image src={urlFor(value).width(1200).url()} alt={value.alt || "Blog image"} width={1200} height={675} className="rounded-card w-full" />
          {value.caption && <figcaption className="font-body text-body-sm text-clay mt-2 text-center">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};

export default async function BlogPostPage({ params }: Props) {
  const post = await client.fetch(blogBySlugQuery, { slug: params.slug });
  if (!post) notFound();

  return (
    <article>
      <section className="relative bg-black text-white">
        {post.mainImage && <Image src={urlFor(post.mainImage).width(1920).height(800).url()} alt={post.mainImage.alt || post.title} fill className="object-cover opacity-40" priority />}
        <div className="container-site relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              {post.category && <span className="tag">{categoryLabels[post.category]}</span>}
              {post.publishedAt && <span className="font-body text-body-sm text-white/60">{formatDate(post.publishedAt)}</span>}
            </div>
            <h1 className="text-h1 md:text-[3.5rem] md:leading-[4rem] font-heading font-bold mb-4">{post.title}</h1>
            {post.excerpt && <p className="font-body text-body-lg text-white/70">{post.excerpt}</p>}
            {post.author && (
              <div className="flex items-center gap-3 mt-8">
                {post.author.image && <Image src={urlFor(post.author.image).width(48).height(48).url()} alt={post.author.name} width={48} height={48} className="rounded-full" />}
                <span className="font-body text-body font-medium">{post.author.name}</span>
              </div>
            )}
          </div>
        </div>
        <div className="h-1 bg-rust" />
      </section>
      <section className="container-site py-16">
        <div className="max-w-3xl mx-auto portable-text">
          {post.body && <PortableText value={post.body} components={portableTextComponents} />}
        </div>
      </section>
      {post.neighborhoods && post.neighborhoods.length > 0 && (
        <section className="bg-sand py-12">
          <div className="container-site">
            <h3 className="font-heading font-bold text-h4 mb-6">Neighborhoods mentioned</h3>
            <div className="flex flex-wrap gap-3">
              {post.neighborhoods.map((n: any) => (<Link key={n.slug.current} href={`/neighborhoods/${n.slug.current}`} className="btn-ghost text-body-sm">{n.name}</Link>))}
            </div>
          </div>
        </section>
      )}
      <section className="container-site py-12">
        <Link href="/blog" className="font-heading font-medium text-rust hover:text-rust-deep transition-colors">&larr; Back to Blog</Link>
      </section>
    </article>
  );
}
