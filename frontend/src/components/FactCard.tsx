import React from 'react';
import { Cpu, BookOpen, Heart, Star, Sun, ArrowRight } from 'lucide-react';
import ShareButtons from './ShareButtons';
import type { Category } from './CategoryFilter';

interface FactCardProps {
  category: Category;
  title: string;
  fact: string;
  emoji?: string;
}

const categoryConfig: Record<string, { badgeClass: string; gradientClass: string; icon: React.ReactNode }> = {
  Technology: {
    badgeClass: 'badge-tech',
    gradientClass: 'from-blue-50 to-blue-100',
    icon: <Cpu size={20} />,
  },
  School: {
    badgeClass: 'badge-school',
    gradientClass: 'from-teal-50 to-teal-100',
    icon: <BookOpen size={20} />,
  },
  Health: {
    badgeClass: 'badge-health',
    gradientClass: 'from-green-50 to-green-100',
    icon: <Heart size={20} />,
  },
  Entertainment: {
    badgeClass: 'badge-entertainment',
    gradientClass: 'from-purple-50 to-purple-100',
    icon: <Star size={20} />,
  },
  'Daily Life': {
    badgeClass: 'badge-daily',
    gradientClass: 'from-amber-50 to-amber-100',
    icon: <Sun size={20} />,
  },
};

export default function FactCard({ category, title, fact, emoji }: FactCardProps) {
  const config = categoryConfig[category] || categoryConfig['Daily Life'];

  return (
    <div className="bg-card rounded-2xl shadow-card card-hover border border-border overflow-hidden flex flex-col">
      {/* Top accent bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            category === 'Technology'
              ? 'linear-gradient(90deg, oklch(0.62 0.2 220), oklch(0.72 0.18 240))'
              : category === 'School'
              ? 'linear-gradient(90deg, oklch(0.62 0.2 165), oklch(0.72 0.18 180))'
              : category === 'Health'
              ? 'linear-gradient(90deg, oklch(0.62 0.2 145), oklch(0.72 0.18 160))'
              : category === 'Entertainment'
              ? 'linear-gradient(90deg, oklch(0.62 0.2 300), oklch(0.72 0.18 320))'
              : 'linear-gradient(90deg, oklch(0.68 0.22 40), oklch(0.78 0.19 55))',
        }}
      />

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${config.badgeClass}`}>
            {category}
          </span>
          <span className="text-2xl">{emoji || '💡'}</span>
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-lg mb-2 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>

        {/* Fact text */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{fact}</p>

        {/* Footer */}
        <div className="flex flex-col gap-3 pt-3 border-t border-border">
          <button className="flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-2.5" style={{ color: 'oklch(0.62 0.22 30)' }}>
            Learn More <ArrowRight size={15} />
          </button>
          <ShareButtons title={title} />
        </div>
      </div>
    </div>
  );
}
