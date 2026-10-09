import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Home, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';
import { articles } from '../data/articles';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/blog?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <SEOHead
        title="404 – Page Not Found"
        description="The requested page could not be located on Digital Growth Hub. Explore our library of 10 digital marketing and SEO guides."
      />

      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full text-center space-y-8">
          <div>
            <span className="text-6xl sm:text-7xl font-black text-blue-700 block tracking-tight">
              404
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Page Not Found
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              The article or URL you are looking for may have been moved, updated, or does not exist.
            </p>
          </div>

          {/* Quick Search */}
          <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search across all 10 marketing guides..."
              className="w-full pl-10 pr-24 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              Search
            </button>
          </form>

          {/* Recommended Articles */}
          <div className="text-left bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              <span>Recommended Guides to Explore:</span>
            </h2>
            <div className="space-y-2 text-sm">
              {articles.slice(0, 3).map((art) => (
                <Link
                  key={art.id}
                  to={`/blog/${art.slug}`}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white transition-colors group"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-blue-700">
                    {art.title.split(':')[0]}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
