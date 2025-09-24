import { ExternalLink, GitFork, Star } from 'lucide-react';
import type React from 'react';
import { useEffect, useState } from 'react';

type GitHubEmbedProps = {
  owner: string;
  repo: string;
  className?: string;
};

const GITHUB_PATTERNS = [
  /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_.-]+)\/([a-zA-Z0-9_.-]+)/,
];

const MAX_TOPICS_DISPLAY = 5;

const GitHubEmbed: React.FC<GitHubEmbedProps> = ({
  owner,
  repo,
  className = '',
}) => {
  const [repoData, setRepoData] = useState<{
    description: string;
    language: string;
    stars: number;
    forks: number;
    topics: string[];
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        if (!response.ok) {
          throw new Error('Repository not found');
        }

        const data = await response.json();
        setRepoData({
          description: data.description || 'No description available',
          language: data.language || 'Unknown',
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          topics: data.topics || [],
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [owner, repo]);

  if (loading) {
    return (
      <div
        className={`animate-pulse rounded-lg border border-border/50 bg-card p-6 ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-4 w-48 rounded bg-muted" />
            <div className="h-3 w-64 rounded bg-muted" />
          </div>
          <div className="h-8 w-20 rounded bg-muted" />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="h-4 w-16 rounded bg-muted" />
          <div className="h-4 w-16 rounded bg-muted" />
          <div className="h-4 w-16 rounded bg-muted" />
        </div>
      </div>
    );
  }

  if (error || !repoData) {
    return (
      <div
        className={`rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive ${className}`}
      >
        <p className="text-sm">
          ⚠️ Could not load GitHub repository: {owner}/{repo}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg border border-border/50 bg-card p-6 transition-all hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-card-foreground">
              {owner}/{repo}
            </h3>
            <a
              aria-label="Open repository on GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
              href={`https://github.com/${owner}/${repo}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink className="size-4" />
            </a>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            {repoData.description}
          </p>

          {repoData.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {repoData.topics.slice(0, MAX_TOPICS_DISPLAY).map((topic) => (
                <span
                  className="rounded-full bg-primary/10 px-2 py-1 text-primary text-xs"
                  key={topic}
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-6 text-muted-foreground text-sm">
        {repoData.language && (
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-primary" />
            <span>{repoData.language}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <Star className="size-3" />
          <span>{repoData.stars.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-1">
          <GitFork className="size-3" />
          <span>{repoData.forks.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

const extractGitHubInfo = (
  url: string
): { owner: string; repo: string } | null => {
  for (const pattern of GITHUB_PATTERNS) {
    const match = url.match(pattern);
    if (match?.[1] && match?.[2]) {
      return {
        owner: match[1],
        repo: match[2],
      };
    }
  }
  return null;
};

const processGitHubEmbed = (url: string, key: string) => {
  const githubInfo = extractGitHubInfo(url);

  if (githubInfo) {
    return (
      <div className="my-8" key={key}>
        <GitHubEmbed owner={githubInfo.owner} repo={githubInfo.repo} />
      </div>
    );
  }

  return (
    <div
      className="my-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive"
      key={key}
    >
      <p className="text-sm">
        ⚠️ Invalid GitHub URL: <code className="text-xs">{url}</code>
      </p>
    </div>
  );
};

export { GitHubEmbed, GITHUB_PATTERNS, processGitHubEmbed };
