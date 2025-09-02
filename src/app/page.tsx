import { SplitText } from '@/components/split-text';

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <SplitText
          className="font-bold text-4xl"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="span"
          text="Hi I'm"
          threshold={0.1}
          to={{ opacity: 1, y: 0, delay: 0 }}
        />
        <SplitText
          className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text font-bold text-4xl text-transparent"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 40 }}
          splitType="chars"
          tag="span"
          text="notreallyuri"
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
    </main>
  );
}
