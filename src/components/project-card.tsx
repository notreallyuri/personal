import { GitHubDark, GitHubLight } from '@/assets/custom-svgs';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';
import { TAG_CONFIG } from '@/types/tag';
import { Button } from './ui/button';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        'group flex flex-col gap-4 rounded-lg border bg-muted p-4 transition-all',
        'hover:border-ring hover:ring-[3px] hover:ring-ring/33'
      )}
    >
      <div className="flex-1 space-y-3">
        <header className="flex w-full items-start justify-between gap-2">
          <h2 className="font-semibold text-foreground text-lg leading-tight transition-colors group-hover:text-primary">
            {project.title}
          </h2>
          <time
            className="shrink-0 text-muted-foreground text-sm"
            dateTime={project.date.toISOString()}
          >
            {project.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </time>
        </header>

        <p className="line-clamp-2 text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        <ul
          aria-label="Project technologies"
          className="mt-auto flex h-fit flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <li
              className="inline-flex select-none rounded-md border bg-background px-2 py-1 font-medium text-xs transition-colors hover:bg-accent"
              key={tag}
            >
              {TAG_CONFIG[tag].name}
            </li>
          ))}
        </ul>
      </div>

      <footer className="flex justify-end pt-2">
        <Button
          asChild
          className="relative transition-all group-hover:bg-primary group-hover:text-primary-foreground"
          size="sm"
          type="button"
        >
          <a
            aria-label={`View ${project.title} source code on GitHub`}
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubLight
              aria-hidden="true"
              className="-translate-y-1/2 absolute top-1/2 left-2 block dark:hidden"
            />
            <GitHubDark
              aria-hidden="true"
              className="-translate-y-1/2 absolute top-1/2 left-2 hidden dark:block"
            />
            <span className="ml-6">View Source</span>
          </a>
        </Button>
      </footer>
    </article>
  );
}
