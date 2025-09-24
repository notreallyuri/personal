import { Github } from 'lucide-react';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute right-0 bottom-0 left-0 z-10 flex h-12 w-full items-center justify-between border-border border-t bg-background/80 px-4 py-3 backdrop-blur-sm">
      <p className="text-muted-foreground text-sm">© {currentYear} Yuri VGR</p>

      <div className="flex h-full items-center gap-4">
        <a
          aria-label="Visit GitHub profile"
          className="flex items-center gap-2 text-muted-foreground text-sm transition-colors duration-200 hover:text-primary"
          href="https://github.com/notreallyuri"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </a>

        <Separator orientation="vertical" />

        <p className="text-muted-foreground text-sm">Built with Next.js</p>
      </div>
    </footer>
  );
}
