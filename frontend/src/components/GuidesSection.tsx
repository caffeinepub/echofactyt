import React from 'react';
import { Map } from 'lucide-react';
import GuideCard from './GuideCard';
import type { Category } from './CategoryFilter';

const guides = [
  {
    title: 'How to Build a Study Schedule That Actually Works',
    category: 'School' as Category,
    emoji: '📅',
    accentColor: 'linear-gradient(135deg, oklch(0.62 0.2 165), oklch(0.52 0.18 180))',
    steps: [
      'List all your subjects and upcoming deadlines',
      'Block out fixed commitments (classes, sports, work)',
      'Assign 1-2 hour study blocks for each subject',
      'Schedule harder subjects when your energy is highest',
      'Include 10-minute breaks every hour',
      'Review and adjust your schedule every Sunday',
    ],
  },
  {
    title: 'How to Stay Healthy on a Budget',
    category: 'Health' as Category,
    emoji: '🥗',
    accentColor: 'linear-gradient(135deg, oklch(0.55 0.2 145), oklch(0.45 0.18 160))',
    steps: [
      'Meal prep on Sundays to save time and money',
      'Buy frozen vegetables — just as nutritious, way cheaper',
      'Drink water instead of sugary drinks',
      'Walk or bike instead of taking rides',
      'Use free workout apps like Nike Training Club',
      'Sleep 7-9 hours — it\'s the best free health hack',
    ],
  },
  {
    title: 'How to Boost Your Productivity with Tech',
    category: 'Technology' as Category,
    emoji: '⚡',
    accentColor: 'linear-gradient(135deg, oklch(0.55 0.2 220), oklch(0.45 0.18 240))',
    steps: [
      'Use a password manager to save time logging in',
      'Set up keyboard shortcuts for your most-used apps',
      'Use browser extensions to block distracting sites',
      'Organize files with a clear folder structure',
      'Use cloud storage so you never lose work',
      'Automate repetitive tasks with free tools like Zapier',
    ],
  },
  {
    title: 'How to Make Friends in a New School',
    category: 'Daily Life' as Category,
    emoji: '🤝',
    accentColor: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.68 0.22 40))',
    steps: [
      'Join at least one club or activity you enjoy',
      'Sit next to someone new in class and say hi',
      'Ask questions — people love talking about themselves',
      'Be consistent — show up to the same places regularly',
      'Follow up on conversations with a text or social media',
      'Be patient — real friendships take time to build',
    ],
  },
];

interface GuidesSectionProps {
  selectedCategory: Category;
}

export default function GuidesSection({ selectedCategory }: GuidesSectionProps) {
  const filtered = selectedCategory === 'All' ? guides : guides.filter((g) => g.category === selectedCategory);

  return (
    <section id="guides" className="section-padding max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 220)' }}>
          <Map size={22} style={{ color: 'oklch(0.52 0.18 220)' }} />
        </div>
        <h2 className="section-title mb-0">Step-by-Step Guides</h2>
      </div>
      <p className="section-subtitle">Easy guides to help you level up every area of life 🗺️</p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-semibold">No guides in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((guide) => (
            <GuideCard key={guide.title} {...guide} />
          ))}
        </div>
      )}
    </section>
  );
}
