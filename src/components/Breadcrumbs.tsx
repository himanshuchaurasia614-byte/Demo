import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-blue-700 transition-colors py-1 focus:outline-none focus:underline"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="font-medium text-slate-900 truncate max-w-[220px] sm:max-w-md"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-blue-700 transition-colors py-1 focus:outline-none focus:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
