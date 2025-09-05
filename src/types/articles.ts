import { z } from 'zod';
import { Embed } from './embeds';

const MAX_TITLE_LENGTH = 100;
const MAX_CONTENT_LENGTH = 50_000;
const MAX_EXCERPT_LENGTH = 300;
const MAX_SLUG_LENGTH = 100;
const MAX_TAG_LENGTH = 30;
const MAX_META_TITLE_LENGTH = 60;
const MAX_META_DESCRIPTION_LENGTH = 160;
const MAX_TAGS_COUNT = 10;

export const ArticleStatus = z.enum(['draft', 'published']);

export const ArticleSEO = z.object({
  metaTitle: z.string().max(MAX_META_TITLE_LENGTH).optional(),
  metaDescription: z.string().max(MAX_META_DESCRIPTION_LENGTH).optional(),
});

export const Article = z
  .object({
    id: z.uuid(),
    slug: z
      .string()
      .min(1)
      .max(MAX_SLUG_LENGTH)
      .regex(
        /^[a-z0-9-]+$/,
        'Slug must be lowercase alphanumeric with hyphens'
      ),

    title: z.string().min(2).max(MAX_TITLE_LENGTH),
    excerpt: z.string().min(10).max(MAX_EXCERPT_LENGTH).optional(),
    content: z.string().min(10).max(MAX_CONTENT_LENGTH),

    tags: z
      .array(z.string().max(MAX_TAG_LENGTH))
      .max(MAX_TAGS_COUNT)
      .default([]),

    status: ArticleStatus.default('draft'),
    publishedAt: z.date().optional(),
    updatedAt: z.date(),

    featuredImage: z.url().optional(),
    isFeatured: z.boolean().default(false),
    embeds: z.array(Embed).default([]),

    seo: ArticleSEO.optional(),
  })
  .refine(
    (data) => {
      if (data.status === 'published' && !data.publishedAt) {
        return false;
      }
      return true;
    },
    {
      message: 'Published articles must have a publishedAt date',
      path: ['publishedAt'],
    }
  );

export const ArticlePreview = Article.pick({
  id: true,
  slug: true,
  title: true,
  excerpt: true,
  tags: true,
  publishedAt: true,
  featuredImage: true,
  isFeatured: true,
});

export const CreateArticle = Article.omit({
  id: true,
  updatedAt: true,
});

export type Article = z.infer<typeof Article>;
export type ArticleStatus = z.infer<typeof ArticleStatus>;
export type ArticleSEO = z.infer<typeof ArticleSEO>;
export type ArticlePreview = z.infer<typeof ArticlePreview>;
export type CreateArticle = z.infer<typeof CreateArticle>;
