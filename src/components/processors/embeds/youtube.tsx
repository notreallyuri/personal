type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
  className?: string;
};

const YOUTUBE_PATTERNS = [
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
  /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
];

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video player',
  className = '',
}) => {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-lg border border-border/50 ${className}`}
    >
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
      />
    </div>
  );
};

const extractYouTubeId = (url: string): string | null => {
  for (const pattern of YOUTUBE_PATTERNS) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }
  return null;
};

const processYouTubeEmbed = (url: string, key: string) => {
  const videoId = extractYouTubeId(url);

  if (videoId) {
    return (
      <div className="my-8" key={key}>
        <YouTubeEmbed videoId={videoId} />
      </div>
    );
  }

  return (
    <div
      className="my-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive"
      key={key}
    >
      <p className="text-sm">
        ⚠️ Invalid YouTube URL: <code className="text-xs">{url}</code>
      </p>
    </div>
  );
};

export { processYouTubeEmbed };
