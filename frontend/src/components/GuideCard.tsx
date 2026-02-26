import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ShareButtons from './ShareButtons';
import type { Category } from './CategoryFilter';

interface GuideCardProps {
  title: string;
  category: Category;
  steps: string[];
  emoji: string;
  accentColor: string;
}

export default function GuideCard({ title, category, steps, emoji, accentColor }: GuideCardProps) {
  return (
    <div className="bg-card rounded-2xl shadow-card card-hover border border-border overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-5 text-white" style={{ background: accentColor }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{category}</span>
          <span className="text-3xl">{emoji}</span>
        </div>
        <h3 className="text-lg font-extrabold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <ol className="space-y-3 flex-1">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5"
                style={{ background: accentColor }}
              >
                {i + 1}
              </span>
              <span className="text-sm leading-snug">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-5 pt-4 border-t border-border flex flex-col gap-3">
          <button
            className="flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-2.5"
            style={{ color: 'oklch(0.62 0.22 30)' }}
          >
            Learn More <ArrowRight size={15} />
          </button>
          <ShareButtons title={title} />
        </div>
      </div>
    </div>
  );
}
