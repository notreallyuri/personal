import {
  type Tag,
  type TagCategory,
  type TagType,
  TagTypeEnum,
} from '@/types/tag';

export const TAG_CATEGORIES: Record<TagCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  testing: 'Testing',
  tooling: 'Tooling',
  language: 'Language',
  systems: 'Systems',
  'state-management': 'State Management',
  database: 'Database',
  accessibility: 'Accessibility',
  design: 'Design',
  content: 'Content',
};

export const TAG_CONFIG: Record<TagType, Omit<Tag, 'id'>> = {
  a11y: { name: 'Accessibility', category: 'accessibility', color: '#FF6B35' },
  actix: { name: 'Actix', category: 'backend', color: '#000000' },
  apollo: { name: 'Apollo', category: 'backend', color: '#311C87' },
  async: { name: 'Async', category: 'language', color: '#F7DF1E' },
  axum: { name: 'Axum', category: 'backend', color: '#000000' },
  collaboration: {
    name: 'Collaboration',
    category: 'tooling',
    color: '#6B73FF',
  },
  content: { name: 'Content', category: 'content', color: '#8B5CF6' },
  design: { name: 'Design', category: 'design', color: '#EC4899' },
  diesel: { name: 'Diesel', category: 'database', color: '#000000' },
  drizzle: { name: 'Drizzle ORM', category: 'database', color: '#C5F74F' },
  embeds: { name: 'Embeds', category: 'content', color: '#8B5CF6' },
  express: { name: 'Express.js', category: 'backend', color: '#000000' },
  figma: { name: 'Figma', category: 'design', color: '#F24E1E' },
  graphql: { name: 'GraphQL', category: 'backend', color: '#E10098' },
  javascript: { name: 'JavaScript', category: 'language', color: '#F7DF1E' },
  jest: { name: 'Jest', category: 'testing', color: '#C21325' },
  monorepo: { name: 'Monorepo', category: 'tooling', color: '#6B7280' },
  nestjs: { name: 'NestJS', category: 'backend', color: '#E0234E' },
  nextjs: { name: 'Next.js', category: 'frontend', color: '#000000' },
  nodejs: { name: 'Node.js', category: 'backend', color: '#339933' },
  performance: { name: 'Performance', category: 'tooling', color: '#10B981' },
  playwright: { name: 'Playwright', category: 'testing', color: '#2EAD33' },
  prisma: { name: 'Prisma', category: 'database', color: '#2D3748' },
  promises: { name: 'Promises', category: 'language', color: '#F7DF1E' },
  react: { name: 'React', category: 'frontend', color: '#61DAFB' },
  recoil: { name: 'Recoil', category: 'state-management', color: '#3578E5' },
  redux: { name: 'Redux', category: 'state-management', color: '#764ABC' },
  rust: { name: 'Rust', category: 'language', color: '#000000' },
  serde: { name: 'Serde', category: 'systems', color: '#000000' },
  sqlx: { name: 'SQLx', category: 'database', color: '#000000' },
  storybook: { name: 'Storybook', category: 'tooling', color: '#FF4785' },
  tailwindcss: { name: 'Tailwind CSS', category: 'frontend', color: '#06B6D4' },
  tauri: { name: 'Tauri', category: 'systems', color: '#24C8DB' },
  tokio: { name: 'Tokio', category: 'systems', color: '#000000' },
  trpc: { name: 'tRPC', category: 'backend', color: '#398CCB' },
  turborepo: { name: 'Turborepo', category: 'tooling', color: '#EF4444' },
  typescript: { name: 'TypeScript', category: 'language', color: '#3178C6' },
  validation: { name: 'Validation', category: 'tooling', color: '#10B981' },
  vite: { name: 'Vite', category: 'tooling', color: '#646CFF' },
  vitest: { name: 'Vitest', category: 'testing', color: '#6E9F18' },
  wasm: { name: 'WebAssembly', category: 'systems', color: '#654FF0' },
  webpack: { name: 'Webpack', category: 'tooling', color: '#8DD6F9' },
  yew: { name: 'Yew', category: 'frontend', color: '#000000' },
  zod: { name: 'Zod', category: 'tooling', color: '#3E63DD' },
  zustand: { name: 'Zustand', category: 'state-management', color: '#FF6B6B' },
} as const;

function isValidTag(tag: string): tag is TagType {
  return TagTypeEnum.safeParse(tag).success;
}

function validateTags(tags: string[]): TagType[] {
  return tags.filter(isValidTag);
}

function getTagName(tagId: TagType): string {
  return TAG_CONFIG[tagId].name;
}

function getTagCategory(tagId: TagType): TagCategory {
  return TAG_CONFIG[tagId].category;
}

function getTagColor(tagId: TagType): string | undefined {
  return TAG_CONFIG[tagId].color;
}

function createTag(type: TagType): Tag {
  return {
    id: type,
    ...TAG_CONFIG[type],
  };
}

const validators = {
  isValidTag,
  validateTags,
  getTagName,
  getTagCategory,
  getTagColor,
};

function createMultipleTags(types: TagType[]): Tag[] {
  return types.map(createTag);
}

function getTagsByCategory(category: TagCategory): Tag[] {
  return (Object.keys(TAG_CONFIG) as TagType[])
    .filter((type) => TAG_CONFIG[type].category === category)
    .map(createTag);
}

function getAllTags(): Tag[] {
  return (Object.keys(TAG_CONFIG) as TagType[]).map(createTag);
}

function getPopularTags(limit = 10): Tag[] {
  const popularTagIds: TagType[] = [
    'typescript',
    'javascript',
    'react',
    'nextjs',
    'nodejs',
    'tailwindcss',
    'prisma',
    'zod',
    'trpc',
    'vite',
  ];

  return popularTagIds.slice(0, limit).map(createTag);
}

const methods = {
  createTag,
  createMultipleTags,
  getTagsByCategory,
  getAllTags,
  getPopularTags,
};

export const tagHelpers = {
  methods,
  validators,
};
