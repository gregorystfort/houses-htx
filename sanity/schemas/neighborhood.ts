import { defineField, defineType } from "sanity";

export default defineType({
  name: "neighborhood",
  title: "Neighborhood",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Neighborhood Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "One-line vibe description, e.g. 'Where History Meets Hustle'",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 4,
      description: "2-3 sentence summary of the neighborhood",
    }),
    defineField({
      name: "vibe",
      title: "Vibe Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "e.g. Historic, Walkable, Trendy, Family-Friendly",
    }),
    defineField({
      name: "medianPrice",
      title: "Median Home Price",
      type: "string",
      description: "e.g. $450K",
    }),
    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
      description: "e.g. $350K - $1.2M",
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "Inner Loop", value: "inner-loop" },
          { title: "Near Northwest", value: "near-northwest" },
          { title: "Near Southwest", value: "near-southwest" },
          { title: "West Houston", value: "west-houston" },
          { title: "North Houston", value: "north-houston" },
          { title: "South Houston", value: "south-houston" },
          { title: "East Houston", value: "east-houston" },
          { title: "Suburbs", value: "suburbs" },
        ],
      },
    }),
    defineField({
      name: "highlights",
      title: "Neighborhood Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Key selling points, e.g. 'Top-rated schools', '10 min to downtown'",
    }),
    defineField({
      name: "body",
      title: "Full Guide",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "heroImage",
    },
  },
});
