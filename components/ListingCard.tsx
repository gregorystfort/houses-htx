import Image from "next/image";
import { urlFor, formatPrice } from "@/lib/sanity";

interface ListingCardProps {
  listing: {
    address: string;
    price: number;
    bedrooms?: number;
    bathrooms?: number;
    sqft?: number;
    propertyType?: string;
    images?: any[];
    listingUrl?: string;
    neighborhood?: { name: string; slug: { current: string } };
  };
}

export default function ListingCard({ listing }: ListingCardProps) {
  const Wrapper = listing.listingUrl ? "a" : "div";
  const wrapperProps = listing.listingUrl ? { href: listing.listingUrl, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Wrapper {...wrapperProps} className="group block">
      <article className="card overflow-hidden">
        <div className="aspect-[16/10] relative overflow-hidden bg-sand">
          {listing.images && listing.images.length > 0 ? (
            <Image src={urlFor(listing.images[0]).width(640).height(400).url()} alt={listing.images[0].alt || listing.address} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center"><span className="font-heading text-clay/30 text-2xl">No Photo</span></div>
          )}
          <div className="absolute top-3 left-3 bg-rust text-white px-3 py-1.5 rounded-button"><span className="font-mono font-bold text-body-sm">{formatPrice(listing.price)}</span></div>
        </div>
        <div className="p-5">
          <h3 className="font-heading font-semibold text-body-lg mb-1 group-hover:text-rust transition-colors truncate">{listing.address}</h3>
          {listing.neighborhood && <p className="font-body text-body-sm text-rust mb-3">{listing.neighborhood.name}</p>}
          <div className="flex items-center gap-4 text-clay font-mono text-body-sm">
            {listing.bedrooms && <span><strong className="text-black">{listing.bedrooms}</strong> bd</span>}
            {listing.bathrooms && <span><strong className="text-black">{listing.bathrooms}</strong> ba</span>}
            {listing.sqft && <span><strong className="text-black">{listing.sqft.toLocaleString()}</strong> sqft</span>}
          </div>
        </div>
      </article>
    </Wrapper>
  );
}
