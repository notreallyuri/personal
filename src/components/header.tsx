import { FileText, FolderOpen, User } from 'lucide-react';
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
  return (
    <header className="stickyh top-2 flex h-12 w-full items-center justify-between rounded-xl border border-sidebar-border bg-sidebar p-2 shadow dark:shadow-none">
      <Link
        className="font-bold text-xl transition-opacity hover:opacity-80"
        href={{ pathname: '/' }}
      >
        notreall<span className="text-primary">yuri</span>
      </Link>
      <div className="flex h-full items-center gap-4">
        <nav className="inline-flex gap-3 font-medium [&>svg]:hover:underline">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  className="hover:text-primary"
                  size="icon"
                  variant="ghost"
                >
                  <Link href={{ pathname: '/projects' }}>
                    <FolderOpen className="size-4" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Projects</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  className="hover:text-primary"
                  size="icon"
                  variant="ghost"
                >
                  <Link href={{ pathname: '/articles' }}>
                    <FileText className="size-4" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Articles</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  className="hover:text-primary"
                  size="icon"
                  variant="ghost"
                >
                  <Link href={{ pathname: '/about' }}>
                    <User className="size-4" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>About</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <Separator orientation="vertical" />
        <ThemeChanger />
      </div>
    </header>
  );
}
