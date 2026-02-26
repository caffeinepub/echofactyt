import React from 'react';
import { Zap, Heart, Mail } from 'lucide-react';
import { SiX, SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'echofactyt');

  return (
    <footer className="border-t border-border" style={{ background: 'oklch(0.18 0.02 260)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.72 0.18 165))' }}
              >
                <Zap size={16} fill="white" className="text-white" />
              </div>
              <span className="text-xl font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                EchoFactyt
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.65 0.02 260)' }}>
              Short, interesting facts, life hacks, and useful tips for teens and young adults. Covering technology, school, health, entertainment, and daily life.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <SiX size={14} />, href: '#', label: 'X' },
                { icon: <SiFacebook size={14} />, href: '#', label: 'Facebook' },
                { icon: <SiInstagram size={14} />, href: '#', label: 'Instagram' },
                { icon: <SiYoutube size={14} />, href: '#', label: 'YouTube' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: 'oklch(0.28 0.02 260)', color: 'oklch(0.75 0.02 260)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white mb-3 uppercase tracking-wide">Explore</h4>
            <ul className="space-y-2">
              {['Trending Facts', 'Top 10 Lists', 'Step-by-Step Guides', 'Videos', 'Quiz', 'Calculators', 'Free Downloads'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: 'oklch(0.65 0.02 260)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-extrabold text-white mb-3 uppercase tracking-wide">Stay Updated</h4>
            <p className="text-sm mb-3" style={{ color: 'oklch(0.65 0.02 260)' }}>
              Get the latest facts and tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
              />
              <button
                className="px-3 py-2 rounded-lg text-white text-sm font-bold transition-opacity hover:opacity-90 flex-shrink-0"
                style={{ background: 'oklch(0.62 0.22 30)' }}
              >
                <Mail size={15} />
              </button>
            </div>
            <p className="text-xs mt-2" style={{ color: 'oklch(0.45 0.02 260)' }}>
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'oklch(0.28 0.02 260)', color: 'oklch(0.52 0.02 260)' }}
        >
          <p>© {year} EchoFactyt. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} fill="oklch(0.62 0.22 30)" style={{ color: 'oklch(0.62 0.22 30)' }} /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
              style={{ color: 'oklch(0.72 0.18 30)' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
