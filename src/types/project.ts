import { z } from 'zod';
import { tagTypeEnum } from './tag';

export const Project = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  github: z.url(),
  tags: z.array(tagTypeEnum),
  date: z.date(),
});

export type Project = z.infer<typeof Project>;
