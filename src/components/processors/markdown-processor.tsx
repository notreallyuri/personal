import type React from 'react';

type MarkdownMatch = {
  match: RegExpMatchArray;
  processor: (content: string, key: string) => React.JSX.Element;
  type: 'markdown';
};

function H1(content: string, key: string) {
  return (
    <h1
      className="scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight"
      key={key}
    >
      {content}
    </h1>
  );
}

function H2(content: string, key: string) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0"
      key={key}
    >
      {content}
    </h2>
  );
}

function H3(content: string, key: string) {
  return (
    <h3 className="scroll-m-20 font-semibold text-2xl tracking-tight" key={key}>
      {content}
    </h3>
  );
}

function H4(content: string, key: string) {
  return (
    <h4 className="scroll-m-20 font-semibold text-xl tracking-tight" key={key}>
      {content}
    </h4>
  );
}

const Blockquote = (content: string, key: string) => (
  <blockquote className="mt-6 border-l-2 pl-6 italic" key={key}>
    {content}
  </blockquote>
);

const CodeBlock = (content: string, key: string, language?: string) => (
  <pre
    className="mt-6 mb-4 overflow-x-auto rounded-lg border bg-muted px-4 py-4"
    key={key}
  >
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm ${language ? `language-${language}` : ''}`}
    >
      {content}
    </code>
  </pre>
);

const InlineCode = (content: string, key: string) => (
  <code
    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm"
    key={key}
  >
    {content}
  </code>
);

type MarkdownPattern = {
  regex: RegExp;
  processor: (
    content: string,
    key: string,
    ...args: string[]
  ) => React.JSX.Element;
  multiline?: boolean;
};

const MARKDOWN_PATTERNS: MarkdownPattern[] = [
  {
    regex: /^# (.+)$/gm,
    processor: H1,
  },
  {
    regex: /^## (.+)$/gm,
    processor: H2,
  },
  {
    regex: /^### (.+)$/gm,
    processor: H3,
  },
  {
    regex: /^#### (.+)$/gm,
    processor: H4,
  },

  {
    regex: /^> (.+)$/gm,
    processor: Blockquote,
  },

  {
    regex: /```(?:(\w+)\n)?([\s\S]*?)```/g,
    processor: CodeBlock,
    multiline: true,
  },

  {
    regex: /`([^`]+)`/g,
    processor: InlineCode,
  },
];

const collectMarkdownMatches = (text: string): MarkdownMatch[] => {
  const allMatches: MarkdownMatch[] = [];

  for (const pattern of MARKDOWN_PATTERNS) {
    const matches = Array.from(text.matchAll(pattern.regex));
    for (const match of matches) {
      allMatches.push({
        match,
        processor: pattern.processor,
        type: 'markdown',
      });
    }
  }

  return allMatches;
};

const processMarkdownMatch = (
  match: RegExpMatchArray,
  processor: (
    content: string,
    key: string,
    ...args: string[]
  ) => React.JSX.Element,
  matchIndex: number
): React.JSX.Element => {
  const content = match[1] || match[2] || match[0];
  const additionalArgs = match.slice(2);
  return processor(content, `markdown-${matchIndex}`, ...additionalArgs);
};

const processListItems = (elements: React.ReactNode[]): React.ReactNode[] => {
  return elements;
};

export {
  MARKDOWN_PATTERNS,
  collectMarkdownMatches,
  processMarkdownMatch,
  processListItems,
};

export type { MarkdownPattern, MarkdownMatch };
