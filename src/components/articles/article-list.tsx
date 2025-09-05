'use client';

import type { Article } from '@/types/articles';
import { ArticleCard } from './article-card';

type ArticleListProps = {
  filterCount: number;
  filteredArticles: Article[];
  totalArticles: number;
};

export function ArticleList({
  filterCount,
  filteredArticles,
  totalArticles,
}: ArticleListProps) {
  return (
    <section className="space-y-4" id="list">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          {filteredArticles.length} of {totalArticles} articles
          {filterCount > 0 &&
            ` (${filterCount} filter${filterCount === 1 ? '' : 's'} applied)`}
        </p>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-lg text-muted-foreground">No projects found</p>
          <p className="text-muted-foreground text-sm">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-4">
          {filteredArticles.map((item) => (
            <ArticleCard article={item} key={item.slug} />
          ))}
        </div>
      )}
    </section>
  );
}
