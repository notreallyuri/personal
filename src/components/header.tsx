'use client';
import { FileText, FolderOpen, type LucideIcon, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeChanger } from './theme-changer';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const NAV_DATA: { name: string; href: string; icon: LucideIcon }[] = [
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Articles', href: '/articles', icon: FileText },
  { name: 'About', href: '/about', icon: User },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-2 z-50 w-full px-2">
      <div className="flex h-12 items-center justify-between rounded-lg border border-sidebar-border bg-sidebar px-4 py-2 shadow hover:shadow-lg">
        <Link
          className={cn(
            'group relative rounded-md px-2 py-1 font-bold text-lg transition-all duration-200 hover:scale-105',
            isActive('/')
              ? 'bg-primary/10 text-primary shadow-sm'
              : 'hover:bg-primary/5'
          )}
          href="/"
        >
          <span className="relative">
            notreall
            <span
              className={cn(
                'relative font-extrabold transition-colors duration-200',
                isActive('/')
                  ? 'text-primary'
                  : 'text-primary group-hover:text-primary/80'
              )}
            >
              yuri
              <span className="-bottom-0.5 absolute left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
            </span>
          </span>
        </Link>
        <div className="flex h-full items-center gap-4">
          <nav className="inline-flex gap-3 font-medium">
            {NAV_DATA.map((item) => (
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
      </div>
    </header>
  );
}
