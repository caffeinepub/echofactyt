import React from 'react';
import { ListOrdered } from 'lucide-react';
import Top10ListCard from './Top10ListCard';
import type { Category } from './CategoryFilter';

const lists = [
  {
    title: 'Top 10 Study Hacks',
    description: 'Science-backed techniques to ace your exams',
    category: 'School' as Category,
    accentColor: 'linear-gradient(135deg, oklch(0.62 0.2 165), oklch(0.52 0.18 180))',
    items: [
      'Use the Pomodoro Technique (25 min work, 5 min break)',
      'Teach what you learn to someone else',
      'Study in the same spot every day',
      'Use active recall instead of re-reading',
      'Make colorful mind maps for complex topics',
      'Review notes within 24 hours of class',
      'Use spaced repetition with flashcards',
      'Eliminate phone distractions with app blockers',
      'Study in the morning when your brain is fresh',
      'Get 8 hours of sleep before exams',
    ],
  },
  {
    title: 'Top 10 Free Apps for Students',
    description: 'Must-have apps that make school life easier',
    category: 'Technology' as Category,
    accentColor: 'linear-gradient(135deg, oklch(0.55 0.2 220), oklch(0.45 0.18 240))',
    items: [
      'Notion — all-in-one notes and planner',
      'Khan Academy — free lessons on everything',
      'Anki — spaced repetition flashcards',
      'Forest — stay focused, grow virtual trees',
      'Grammarly — AI writing assistant',
      'Wolfram Alpha — math and science solver',
      'Google Scholar — academic research',
      'Duolingo — learn languages for free',
      'Quizlet — study sets and practice tests',
      'Todoist — task management and reminders',
    ],
  },
  {
    title: 'Top 10 Healthy Snacks',
    description: 'Tasty snacks that fuel your brain and body',
    category: 'Health' as Category,
    accentColor: 'linear-gradient(135deg, oklch(0.55 0.2 145), oklch(0.45 0.18 160))',
    items: [
      'Almonds — packed with healthy fats and protein',
      'Greek yogurt with berries — probiotics + antioxidants',
      'Apple slices with peanut butter',
      'Dark chocolate (70%+) — boosts brain function',
      'Hummus with veggie sticks',
      'Banana — natural energy boost',
      'Hard-boiled eggs — protein powerhouse',
      'Edamame — plant-based protein',
      'Avocado toast on whole grain bread',
      'Mixed nuts and dried fruit trail mix',
    ],
  },
  {
    title: 'Top 10 Life Hacks for Daily Life',
    description: 'Simple tricks that make everyday life easier',
    category: 'Daily Life' as Category,
    accentColor: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.68 0.22 40))',
    items: [
      'Use the 2-minute rule: if it takes <2 min, do it now',
      'Charge your phone in airplane mode — 3x faster',
      'Put your keys in the same spot every day',
      'Prep your outfit the night before',
      'Drink a glass of water first thing in the morning',
      'Use the 5-second rule to beat procrastination',
      'Keep a running grocery list on your phone',
      'Set your clocks 5 minutes fast to be on time',
      'Batch similar tasks together to save mental energy',
      'Write tomorrow\'s to-do list before bed',
    ],
  },
];

interface Top10SectionProps {
  selectedCategory: Category;
}

export default function Top10Section({ selectedCategory }: Top10SectionProps) {
  const filtered = selectedCategory === 'All' ? lists : lists.filter((l) => l.category === selectedCategory);

  return (
    <section id="top10" className="section-padding max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 165)' }}>
          <ListOrdered size={22} style={{ color: 'oklch(0.52 0.18 165)' }} />
        </div>
        <h2 className="section-title mb-0">Top 10 Lists</h2>
      </div>
      <p className="section-subtitle">Curated lists to level up your life 📋</p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-semibold">No lists in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {filtered.map((list) => (
            <Top10ListCard key={list.title} {...list} />
          ))}
        </div>
      )}
    </section>
  );
}
