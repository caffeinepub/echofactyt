import React from 'react';
import { TrendingUp } from 'lucide-react';
import FactCard from './FactCard';
import type { Category } from './CategoryFilter';

const facts = [
  {
    category: 'Technology' as Category,
    title: 'Your Phone Has More Power Than NASA',
    fact: 'The average smartphone today has more computing power than all of NASA\'s computers combined during the 1969 moon landing. Your pocket device can process billions of calculations per second!',
    emoji: '🚀',
  },
  {
    category: 'School' as Category,
    title: 'The Pomodoro Technique Boosts Focus by 40%',
    fact: 'Studying in 25-minute focused bursts with 5-minute breaks (the Pomodoro Technique) can increase your productivity by up to 40%. Your brain retains information better in short, intense sessions.',
    emoji: '🍅',
  },
  {
    category: 'Health' as Category,
    title: 'Sleep Deprivation Mimics Being Drunk',
    fact: 'Being awake for 17 hours straight impairs your cognitive performance as much as having a blood alcohol level of 0.05%. Getting 8 hours of sleep literally makes you smarter!',
    emoji: '😴',
  },
  {
    category: 'Entertainment' as Category,
    title: 'Netflix Uses AI to Pick Your Thumbnails',
    fact: 'Netflix uses machine learning to show you different thumbnail images for the same show based on your viewing history. Two people can see completely different artwork for the same movie!',
    emoji: '🎬',
  },
  {
    category: 'Daily Life' as Category,
    title: 'Cold Water Wakes You Up Faster Than Coffee',
    fact: 'Splashing cold water on your face triggers the "diving reflex," slowing your heart rate and increasing alertness within seconds. It\'s faster-acting than caffeine and completely free!',
    emoji: '💧',
  },
  {
    category: 'Technology' as Category,
    title: 'The Internet Weighs About 50 Grams',
    fact: 'All the data on the internet is stored as electrons. If you could weigh all those electrons, the entire internet would weigh roughly 50 grams — about the weight of a strawberry!',
    emoji: '🌐',
  },
  {
    category: 'School' as Category,
    title: 'Doodling Actually Improves Memory',
    fact: 'Research shows that people who doodle while listening retain 29% more information than those who don\'t. So next time your teacher says "stop drawing," you have science on your side!',
    emoji: '✏️',
  },
  {
    category: 'Health' as Category,
    title: 'Laughing Burns Real Calories',
    fact: 'Laughing for 10-15 minutes a day can burn up to 40 calories. It also releases endorphins, reduces stress hormones, and boosts your immune system. Comedy really is the best medicine!',
    emoji: '😂',
  },
];

interface TrendingFactsSectionProps {
  selectedCategory: Category;
}

export default function TrendingFactsSection({ selectedCategory }: TrendingFactsSectionProps) {
  const filtered = selectedCategory === 'All' ? facts : facts.filter((f) => f.category === selectedCategory);

  return (
    <section id="trending" className="section-padding max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 30)' }}>
          <TrendingUp size={22} style={{ color: 'oklch(0.62 0.22 30)' }} />
        </div>
        <h2 className="section-title mb-0">Trending Facts</h2>
      </div>
      <p className="section-subtitle">Mind-blowing facts you need to know right now 🔥</p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-semibold">No facts in this category yet.</p>
          <p className="text-sm mt-1">Try selecting "All" to see everything!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((fact) => (
            <FactCard key={fact.title} {...fact} />
          ))}
        </div>
      )}
    </section>
  );
}
