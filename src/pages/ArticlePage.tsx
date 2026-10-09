import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import TableOfContents from '../components/TableOfContents';
import ShareButtons from '../components/ShareButtons';
import ReadingProgressBar from '../components/ReadingProgressBar';
import ArticleCard from '../components/ArticleCard';
import { Calendar, Clock, BookOpen, Tag, HelpCircle, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Related articles: same category or from relatedSlugs
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && (article.relatedSlugs?.includes(a.slug) || a.category === article.category))
    .slice(0, 3);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.metaDescription,
    'image': [article.image],
    'datePublished': article.isoDate,
    'dateModified': article.isoDate,
    'author': {
      '@type': 'Person',
      'name': article.author.name,
      'jobTitle': article.author.role
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Digital Growth Hub',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://digital-growth-hub.vercel.app/favicon.ico'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://digital-growth-hub.vercel.app/blog/${article.slug}`
    },
    'keywords': [article.primaryKeyword, ...article.secondaryKeywords].join(', ')
  };

  return (
    <>
      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonicalPath={`/blog/${article.slug}`}
        ogType="article"
        image={article.image}
        imageAlt={article.imageAlt}
        publishedTime={article.isoDate}
        authorName={article.author.name}
        schemaData={schemaData}
      />

      <ReadingProgressBar />

      <article className="min-h-screen bg-white">
        {/* Header / Hero Container */}
        <header className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-100 pt-8 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Articles', href: '/blog' },
                { label: article.category, href: `/blog?category=${encodeURIComponent(article.category)}` },
                { label: article.title }
              ]}
            />

            {/* Category badge & metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link
                to={`/blog?category=${encodeURIComponent(article.category)}`}
                className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
              >
                {article.category}
              </Link>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={article.isoDate}>{article.date}</time>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500">
                ~{article.wordCount} words
              </span>
            </div>

            {/* Exactly One Master H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-6">
              {article.title}
            </h1>

            {/* Excerpt / Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              {article.excerpt}
            </p>

            {/* Author Byline & Social Sharing */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">{article.author.name}</p>
                  <p className="text-xs text-slate-500">{article.author.role}</p>
                </div>
              </div>

              <ShareButtons title={article.title} slug={article.slug} />
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12">
          <figure className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full aspect-[16/9] object-cover object-center"
            />
            <figcaption className="p-3 bg-slate-50 text-[11px] text-slate-500 border-t border-slate-200/60 text-center italic">
              Featured Image: {article.imageAlt}
            </figcaption>
          </figure>
        </div>

        {/* Main Content Layout with Responsive Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Table of Contents (Desktop) */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <TableOfContents toc={article.toc} />

              {/* Keywords Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mt-6 text-xs space-y-3">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Tag className="w-3.5 h-3.5 text-blue-700" />
                  <span>On-Page SEO Target Signals</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Primary Keyword:</span>
                  <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded inline-block mt-0.5">
                    {article.primaryKeyword}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Secondary Keywords:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {article.secondaryKeywords.map((k) => (
                      <span key={k} className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Search Intent:</span>
                  <span className="text-slate-700 font-medium">{article.searchIntent}</span>
                </div>
              </div>

              {/* Link to Keyword Strategy Reference */}
              <div className="mt-4 text-center">
                <Link
                  to="/keyword-research"
                  className="text-xs text-blue-700 hover:text-blue-900 font-semibold underline inline-flex items-center gap-1"
                >
                  <span>View Full Keyword Plan Reference &rarr;</span>
                </Link>
              </div>
            </aside>

            {/* Article Content Container */}
            <main className="lg:col-span-8 order-1 lg:order-2">
              {/* AEO Highlight Box at Top of Content */}
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 sm:p-7 mb-10 shadow-xs">
                <div className="flex items-center gap-2 text-blue-900 font-extrabold text-sm uppercase tracking-wider mb-4">
                  <HelpCircle className="w-4 h-4 text-blue-700" />
                  <span>Answer Engine Optimization (AEO) Key Takeaways</span>
                </div>
                <div className="space-y-4">
                  {article.aeoQuestions.map((aeo, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-blue-100 shadow-xs">
                      <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 flex items-start gap-2">
                        <span className="text-blue-700 font-black">Q:</span>
                        <span>{aeo.question}</span>
                      </h2>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pl-5">
                        <strong className="text-blue-900">Direct Answer:</strong> {aeo.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Article Body with Rich HTML Styling */}
              <div
                className="prose prose-slate max-w-none text-slate-700 leading-relaxed
                  prose-headings:text-slate-900 prose-headings:font-extrabold prose-headings:tracking-tight
                  prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pt-6 prose-h2:border-t prose-h2:border-slate-100
                  prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-base prose-p:leading-relaxed prose-p:my-4
                  prose-a:text-blue-700 prose-a:font-semibold prose-a:underline hover:prose-a:text-blue-900
                  prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1.5
                  prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-li:my-1.5
                  prose-code:text-blue-900 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4
                  prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: article.htmlContent }}
              />

              {/* Author Bio Box */}
              <div className="mt-14 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-sm shrink-0"
                />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">{article.author.name}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-semibold">
                      Author
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500">{article.author.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{article.author.bio}</p>
                </div>
              </div>

              {/* Bottom Share & Navigation */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Articles</span>
                </Link>

                <ShareButtons title={article.title} slug={article.slug} />
              </div>
            </main>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="bg-slate-50 border-t border-slate-200/80 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Continue Learning</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Related Master Guides</h2>
                </div>
                <Link
                  to="/blog"
                  className="text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>Browse All 10</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedArticles.map((rel) => (
                  <ArticleCard key={rel.id} article={rel} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
