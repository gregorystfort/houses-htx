import Image from "next/image";
import Link from "next/link";
import { urlFor, formatDate } from "@/lib/sanity";

interface BlogCardProps {
  post: {
    title: string;
    slug: { current: string };
    excerpt?: string;
    mainImage?: any;
    category?: string;
    publishedAt?: string;
  };
}

const categoryLabels: Record<string, string> = {
  "market-update": "Market Update",
  "neighborhood-guide": "Neighborhood Guide",
  "buyer-tips": "Buyer Tips",
  "houston-story": "Houston Story",
  listings: "Listings",
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="card overflow-hidden">
        <div className="aspect-[16/10] relative overflow-hidden bg-sand">
          {post.mainImage ? (
            <Image src={urlFor(post.mainImage).width(640).height(400).url()} alt={post.mainImage.alt || post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center"><span className="font-heading text-clay/30 text-4xl">HTX</span></div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            {post.category && <span className="tag">{categoryLabels[post.category] || post.category}</span>}
            {post.publishedAt && <span className="font-body text-body-sm text-clay">{formatDate(post.publishedAt)}</span>}
          </div>
          <h3 className="font-heading font-bold text-h4 mb-2 group-hover:text-rust transition-colors">{post.title}</h3>
          {post.excerpt && <p className="font-body text-body text-clay line-clamp-2">{post.excerpt}</p>}
        </div>
      </article>
    </Link>
  );
}
