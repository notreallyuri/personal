import { FileText, FolderOpen, type LucideIcon, User } from 'lucide-react';
import Link from 'next/link';
import { ThemeChanger } from './theme-changer';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export function Header() {
  const pathData: { name: string; path: string; icon: LucideIcon }[] = [
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'Articles', path: '/articles', icon: FileText },
    { name: 'About', path: '/about', icon: User },
  ];

  return (
    <header className="stickyh top-2 flex h-12 w-full items-center justify-between rounded-xl border border-sidebar-border bg-sidebar px-4 py-2 shadow dark:shadow-none">
      <Link
        className="font-bold text-xl transition-opacity hover:opacity-80"
        href={{ pathname: '/' }}
      >
        notreall<span className="text-primary">yuri</span>
      </Link>
      <div className="flex h-full items-center gap-4">
        <nav className="inline-flex gap-3 font-medium">
          <TooltipProvider>
            {pathData.map((item) => (
              <Tooltip key={item.path}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    className="hover:text-primary"
                    size="icon"
                    variant="ghost"
                  >
                    <Link href={{ pathname: item.path }}>
                      <item.icon className="size-4" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{item.name}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
        <Separator orientation="vertical" />
        <ThemeChanger />
      </div>
    </header>
  );
}
