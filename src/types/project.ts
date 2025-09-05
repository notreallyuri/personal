import { z } from 'zod';
import { TagType } from './tag';

export const ProjectCategory = z.enum([
  'frontend',
  'backend',
  'fullstack',
  'mobile',
  'desktop',
]);

export const Project = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  github: z.url(),
  category: ProjectCategory,
  tags: z.array(TagType),
  date: z.date(),
});

export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  fullstack: 'Full Stack',
  mobile: 'Mobile',
  desktop: 'Desktop',
};

export type Project = z.infer<typeof Project>;
export type ProjectCategory = z.infer<typeof ProjectCategory>;
