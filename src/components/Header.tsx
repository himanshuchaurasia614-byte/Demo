import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import { categories } from '../data/articles';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors py-1.5 px-3 rounded-md ${
      isActive
        ? 'text-blue-700 bg-blue-50 font-semibold'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight group-hover:text-blue-700 transition-colors">
                Digital Growth Hub
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-slate-500 block">
                SEO & Marketing Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Articles
            </NavLink>
            <NavLink to="/keyword-research" className={navLinkClass}>
              Keyword Plan
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </nav>

          {/* Actions: Search bar & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search articles, SEO, AI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-56 lg:w-64 pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            </form>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore All Guides</span>
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Toggle search input"
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input Drawer */}
        {isSearchOpen && (
          <div className="py-3 px-1 border-t border-slate-100 md:hidden">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search across 10 in-depth marketing guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </form>
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
            >
              All Articles (10 Guides)
            </Link>
            <Link
              to="/keyword-research"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
            >
              Keyword Research Strategy
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
            >
              About the Project & Mission
            </Link>

            <div className="pt-3 border-t border-slate-100">
              <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Browse by Category</p>
              <div className="flex flex-wrap gap-1 px-3">
                {categories.filter(c => c !== 'All').map(cat => (
                  <Link
                    key={cat}
                    to={`/blog?category=${encodeURIComponent(cat)}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
