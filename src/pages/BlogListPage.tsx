import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, Filter, BookOpen, Layers } from 'lucide-react';
import { articles, categories } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || 'All';
  const urlQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory);
  const [searchQuery, setSearchQuery] = useState<string>(urlQuery);

  // Sync state with URL params
  useEffect(() => {
    setSelectedCategory(urlCategory);
  }, [urlCategory]);

  useEffect(() => {
    setSearchQuery(urlQuery);
  }, [urlQuery]);

  const updateFilters = (newCategory: string, newQuery: string) => {
    setSelectedCategory(newCategory);
    setSearchQuery(newQuery);

    const params: Record<string, string> = {};
    if (newCategory !== 'All') params.category = newCategory;
    if (newQuery.trim()) params.q = newQuery.trim();
    setSearchParams(params, { replace: true });
  };

  const handleCategoryClick = (cat: string) => {
    updateFilters(cat, searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    updateFilters(selectedCategory, val);
  };

  const clearAllFilters = () => {
    updateFilters('All', '');
  };

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.primaryKeyword.toLowerCase().includes(q) ||
        article.secondaryKeywords.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = articles.filter((a) => a.category === cat).length;
      }
    });
    return counts;
  }, []);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Digital Growth Hub Articles',
    'description': 'Comprehensive educational guides on SEO, keyword research, on-page optimization, content strategy, email marketing, analytics, and AI.',
    'url': 'https://digital-growth-hub.vercel.app/blog'
  };

  return (
    <>
      <SEOHead
        title="All Digital Marketing & SEO Guides"
        description="Browse all 10 comprehensive digital marketing guides covering technical SEO, keyword research, content marketing, Google Ads, GA4 analytics, and AI tools."
        canonicalPath="/blog"
        schemaData={blogSchema}
      />

      <div className="bg-slate-50 border-b border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Articles & Guides' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Curated Educational Archive
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-4">
              All Marketing & SEO Guides
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore 10 comprehensive, original educational articles designed to build real-world digital marketing mastery. Filter by topic or search specific techniques.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by title, keyword, or concept..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => updateFilters(selectedCategory, '')}
                aria-label="Clear search query"
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status / Active filters label */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <p>
            Showing <strong className="text-slate-900 font-bold">{filteredArticles.length}</strong> of{' '}
            <strong className="text-slate-900 font-bold">{articles.length}</strong> articles
            {selectedCategory !== 'All' && <span> in <strong className="text-blue-700">{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong className="text-slate-900">{searchQuery}</strong>"</span>}
          </p>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={clearAllFilters}
              className="text-blue-700 hover:text-blue-900 font-semibold underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-slate-200 my-8">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-slate-900 mb-1">No matching articles found</h2>
            <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
              We couldn't find any articles matching your query "{searchQuery}". Try searching for terms like "SEO", "analytics", or "content".
            </p>
            <button
              onClick={clearAllFilters}
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-colors"
            >
              View All 10 Articles
            </button>
          </div>
        )}
      </div>
    </>
  );
}
