import { groq } from "next-sanity";

// Blog queries
export const allBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    "author": author->{ name, image }
  }
`;

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    body,
    "author": author->{ name, image, bio },
    "neighborhoods": neighborhoods[]->{ name, slug, tagline }
  }
`;

export const recentBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt
  }
`;

// Neighborhood queries
export const allNeighborhoodsQuery = groq`
  *[_type == "neighborhood"] | order(name asc) {
    _id,
    name,
    slug,
    tagline,
    heroImage,
    overview,
    vibe,
    medianPrice,
    priceRange,
    region
  }
`;

export const neighborhoodBySlugQuery = groq`
  *[_type == "neighborhood" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    tagline,
    heroImage,
    overview,
    vibe,
    medianPrice,
    priceRange,
    region,
    highlights,
    body,
    "listings": *[_type == "listing" && references(^._id) && status == "active"] | order(price desc)[0...6] {
      _id,
      address,
      slug,
      price,
      bedrooms,
      bathrooms,
      sqft,
      images,
      propertyType
    },
    "blogs": *[_type == "blog" && references(^._id)] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }
  }
`;

// Listing queries
export const activeListingsQuery = groq`
  *[_type == "listing" && status == "active"] | order(price desc) {
    _id,
    address,
    slug,
    price,
    status,
    bedrooms,
    bathrooms,
    sqft,
    propertyType,
    images,
    "neighborhood": neighborhood->{ name, slug }
  }
`;

export const featuredListingsQuery = groq`
  *[_type == "listing" && status == "active"] | order(price desc)[0...6] {
    _id,
    address,
    slug,
    price,
    bedrooms,
    bathrooms,
    sqft,
    propertyType,
    images,
    "neighborhood": neighborhood->{ name, slug }
  }
`;
