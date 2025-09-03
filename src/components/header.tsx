'use client';
import { FileText, FolderOpen, type LucideIcon, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeChanger } from './theme-changer';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const navData: { name: string; href: string; icon: LucideIcon }[] = [
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Articles', href: '/articles', icon: FileText },
  { name: 'About', href: '/about', icon: User },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-2 z-90 flex h-12 w-full items-center justify-between gap-4 rounded-lg border border-sidebar-border bg-sidebar p-2">
      <Link
        className="font-bold text-xl transition-opacity hover:opacity-80"
        href="/"
      >
        notreall<span className="text-primary">yuri</span>
      </Link>
      <div className="flex h-full items-center gap-4">
        <nav className="inline-flex gap-3 font-medium">
          {navData.map((item) => (
            <Button
              asChild
              className={cn(
                'hover:text-primary',
                isActive(item.href) &&
                  'bg-primary/75 text-primary-foreground transition-colors hover:bg-primary/100 hover:text-primary-foreground dark:hover:bg-primary/100 dark:hover:text-primary-foreground'
              )}
              key={item.name}
              size="sm"
              variant="ghost"
            >
              <Link href={item.href}>
                <item.icon className="size-4" />
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <Separator orientation="vertical" />
        <ThemeChanger />
      </div>
    </header>
  );
}
