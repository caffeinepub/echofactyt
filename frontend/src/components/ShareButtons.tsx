import React, { useState } from 'react';
import { SiX, SiFacebook, SiWhatsapp } from 'react-icons/si';
import { Link2, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:opacity-80 transition-opacity"
        title="Share on X"
      >
        <SiX size={13} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:opacity-80 transition-opacity"
        style={{ backgroundColor: 'oklch(0.45 0.18 240)' }}
        title="Share on Facebook"
      >
        <SiFacebook size={13} />
      </a>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:opacity-80 transition-opacity"
        style={{ backgroundColor: 'oklch(0.55 0.18 145)' }}
        title="Share on WhatsApp"
      >
        <SiWhatsapp size={13} />
      </a>
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:opacity-80 transition-all"
        style={{ backgroundColor: copied ? 'oklch(0.55 0.18 145)' : 'oklch(0.52 0.02 260)' }}
        title="Copy link"
      >
        {copied ? <Check size={13} /> : <Link2 size={13} />}
      </button>
      {copied && (
        <span className="text-xs font-semibold" style={{ color: 'oklch(0.55 0.18 145)' }}>
          Copied!
        </span>
      )}
    </div>
  );
}
