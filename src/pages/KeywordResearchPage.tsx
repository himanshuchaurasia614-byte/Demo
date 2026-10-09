import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Search, ExternalLink, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

interface KeywordRow {
  pageName: string;
  slug: string;
  primaryKeyword: string;
  related1: string;
  related2: string;
  searchIntent: string;
  seoTitle: string;
  metaDescription: string;
  volume: string;
  difficulty: string;
}

const KEYWORD_DATA: KeywordRow[] = [
  {
    pageName: 'Homepage',
    slug: '/',
    primaryKeyword: 'digital marketing blog',
    related1: 'digital growth hub',
    related2: 'learn digital marketing',
    searchIntent: 'Informational',
    seoTitle: 'Digital Growth Hub – Modern Digital Marketing & SEO Guides',
    metaDescription: 'Master search engine optimization, content strategy, email marketing, analytics, and AI in marketing with comprehensive educational guides.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'SEO for Beginners',
    slug: '/blog/seo-for-beginners',
    primaryKeyword: 'SEO for beginners',
    related1: 'search engine optimization guide',
    related2: 'how search engines work',
    searchIntent: 'Informational',
    seoTitle: 'SEO for Beginners: A Complete Guide to Search Engine Optimization',
    metaDescription: 'A comprehensive beginner\'s guide to SEO. Learn crawling, indexing, ranking factors, Core Web Vitals, and how to optimize your website for Google.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'Keyword Research Guide',
    slug: '/blog/keyword-research-guide',
    primaryKeyword: 'keyword research',
    related1: 'how to find keywords',
    related2: 'search intent analysis',
    searchIntent: 'Informational / Commercial',
    seoTitle: 'Keyword Research: How to Find the Right Keywords (Step-by-Step)',
    metaDescription: 'Master keyword research step-by-step. Discover seed keywords, search intent, competitive analysis, and tools to identify high-value search terms.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'On-Page SEO Guide',
    slug: '/blog/on-page-seo-guide',
    primaryKeyword: 'on-page SEO',
    related1: 'on-page optimization checklist',
    related2: 'meta tags optimization',
    searchIntent: 'Informational / Practical',
    seoTitle: 'On-Page SEO: A Practical Optimization Guide & Checklist',
    metaDescription: 'Learn practical on-page SEO techniques: title tag formulas, heading hierarchy, content structure, image alt text, and internal link architecture.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'Technical SEO Guide',
    slug: '/blog/technical-seo-guide',
    primaryKeyword: 'technical SEO',
    related1: 'site speed optimization',
    related2: 'crawling and indexing',
    searchIntent: 'Informational / Technical',
    seoTitle: 'Technical SEO: Website Speed, Crawling, and Indexing Guide',
    metaDescription: 'Ensure search engines crawl and index your pages flawlessly. Learn Core Web Vitals, XML sitemaps, robots.txt, canonicalization, and mobile rendering.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'Content Marketing Strategy',
    slug: '/blog/content-marketing-strategy',
    primaryKeyword: 'content marketing strategy',
    related1: 'content creation framework',
    related2: 'audience persona',
    searchIntent: 'Informational',
    seoTitle: 'Content Marketing Strategy: A Step-by-Step Guide for Growth',
    metaDescription: 'Build a content marketing strategy that drives organic traffic, brand authority, and customer conversions. Complete with distribution workflows.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'Social Media Marketing',
    slug: '/blog/social-media-marketing-growth',
    primaryKeyword: 'social media marketing',
    related1: 'brand growth on social',
    related2: 'social media engagement',
    searchIntent: 'Informational',
    seoTitle: 'Social Media Marketing: How to Grow Your Brand Online',
    metaDescription: 'Learn how to select the right social platforms, build an engaged community, optimize posting schedules, and measure social media ROI.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'Email Marketing Guide',
    slug: '/blog/email-marketing-conversions',
    primaryKeyword: 'email marketing',
    related1: 'email campaigns that convert',
    related2: 'email list segmentation',
    searchIntent: 'Informational / Practical',
    seoTitle: 'Email Marketing: Build Campaigns That Convert & Retain Customers',
    metaDescription: 'Discover high-converting email marketing workflows, list building strategies, segmentation methods, and deliverability best practices.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'Google Ads vs SEO',
    slug: '/blog/google-ads-vs-seo',
    primaryKeyword: 'Google Ads vs SEO',
    related1: 'SEO vs PPC comparison',
    related2: 'paid vs organic search',
    searchIntent: 'Commercial Investigation',
    seoTitle: 'Google Ads vs SEO: Which Strategy Should You Choose?',
    metaDescription: 'Compare Google Ads and SEO: costs, timelines, ROI, conversion rates, and how to build a hybrid digital marketing search strategy.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'Digital Marketing Analytics',
    slug: '/blog/digital-marketing-analytics',
    primaryKeyword: 'digital marketing analytics',
    related1: 'measure marketing ROI',
    related2: 'GA4 key metrics',
    searchIntent: 'Informational',
    seoTitle: 'Digital Marketing Analytics: Measure What Matters (GA4 Guide)',
    metaDescription: 'Learn how to track meaningful marketing KPIs, configure GA4, understand attribution models, and turn raw website data into actionable growth.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  },
  {
    pageName: 'AI in Digital Marketing',
    slug: '/blog/ai-in-digital-marketing',
    primaryKeyword: 'AI in digital marketing',
    related1: 'generative AI marketing tools',
    related2: 'AI SEO challenges',
    searchIntent: 'Informational',
    seoTitle: 'AI in Digital Marketing: Tools, Benefits, and Challenges (2025-2026)',
    metaDescription: 'Explore the impact of AI on SEO, copywriting, automation, and predictive customer journeys, alongside ethical challenges and Google search guidelines.',
    volume: 'Unverified (Academic)',
    difficulty: 'Unverified (Academic)'
  }
];

export default function KeywordResearchPage() {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredData = KEYWORD_DATA.filter((row) => {
    const q = filterQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      row.pageName.toLowerCase().includes(q) ||
      row.primaryKeyword.toLowerCase().includes(q) ||
      row.searchIntent.toLowerCase().includes(q) ||
      row.seoTitle.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <SEOHead
        title="Keyword Research Reference & Strategy Plan"
        description="Review the strategic keyword mapping, search intent analysis, primary keywords, and meta tags for all Digital Growth Hub articles."
        canonicalPath="/keyword-research"
      />

      <div className="bg-slate-50 border-b border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Keyword Research Strategy' }]} />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                SEO Assignment Documentation
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-3">
                Keyword Research Strategy Reference
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A documented mapping of primary target keywords, semantic variations, search intents, title tags, and meta descriptions across the homepage and all 10 educational articles.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/keyword-research.csv"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download keyword-research.csv</span>
              </a>
              <a
                href="/keyword-research.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Raw Markdown (.md)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Verification Transparency Notice */}
        <div className="mb-8 p-5 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-start gap-3.5 text-xs text-amber-900 leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-950 mb-1">
              Methodological Integrity Notice (Unverified Metrics Policy)
            </h2>
            <p>
              In accordance with academic standards and ethical SEO practices, Search Volume and Keyword Difficulty metrics are designated as <strong>Unverified (Academic)</strong>. Real third-party estimates from proprietary tools (such as Ahrefs, Semrush, or Moz) require active commercial subscriptions and change monthly. We do not invent arbitrary numbers. The strategic focus remains on keyword intent classification, entity mapping, and on-page optimization.
            </p>
          </div>
        </div>

        {/* Search filter for the table */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter keyword rows..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <p className="text-xs text-slate-500 self-end sm:self-center">
            Showing {filteredData.length} of {KEYWORD_DATA.length} strategic targets
          </p>
        </div>

        {/* Responsive Strategy Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
          <table className="min-w-full text-left text-xs divide-y divide-slate-200">
            <thead className="bg-slate-50 font-bold text-slate-900">
              <tr>
                <th className="p-3.5 whitespace-nowrap">Page Name</th>
                <th className="p-3.5 whitespace-nowrap">Target URL</th>
                <th className="p-3.5 whitespace-nowrap">Primary Keyword</th>
                <th className="p-3.5 whitespace-nowrap">Related Keywords</th>
                <th className="p-3.5 whitespace-nowrap">Search Intent</th>
                <th className="p-3.5 min-w-[220px]">SEO Title Tag</th>
                <th className="p-3.5 min-w-[280px]">Meta Description</th>
                <th className="p-3.5 whitespace-nowrap">Search Volume</th>
                <th className="p-3.5 whitespace-nowrap">Keyword Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">
                    {row.pageName}
                  </td>
                  <td className="p-3.5 whitespace-nowrap">
                    <Link
                      to={row.slug}
                      className="text-blue-700 hover:text-blue-900 font-mono text-[11px] underline inline-flex items-center gap-1"
                    >
                      <span>{row.slug}</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="p-3.5 whitespace-nowrap">
                    <span className="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                      {row.primaryKeyword}
                    </span>
                  </td>
                  <td className="p-3.5 whitespace-nowrap">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-600">1. {row.related1}</span>
                      <span className="text-slate-600">2. {row.related2}</span>
                    </div>
                  </td>
                  <td className="p-3.5 whitespace-nowrap font-medium text-slate-800">
                    {row.searchIntent}
                  </td>
                  <td className="p-3.5 text-slate-800 font-medium">
                    {row.seoTitle}
                  </td>
                  <td className="p-3.5 text-slate-600 leading-normal">
                    {row.metaDescription}
                  </td>
                  <td className="p-3.5 whitespace-nowrap text-slate-500 italic text-[11px]">
                    {row.volume}
                  </td>
                  <td className="p-3.5 whitespace-nowrap text-slate-500 italic text-[11px]">
                    {row.difficulty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Academic Strategy Explanations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>1. Intent First, Density Second</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Google algorithms evaluate search intent satisfaction rather than obsolete keyword repetition percentages. Each page targets one distinct user query lifecycle.
            </p>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>2. Clean Hyphenated URL Slugs</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every route uses semantic, lowercase hyphenated slugs (e.g., <code>/blog/seo-for-beginners</code>) directly reflecting the target primary keyword token.
            </p>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>3. Snippet-Ready Answer Formats</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Articles lead with question-style H2s followed by direct answer paragraphs to maximize Answer Engine Optimization (AEO) and featured search snippets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
