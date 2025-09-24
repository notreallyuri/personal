'use client';
import type React from 'react';
import { useEffect, useState } from 'react';

type TwitterEmbedProps = {
  tweetId: string;
  className?: string;
};

const TWITTER_PATTERNS = [
  /(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/(\d+)/,
  /(?:https?:\/\/)?(?:www\.)?x\.com\/\w+\/status\/(\d+)/,
  /(?:https?:\/\/)?(?:mobile\.)?twitter\.com\/\w+\/status\/(\d+)/,
  /(?:https?:\/\/)?(?:mobile\.)?x\.com\/\w+\/status\/(\d+)/,
];

function TwitterLoadingState({
  href,
  className = '',
}: {
  href?: string;
  className?: string;
}) {
  if (href) {
    return (
      <a className={`mx-auto max-w-xl ${className}`} href={href}>
        <div
          className="animate-pulse rounded-lg border bg-muted p-6"
          style={{
            height: '200px',
            width: '550px',
            maxWidth: '100%',
          }}
        >
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Loading tweet...
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className={`mx-auto max-w-xl ${className}`}>
      <div
        className="animate-pulse rounded-lg border bg-muted p-6"
        style={{
          height: '200px',
          width: '550px',
          maxWidth: '100%',
        }}
      >
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Loading tweet...
        </div>
      </div>
    </div>
  );
}

const TwitterEmbed: React.FC<TwitterEmbedProps> = ({
  tweetId,
  className = '',
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  if (!isClient) {
    return (
      <TwitterLoadingState
        className={className}
        href={`https://twitter.com/x/status/${tweetId}`}
      />
    );
  }

  return (
    <div className={`mx-auto max-w-xl ${className}`}>
      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-dnt="true"
        data-theme="dark"
        data-width="550"
      >
        <TwitterLoadingState
          className={className}
          href={`https://twitter.com/x/status/${tweetId}`}
        />
      </blockquote>
    </div>
  );
};

const extractTwitterId = (url: string): string | null => {
  for (const pattern of TWITTER_PATTERNS) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }
  return null;
};

const processTwitterEmbed = (url: string, key: string) => {
  const tweetId = extractTwitterId(url);

  if (tweetId) {
    return (
      <div className="my-8" key={key}>
        <TwitterEmbed tweetId={tweetId} />
      </div>
    );
  }

  return (
    <div
      className="my-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive"
      key={key}
    >
      <p className="text-sm">
        ⚠️ Invalid Twitter URL: <code className="text-xs">{url}</code>
      </p>
    </div>
  );
};

export { TwitterEmbed, TWITTER_PATTERNS, processTwitterEmbed };
