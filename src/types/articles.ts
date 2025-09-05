import { z } from 'zod';
import { Embed } from './embeds';
import { TagTypeEnum } from './tag';

const MAX_TITLE_LENGTH = 100;
const MAX_CONTENT_LENGTH = 50_000;
const MAX_EXCERPT_LENGTH = 300;
const MAX_SLUG_LENGTH = 100;
const MAX_META_TITLE_LENGTH = 60;
const MAX_META_DESCRIPTION_LENGTH = 160;
const MAX_TAGS_COUNT = 10;

export const ArticleStatusEnum = z.enum(['draft', 'published']);

export const ArticleSEOSchema = z.object({
  metaTitle: z.string().max(MAX_META_TITLE_LENGTH).optional(),
  metaDescription: z.string().max(MAX_META_DESCRIPTION_LENGTH).optional(),
});

export const ArticleSchema = z
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

    tags: z.array(TagTypeEnum).max(MAX_TAGS_COUNT).default([]),

    status: ArticleStatusEnum.default('draft'),
    publishedAt: z.date().optional(),
    updatedAt: z.date(),

    featuredImage: z.url().optional(),
    isFeatured: z.boolean().default(false),
    embeds: z.array(Embed).default([]),

    seo: ArticleSEOSchema.optional(),
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

export const ArticlePreview = ArticleSchema.pick({
  id: true,
  slug: true,
  title: true,
  excerpt: true,
  tags: true,
  publishedAt: true,
  featuredImage: true,
  isFeatured: true,
});

export const CreateArticle = ArticleSchema.omit({
  id: true,
  updatedAt: true,
});

export type Article = z.infer<typeof ArticleSchema>;
export type ArticleStatus = z.infer<typeof ArticleStatusEnum>;
export type ArticleSEO = z.infer<typeof ArticleSEOSchema>;
export type ArticlePreview = z.infer<typeof ArticlePreview>;
export type CreateArticle = z.infer<typeof CreateArticle>;
