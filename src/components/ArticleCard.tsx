import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 relative overflow-hidden bg-slate-100 min-h-[280px] sm:min-h-[360px]">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/95 text-blue-700 backdrop-blur rounded-full shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <time dateTime={article.isoDate}>{article.date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
              <Link to={`/blog/${article.slug}`} className="focus:outline-none focus:underline">
                {article.title}
              </Link>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                loading="lazy"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">{article.author.name}</p>
                <p className="text-[11px] text-slate-500 line-clamp-1">{article.author.role}</p>
              </div>
            </div>

            <Link
              to={`/blog/${article.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 group-hover:translate-x-0.5 transition-all"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-white/95 text-blue-700 backdrop-blur rounded-full shadow-sm">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <time dateTime={article.isoDate}>{article.date}</time>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
            <Link to={`/blog/${article.slug}`} className="focus:outline-none focus:underline">
              {article.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              loading="lazy"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-slate-700 truncate max-w-[120px]">
              {article.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
