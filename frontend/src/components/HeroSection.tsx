import React from 'react';
import { Zap, BookOpen, Play } from 'lucide-react';

interface HeroSectionProps {
  onLearnMore: () => void;
  onTryNow: () => void;
  onWatchVideo: () => void;
}

export default function HeroSection({ onLearnMore, onTryNow, onWatchVideo }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[520px] flex items-center">
      {/* Background image + gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1400x600.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.55 0.22 30 / 0.88) 0%, oklch(0.65 0.20 50 / 0.80) 40%, oklch(0.55 0.18 165 / 0.82) 100%)',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{ background: 'oklch(0.85 0.20 85)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 blur-3xl"
        style={{ background: 'oklch(0.72 0.18 165)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
          <Zap size={14} className="text-yellow-300" />
          <span className="text-sm font-bold tracking-wide">Facts · Hacks · Tips for Gen Z</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Discover Facts That
          <br />
          <span className="text-yellow-300">Actually Matter</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Short, interesting facts, life hacks, and useful tips for teens and young adults — covering tech, school, health, entertainment, and daily life.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onLearnMore}
            className="flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
            style={{ color: 'oklch(0.55 0.22 30)' }}
          >
            <BookOpen size={18} />
            Learn More
          </button>
          <button
            onClick={onTryNow}
            className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-full border-2 border-white text-white transition-all duration-200 hover:bg-white/20 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <Zap size={18} />
            Try Now
          </button>
          <button
            onClick={onWatchVideo}
            className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
            style={{ background: 'oklch(0.72 0.18 165)', color: 'white' }}
          >
            <Play size={18} fill="white" />
            Watch Video
          </button>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/90">
          {[
            { value: '500+', label: 'Facts & Tips' },
            { value: '50+', label: 'Life Hacks' },
            { value: '10+', label: 'Quizzes' },
            { value: '100K+', label: 'Readers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-yellow-300">{stat.value}</div>
              <div className="text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
