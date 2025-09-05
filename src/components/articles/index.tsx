'use client';

import { useArticlesFilters } from '@/hooks/use-article-filters';
import { MOCK_ARTICLES } from '@/mock/articles';
import { ArticleFilter } from './article-filter';
import { ArticleList } from './article-list';

export function Articles() {
  const {
    textFilter,
    tagsFilter,
    hasFilters,
    setTextFilter,
    setTagsFilter,
    clearFilters,
    filterCount,
    filteredArticles,
  } = useArticlesFilters(MOCK_ARTICLES);

  return (
    <>
      <section
        className="gap-2 space-y-2 rounded-lg border bg-accent/50 p-2"
        id="search"
      >
        <ArticleFilter
          hasFilters={hasFilters}
          onClearFilters={clearFilters}
          onTagsChange={setTagsFilter}
          onTextChange={setTextFilter}
          tagsFilter={tagsFilter}
          textFilter={textFilter}
        />
      </section>
      <ArticleList
        filterCount={filterCount}
        filteredArticles={filteredArticles}
        totalArticles={MOCK_ARTICLES.length}
      />
    </>
  );
}
