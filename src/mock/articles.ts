import type { Article as ArticleType } from '@/types/articles';

export const MOCK_ARTICLES: ArticleType[] = [
  {
    id: '1c0b2f2e-7a1e-4b9d-8ad9-4a6a4f4a3a11',
    slug: 'accessible-react-app-basics',
    title: 'Accessible React App Basics',
    excerpt:
      'A quick primer on practical accessibility tips for React apps, from focus management to semantic HTML.',
    content:
      'Accessibility in React starts with semantic HTML, keyboard navigation, and focus management. In this short article, we cover practical tips you can adopt today to make your UI usable by everyone. We also share a short video and a sample component to get you started.',
    tags: ['react', 'a11y', 'typescript'],
    status: 'published',
    publishedAt: new Date('2024-06-12T10:00:00.000Z'),
    updatedAt: new Date('2024-06-15T09:00:00.000Z'),
    featuredImage:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    isFeatured: true,
    embeds: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoId: 'dQw4w9WgXcQ',
        startTime: 5,
        autoplay: false,
        caption: 'Short overview on inclusive UI',
        alignment: 'center',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
        alt: 'Team collaborating at a desk',
        title: 'Collaboration',
        width: 1280,
        height: 720,
        loading: 'lazy',
        alignment: 'center',
      },
    ],
    seo: {
      metaTitle: 'Accessible React App Basics',
      metaDescription:
        'Practical accessibility tips for React apps: semantic HTML, keyboard nav, and focus management.',
    },
  },
  {
    id: '9a5b0a8b-3e6a-4a3b-a6b2-3c2c1b9c7d22',
    slug: 'type-safety-with-zod',
    title: 'Type Safety with Zod',
    excerpt:
      'Validate runtime data with Zod and enjoy end-to-end type safety in your TypeScript applications.',
    content:
      'Zod bridges runtime validation and static type inference. Define schemas once, parse external data safely, and rely on inferred types. This article shows a minimal setup and a couple of handy patterns for forms and APIs.',
    tags: ['zod', 'typescript', 'validation'],
    status: 'published',
    publishedAt: new Date('2024-07-20T12:00:00.000Z'),
    updatedAt: new Date('2024-07-21T09:30:00.000Z'),
    featuredImage:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop',
    isFeatured: false,
    embeds: [
      {
        type: 'codepen',
        url: 'https://codepen.io/pen/abCDefg',
        penId: 'abCDefg',
        defaultTab: 'result',
        theme: 'dark',
        preview: true,
        caption: 'Simple Zod schema example',
        alignment: 'center',
      },
      {
        type: 'github-gist',
        url: 'https://gist.github.com/notreallyuri/0123456789abcdef0123456789abcdef',
        gistId: '0123456789abcdef0123456789abcdef',
        filename: 'zod-example.ts',
        alignment: 'center',
      },
    ],
  },
  {
    id: '72d4f8a2-1e7a-4b33-a2e2-9cfafe83c6d3',
    slug: 'nextjs-performance-tips',
    title: 'Next.js Performance Tips',
    excerpt:
      'Quick wins to improve perceived performance in modern Next.js apps, from caching to streaming.',
    content:
      'Next.js apps benefit from strategic caching, granular data fetching, and streaming UI. In this quick guide, we cover a few patterns you can apply incrementally, with links to examples and small demos.',
    tags: ['nextjs', 'performance'],
    status: 'draft',
    updatedAt: new Date('2024-08-01T08:00:00.000Z'),
    featuredImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    isFeatured: false,
    embeds: [
      {
        type: 'stackblitz',
        url: 'https://stackblitz.com/edit/nextjs-starter?file=app/page.tsx',
        projectId: 'nextjs-starter',
        file: 'app/page.tsx',
        view: 'both',
        caption: 'Live demo with streaming UI',
        alignment: 'center',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/vercel/status/1508890164219987968',
        theme: 'dark',
        alignment: 'center',
      },
    ],
  },
  {
    id: 'c2b9eece-8b0a-47a6-83b7-8ec59865a3f4',
    slug: 'design-handoff-with-figma',
    title: 'Design Handoff with Figma',
    excerpt:
      'A concise look at sharing specs, inspecting layers, and embedding Figma files directly in docs.',
    content:
      'Figma enables smooth collaboration between designers and engineers. This brief note shows how to share precise specs, inspect constraints, and embed frames in documentation or internal portals.',
    tags: ['figma', 'design', 'collaboration'],
    status: 'published',
    publishedAt: new Date('2024-05-02T14:45:00.000Z'),
    updatedAt: new Date('2024-05-03T10:10:00.000Z'),
    featuredImage:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop',
    isFeatured: false,
    embeds: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/ABCDE12345/Mock-Designs',
        embedUrl:
          'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FABCDE12345%2FMock-Designs',
        caption: 'Embedded Figma frame',
        alignment: 'center',
      },
      {
        type: 'iframe',
        url: 'https://example.com',
        title: 'Example website preview',
        sandbox: 'allow-scripts allow-same-origin',
        caption: 'External reference page',
        alignment: 'center',
      },
    ],
  },
  {
    id: 'f4e6a0b1-2c3d-4e5f-9601-2a3b4c5d6e77',
    slug: 'working-with-media-embeds',
    title: 'Working with Media Embeds',
    excerpt:
      'Short examples showing how to embed audio, PDFs, and Google Docs in your content safely.',
    content:
      'Media embeds can enhance articles when used thoughtfully. This snippet shows accessible ways to include audio players, PDFs for reference material, and Google Docs for living documents.',
    tags: ['embeds', 'content', 'a11y'],
    status: 'published',
    publishedAt: new Date('2024-09-10T16:00:00.000Z'),
    updatedAt: new Date('2024-09-11T09:00:00.000Z'),
    featuredImage:
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
    isFeatured: false,
    embeds: [
      {
        type: 'audio',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        title: 'Soft background track',
        controls: true,
        autoplay: false,
        alignment: 'center',
      },
      {
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        page: 1,
        zoom: 1,
        caption: 'Spec sheet (PDF)',
        alignment: 'center',
      },
      {
        type: 'google-docs',
        url: 'https://docs.google.com/document/d/1a2b3c4d5e6f7g8h9i0j/edit',
        documentId: '1a2b3c4d5e6f7g8h9i0j',
        caption: 'Collaborative notes',
        alignment: 'center',
      },
    ],
  },
  {
    id: 'a7c1d9f2-0b3a-4d7e-9e5a-1f2a3b4c5d66',
    slug: 'async-patterns-in-javascript',
    title: 'Async Patterns in JavaScript',
    excerpt:
      'A bite-sized overview of promises, async/await, and when to consider concurrency patterns.',
    content:
      'JavaScript offers versatile async primitives. Promises, async/await, and structured concurrency enable responsive UIs and scalable servers. Here are a few tips and caveats that keep code predictable.',
    tags: ['javascript', 'async', 'promises'],
    status: 'published',
    publishedAt: new Date('2024-03-18T09:30:00.000Z'),
    updatedAt: new Date('2024-03-19T07:20:00.000Z'),
    featuredImage:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop',
    isFeatured: false,
    embeds: [
      {
        type: 'vimeo',
        url: 'https://vimeo.com/76979871',
        videoId: '76979871',
        caption: 'Short explainer on event loops',
        alignment: 'center',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
        alt: 'Developer working at a laptop',
        width: 1400,
        height: 933,
        alignment: 'center',
        loading: 'lazy',
      },
    ],
  },
];
