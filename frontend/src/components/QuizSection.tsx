import React from 'react';
import { HelpCircle } from 'lucide-react';
import Quiz from './Quiz';

export default function QuizSection() {
  return (
    <section id="quiz" className="section-padding" style={{ background: 'oklch(0.97 0.02 30)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 30)' }}>
            <HelpCircle size={22} style={{ color: 'oklch(0.62 0.22 30)' }} />
          </div>
          <h2 className="section-title mb-0">Take a Quiz</h2>
        </div>
        <p className="section-subtitle">Discover something new about yourself 🧠</p>

        <Quiz />
      </div>
    </section>
  );
}
