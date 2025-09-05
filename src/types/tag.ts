import { z } from 'zod';

export const TagTypeEnum = z.enum([
  'a11y',
  'actix',
  'apollo',
  'async',
  'axum',
  'collaboration',
  'content',
  'design',
  'diesel',
  'drizzle',
  'embeds',
  'express',
  'figma',
  'graphql',
  'javascript',
  'jest',
  'monorepo',
  'nestjs',
  'nextjs',
  'nodejs',
  'performance',
  'playwright',
  'prisma',
  'promises',
  'react',
  'recoil',
  'redux',
  'rust',
  'serde',
  'sqlx',
  'storybook',
  'tailwindcss',
  'tauri',
  'tokio',
  'trpc',
  'turborepo',
  'typescript',
  'validation',
  'vite',
  'vitest',
  'wasm',
  'webpack',
  'yew',
  'zod',
  'zustand',
]);

export const TagCategoryEnum = z.enum([
  'frontend',
  'backend',
  'testing',
  'tooling',
  'language',
  'systems',
  'state-management',
  'database',
  'accessibility',
  'design',
  'content',
]);

export const TagSchema = z.object({
  id: TagTypeEnum,
  name: z.string(),
  category: TagCategoryEnum,
  color: z.string().optional(),
});

export type Tag = z.infer<typeof TagSchema>;
export type TagType = z.infer<typeof TagTypeEnum>;
export type TagCategory = z.infer<typeof TagCategoryEnum>;
