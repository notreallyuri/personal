import { Suspense } from 'react';
import { Projects } from '@/components/projects';

function ProjectsContent() {
  return (
    <main className="mx-auto flex max-w-272 flex-col gap-4 px-12 py-2 sm:px-8 md:px-6 xl:px-0">
      <h1 className="font-bold text-2xl">Projects</h1>
      <Projects />
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
