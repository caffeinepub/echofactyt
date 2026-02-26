import React from 'react';
import { Gift } from 'lucide-react';
import FreebieCard from './FreebieCard';

const freebies = [
  {
    title: 'Study Planner PDF',
    description: 'A beautifully designed weekly study planner to organize your subjects, deadlines, and goals. Print it or use it digitally!',
    emoji: '📅',
    accentColor: 'oklch(0.55 0.2 220)',
    tag: 'School',
  },
  {
    title: 'Healthy Meal Prep Checklist',
    description: 'A complete guide to meal prepping on a budget. Includes a shopping list, prep schedule, and 10 easy recipes for students.',
    emoji: '🥗',
    accentColor: 'oklch(0.55 0.2 145)',
    tag: 'Health',
  },
  {
    title: 'Daily Habit Tracker',
    description: 'Track your daily habits and build a consistent routine. Includes 30 proven habits for teens and a progress chart.',
    emoji: '✅',
    accentColor: 'oklch(0.62 0.22 30)',
    tag: 'Daily Life',
  },
  {
    title: 'Tech Cheat Sheet',
    description: 'Essential keyboard shortcuts, coding basics, and tech tips every student needs. Works for Windows, Mac, and mobile!',
    emoji: '💻',
    accentColor: 'oklch(0.55 0.2 300)',
    tag: 'Technology',
  },
  {
    title: 'Exam Prep Checklist',
    description: 'A step-by-step checklist to prepare for any exam. Covers study strategies, the night before, and day-of tips.',
    emoji: '📝',
    accentColor: 'oklch(0.62 0.2 165)',
    tag: 'School',
  },
  {
    title: 'Social Media Detox Guide',
    description: 'A 7-day guide to reducing screen time and improving your mental health. Includes daily challenges and reflection prompts.',
    emoji: '🧘',
    accentColor: 'oklch(0.68 0.22 40)',
    tag: 'Health',
  },
];

export default function DownloadsSection() {
  return (
    <section id="downloads" className="section-padding" style={{ background: 'oklch(0.96 0.01 260)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 30)' }}>
            <Gift size={22} style={{ color: 'oklch(0.62 0.22 30)' }} />
          </div>
          <h2 className="section-title mb-0">Free Downloads</h2>
        </div>
        <p className="section-subtitle">Grab these free resources to boost your life 🎁</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {freebies.map((freebie) => (
            <FreebieCard key={freebie.title} {...freebie} />
          ))}
        </div>
      </div>
    </section>
  );
}
