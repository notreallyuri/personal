import { GitHub } from '@/assets/custom-svgs';
import type { Project } from '@/types/project';
import { Button } from './ui/button';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border bg-muted">
      <div>
        <div className="flex w-full items-center justify-between">
          <h2 className="text-foreground text-xl">{project.title}</h2>
          <p className="text-muted-foreground text-sm">
            {project.date.toLocaleDateString()}
          </p>
        </div>
        <p>{project.description}</p>
      </div>

      <ul className="flex gap-2 overflow-x-scroll">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <Button>
        <GitHub /> Access Project
      </Button>
    </div>
  );
}
