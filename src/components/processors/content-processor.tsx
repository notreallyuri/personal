import type React from 'react';
import { collectEmbedMatches, processEmbedMatch } from './embed-processor';
import {
  collectMarkdownMatches,
  processMarkdownMatch,
} from './markdown-processor';

type ContentMatch = {
  match: RegExpMatchArray;
  processor: (url: string, key: string) => React.JSX.Element;
  type: 'embed' | 'markdown';
  index: number;
};

const collectAllMatches = (text: string): ContentMatch[] => {
  const embedMatches = collectEmbedMatches(text);
  const markdownMatches = collectMarkdownMatches(text);

  const allMatches: ContentMatch[] = [];

  for (const embedMatch of embedMatches) {
    allMatches.push({
      match: embedMatch.match,
      processor: embedMatch.processor,
      type: 'embed',
      index: embedMatch.match.index ?? 0,
    });
  }

  for (const markdownMatch of markdownMatches) {
    allMatches.push({
      match: markdownMatch.match,
      processor: markdownMatch.processor as (
        url: string,
        key: string
      ) => React.JSX.Element,
      type: 'markdown',
      index: markdownMatch.match.index ?? 0,
    });
  }

  return allMatches.sort((a, b) => a.index - b.index);
};

const processContentMatch = (
  contentMatch: ContentMatch,
  matchIndex: number
): React.JSX.Element => {
  if (contentMatch.type === 'embed') {
    return processEmbedMatch(
      contentMatch.match,
      contentMatch.processor,
      matchIndex
    );
  }

  return processMarkdownMatch(
    contentMatch.match,
    contentMatch.processor as (
      content: string,
      key: string,
      ...args: string[]
    ) => React.JSX.Element,
    matchIndex
  );
};

export { collectAllMatches, processContentMatch, type ContentMatch };
