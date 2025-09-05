'use client';

import { useMemo, useState } from 'react';
import type { Project } from '@/types/project';

function matchesTextFilter(project: Project, searchTerm: string): boolean {
  if (!searchTerm) {
    return true;
  }
  const term = searchTerm.toLowerCase();
  return (
    project.title.toLowerCase().includes(term) ||
    (project.description?.toLowerCase().includes(term) ?? false)
  );
}

function matchesCategoryFilter(project: Project, category: string): boolean {
  if (!category) {
    return true;
  }
  return project.category === category;
}

function matchesTagsFilter(project: Project, selectedTags: string[]): boolean {
  if (selectedTags.length === 0) {
    return true;
  }
  return selectedTags.every((tag) =>
    project.tags.includes(tag as Project['tags'][number])
  );
}

export function useProjectFilters(projects: Project[]) {
  const [textFilter, setTextFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [tagsFilter, setTagsFilter] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (
        matchesTextFilter(project, textFilter) &&
        matchesCategoryFilter(project, categoryFilter) &&
        matchesTagsFilter(project, tagsFilter)
      );
    });
  }, [projects, textFilter, categoryFilter, tagsFilter]);

  const filterCount = [
    textFilter,
    categoryFilter,
    tagsFilter.length > 0 ? 'tags' : '',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setTextFilter('');
    setCategoryFilter('');
    setTagsFilter([]);
  };

  return {
    textFilter,
    categoryFilter,
    tagsFilter,

    setTextFilter,
    setCategoryFilter,
    setTagsFilter,

    filteredProjects,
    filterCount,
    hasFilters: filterCount > 0,
    clearFilters,
  };
}
