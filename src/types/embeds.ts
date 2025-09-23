import { z } from 'zod';

const MIN_FILE_SIZE = 1;
const MAX_FILE_SIZE = 100_000_000;

const BaseFileEmbedSchema = z.object({
  id: z.uuid(),
  filename: z.string().min(1),
  fileSize: z.number().min(MIN_FILE_SIZE).max(MAX_FILE_SIZE),
  mimeType: z.string(),
  url: z.string().url(),
  uploadedAt: z.date(),
  width: z.number().min(1).optional(),
  height: z.number().min(1).optional(),
  caption: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});

export const ImageFileEmbedSchema = BaseFileEmbedSchema.extend({
  type: z.literal('image'),
  alt: z.string().min(1),
  loading: z.enum(['lazy', 'eager']).default('lazy'),
  thumbnail: z.string().url().optional(),
});

export const VideoFileEmbedSchema = BaseFileEmbedSchema.extend({
  type: z.literal('video'),
  duration: z.number().min(0).optional(),
  thumbnail: z.string().url().optional(),
  subtitles: z.string().url().optional(),
  controls: z.boolean().default(true),
  autoplay: z.boolean().default(false),
  loop: z.boolean().default(false),
});

export const AudioFileEmbedSchema = BaseFileEmbedSchema.extend({
  type: z.literal('audio'),
  duration: z.number().min(0).optional(),
  controls: z.boolean().default(true),
  autoplay: z.boolean().default(false),
  loop: z.boolean().default(false),
});

export const DocumentFileEmbedSchema = BaseFileEmbedSchema.extend({
  type: z.literal('document'),
  pageCount: z.number().min(1).optional(),
  downloadable: z.boolean().default(true),
});

export const CodeFileEmbedSchema = BaseFileEmbedSchema.extend({
  type: z.literal('code'),
  language: z.string().optional(),
  lineNumbers: z.boolean().default(true),
  highlighted: z.array(z.number()).optional(),
});

export const FileEmbedSchema = z.discriminatedUnion('type', [
  ImageFileEmbedSchema,
  VideoFileEmbedSchema,
  AudioFileEmbedSchema,
  DocumentFileEmbedSchema,
  CodeFileEmbedSchema,
]);

export const INLINE_EMBED_PATTERNS = {
  youtube: /\[yt-embed:([^\]]+)\]/g,
  vimeo: /\[vimeo-embed:([^\]]+)\]/g,
  twitter: /\[tw-embed:([^\]]+)\]/g,
  instagram: /\[ig-embed:([^\]]+)\]/g,
  linkedin: /\[li-embed:([^\]]+)\]/g,
  codepen: /\[cp-embed:([^\]]+)\]/g,
  'github-gist': /\[gh-gist:([^\]]+)\]/g,
  stackblitz: /\[sb-embed:([^\]]+)\]/g,
  figma: /\[figma-embed:([^\]]+)\]/g,
  iframe: /\[iframe:([^\]]+)\]/g,
} as const;

export type FileEmbed = z.infer<typeof FileEmbedSchema>;
export type ImageFileEmbed = z.infer<typeof ImageFileEmbedSchema>;
export type VideoFileEmbed = z.infer<typeof VideoFileEmbedSchema>;
export type AudioFileEmbed = z.infer<typeof AudioFileEmbedSchema>;
export type DocumentFileEmbed = z.infer<typeof DocumentFileEmbedSchema>;
export type CodeFileEmbed = z.infer<typeof CodeFileEmbedSchema>;

export type InlineEmbedType = keyof typeof INLINE_EMBED_PATTERNS;

export type Embed = FileEmbed;
