import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  embedUrl: string;
  category: string;
}

export default function VideoCard({ title, embedUrl, category }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  // Extract thumbnail from YouTube URL
  const videoId = embedUrl.includes('embed/')
    ? embedUrl.split('embed/')[1]?.split('?')[0]
    : null;
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  return (
    <div className="bg-card rounded-2xl shadow-card card-hover border border-border overflow-hidden">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        {playing ? (
          <iframe
            src={`${embedUrl}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        ) : (
          <div
            className="absolute inset-0 cursor-pointer group"
            onClick={() => setPlaying(true)}
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full gradient-hero" />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                style={{ background: 'oklch(0.62 0.22 30)' }}
              >
                <Play size={24} fill="white" className="text-white ml-1" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs font-bold badge-tech px-2 py-0.5 rounded-full mb-2 inline-block">{category}</span>
        <h3 className="font-bold text-sm leading-snug mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <button
          onClick={() => setPlaying(true)}
          className="flex items-center gap-2 text-sm font-bold py-2 px-4 rounded-full text-white transition-all hover:opacity-90 hover:shadow-md active:scale-95"
          style={{ background: 'oklch(0.62 0.22 30)' }}
        >
          <Play size={13} fill="white" />
          Watch Video
        </button>
      </div>
    </div>
  );
}
