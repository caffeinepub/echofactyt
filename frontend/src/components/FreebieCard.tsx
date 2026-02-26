import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

interface FreebieCardProps {
  title: string;
  description: string;
  emoji: string;
  accentColor: string;
  tag: string;
}

export default function FreebieCard({ title, description, emoji, accentColor, tag }: FreebieCardProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="bg-card rounded-2xl shadow-card card-hover border border-border overflow-hidden relative">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8"
        style={{ background: accentColor }}
      />

      <div className="p-6 relative">
        <div className="flex items-start justify-between mb-3">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
            style={{ background: accentColor }}
          >
            {tag}
          </span>
          <span className="text-4xl">{emoji}</span>
        </div>

        <h3 className="text-lg font-extrabold mb-2 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>

        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 hover:shadow-md active:scale-95"
          style={{ background: downloaded ? 'oklch(0.55 0.2 145)' : accentColor }}
        >
          {downloaded ? (
            <>
              <CheckCircle2 size={16} />
              Coming Soon!
            </>
          ) : (
            <>
              <Download size={16} />
              Download Free
            </>
          )}
        </button>
      </div>
    </div>
  );
}
