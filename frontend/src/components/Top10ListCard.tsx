import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap } from 'lucide-react';
import type { Category } from './CategoryFilter';

interface Top10ListCardProps {
  title: string;
  description: string;
  category: Category;
  items: string[];
  accentColor: string;
}

export default function Top10ListCard({ title, description, category, items, accentColor }: Top10ListCardProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 5);

  return (
    <div className="bg-card rounded-2xl shadow-card card-hover border border-border overflow-hidden">
      {/* Accent header */}
      <div className="p-5 text-white" style={{ background: accentColor }}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{category}</span>
          <span className="text-2xl font-black opacity-30">TOP 10</span>
        </div>
        <h3 className="text-xl font-extrabold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <p className="text-sm text-white/80 mt-1">{description}</p>
      </div>

      <div className="p-5">
        <ol className="space-y-2.5">
          {visibleItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                style={{ background: accentColor }}
              >
                {i + 1}
              </span>
              <span className="text-sm font-semibold leading-snug pt-0.5">{item}</span>
            </li>
          ))}
        </ol>

        {items.length > 5 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-bold mt-3 transition-opacity hover:opacity-70"
            style={{ color: 'oklch(0.52 0.02 260)' }}
          >
            {expanded ? (
              <>Show Less <ChevronUp size={14} /></>
            ) : (
              <>Show All 10 <ChevronDown size={14} /></>
            )}
          </button>
        )}

        <button
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:shadow-md active:scale-95"
          style={{ background: accentColor }}
        >
          <Zap size={15} />
          Try Now
        </button>
      </div>
    </div>
  );
}
