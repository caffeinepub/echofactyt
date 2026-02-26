import React from 'react';
import { TrendingUp, Eye, Loader2 } from 'lucide-react';
import { useGetTopPosts, useViewPost } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';

const categoryColors: Record<string, string> = {
  Technology: 'badge-tech',
  School: 'badge-school',
  Health: 'badge-health',
  Entertainment: 'badge-entertainment',
  'Daily Life': 'badge-daily',
};

export default function PopularPostsSection() {
  const { data: posts, isLoading, error } = useGetTopPosts();
  const viewPost = useViewPost();

  const handleClick = (title: string) => {
    viewPost.mutate(title);
  };

  return (
    <section id="popular" className="section-padding max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl" style={{ background: 'oklch(0.93 0.08 300)' }}>
          <TrendingUp size={22} style={{ color: 'oklch(0.52 0.18 300)' }} />
        </div>
        <h2 className="section-title mb-0">Most Popular Posts</h2>
      </div>
      <p className="section-subtitle">What everyone's reading right now 👀</p>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-2xl" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>Could not load popular posts.</p>
        </div>
      ) : !posts || posts.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p className="font-semibold">No posts yet — check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {posts.map(([title, category, views], index) => (
            <button
              key={title}
              onClick={() => handleClick(title)}
              disabled={viewPost.isPending}
              className="bg-card rounded-2xl shadow-card border border-border p-4 text-left card-hover group disabled:opacity-70 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-2xl font-black opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  #{index + 1}
                </span>
                {viewPost.isPending && viewPost.variables === title ? (
                  <Loader2 size={14} className="animate-spin text-muted-foreground" />
                ) : (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Eye size={12} />
                    <span className="font-bold">{Number(views).toLocaleString()}</span>
                  </div>
                )}
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${categoryColors[category] || 'badge-daily'}`}>
                {category}
              </span>
              <p className="text-sm font-bold leading-snug mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {title}
              </p>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
