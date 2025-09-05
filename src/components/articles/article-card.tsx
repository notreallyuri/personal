import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Article } from '@/types/articles';

const CHARACTERS_PER_MINUTE = 1000;
const MAX_VISIBLE_TAGS = 3;

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const readingTime = Math.ceil(article.content.length / CHARACTERS_PER_MINUTE);

  return (
    <Link href={`/articles/${article.slug}`}>
      <article className="group rounded-lg border bg-muted p-4 transition-all duration-200 hover:border-primary/50 hover:shadow-md">
        <header className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-semibold text-xl leading-tight group-hover:text-primary">
              {article.title}
            </h2>
            {article.isFeatured && (
              <span className="inline-flex shrink-0 rounded-full bg-primary px-2 py-1 font-medium text-primary-foreground text-xs">
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            {article.publishedAt && (
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                <time dateTime={article.publishedAt.toISOString()}>
                  {article.publishedAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock className="size-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </header>

        {article.excerpt && (
          <p className="mt-3 line-clamp-2 text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>
        )}

        {article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.slice(0, MAX_VISIBLE_TAGS).map((tag) => (
              <span
                className="inline-flex rounded-md bg-muted px-2 py-1 font-medium text-muted-foreground text-xs"
                key={tag}
              >
                {tag}
              </span>
            ))}
            {article.tags.length > MAX_VISIBLE_TAGS && (
              <span className="inline-flex rounded-md bg-muted px-2 py-1 font-medium text-muted-foreground text-xs">
                +{article.tags.length - MAX_VISIBLE_TAGS}
              </span>
            )}
          </div>
        )}
      </article>
    </Link>
  );
}
