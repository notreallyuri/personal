import { z } from 'zod';
import { TagTypeEnum } from './tag';

export const ProjectCategoryEnum = z.enum([
  'frontend',
  'backend',
  'fullstack',
  'mobile',
  'desktop',
]);

export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  github: z.url(),
  category: ProjectCategoryEnum,
  tags: z.array(TagTypeEnum),
  date: z.date(),
});

export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  fullstack: 'Full Stack',
  mobile: 'Mobile',
  desktop: 'Desktop',
};

export type Project = z.infer<typeof ProjectSchema>;
export type ProjectCategory = z.infer<typeof ProjectCategoryEnum>;
