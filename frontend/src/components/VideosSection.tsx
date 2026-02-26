import React from 'react';
import { Youtube } from 'lucide-react';
import VideoCard from './VideoCard';

const videos = [
  {
    title: '10 Study Hacks That Actually Work',
    embedUrl: 'https://www.youtube.com/embed/p60rN9JEapg',
    category: 'School',
  },
  {
    title: 'How to Stay Healthy as a Teen',
    embedUrl: 'https://www.youtube.com/embed/sTANio_2E0Q',
    category: 'Health',
  },
  {
    title: 'Top Tech Tips for Students',
    embedUrl: 'https://www.youtube.com/embed/C0DPdy98e4c',
    category: 'Technology',
  },
  {
    title: 'Life Hacks Every Teen Should Know',
    embedUrl: 'https://www.youtube.com/embed/Ks-_Mh1QhMc',
    category: 'Daily Life',
  },
  {
    title: 'How to Be More Productive Every Day',
    embedUrl: 'https://www.youtube.com/embed/LAZFqFMGBjQ',
    category: 'Daily Life',
  },
  {
    title: 'Amazing Science Facts in 60 Seconds',
    embedUrl: 'https://www.youtube.com/embed/0fKBhvDjuy0',
    category: 'Technology',
  },
];

export default function VideosSection() {
  return (
    <section id="videos" className="section-padding" style={{ background: 'oklch(0.96 0.01 260)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 30)' }}>
            <Youtube size={22} style={{ color: 'oklch(0.62 0.22 30)' }} />
          </div>
          <h2 className="section-title mb-0">Watch & Learn</h2>
        </div>
        <p className="section-subtitle">Short videos packed with knowledge 🎬</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
