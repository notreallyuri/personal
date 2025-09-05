import { z } from 'zod';

export const TagType = z.enum([
  'typescript',
  'react',
  'nextjs',
  'nodejs',
  'express',
  'nestjs',
  'prisma',
  'drizzle',
  'graphql',
  'apollo',
  'trpc',
  'zustand',
  'redux',
  'recoil',
  'tailwindcss',
  'vite',
  'webpack',
  'jest',
  'vitest',
  'playwright',
  'storybook',
  'turborepo',
  'monorepo',
  'rust',
  'tauri',
  'tokio',
  'serde',
  'axum',
  'actix',
  'diesel',
  'sqlx',
  'wasm',
  'yew',
]);

export const TagCategory = z.enum([
  'frontend',
  'backend',
  'testing',
  'tooling',
  'language',
  'systems',
  'state-management',
  'database',
]);

export const Tag = z.object({
  id: TagType,
  name: z.string(),
  category: TagCategory,
});

export type Tag = z.infer<typeof Tag>;
export type TagType = z.infer<typeof TagType>;
export type TagCategory = z.infer<typeof TagCategory>;

export const TAG_CATEGORIES: Record<TagCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  testing: 'Testing',
  tooling: 'Tooling',
  language: 'Language',
  systems: 'Systems',
  'state-management': 'State Management',
  database: 'Database',
};

export const TAG_CONFIG: Record<TagType, Omit<Tag, 'id'>> = {
  typescript: { name: 'TypeScript', category: 'language' },
  react: { name: 'React', category: 'frontend' },
  nextjs: { name: 'Next.js', category: 'frontend' },
  tailwindcss: { name: 'Tailwind CSS', category: 'frontend' },
  prisma: { name: 'Prisma', category: 'database' },
  drizzle: { name: 'Drizzle ORM', category: 'database' },
  nodejs: { name: 'Node.js', category: 'backend' },
  express: { name: 'Express.js', category: 'backend' },
  nestjs: { name: 'NestJS', category: 'backend' },
  graphql: { name: 'GraphQL', category: 'backend' },
  apollo: { name: 'Apollo', category: 'backend' },
  trpc: { name: 'tRPC', category: 'backend' },
  zustand: { name: 'Zustand', category: 'state-management' },
  redux: { name: 'Redux', category: 'state-management' },
  recoil: { name: 'Recoil', category: 'state-management' },
  jest: { name: 'Jest', category: 'testing' },
  vitest: { name: 'Vitest', category: 'testing' },
  playwright: { name: 'Playwright', category: 'testing' },
  vite: { name: 'Vite', category: 'tooling' },
  webpack: { name: 'Webpack', category: 'tooling' },
  storybook: { name: 'Storybook', category: 'tooling' },
  turborepo: { name: 'Turborepo', category: 'tooling' },
  monorepo: { name: 'Monorepo', category: 'tooling' },
  rust: { name: 'Rust', category: 'language' },
  tauri: { name: 'Tauri', category: 'systems' },
  tokio: { name: 'Tokio', category: 'systems' },
  serde: { name: 'Serde', category: 'systems' },
  axum: { name: 'Axum', category: 'backend' },
  actix: { name: 'Actix', category: 'backend' },
  diesel: { name: 'Diesel', category: 'database' },
  sqlx: { name: 'SQLx', category: 'database' },
  wasm: { name: 'WebAssembly', category: 'systems' },
  yew: { name: 'Yew', category: 'frontend' },
} as const;

export const createTag = (type: TagType): Tag => ({
  id: type,
  ...TAG_CONFIG[type],
});

export const createMultipleTags = (types: TagType[]): Tag[] =>
  types.map(createTag);

export const getTagsByCategory = (category: TagCategory): Tag[] =>
  (Object.keys(TAG_CONFIG) as TagType[])
    .filter((type) => TAG_CONFIG[type].category === category)
    .map(createTag);

export const getAllTags = (): Tag[] =>
  (Object.keys(TAG_CONFIG) as TagType[]).map(createTag);
