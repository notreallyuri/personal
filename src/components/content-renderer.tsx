'use client';

import type React from 'react';
import {
  collectAllMatches,
  processContentMatch,
} from './processors/content-processor';

const ORDERED_LIST_PATTERN = /^(\d+)\.\s+(.+)$/;
const UNORDERED_LIST_PATTERN = /^-\s+(.+)$/;

const TextContent: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentOrderedList: { number: number; text: string }[] = [];
  let currentUnorderedList: string[] = [];
  let currentParagraph: string[] = [];
  let key = 0;

  const flushOrderedList = () => {
    if (currentOrderedList.length > 0) {
      elements.push(
        <ol
          className="prose prose-neutral dark:prose-invert ml-6 max-w-none list-decimal space-y-1"
          key={`ol-${key++}`}
          start={currentOrderedList[0]?.number || 1}
        >
          {currentOrderedList.map((item, idx) => (
            <li key={`ol-li-${idx}-${item.text.slice(0, 10)}`}>{item.text}</li>
          ))}
        </ol>
      );
      currentOrderedList = [];
    }
  };

  const flushUnorderedList = () => {
    if (currentUnorderedList.length > 0) {
      elements.push(
        <ul
          className="prose prose-neutral dark:prose-invert ml-6 max-w-none list-disc space-y-1"
          key={`ul-${key++}`}
        >
          {currentUnorderedList.map((item, idx) => (
            <li key={`ul-li-${idx}-${item.slice(0, 10)}`}>{item}</li>
          ))}
        </ul>
      );
      currentUnorderedList = [];
    }
  };

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join('\n').trim();
      if (text) {
        elements.push(
          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            key={`p-${key++}`}
          >
            <p>{text}</p>
          </div>
        );
      }
      currentParagraph = [];
    }
  };

  const flushAll = () => {
    flushOrderedList();
    flushUnorderedList();
    flushParagraph();
  };

  for (const line of lines) {
    const trimmedLine = line.trim();

    const orderedMatch = trimmedLine.match(ORDERED_LIST_PATTERN);
    if (orderedMatch) {
      flushUnorderedList();
      flushParagraph();
      const number = Number.parseInt(orderedMatch[1], 10);
      const text = orderedMatch[2];
      currentOrderedList.push({ number, text });
      continue;
    }

    const unorderedMatch = trimmedLine.match(UNORDERED_LIST_PATTERN);
    if (unorderedMatch) {
      flushOrderedList();
      flushParagraph();
      currentUnorderedList.push(unorderedMatch[1]);
      continue;
    }

    if (!trimmedLine) {
      flushAll();
      continue;
    }

    flushOrderedList();
    flushUnorderedList();
    currentParagraph.push(line);
  }

  flushAll();

  return <div className="space-y-4">{elements}</div>;
};

type ContentRendererProps = {
  content: string;
  className?: string;
};

const processTextContent = (text: string, key: string) => {
  if (!text.trim()) {
    return null;
  }

  return (
    <div key={key}>
      <TextContent content={text} />
    </div>
  );
};

export const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
  className = '',
}) => {
  const processContent = (text: string) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    const allMatches = collectAllMatches(text);

    for (let i = 0; i < allMatches.length; i++) {
      const contentMatch = allMatches[i];
      const matchIndex = contentMatch.index;

      if (matchIndex > lastIndex) {
        const textBefore = text.slice(lastIndex, matchIndex);
        const textContent = processTextContent(textBefore, `text-${lastIndex}`);
        if (textContent) {
          parts.push(textContent);
        }
      }

      const processedContent = processContentMatch(contentMatch, i);
      parts.push(processedContent);

      lastIndex = matchIndex + contentMatch.match[0].length;
    }

    if (lastIndex < text.length) {
      const textAfter = text.slice(lastIndex);
      const textContent = processTextContent(textAfter, `text-${lastIndex}`);
      if (textContent) {
        parts.push(textContent);
      }
    }

    return parts;
  };

  const renderedContent = processContent(content);

  return (
    <div className={`space-y-4 ${className}`}>
      {renderedContent.length > 0 ? (
        renderedContent
      ) : (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground">No content to display.</p>
        </div>
      )}
    </div>
  );
};
