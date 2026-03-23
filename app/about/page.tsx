import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Houses HTX tells the story of Houston housing through its neighborhoods, its market, and its people.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container-site">
          <span className="tag mb-4 inline-block">About</span>
          <h1 className="text-h1 font-heading font-bold mb-4">Why Houses HTX</h1>
          <p className="font-body text-body-lg text-white/60 max-w-2xl">Houston is the fourth-largest city in America, and its housing market is one of the most dynamic in the country. We think it deserves better storytelling.</p>
        </div>
        <div className="h-1 bg-rust mt-16" />
      </section>
      <section className="container-site py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="portable-text">
            <h2>The Mission</h2>
            <p>Houses HTX exists to tell the story of Houston housing. Not just the listings and the prices &mdash; but the neighborhoods, the history, the culture, and the people that make each pocket of this city unique.</p>
            <p>If you&apos;re thinking about buying in Houston, you deserve more than a search filter. You deserve context. You deserve to know why The Heights feels different from Montrose, why EaDo is the neighborhood everyone&apos;s watching, and what makes River Oaks worth the premium.</p>
            <p>That&apos;s what we&apos;re building here.</p>
            <h2>What We Cover</h2>
            <p><strong>Neighborhood Guides</strong> &mdash; Deep dives into Houston&apos;s most compelling neighborhoods. The vibe, the price range, the highlights, and what you should know before you buy.</p>
            <p><strong>Market Updates</strong> &mdash; Real data on Houston&apos;s housing market. Median prices, inventory, trends, and how Houston compares to other major metros.</p>
            <p><strong>Active Listings</strong> &mdash; Curated homes on the market that tell a story &mdash; whether it&apos;s a restored Craftsman in The Heights or a modern new build in Midtown.</p>
            <h2>Houston is the Move</h2>
            <p>People are moving to Houston from every direction. From California, from the Northeast, from overseas. They come for the jobs, the affordability (relative to other major cities), the food, the culture, and the space.</p>
            <p>But Houston is big &mdash; 670 square miles, 88 neighborhoods, and a housing market that can feel overwhelming if you don&apos;t know where to look.</p>
            <p>Houses HTX is the guide we wish we had. Local knowledge, real data, and honest opinions about where to buy in Houston.</p>
            <blockquote>Every house has a story. Every neighborhood has a character. We&apos;re here to tell both.</blockquote>
          </div>
          <div className="mt-12 flex gap-4">
            <Link href="/neighborhoods" className="btn-primary">Explore Neighborhoods</Link>
            <Link href="/blog" className="btn-ghost">Read the Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
