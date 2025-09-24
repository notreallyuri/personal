import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ContentRenderer } from '@/components/content-renderer';
import { Button } from '@/components/ui/button';
import { MOCK_ARTICLES } from '@/mock/articles';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main>
        <p>Article not found</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto flex max-w-4xl flex-col">
      <div className="py-2">
        <Button asChild>
          <Link href="/articles">
            <ArrowLeft className="size-4" />
            <span>Return</span>
          </Link>
        </Button>
      </div>
      {article.featuredImage && (
        <div className="max-auto mb-2 flex aspect-video max-h-96 rounded-lg bg-primary/10">
          <Image
            alt={article.excerpt ?? article.title}
            className="w-full rounded-lg object-cover"
            height={900}
            priority
            src={article.featuredImage}
            width={1600}
          />
        </div>
      )}
      <ContentRenderer content={article.content.trim()} />
    </main>
  );
}
