import { SplitText } from '@/components/split-text';

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <SplitText
          className="font-bold text-5xl"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="h1"
          text="Hi I'm"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 0 }}
        />
        <SplitText
          className="font-bold text-5xl text-primary"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="h1"
          text="notreallyuri"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 0.3 }}
        />
      </div>
      <SplitText
        className="font-bold text-5xl"
        delay={50}
        duration={0.8}
        from={{ opacity: 0, y: 40 }}
        splitType="chars"
        tag="h1"
        text="and this is"
        threshold={0.1}
        to={{ opacity: 1, y: 0, delay: 0.8 }}
      />
      <SplitText
        className="font-bold text-5xl"
        delay={50}
        duration={0.8}
        from={{ opacity: 0, y: 40 }}
        splitType="chars"
        tag="h1"
        text="my portfolio"
        threshold={0.1}
        to={{ opacity: 1, y: 0, delay: 1.3 }}
      />
      <div>
        <SplitText
          className="font-medium"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="h1"
          text={"(I'm actuall"}
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 2.5 }}
        />
        <SplitText
          className="font-medium text-primary"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="h1"
          text={'yuri)'}
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 2.8 }}
        />
      </div>
    </main>
  );
}
