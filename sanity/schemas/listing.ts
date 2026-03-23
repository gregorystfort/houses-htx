import { defineField, defineType } from "sanity";

export default defineType({
  name: "listing",
  title: "Listing",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "address",
        maxLength: 96,
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Pending", value: "pending" },
          { title: "Sold", value: "sold" },
          { title: "Coming Soon", value: "coming-soon" },
        ],
      },
      initialValue: "active",
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    }),
    defineField({
      name: "sqft",
      title: "Square Footage",
      type: "number",
    }),
    defineField({
      name: "yearBuilt",
      title: "Year Built",
      type: "number",
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Single Family", value: "single-family" },
          { title: "Townhouse", value: "townhouse" },
          { title: "Condo", value: "condo" },
          { title: "Multi-Family", value: "multi-family" },
          { title: "Land", value: "land" },
        ],
      },
    }),
    defineField({
      name: "neighborhood",
      title: "Neighborhood",
      type: "reference",
      to: [{ type: "neighborhood" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mlsNumber",
      title: "MLS Number",
      type: "string",
    }),
    defineField({
      name: "listingUrl",
      title: "External Listing URL",
      type: "url",
      description: "Link to full listing on MLS or agent site",
    }),
  ],
  preview: {
    select: {
      title: "address",
      subtitle: "price",
      media: "images.0",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle
          ? `$${subtitle.toLocaleString()}`
          : "No price set",
      };
    },
  },
});
