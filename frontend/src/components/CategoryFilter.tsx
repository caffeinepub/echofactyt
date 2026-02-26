import React from 'react';
import { Cpu, BookOpen, Heart, Star, Sun } from 'lucide-react';

export type Category = 'All' | 'Technology' | 'School' | 'Health' | 'Entertainment' | 'Daily Life';

interface CategoryFilterProps {
  selected: Category;
  onChange: (cat: Category) => void;
}

const categories: { label: Category; icon: React.ReactNode; colorClass: string }[] = [
  { label: 'All', icon: null, colorClass: 'bg-foreground text-background' },
  { label: 'Technology', icon: <Cpu size={14} />, colorClass: 'badge-tech' },
  { label: 'School', icon: <BookOpen size={14} />, colorClass: 'badge-school' },
  { label: 'Health', icon: <Heart size={14} />, colorClass: 'badge-health' },
  { label: 'Entertainment', icon: <Star size={14} />, colorClass: 'badge-entertainment' },
  { label: 'Daily Life', icon: <Sun size={14} />, colorClass: 'badge-daily' },
];

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
          <span className="text-sm font-bold text-muted-foreground whitespace-nowrap mr-1">Filter:</span>
          {categories.map(({ label, icon, colorClass }) => {
            const isActive = selected === label;
            return (
              <button
                key={label}
                onClick={() => onChange(label)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 border-2 ${
                  isActive
                    ? `${colorClass} border-transparent shadow-md scale-105`
                    : 'bg-transparent border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {icon}
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
