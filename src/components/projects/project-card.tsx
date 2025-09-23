import { useRef, useState } from 'react';
import { TAG_CONFIG } from '@/lib/tag';
import { cn } from '@/lib/utils';
import { PROJECT_CATEGORIES, type Project } from '@/types/project';

export function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const originalBoundsRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (containerRef.current && !originalBoundsRef.current) {
      originalBoundsRef.current = containerRef.current.getBoundingClientRect();
    }
    setIsHovered(true);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!originalBoundsRef.current) {
      return;
    }

    if (!isHovered) {
      return;
    }

    const { clientX, clientY } = event;
    const bounds = originalBoundsRef.current;

    const isWithinOriginalBounds =
      clientX >= bounds.left &&
      clientX <= bounds.right &&
      clientY >= bounds.top &&
      clientY <= bounds.bottom;

    if (!isWithinOriginalBounds) {
      setIsHovered(false);
      originalBoundsRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    originalBoundsRef.current = null;
  };

  return (
    <a
      className="group relative h-28"
      href={project.github}
      rel="noopener noreferrer"
      target="_blank"
    >
      {/*  biome-ignore lint/a11y/noNoninteractiveElementInteractions: needed too*/}
      {/* biome-ignore lint/a11y/noStaticElementInteractions: needed */}
      <div
        className={cn(
          'flex h-28 w-full flex-col rounded-lg border bg-background p-3 shadow-sm transition-all duration-300 ease-out dark:bg-accent',
          isHovered &&
            'absolute inset-0 z-50 h-fit min-h-44 scale-110 border-primary/30 shadow-2xl shadow-primary/10',
          'origin-center'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <header className="flex w-full items-start justify-between gap-2">
          <h2
            className={cn(
              'line-clamp-1 font-semibold text-base leading-tight transition-colors duration-200',
              isHovered ? 'text-primary' : 'text-foreground'
            )}
          >
            {project.title}
          </h2>
          <time
            className={cn(
              'shrink-0 text-xs transition-all duration-200',
              isHovered ? 'text-foreground' : 'text-muted-foreground'
            )}
            dateTime={project.date.toISOString()}
          >
            {project.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </time>
        </header>

        <p
          className={cn(
            'mb-2 font-medium text-muted-foreground text-sm',
            isHovered && 'text-foreground'
          )}
        >
          {PROJECT_CATEGORIES[project.category]}
        </p>

        <p
          className={cn(
            'text-muted-foreground text-sm leading-relaxed transition-all duration-300',
            isHovered ? 'line-clamp-none' : 'line-clamp-1'
          )}
        >
          {project.description}
        </p>

        <div
          className={cn(
            'mt-3 transition-all ease-out',
            isHovered
              ? 'max-h-48 opacity-100'
              : 'max-h-0 overflow-hidden opacity-0'
          )}
        >
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                className={cn(
                  'inline-flex select-none rounded-md border bg-accent/75 px-2 py-0.5 dark:bg-background',
                  'font-medium text-xs transition-all duration-200',
                  'hover:bg-primary hover:text-primary-foreground'
                )}
                key={tag}
              >
                {TAG_CONFIG[tag].name}
              </span>
            ))}
          </div>
        </div>

        <div
          className={cn(
            'absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </a>
  );
}
