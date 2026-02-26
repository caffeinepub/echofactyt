import React from 'react';
import { Calculator } from 'lucide-react';
import GPACalculator from './GPACalculator';
import ScreenTimeCalculator from './ScreenTimeCalculator';

export default function CalculatorsSection() {
  return (
    <section id="calculators" className="section-padding max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 220)' }}>
          <Calculator size={22} style={{ color: 'oklch(0.52 0.18 220)' }} />
        </div>
        <h2 className="section-title mb-0">Calculators</h2>
      </div>
      <p className="section-subtitle">Useful tools to help you make smarter decisions 🧮</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GPACalculator />
        <ScreenTimeCalculator />
      </div>
    </section>
  );
}
