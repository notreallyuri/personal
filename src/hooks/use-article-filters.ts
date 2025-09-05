'use client';

import { useMemo, useState } from 'react';
import type { Article } from '@/types/articles';

function matchesTextFilter(article: Article, searchTerm: string): boolean {
  if (!searchTerm) {
    return true;
  }
  const term = searchTerm.toLowerCase();
  return (
    article.title.toLowerCase().includes(term) ||
    (article.excerpt?.toLowerCase().includes(term) ?? false)
  );
}

function matchesTagsFilter(article: Article, selectedTags: string[]): boolean {
  if (selectedTags.length === 0) {
    return true;
  }
  return selectedTags.every((tag) =>
    article.tags.includes(tag as Article['tags'][number])
  );
}

export function useArticlesFilters(articles: Article[]) {
  const [textFilter, setTextFilter] = useState('');
  const [tagsFilter, setTagsFilter] = useState<string[]>([]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      return (
        matchesTextFilter(article, textFilter) &&
        matchesTagsFilter(article, tagsFilter)
      );
    });
  }, [articles, textFilter, tagsFilter]);

  const filterCount = [textFilter, tagsFilter.length > 0 ? 'tags' : ''].filter(
    Boolean
  ).length;

  const clearFilters = () => {
    setTextFilter('');
    setTagsFilter([]);
  };

  return {
    textFilter,
    tagsFilter,

    setTextFilter,
    setTagsFilter,

    filteredArticles,
    filterCount,
    hasFilters: filterCount > 0,
    clearFilters,
  };
}
