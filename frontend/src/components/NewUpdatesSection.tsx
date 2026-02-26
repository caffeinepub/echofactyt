import React from 'react';
import { Bell, Clock } from 'lucide-react';
import { useGetRecentUpdates } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';

function formatTime(nanoseconds: bigint): string {
  const ms = Number(nanoseconds / BigInt(1_000_000));
  const date = new Date(ms);
  const now = Date.now();
  const diff = now - ms;

  if (diff < 60_000) return 'Just now';
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function NewUpdatesSection() {
  const { data: updates, isLoading } = useGetRecentUpdates();

  if (!isLoading && (!updates || updates.length === 0)) return null;

  return (
    <section id="updates" className="section-padding max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 165)' }}>
          <Bell size={22} style={{ color: 'oklch(0.52 0.18 165)' }} />
        </div>
        <h2 className="section-title mb-0">New Updates</h2>
      </div>
      <p className="section-subtitle">Fresh facts and tips just dropped 🆕</p>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {updates!.map(([content, timestamp], i) => (
            <div
              key={i}
              className="bg-card rounded-2xl shadow-card border border-border p-4 card-hover relative overflow-hidden"
            >
              {/* Accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, oklch(0.62 0.22 30), oklch(0.72 0.18 165))' }}
              />
              <div className="flex items-center justify-between mb-3">
                <span className="new-badge">New</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={11} />
                  <span>{formatTime(timestamp)}</span>
                </div>
              </div>
              <p className="text-sm font-semibold leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
