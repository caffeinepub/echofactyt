import React, { useState } from 'react';
import { Monitor, Smartphone, Tv, Gamepad2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface DeviceTime {
  phone: number;
  computer: number;
  tv: number;
  gaming: number;
}

export default function ScreenTimeCalculator() {
  const [times, setTimes] = useState<DeviceTime>({
    phone: 3,
    computer: 2,
    tv: 1,
    gaming: 1,
  });

  const total = times.phone + times.computer + times.tv + times.gaming;

  const getAssessment = () => {
    if (total <= 2) return { label: 'Excellent! 🌟', desc: 'You have a very healthy relationship with screens. Keep it up!', color: 'oklch(0.55 0.2 145)', bg: 'oklch(0.93 0.08 145)' };
    if (total <= 4) return { label: 'Good 👍', desc: 'Your screen time is within healthy limits. Try to take regular breaks.', color: 'oklch(0.62 0.2 165)', bg: 'oklch(0.93 0.08 165)' };
    if (total <= 6) return { label: 'Moderate ⚠️', desc: 'Consider reducing screen time. Try the 20-20-20 rule: every 20 min, look 20 feet away for 20 seconds.', color: 'oklch(0.68 0.22 40)', bg: 'oklch(0.95 0.1 55)' };
    if (total <= 9) return { label: 'High 😬', desc: 'Your screen time is quite high. Try setting app limits and scheduling screen-free hours.', color: 'oklch(0.62 0.22 30)', bg: 'oklch(0.93 0.08 30)' };
    return { label: 'Very High 🚨', desc: 'This level of screen time can affect sleep, focus, and mental health. Consider a digital detox day!', color: 'oklch(0.55 0.22 20)', bg: 'oklch(0.93 0.08 20)' };
  };

  const assessment = getAssessment();

  const devices = [
    { key: 'phone' as keyof DeviceTime, label: 'Phone', icon: <Smartphone size={16} /> },
    { key: 'computer' as keyof DeviceTime, label: 'Computer', icon: <Monitor size={16} /> },
    { key: 'tv' as keyof DeviceTime, label: 'TV', icon: <Tv size={16} /> },
    { key: 'gaming' as keyof DeviceTime, label: 'Gaming', icon: <Gamepad2 size={16} /> },
  ];

  return (
    <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
      <div className="p-5 text-white" style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.68 0.22 40))' }}>
        <div className="flex items-center gap-2 mb-1">
          <Monitor size={20} />
          <h3 className="text-lg font-extrabold" style={{ fontFamily: 'Poppins, sans-serif' }}>Screen Time Tracker</h3>
        </div>
        <p className="text-sm text-white/80">Check your daily digital wellness score</p>
      </div>

      <div className="p-5">
        {/* Assessment */}
        <div className="text-center mb-5 p-4 rounded-xl" style={{ background: assessment.bg }}>
          <div className="text-4xl font-black mb-1" style={{ color: assessment.color, fontFamily: 'Poppins, sans-serif' }}>
            {total}h / day
          </div>
          <div className="text-sm font-bold mb-1" style={{ color: assessment.color }}>{assessment.label}</div>
          <p className="text-xs leading-relaxed" style={{ color: assessment.color }}>{assessment.desc}</p>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          {devices.map(({ key, label, icon }) => (
            <div key={key}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span style={{ color: 'oklch(0.62 0.22 30)' }}>{icon}</span>
                  {label}
                </div>
                <span className="text-sm font-black" style={{ color: 'oklch(0.62 0.22 30)' }}>
                  {times[key]}h
                </span>
              </div>
              <Slider
                min={0}
                max={12}
                step={0.5}
                value={[times[key]]}
                onValueChange={([v]) => setTimes({ ...times, [key]: v })}
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground font-semibold">WHO Recommended (teens):</span>
            <span className="font-bold" style={{ color: 'oklch(0.55 0.2 145)' }}>≤ 2h / day</span>
          </div>
        </div>
      </div>
    </div>
  );
}
