import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Trending', href: '#trending' },
  { label: 'Top 10', href: '#top10' },
  { label: 'Guides', href: '#guides' },
  { label: 'Videos', href: '#videos' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Downloads', href: '#downloads' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-extrabold text-xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.72 0.18 165))' }}
          >
            <Zap size={16} fill="white" className="text-white" />
          </div>
          <span style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.52 0.18 165))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            EchoFactyt
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
