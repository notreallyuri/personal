import type { Project } from '@/types/project';

export const MOCK_PROJECTS: Project[] = [
  {
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description:
      'Personal portfolio built with Next.js and TailwindCSS showcasing projects and blog posts.',
    github: 'https://github.com/yuriv/portfolio-website',
    category: 'frontend',
    tags: ['typescript', 'react', 'nextjs', 'tailwindcss'],
    date: new Date('2023-06-01'),
  },
  {
    title: 'Real-time Chat',
    slug: 'real-time-chat',
    description:
      'A WebSocket-powered chat app with presence, rooms, and message history.',
    github: 'https://github.com/yuriv/real-time-chat',
    category: 'fullstack',
    tags: ['typescript', 'nodejs', 'express', 'prisma'],
    date: new Date('2022-11-15'),
  },
  {
    title: 'E-commerce Storefront',
    slug: 'ecommerce-storefront',
    description:
      'Headless e-commerce storefront using Next.js, Stripe, and a composable checkout flow.',
    github: 'https://github.com/yuriv/ecommerce-storefront',
    category: 'fullstack',
    tags: ['typescript', 'react', 'nextjs', 'graphql', 'apollo'],
    date: new Date('2024-02-10'),
  },
  {
    title: 'Design System',
    slug: 'design-system',
    description:
      'A reusable component library with Storybook, theming, and accessibility-first components.',
    github: 'https://github.com/yuriv/design-system',
    category: 'frontend',
    tags: ['typescript', 'react', 'storybook', 'vitest', 'tailwindcss'],
    date: new Date('2023-09-05'),
  },
  {
    title: 'Task Manager (TRPC)',
    slug: 'task-manager-trpc',
    description:
      'Full-stack task management app using tRPC, Prisma, and React with optimistic updates.',
    github: 'https://github.com/yuriv/task-manager-trpc',
    category: 'fullstack',
    tags: ['typescript', 'react', 'trpc', 'prisma', 'vite'],
    date: new Date('2024-04-20'),
  },
  {
    title: 'Monorepo Starter',
    slug: 'monorepo-starter',
    description:
      'Turborepo monorepo example with apps and packages, CI, and shared tooling.',
    github: 'https://github.com/yuriv/monorepo-starter',
    category: 'fullstack',
    tags: ['typescript', 'turborepo', 'monorepo', 'vite'],
    date: new Date('2022-05-30'),
  },
  {
    title: 'Testing Playground',
    slug: 'testing-playground',
    description:
      'Examples and patterns for unit, integration, and E2E testing using Vitest and Playwright.',
    github: 'https://github.com/yuriv/testing-playground',
    category: 'fullstack',
    tags: ['typescript', 'vitest', 'playwright', 'jest'],
    date: new Date('2023-12-12'),
  },
  {
    title: 'Rust + Wasm Demo',
    slug: 'rust-wasm-demo',
    description:
      'A demo integrating Rust compiled to WASM with a TypeScript frontend for compute-heavy tasks.',
    github: 'https://github.com/yuriv/rust-wasm-demo',
    category: 'frontend',
    tags: ['rust', 'wasm', 'typescript'],
    date: new Date('2021-08-18'),
  },
  {
    title: 'Tauri Desktop App',
    slug: 'tauri-desktop-app',
    description:
      'Cross-platform desktop application built with Tauri and a React frontend.',
    github: 'https://github.com/yuriv/tauri-desktop-app',
    category: 'desktop',
    tags: ['rust', 'tauri', 'react', 'typescript'],
    date: new Date('2024-01-08'),
  },
  {
    title: 'Realtime Analytics',
    slug: 'realtime-analytics',
    description:
      'Event ingestion pipeline with WebSocket visualization and a Node.js ingestion service.',
    github: 'https://github.com/yuriv/realtime-analytics',
    category: 'fullstack',
    tags: ['nodejs', 'typescript', 'express', 'react'],
    date: new Date('2022-03-22'),
  },
  {
    title: 'State Management Experiments',
    slug: 'state-management-experiments',
    description:
      'Comparisons between Zustand, Redux, and Recoil for common app patterns and perf benchmarks.',
    github: 'https://github.com/yuriv/state-management-experiments',
    category: 'frontend',
    tags: ['typescript', 'zustand', 'redux', 'recoil', 'react'],
    date: new Date('2023-02-14'),
  },
];
