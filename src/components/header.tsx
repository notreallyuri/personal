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
  const navData = [
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Articles', href: '/articles', icon: FileText },
    { name: 'About', href: '/about', icon: User },
  ];

  return (
    <header className="-translate-x-1/2 fixed top-2 left-1/2 flex h-14 w-fit items-center gap-2 rounded-lg border border-sidebar-border bg-sidebar p-2">
      <Link
        className="font-bold text-xl transition-opacity hover:opacity-80"
        href={{ pathname: '/' }}
      >
        notreall<span className="text-primary">yuri</span>
      </Link>
      <Separator orientation="vertical" />
      <div className="flex h-full items-center gap-4">
        <nav className="inline-flex gap-3 font-medium">
          <TooltipProvider>
            {navData.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    className="hover:text-primary"
                    size="icon"
                    variant="ghost"
                  >
                    <Link href={{ pathname: item.href }}>
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
