import React, { useState } from 'react';
import { Copy, Check, Twitter, Linkedin, Facebook, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/blog/${slug}`
    : `https://digital-growth-hub.vercel.app/blog/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `Read "${title}" on Digital Growth Hub:`
  )}&url=${encodeURIComponent(shareUrl)}`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="flex items-center gap-2 pt-2">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-2">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share:</span>
      </span>

      <button
        onClick={handleCopy}
        aria-label="Copy article link to clipboard"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-slate-500" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="p-1.5 text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="p-1.5 text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="p-1.5 text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <Facebook className="w-4 h-4" />
      </a>
    </div>
  );
}
