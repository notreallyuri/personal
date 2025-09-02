'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

const MARGIN_MATCH = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/;
const STAGGER_DIVIDER = 1000;
const PCT_MULTIPLIER = 100;

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const calculateStartPosition = (
  threshold: number,
  rootMargin: string
): string => {
  const startPct = (1 - threshold) * PCT_MULTIPLIER;
  const marginMatch = MARGIN_MATCH.exec(rootMargin);
  const marginValue = marginMatch ? Number.parseFloat(marginMatch[1]) : 0;
  const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';

  let sign = '';
  if (marginValue !== 0) {
    if (marginValue < 0) {
      sign = `-=${Math.abs(marginValue)}${marginUnit}`;
    } else {
      sign = `+=${marginValue}${marginUnit}`;
    }
  }

  return `top ${startPct}%${sign}`;
};

const assignAnimationTargets = (
  splitInstance: GSAPSplitText,
  splitType: string
): Element[] => {
  if (splitType.includes('chars') && splitInstance.chars?.length) {
    return splitInstance.chars;
  }

  if (splitType.includes('words') && splitInstance.words?.length) {
    return splitInstance.words;
  }

  if (splitType.includes('lines') && splitInstance.lines?.length) {
    return splitInstance.lines;
  }

  return (
    splitInstance.chars || splitInstance.words || splitInstance.lines || []
  );
};

const createSplitAnimation = (
  targets: Element[],
  animationConfig: {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    duration: number;
    ease: string | ((t: number) => number);
    delay: number;
    start: string;
    element: HTMLElement;
    onComplete: () => void;
  }
) => {
  return gsap.fromTo(
    targets,
    { ...animationConfig.from },
    {
      ...animationConfig.to,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      stagger: animationConfig.delay / STAGGER_DIVIDER,
      scrollTrigger: {
        trigger: animationConfig.element,
        start: animationConfig.start,
        once: true,
        fastScrollEnd: true,
        anticipatePin: 0.4,
      },
      onComplete: animationConfig.onComplete,
      willChange: 'transform, opacity',
      force3D: true,
    }
  );
};

const cleanupSplitInstance = (
  element: HTMLElement & { _rbsplitInstance?: GSAPSplitText }
) => {
  if (element._rbsplitInstance) {
    try {
      element._rbsplitInstance.revert();
    } catch (_) {
      // Ignore cleanup errors
    }
    element._rbsplitInstance = undefined;
  }
};

export type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!(ref.current && text && fontsLoaded)) {
        return;
      }

      const el = ref.current as HTMLElement & {
        _rbsplitInstance?: GSAPSplitText;
      };

      cleanupSplitInstance(el);
      const start = calculateStartPosition(threshold, rootMargin);

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitText) => {
          const targets = assignAnimationTargets(self, splitType);

          return createSplitAnimation(targets, {
            from,
            to,
            duration,
            ease,
            delay,
            start,
            element: el,
            onComplete: () => {
              animationCompletedRef.current = true;
              onLetterAnimationComplete?.();
            },
          });
        },
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        for (const st of ScrollTrigger.getAll()) {
          if (st.trigger === el) {
            st.kill();
          }
        }

        try {
          splitInstance.revert();
        } catch {
          // Ignore cleanup errors
        }
        el._rbsplitInstance = undefined;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete,
      ],
      scope: ref,
    }
  );

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      wordWrap: 'break-word',
      willChange: 'transform, opacity',
    };
    const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
    switch (tag) {
      case 'h1':
        return (
          <h1 className={classes} ref={ref} style={style}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 className={classes} ref={ref} style={style}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 className={classes} ref={ref} style={style}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 className={classes} ref={ref} style={style}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 className={classes} ref={ref} style={style}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 className={classes} ref={ref} style={style}>
            {text}
          </h6>
        );
      default:
        return (
          <p className={classes} ref={ref} style={style}>
            {text}
          </p>
        );
    }
  };

  return renderTag();
};

export { SplitText };
