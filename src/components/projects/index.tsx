'use client';
import { useProjectFilters } from '@/hooks/use-project-filters';
import { MOCK_PROJECTS } from '@/mock/projects';
import { ProjectsList } from './project-list';
import { ProjectsFilters } from './projects-filter';

export function Projects() {
  const {
    textFilter,
    categoryFilter,
    tagsFilter,
    setTextFilter,
    setCategoryFilter,
    setTagsFilter,
    filteredProjects,
    filterCount,
    hasFilters,
    clearFilters,
  } = useProjectFilters(MOCK_PROJECTS);

  return (
    <>
      <section
        className="gap-2 space-y-2 rounded-lg border bg-accent/50 p-2"
        id="search"
      >
        <p className="font-semibold text-lg">Filter</p>
        <ProjectsFilters
          categoryFilter={categoryFilter}
          hasFilters={hasFilters}
          onCategoryChange={setCategoryFilter}
          onClearFilters={clearFilters}
          onTagsChange={setTagsFilter}
          onTextChange={setTextFilter}
          tagsFilter={tagsFilter}
          textFilter={textFilter}
        />
      </section>
      <ProjectsList
        filterCount={filterCount}
        filteredProjects={filteredProjects}
        totalProjects={MOCK_PROJECTS.length}
      />
    </>
  );
}
