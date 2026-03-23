# Houses HTX

The insider guide to Houston homes. Neighborhood stories, market insights, and active listings.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity.io
- **Styling:** Tailwind CSS
- **Fonts:** Space Grotesk, Inter, Space Mono
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `.env.example` to `.env.local`
3. Fill in your Sanity project ID and dataset

```bash
cp .env.example .env.local
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Content Types

- **Blog Posts** — Market updates, neighborhood guides, buyer tips
- **Neighborhoods** — Guides with vibe tags, median prices, highlights
- **Listings** — Active homes with photos, stats, and neighborhood links
- **Authors** — Blog post authors with bio and photo

## Brand

- **Colors:** Black `#111111`, White `#FFFFFF`, H-Town Rust `#C45A3C`, Warm Sand `#F5F0ED`, Clay Gray `#7A6B63`
- **Fonts:** Space Grotesk (headings), Inter (body), Space Mono (data)
- **Voice:** Informed, local, direct, warm

## Deploy

Push to GitHub, connect to Vercel, add environment variables, deploy.
