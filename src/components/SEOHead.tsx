import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  authorName?: string;
  schemaData?: Record<string, unknown> | null;
}

const DEFAULT_ORIGIN = 'https://digital-growth-hub.vercel.app';

export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  image = 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=1200',
  imageAlt = 'Digital Growth Hub – Modern Digital Marketing & SEO Guides',
  publishedTime,
  authorName = 'Digital Growth Hub Editorial Team',
  schemaData
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Digital Growth Hub')
      ? title
      : `${title} | Digital Growth Hub`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMeta = (attribute: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // 2. Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');

    // 3. Canonical Link
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${DEFAULT_ORIGIN}${cleanPath === '/' ? '' : cleanPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 4. OpenGraph Tags
    setMeta('property', 'og:site_name', 'Digital Growth Hub');
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', imageAlt);

    if (publishedTime) {
      setMeta('property', 'article:published_time', publishedTime);
    }
    if (authorName) {
      setMeta('property', 'article:author', authorName);
    }

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // 6. Schema.org JSON-LD
    let scriptTag = document.getElementById('seo-json-ld') as HTMLScriptElement | null;
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'seo-json-ld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Window scroll to top on title change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalPath, ogType, image, imageAlt, publishedTime, authorName, schemaData]);

  return null;
}
