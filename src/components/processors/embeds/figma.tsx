import type React from 'react';

export const processFigmaEmbed = (
  url: string,
  key: string
): React.JSX.Element => {
  const getFigmaEmbedUrl = (figmaUrl: string): string => {
    try {
      const urlObj = new URL(figmaUrl);

      const pathParts = urlObj.pathname.split('/');
      const fileId = pathParts[2];

      if (!fileId) {
        throw new Error('Invalid Figma URL format');
      }

      return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;
    } catch {
      return figmaUrl;
    }
  };

  const embedUrl = getFigmaEmbedUrl(url);

  return (
    <div className="my-6" key={key}>
      <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted/50">
        <iframe
          allow="fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full"
          frameBorder="0"
          src={embedUrl}
          title="Figma Design"
        />
      </div>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        <a
          className="transition-colors hover:text-foreground"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          View on Figma →
        </a>
      </p>
    </div>
  );
};
