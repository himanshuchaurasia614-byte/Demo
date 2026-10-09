import React, { useState, useEffect } from 'react';
import { ListFilter, ChevronDown } from 'lucide-react';
import { TocItem } from '../types';

interface TableOfContentsProps {
  toc: TocItem[];
}

export default function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id || '');
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -60% 0%' }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setIsOpenMobile(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (!toc || toc.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 my-6 lg:my-0 lg:sticky lg:top-28"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <ListFilter className="w-4 h-4 text-blue-700" />
          <span>Table of Contents</span>
        </div>
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          aria-expanded={isOpenMobile}
          aria-label="Toggle table of contents"
          className="lg:hidden text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 p-1"
        >
          <span>{isOpenMobile ? 'Hide' : 'Show'}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpenMobile ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`${isOpenMobile ? 'block' : 'hidden'} lg:block mt-3 pt-3 border-t border-slate-200/80`}>
        <ul className="space-y-1.5 text-xs text-slate-600 max-h-[60vh] overflow-y-auto pr-1">
          {toc.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`${item.level === 3 ? 'pl-3' : 'pl-0'}`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`block py-1 px-2 rounded-md transition-all ${
                    isActive
                      ? 'bg-blue-100/70 text-blue-900 font-semibold border-l-2 border-blue-700'
                      : 'hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
