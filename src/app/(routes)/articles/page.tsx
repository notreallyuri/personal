import { Articles } from '@/components/articles';

export default function Page() {
  return (
    <main className="mx-auto flex max-w-272 flex-col gap-4 px-12 py-2 sm:px-8 md:px-6 xl:px-0">
      <h1 className="font-bold text-2xl">Articles</h1>
      <Articles />
    </main>
  );
}
