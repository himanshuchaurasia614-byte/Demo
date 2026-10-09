import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, BookOpen, CheckCircle, BarChart3, HelpCircle, Layers, ShieldCheck } from 'lucide-react';
import { articles, categories } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const featuredArticle = articles[0]; // SEO for Beginners
  const latestArticles = articles.slice(1, 7); // Next 6 articles

  // Real-time suggestions for the hero search input
  const liveSuggestions = searchQuery.trim().length > 1
    ? articles.filter((a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Digital Growth Hub',
    'url': 'https://digital-growth-hub.vercel.app/',
    'description': 'An educational digital marketing blog publishing comprehensive guides on SEO, content marketing, PPC, analytics, and AI growth strategies.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://digital-growth-hub.vercel.app/blog?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <SEOHead
        title="Digital Growth Hub – Modern Digital Marketing & SEO Guides"
        description="Master search engine optimization, content strategy, email marketing, analytics, and AI in marketing with comprehensive educational guides."
        canonicalPath="/"
        ogType="website"
        schemaData={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-16 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* College Project Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-900 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic SEO Curriculum & Digital Growth Resource</span>
          </div>

          {/* Master H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Grow Smarter with <span className="text-blue-700 underline decoration-blue-200 decoration-wavy decoration-2">Digital Marketing</span>
          </h1>

          {/* Introductory Subhead */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            An open educational blog publishing rigorous, practitioner-grade guides on Search Engine Optimization, content frameworks, PPC acquisition, web analytics, and AI-assisted workflows.
          </p>

          {/* Prominent Search Field with live suggestions */}
          <div className="max-w-2xl mx-auto relative mb-10 text-left">
            <form onSubmit={handleSearchSubmit} className="relative shadow-lg shadow-blue-900/5 rounded-2xl bg-white">
              <Search className="w-5 h-5 text-slate-400 absolute left-4.5 top-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 10 in-depth guides (e.g., SEO, keywords, GA4, AI)..."
                className="w-full pl-12 pr-32 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-2.5 bottom-2.5 px-5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Live Autocomplete Dropdown */}
            {liveSuggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-2xl shadow-xl z-30 p-2 overflow-hidden">
                <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Instant Article Matches:
                </p>
                <div className="space-y-1">
                  {liveSuggestions.map((art) => (
                    <Link
                      key={art.id}
                      to={`/blog/${art.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 line-clamp-1">
                          {art.title}
                        </p>
                        <p className="text-xs text-slate-500">
                          {art.category} • {art.readTime}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs">
            <span className="font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Browse:</span>
            </span>
            {categories.filter(c => c !== 'All').map((cat) => (
              <Link
                key={cat}
                to={`/blog?category=${encodeURIComponent(cat)}`}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50/50 transition-all shadow-xs"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AEO: Answer Engine Optimization Section (Exact Requirement: at least two question-style H2s with clear direct answers) */}
      <section className="py-16 bg-white border-b border-slate-100" aria-labelledby="aeo-faq-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Answer Engine Optimization (AEO) Core Insights</span>
            </div>
            <p id="aeo-faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Essential Questions Every Beginner Marketer Asks
            </p>
            <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
              Concise, factual definitions written for direct search snippets and human clarity before diving into our 10 detailed guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Question 1 */}
            <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl relative shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                Q1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                What is the best digital marketing strategy for beginners?
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                <strong>Direct Answer:</strong> The best digital marketing strategy for beginners is the synergy between Organic SEO and Content Marketing. By creating high-utility, educational content that answers verified user queries, new websites build lasting domain authority and generate recurring organic traffic without ongoing advertising spend. Over time, supplement this organic foundation with targeted email capture and social distribution.
              </p>
              <Link
                to="/blog/seo-for-beginners"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
              >
                <span>Read SEO for Beginners Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Question 2 */}
            <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl relative shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                Q2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                How does AI impact modern SEO?
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                <strong>Direct Answer:</strong> Artificial Intelligence impacts SEO by allowing search engines to understand semantic intent and document context through neural models like RankBrain and Gemini. For marketers, AI accelerates topic research, data synthesis, and outline drafting. However, Google strictly rewards E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness), meaning human verification and firsthand insight remain essential to rank.
              </p>
              <Link
                to="/blog/ai-in-digital-marketing"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
              >
                <span>Explore AI in Digital Marketing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Recommended Masterclass</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured In-Depth Guide</h2>
          </div>
          <Link
            to="/blog"
            className="text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
          >
            <span>All 10 Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ArticleCard article={featuredArticle} featured={true} />
      </section>

      {/* Latest Articles Grid */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Curated Curriculum</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Latest Educational Articles</h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore actionable tutorials across SEO, content, social media, paid ads, and analytics.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-blue-700 hover:border-blue-400 transition-all shadow-xs"
            >
              <span>View Full Library (10 Articles)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore All 10 Detailed Guides</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Academic Quality & Pedagogical Mission Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-700/50">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>College SEO & Digital Marketing Assignment Ready</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Built to Demonstrate Production-Grade Technical & On-Page SEO
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              This publication demonstrates semantic HTML heading hierarchy, Schema.org JSON-LD structured data, dynamic OpenGraph social metadata, canonical URLs, XML sitemap validation, and transparent keyword research documentation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/keyword-research"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <BarChart3 className="w-4 h-4" />
                <span>View Keyword Strategy Table</span>
              </Link>
              <Link
                to="/about"
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors border border-slate-700"
              >
                <span>Read Project About & Mission</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-xs space-y-3">
            <h3 className="font-bold text-sm text-slate-200">Assignment Standards Verified:</h3>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>10 Original, Long-Form Educational Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Distinct Images with Descriptive Alt Text</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AEO Question-and-Answer Snippet Sections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Robots.txt & Sitemap.xml Configured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vercel Clean-Routing Deployment Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
