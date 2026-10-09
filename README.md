# Digital Growth Hub

**Digital Growth Hub** is a modern, responsive, and SEO-optimized digital marketing educational blog website built for a comprehensive college SEO curriculum assignment.

Live Production URL: [https://digital-growth-hub.vercel.app/](https://digital-growth-hub.vercel.app/)

---

## Project Overview

* **Website Name:** Digital Growth Hub
* **Purpose:** An educational blog that publishes authoritative, practitioner-grade guides on Search Engine Optimization (SEO), content strategy, social media, email marketing, paid advertising, web analytics, and AI applications in marketing.
* **Architecture:** React 19, TypeScript, Vite, Tailwind CSS v4, React Router v7.
* **SEO Compliance:** Semantic HTML5 (`<article>`, `<header>`, `<main>`, `<aside>`, `<footer>`), single unique H1 per page, strict H2/H3 heading hierarchy, dynamic title tags, meta descriptions, canonical URLs, Open Graph / Twitter cards, Schema.org JSON-LD (`WebSite`, `BlogPosting`, `Blog`), XML sitemap, and robots.txt.
* **AEO (Answer Engine Optimization):** Explicit question-style H2 headings followed by direct, extractable answer paragraphs for Google Featured Snippets and AI answer engines.
* **Keyword Strategy:** Documented in both `/keyword-research.csv` and `/keyword-research.md` (as well as an interactive web viewer at `/keyword-research`). All search volume and keyword difficulty metrics are clearly marked **Unverified (Academic)** to maintain strict academic and ethical integrity.

---

## 10 In-Depth Educational Articles

Every article features its own unique route, distinct featured imagery with descriptive alt text, interactive table of contents, author profile, AEO Q&A highlights, and semantic internal links:

1. **SEO for Beginners: A Complete Guide to Search Engine Optimization**  
   Route: `/blog/seo-for-beginners`  
   Primary Keyword: `SEO for beginners`
2. **Keyword Research: How to Find the Right Keywords**  
   Route: `/blog/keyword-research-guide`  
   Primary Keyword: `keyword research`
3. **On-Page SEO: A Practical Optimization Guide**  
   Route: `/blog/on-page-seo-guide`  
   Primary Keyword: `on-page SEO`
4. **Technical SEO: Website Speed, Crawling, and Indexing**  
   Route: `/blog/technical-seo-guide`  
   Primary Keyword: `technical SEO`
5. **Content Marketing Strategy: A Step-by-Step Guide**  
   Route: `/blog/content-marketing-strategy`  
   Primary Keyword: `content marketing strategy`
6. **Social Media Marketing: How to Grow Your Brand**  
   Route: `/blog/social-media-marketing-growth`  
   Primary Keyword: `social media marketing`
7. **Email Marketing: Build Campaigns That Convert**  
   Route: `/blog/email-marketing-conversions`  
   Primary Keyword: `email marketing`
8. **Google Ads vs SEO: Which Strategy Should You Choose?**  
   Route: `/blog/google-ads-vs-seo`  
   Primary Keyword: `Google Ads vs SEO`
9. **Digital Marketing Analytics: Measure What Matters**  
   Route: `/blog/digital-marketing-analytics`  
   Primary Keyword: `digital marketing analytics`
10. **AI in Digital Marketing: Tools, Benefits, and Challenges**  
    Route: `/blog/ai-in-digital-marketing`  
    Primary Keyword: `AI in digital marketing`

---

## Core Features & Functionality

* **Live Search & Autocomplete:** Real-time search across all titles, excerpts, categories, and keyword tags directly from the hero section or blog archive.
* **Category Filtering:** Filter articles across 7 core disciplines (SEO, Content Marketing, Social Media, Email Marketing, Paid Advertising, Analytics, AI & Technology) with dynamic counts and shareable URL query parameters (`?category=...`).
* **Table of Contents (TOC):** Sticky desktop sidebar and collapsible mobile drawer with smooth scrolling and `IntersectionObserver` section highlighting.
* **Reading Progress Bar:** Responsive scroll-depth indicator fixed to the top viewport.
* **Social Sharing & Clipboard:** One-click link copying with feedback toast, plus direct sharing links for X (Twitter), LinkedIn, and Facebook.
* **Interactive Keyword Plan Table:** Dedicated route at `/keyword-research` displaying intent classification, primary/related keywords, and direct CSV download.
* **Comprehensive About Page:** Detailed project statement, editorial principles, author cards, and interactive feedback form.
* **Custom 404 Experience:** Search input and recommended reading list for nonexistent routes.
* **Vercel Single-Page-App Routing:** Includes `vercel.json` rewrites to guarantee direct URL navigation works without 404 errors.

---

## Getting Started Locally

### Prerequisites
* Node.js 18+ or 20+
* npm or yarn

### 1. Installation
```bash
npm install
```

### 2. Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser to `http://localhost:3000`.

### 3. Production Build
Verify the production build:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

### 4. Code Linting & Type Checking
```bash
npm run lint
```

---

## Vercel Deployment Instructions

This repository is pre-configured for seamless zero-config deployment on Vercel:

1. **Push to GitHub / GitLab / Bitbucket**:
   Commit and push the project to your Git repository.

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** > **Project**.
   - Select your repository.

3. **Build & Output Settings**:
   Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Single-Page Application Routing**:
   The included `vercel.json` ensures all deep link paths (e.g. `/blog/seo-for-beginners`) rewrite to `/index.html`:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

5. **Deploy**:
   Click **Deploy**. Your site will be live on your Vercel domain within seconds!

---

## Static SEO Files

* **Robots.txt:** `/public/robots.txt` specifies crawler permissions and declares the sitemap location.
* **Sitemap.xml:** `/public/sitemap.xml` provides indexable canonical URLs, priority values, and change frequencies for search bots.
* **Keyword Research CSV:** `/public/keyword-research.csv` provides downloadable spreadsheet data for the curriculum assignment.
* **Keyword Research Markdown:** `/public/keyword-research.md` provides formatted markdown reference tables.

---

## Academic Integrity & Metrics Policy

All search volume and keyword difficulty metrics are marked as **Unverified (Academic)**. This project focuses on demonstrating structural SEO, semantic markup, user intent mapping, and high-quality educational content creation without fabricating fake subscription data.
