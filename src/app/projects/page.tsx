import { Search } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';
import { Input } from '@/components/ui/input';
import { projectsMocked } from '@/mock/projects';

export default function Page() {
  return (
    <main className="mx-auto flex max-w-272 flex-col gap-4 py-2">
      <h1 className="font-bold text-2xl">Projects</h1>
      <section className="gap-2 space-y-2 rounded-lg border p-2" id="search">
        <p className="font-semibold text-lg">Filter</p>
        <div className="relative">
          <Input className="peer max-w-72 pl-8" placeholder="Search..." />
          <Search className="-translate-y-1/2 absolute top-1/2 left-2 size-4 peer-focus:text-primary" />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4" id="list">
        {projectsMocked.map((item) => (
          <ProjectCard key={item.slug} project={item} />
        ))}
      </section>
    </main>
  );
}
