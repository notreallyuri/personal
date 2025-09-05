import { z } from 'zod';

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;

const BaseEmbed = z.object({
  width: z.number().min(1).optional(),
  height: z.number().min(1).optional(),
  caption: z.string().optional(),
  alignment: z.enum(['left', 'center', 'right', 'full']).default('center'),
});

export const YoutubeEmbed = BaseEmbed.extend({
  type: z.literal('youtube'),
  url: z.url(),
  videoId: z.string().optional(),
  startTime: z.number().min(0).optional(),
  autoplay: z.boolean().default(false),
});

export const VimeoEmbed = BaseEmbed.extend({
  type: z.literal('vimeo'),
  url: z.url(),
  videoId: z.string().optional(),
});

export const TwitterEmbed = BaseEmbed.extend({
  type: z.literal('twitter'),
  url: z.url(),
  theme: z.enum(['light', 'dark']).optional(),
});

export const InstagramEmbed = BaseEmbed.extend({
  type: z.literal('instagram'),
  url: z.url(),
});

export const LinkedInEmbed = BaseEmbed.extend({
  type: z.literal('linkedin'),
  url: z.url(),
});

export const CodepenEmbed = BaseEmbed.extend({
  type: z.literal('codepen'),
  url: z.url(),
  penId: z.string(),
  defaultTab: z.enum(['html', 'css', 'js', 'result']).default('result'),
  theme: z.enum(['light', 'dark']).optional(),
  preview: z.boolean().default(true),
});

export const GithubGistEmbed = BaseEmbed.extend({
  type: z.literal('github-gist'),
  url: z.url(),
  gistId: z.string(),
  filename: z.string().optional(),
});

export const StackblitzEmbed = BaseEmbed.extend({
  type: z.literal('stackblitz'),
  url: z.url(),
  projectId: z.string(),
  file: z.string().optional(),
  view: z.enum(['both', 'editor', 'preview']).default('both'),
});

export const FigmaEmbed = BaseEmbed.extend({
  type: z.literal('figma'),
  url: z.url(),
  embedUrl: z.url(),
});

export const IframeEmbed = BaseEmbed.extend({
  type: z.literal('iframe'),
  url: z.url(),
  title: z.string(),
  sandbox: z.string().optional(),
});

export const ImageEmbed = BaseEmbed.extend({
  type: z.literal('image'),
  url: z.url(),
  alt: z.string(),
  title: z.string().optional(),
  loading: z.enum(['lazy', 'eager']).default('lazy'),
});

export const AudioEmbed = BaseEmbed.extend({
  type: z.literal('audio'),
  url: z.url(),
  title: z.string().optional(),
  controls: z.boolean().default(true),
  autoplay: z.boolean().default(false),
});

export const PDFEmbed = BaseEmbed.extend({
  type: z.literal('pdf'),
  url: z.url(),
  page: z.number().min(1).optional(),
  zoom: z.number().min(MIN_ZOOM).max(MAX_ZOOM).optional(),
});

export const GoogleDocsEmbed = BaseEmbed.extend({
  type: z.literal('google-docs'),
  url: z.url(),
  documentId: z.string(),
});

export const Embed = z.discriminatedUnion('type', [
  YoutubeEmbed,
  VimeoEmbed,
  TwitterEmbed,
  InstagramEmbed,
  LinkedInEmbed,
  CodepenEmbed,
  GithubGistEmbed,
  StackblitzEmbed,
  FigmaEmbed,
  IframeEmbed,
  ImageEmbed,
  AudioEmbed,
  PDFEmbed,
  GoogleDocsEmbed,
]);

export type Embed = z.infer<typeof Embed>;
export type BaseEmbed = z.infer<typeof BaseEmbed>;

export type YoutubeEmbed = z.infer<typeof YoutubeEmbed>;
export type VimeoEmbed = z.infer<typeof VimeoEmbed>;

export type TwitterEmbed = z.infer<typeof TwitterEmbed>;
export type InstagramEmbed = z.infer<typeof InstagramEmbed>;
export type LinkedInEmbed = z.infer<typeof LinkedInEmbed>;

export type CodepenEmbed = z.infer<typeof CodepenEmbed>;
export type GithubGistEmbed = z.infer<typeof GithubGistEmbed>;
export type StackblitzEmbed = z.infer<typeof StackblitzEmbed>;

export type FigmaEmbed = z.infer<typeof FigmaEmbed>;
export type IframeEmbed = z.infer<typeof IframeEmbed>;

export type ImageEmbed = z.infer<typeof ImageEmbed>;
export type AudioEmbed = z.infer<typeof AudioEmbed>;
export type PDFEmbed = z.infer<typeof PDFEmbed>;
export type GoogleDocsEmbed = z.infer<typeof GoogleDocsEmbed>;
