# Content Processing System Architecture

## Overview

The content processing system has been refactored into a modular architecture with clear separation of concerns:

```
src/components/
├── content-renderer.tsx          # Main renderer component
└── processors/
    ├── embed-processor.tsx       # Handles embed patterns [yt-embed:], [tw-embed:], etc.
    ├── markdown-processor.tsx    # Handles markdown syntax #, ##, -, 1., etc.
    └── content-processor.tsx     # Unified processor that combines both
```

## Features Supported

### Markdown Syntax
- **Headings**: `#`, `##`, `###`, `####`
- **Lists**: 
  - Unordered: `- item`
  - Ordered: `1. item`
  - Letter: `a. item`
- **Code**: 
  - Inline: `` `code` ``
  - Blocks: ` ```language\ncode\n``` `
- **Blockquotes**: `> quote`

### Embeds
- **YouTube**: `[yt-embed:https://youtube.com/watch?v=...]`
- **Twitter**: `[tw-embed:https://twitter.com/.../status/...]`
- **Instagram**: `[ig-embed:https://instagram.com/p/...]`
- **GitHub**: `[gh-embed:https://github.com/owner/repo]`

## Usage Example

```tsx
import { ContentRenderer } from '@/components/content-renderer';

const content = \`
# My Article

This is a paragraph with some **text**.

## Code Example
\\\`\\\`\\\`typescript
const hello = "world";
\\\`\\\`\\\`

### List
- Item 1
- Item 2

[yt-embed:https://youtube.com/watch?v=dQw4w9WgXcQ]
\`;

export function MyArticle() {
  return <ContentRenderer content={content} />;
}
```

## Architecture Benefits

1. **Modularity**: Each processor handles one concern
2. **Extensibility**: Easy to add new markdown features or embed types
3. **Testability**: Each processor can be tested independently
4. **Performance**: Only processes relevant patterns
5. **Maintainability**: Clear separation of logic

## Adding New Features

### New Markdown Syntax
Add to `markdown-processor.tsx`:
```tsx
{
  regex: /^your-pattern$/gm,
  processor: yourProcessor,
}
```

### New Embed Type
Add to `embed-processor.tsx`:
```tsx
{
  regex: /\[your-embed:([^\]]+)\]/g,
  processor: processYourEmbed,
}
```

## Future Enhancements

- **List Grouping**: Automatically group consecutive list items
- **Table Support**: Add markdown table parsing
- **Link Processing**: Auto-link detection and processing
- **Image Support**: Markdown image syntax
- **Math Support**: LaTeX/KaTeX integration