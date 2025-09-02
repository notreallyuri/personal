import { SplitText } from '@/components/split-text';

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-center">
        <SplitText
          className="font-bold text-4xl"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="span"
          text="Hi I'm notreall"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 0 }}
        />
        <SplitText
          className="font-bold text-4xl text-primary"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="span"
          text="yuri"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 0.4 }}
        />
      </div>
      <SplitText
        className="font-bold text-4xl"
        delay={50}
        duration={0.8}
        from={{ opacity: 0, y: 40 }}
        splitType="chars"
        tag="h1"
        text="and this is"
        threshold={0.1}
        to={{ opacity: 1, y: 0, delay: 0.6 }}
      />
      <SplitText
        className="font-bold text-4xl"
        delay={50}
        duration={0.8}
        from={{ opacity: 0, y: 40 }}
        splitType="chars"
        tag="h1"
        text="my portfolio"
        threshold={0.1}
        to={{ opacity: 1, y: 0, delay: 1.0 }}
      />
      <div>
        <SplitText
          className="font-semibold text-lg text-muted-foreground"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 20 }}
          splitType="chars"
          tag="span"
          text="(I'm actuall"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 3.5 }}
        />
        <SplitText
          className="font-semibold text-lg text-primary/75"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 20 }}
          splitType="chars"
          tag="span"
          text="yuri"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 3.8 }}
        />
        <SplitText
          className="font-semibold text-lg text-muted-foreground"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 20 }}
          splitType="chars"
          tag="span"
          text=")"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 4.0 }}
        />
      </div>
    </main>
  );
}
