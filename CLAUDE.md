# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog website for Henry Ikoh, built with Nuxt.js 2 (Vue 2), TailwindCSS, and @nuxt/content. The site is statically generated and deployed to Netlify. It showcases projects, articles/blog posts, and services.

## Commands

### Development
```bash
npm run dev              # Start development server (default: localhost:3000)
npm run build            # Build for production
npm run generate         # Generate static site for deployment
npm start                # Start production server
```

### Linting
```bash
npm run lint             # Run ESLint and Prettier checks
npm run lintfix          # Auto-fix linting issues with Prettier and ESLint
npm run lint:js          # Run ESLint only on .js and .vue files
npm run lint:prettier    # Run Prettier check only
```

## Architecture

### Content Management System
The site uses **@nuxt/content** for managing markdown-based content:

- **Articles**: Located in `content/articles/` - blog posts with frontmatter (title, description, cover, tag, createdAt)
- **Projects**: Located in `content/projects/` - portfolio project descriptions
- **Content Processing Hook**: `nuxt.config.js:110-121` contains a `content:file:beforeInsert` hook that:
  - Calculates reading time using the `reading-time` library
  - Auto-generates slugs from titles (lowercase, hyphenated, special chars removed)
  - These fields are automatically added to all markdown documents

### Dynamic Routing
- **Blog pages**: Use dynamic route `pages/blog/_slug.vue` to render articles
- The `_slug` parameter matches the auto-generated slug from article frontmatter
- **Static generation**: `nuxt.config.js:150-165` contains a `generate.routes()` function that fetches all articles and pre-generates static routes for `/blog/[slug]` pages

### Page Structure
- **Homepage** (`pages/index.vue`):
  - Hero section with profile and CTA
  - Dynamic tab component system (defaults to "Article-tab")
  - Components: ProjectsTab, ServicesTab, Article-tab
  - ConvertKit script loaded on mount for email collection
- **Blog posts** (`pages/blog/_slug.vue`):
  - Fetches content via `asyncData` using `$content('articles').where({ slug: params.slug })`
  - Dynamic meta tags (OG, Twitter) generated from article frontmatter
  - Google Analytics pageview tracking via `$gtag` plugin
  - Styled with TailwindCSS prose classes

### Styling
- **TailwindCSS**: Custom config at `tailwind.config.js`
  - Custom font: Rubik (loaded via Google Fonts in nuxt.config.js)
  - Custom color: `dark: '#060505'`
  - Typography plugin for markdown content styling
- **Dark mode**: Uses Tailwind's dark mode classes (class-based strategy)

### Plugins
- **Google Analytics**: `plugins/gtag.js` configures vue-gtag with tracking ID `G-RJEPYYEJHZ`
- Analytics are tracked on page views in blog posts

### SEO & Meta
- Global meta configuration in `nuxt.config.js:6-74`
- Dynamic per-page meta in blog post pages
- Sitemap module configured for `https://www.henryikoh.com/`
- PWA module enabled with manifest configuration

## Key Files
- [nuxt.config.js](nuxt.config.js) - Main configuration including content hooks, generate routes, and meta tags
- [pages/index.vue](pages/index.vue) - Homepage with hero and tabs
- [pages/blog/_slug.vue](pages/blog/_slug.vue) - Dynamic blog post template with SEO meta
- [tailwind.config.js](tailwind.config.js) - Tailwind customization
- [package.json](package.json) - Dependencies and scripts

## Important Notes
- This is a **Nuxt 2** project using **Vue 2**, not Nuxt 3/Vue 3
- Target is **static** generation, not SSR
- Content slugs are auto-generated; don't manually set them in frontmatter
- Reading time is auto-calculated from markdown content
- When adding new articles, place them in `content/articles/` with proper frontmatter structure
