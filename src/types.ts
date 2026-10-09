export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface AEOQuestion {
  question: string;
  answer: string;
  anchorId: string;
}

export interface InternalLink {
  text: string;
  href: string;
  context: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: 'SEO' | 'Content Marketing' | 'Social Media' | 'Email Marketing' | 'Paid Advertising' | 'Analytics' | 'AI & Technology';
  date: string;
  isoDate: string;
  readTime: string;
  wordCount: number;
  image: string;
  imageAlt: string;
  author: Author;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  toc: TocItem[];
  aeoQuestions: AEOQuestion[];
  htmlContent: string;
  relatedSlugs: string[];
}

export interface KeywordResearchRow {
  pageName: string;
  slug: string;
  primaryKeyword: string;
  relatedKeyword1: string;
  relatedKeyword2: string;
  searchIntent: string;
  seoTitle: string;
  metaDescription: string;
  searchVolume: string;
  keywordDifficulty: string;
}
