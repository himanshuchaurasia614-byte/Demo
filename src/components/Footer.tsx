import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, FileText, Globe, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { articles, categories } from '../data/articles';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white group">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Digital Growth Hub
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An educational digital marketing resource created for a comprehensive college SEO curriculum assignment. Delivering evidence-based, practitioner-grade guides spanning search optimization, content strategy, paid acquisition, and analytics.
            </p>
            <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Academic Assignment Transparency</span>
              </div>
              <p>
                All search volume estimates and keyword difficulty scores are unverified approximations used strictly for pedagogical demonstration.
              </p>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.filter(c => c !== 'All').map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/blog?category=${encodeURIComponent(cat)}`}
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 pt-1"
                >
                  View All Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Article Guides */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Featured Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              {articles.slice(0, 5).map((art) => (
                <li key={art.id}>
                  <Link
                    to={`/blog/${art.slug}`}
                    className="hover:text-blue-400 transition-colors line-clamp-1"
                    title={art.title}
                  >
                    {art.title.split(':')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical & SEO Assets */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              SEO Assets & Compliance
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/keyword-research" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <span>Keyword Research Plan</span>
                </Link>
              </li>
              <li>
                <a
                  href="/keyword-research.csv"
                  download
                  className="hover:text-blue-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Strategy CSV</span>
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>XML Sitemap</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Robots.txt</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About & Editorial Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Digital Growth Hub. Developed for College SEO Curriculum Demonstration. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Vercel Deployment Ready</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Semantic HTML5 & Schema.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
