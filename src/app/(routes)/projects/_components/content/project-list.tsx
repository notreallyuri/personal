'use client';

import type { Project } from '@/types/project';
import { ProjectCard } from './project-card';

type ProjectsListProps = {
  filterCount: number;
  filteredProjects: Project[];
  totalProjects: number;
};

export function ProjectsList({
  filterCount,
  filteredProjects,
  totalProjects,
}: ProjectsListProps) {
  return (
    <section className="space-y-4" id="list">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          {filteredProjects.length} of {totalProjects} projects
          {filterCount > 0 &&
            ` (${filterCount} filter${filterCount === 1 ? '' : 's'} applied)`}
        </p>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-lg text-muted-foreground">No projects found</p>
          <p className="text-muted-foreground text-sm">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredProjects.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      )}
    </section>
  );
}
