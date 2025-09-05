import { z } from 'zod';

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;

const BaseEmbedSchema = z.object({
  width: z.number().min(1).optional(),
  height: z.number().min(1).optional(),
  caption: z.string().optional(),
  alignment: z.enum(['left', 'center', 'right', 'full']).default('center'),
});

export const YoutubeEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('youtube'),
  url: z.url(),
  videoId: z.string().optional(),
  startTime: z.number().min(0).optional(),
  autoplay: z.boolean().default(false),
});

export const VimeoEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('vimeo'),
  url: z.url(),
  videoId: z.string().optional(),
});

export const TwitterEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('twitter'),
  url: z.url(),
  theme: z.enum(['light', 'dark']).optional(),
});

export const InstagramEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('instagram'),
  url: z.url(),
});

export const LinkedInEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('linkedin'),
  url: z.url(),
});

export const CodepenEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('codepen'),
  url: z.url(),
  penId: z.string(),
  defaultTab: z.enum(['html', 'css', 'js', 'result']).default('result'),
  theme: z.enum(['light', 'dark']).optional(),
  preview: z.boolean().default(true),
});

export const GithubGistEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('github-gist'),
  url: z.url(),
  gistId: z.string(),
  filename: z.string().optional(),
});

export const StackblitzEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('stackblitz'),
  url: z.url(),
  projectId: z.string(),
  file: z.string().optional(),
  view: z.enum(['both', 'editor', 'preview']).default('both'),
});

export const FigmaEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('figma'),
  url: z.url(),
  embedUrl: z.url(),
});

export const IframeEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('iframe'),
  url: z.url(),
  title: z.string(),
  sandbox: z.string().optional(),
});

export const ImageEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('image'),
  url: z.url(),
  alt: z.string(),
  title: z.string().optional(),
  loading: z.enum(['lazy', 'eager']).default('lazy'),
});

export const AudioEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('audio'),
  url: z.url(),
  title: z.string().optional(),
  controls: z.boolean().default(true),
  autoplay: z.boolean().default(false),
});

export const PDFEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('pdf'),
  url: z.url(),
  page: z.number().min(1).optional(),
  zoom: z.number().min(MIN_ZOOM).max(MAX_ZOOM).optional(),
});

export const GoogleDocsEmbedSchema = BaseEmbedSchema.extend({
  type: z.literal('google-docs'),
  url: z.url(),
  documentId: z.string(),
});

export const Embed = z.discriminatedUnion('type', [
  YoutubeEmbedSchema,
  VimeoEmbedSchema,
  TwitterEmbedSchema,
  InstagramEmbedSchema,
  LinkedInEmbedSchema,
  CodepenEmbedSchema,
  GithubGistEmbedSchema,
  StackblitzEmbedSchema,
  FigmaEmbedSchema,
  IframeEmbedSchema,
  ImageEmbedSchema,
  AudioEmbedSchema,
  PDFEmbedSchema,
  GoogleDocsEmbedSchema,
]);

export type Embed = z.infer<typeof Embed>;
export type BaseEmbed = z.infer<typeof BaseEmbedSchema>;

export type YoutubeEmbed = z.infer<typeof YoutubeEmbedSchema>;
export type VimeoEmbed = z.infer<typeof VimeoEmbedSchema>;

export type TwitterEmbed = z.infer<typeof TwitterEmbedSchema>;
export type InstagramEmbed = z.infer<typeof InstagramEmbedSchema>;
export type LinkedInEmbed = z.infer<typeof LinkedInEmbedSchema>;

export type CodepenEmbed = z.infer<typeof CodepenEmbedSchema>;
export type GithubGistEmbed = z.infer<typeof GithubGistEmbedSchema>;
export type StackblitzEmbed = z.infer<typeof StackblitzEmbedSchema>;

export type FigmaEmbed = z.infer<typeof FigmaEmbedSchema>;
export type IframeEmbed = z.infer<typeof IframeEmbedSchema>;

export type ImageEmbed = z.infer<typeof ImageEmbedSchema>;
export type AudioEmbed = z.infer<typeof AudioEmbedSchema>;
export type PDFEmbed = z.infer<typeof PDFEmbedSchema>;
export type GoogleDocsEmbed = z.infer<typeof GoogleDocsEmbedSchema>;
