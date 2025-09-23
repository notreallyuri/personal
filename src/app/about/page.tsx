import { Briefcase, Code, Mail, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const skillGroups: {
  title: string;
  skills: string[];
}[] = [
  {
    title: 'Frontend',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'CSS',
      'HTML',
      'Tailwind CSS',
      'Redux, Zustand',
    ],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'RESTful APIs', 'SQL, MongoDB, Convex'],
  },
  {
    title: 'Tools & Testing',
    skills: ['Git', 'CI/CD', 'Jest', 'Vitest'],
  },
];

export default function Page() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-8">
      <section className="mb-12 text-center">
        <div className="mb-6">
          <Avatar className="mx-auto mb-4 size-32 border-4 border-primary/20">
            <AvatarImage alt="Profile picture" src="/avatar.jpg" />
            <AvatarFallback className="bg-primary/10 font-semibold text-2xl text-primary">
              YV
            </AvatarFallback>
          </Avatar>
        </div>

        <h1 className="mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-bold text-4xl text-transparent md:text-5xl">
          About Me
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Welcome to my portfolio! I'm an aspiring full-stack developer
          passionate about creating meaningful digital experiences through
          personal projects and continuous learning.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                👋
              </span>
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="text-sm leading-relaxed">
              I'm a self-taught developer with a passion for building modern web
              applications. While I'm early in my professional journey, I've
              gained valuable experience through personal projects and a
              freelance mobile health SaaS application.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
                Self-Motivated
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
                Fast Learner
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
                Detail-Oriented
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                ⚡
              </span>
              Quick Info
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="flex h-fit min-w-24 items-center gap-2 font-semibold text-foreground">
                  <Briefcase className="size-4" />
                  Experience:
                </dt>
                <dd className="text-muted-foreground">
                  Personal projects + freelance SaaS
                </dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <dt className="flex h-fit min-w-24 items-center gap-2 font-semibold text-foreground">
                  <MapPin className="size-4" />
                  Location:
                </dt>
                <dd className="text-muted-foreground">Remote / On-site</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <dt className="flex h-fit min-w-24 items-center gap-2 font-semibold text-foreground">
                  <Code className="size-4" />
                  Focus:
                </dt>
                <dd className="text-muted-foreground">
                  Full-stack development
                </dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <dt className="flex h-fit min-w-24 items-center gap-2 font-semibold text-foreground">
                  <Sparkles className="size-4" />
                  Status:
                </dt>
                <dd className="text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="size-2 animate-pulse rounded-full bg-green-500" />
                    Seeking first professional role
                  </span>
                </dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <dt className="flex h-fit min-w-24 items-center gap-2 font-semibold text-foreground">
                  <Mail className="size-4" />
                  Contact:
                </dt>
                <dd className="text-muted-foreground">
                  <a
                    aria-label="Send email to yurivgr@icloud.com"
                    className="text-primary transition-colors hover:underline"
                    href="mailto:yurivgr@icloud.com"
                  >
                    yurivgr@icloud.com
                  </a>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <section className="mt-8">
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                🛠️
              </span>
              Technical Skills
            </CardTitle>
            <CardDescription>
              Technologies and tools I work with to bring ideas to life
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillGroups.map((group) => (
              <div className="space-y-3" key={group.title}>
                <h3 className="border-primary border-l-4 pl-3 font-semibold text-foreground text-lg">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.skills.map((skill) => (
                    <div
                      className="group flex h-12 items-center justify-center rounded-lg border border-border/50 bg-secondary/50 px-3 py-2 font-medium text-secondary-foreground text-sm transition-all duration-200 hover:scale-105 hover:border-primary/30 hover:bg-secondary/70 hover:shadow-sm"
                      key={skill}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-8 text-center">
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                🤝
              </span>
              Let's Work Together
            </CardTitle>
            <CardDescription className="text-base">
              I'm actively seeking my first professional development role and
              would love to contribute my skills to a collaborative team. Feel
              free to explore my projects or reach out to discuss opportunities!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link aria-label="View my projects" href="/projects">
                <Button
                  className="min-w-40 transition-transform hover:scale-105"
                  size="lg"
                >
                  View My Work
                </Button>
              </Link>

              <a
                aria-label="Send email to start a conversation"
                href="mailto:yurivgr@icloud.com"
              >
                <Button
                  className="min-w-40 transition-transform hover:scale-105"
                  size="lg"
                  variant="outline"
                >
                  Get In Touch
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
