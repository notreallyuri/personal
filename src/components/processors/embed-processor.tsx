import type React from 'react';
import { processFigmaEmbed } from './embeds/figma';
import { processGitHubEmbed } from './embeds/github';
import { processInstagramEmbed } from './embeds/instagram';
import { processTwitterEmbed } from './embeds/twitter';
import { processYouTubeEmbed } from './embeds/youtube';

type EmbedPattern = {
  regex: RegExp;
  processor: (url: string, key: string) => React.JSX.Element;
};

const EMBED_PATTERNS: EmbedPattern[] = [
  {
    regex: /\[yt-embed:([^\]]+)\]/g,
    processor: processYouTubeEmbed,
  },
  {
    regex: /\[tw-embed:([^\]]+)\]/g,
    processor: processTwitterEmbed,
  },
  {
    regex: /\[ig-embed:([^\]]+)\]/g,
    processor: processInstagramEmbed,
  },
  {
    regex: /\[gh-embed:([^\]]+)\]/g,
    processor: processGitHubEmbed,
  },
  {
    regex: /\[figma-embed:([^\]]+)\]/g,
    processor: processFigmaEmbed,
  },
];

const collectEmbedMatches = (text: string) => {
  const allMatches: Array<{
    match: RegExpMatchArray;
    processor: typeof processYouTubeEmbed;
    type: 'embed';
  }> = [];

  for (const pattern of EMBED_PATTERNS) {
    const matches = Array.from(text.matchAll(pattern.regex));
    for (const match of matches) {
      allMatches.push({
        match,
        processor: pattern.processor,
        type: 'embed',
      });
    }
  }

  return allMatches;
};

const processEmbedMatch = (
  match: RegExpMatchArray,
  processor: typeof processYouTubeEmbed,
  matchIndex: number
) => {
  const url = match[1];
  return processor(url, `embed-${matchIndex}`);
};

export {
  EMBED_PATTERNS,
  collectEmbedMatches,
  processEmbedMatch,
  type EmbedPattern,
};
