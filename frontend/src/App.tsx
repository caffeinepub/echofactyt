import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryFilter, { type Category } from './components/CategoryFilter';
import NewUpdatesSection from './components/NewUpdatesSection';
import TrendingFactsSection from './components/TrendingFactsSection';
import Top10Section from './components/Top10Section';
import GuidesSection from './components/GuidesSection';
import VideosSection from './components/VideosSection';
import QuizSection from './components/QuizSection';
import CalculatorsSection from './components/CalculatorsSection';
import DownloadsSection from './components/DownloadsSection';
import PopularPostsSection from './components/PopularPostsSection';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection
          onLearnMore={() => scrollTo('trending')}
          onTryNow={() => scrollTo('quiz')}
          onWatchVideo={() => scrollTo('videos')}
        />

        {/* New Updates (from backend) */}
        <NewUpdatesSection />

        {/* Category Filter — sticky below header */}
        <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />

        {/* Trending Facts */}
        <TrendingFactsSection selectedCategory={selectedCategory} />

        {/* Popular Posts (from backend) */}
        <PopularPostsSection />

        {/* Top 10 Lists */}
        <div style={{ background: 'oklch(0.97 0.02 165 / 0.3)' }}>
          <Top10Section selectedCategory={selectedCategory} />
        </div>

        {/* Step-by-Step Guides */}
        <GuidesSection selectedCategory={selectedCategory} />

        {/* Videos */}
        <VideosSection />

        {/* Quiz */}
        <QuizSection />

        {/* Calculators */}
        <CalculatorsSection />

        {/* Free Downloads */}
        <DownloadsSection />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
