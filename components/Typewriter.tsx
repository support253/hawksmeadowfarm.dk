"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
};

export default function Typewriter({
  text,
  speed = 60,
  startDelay = 200,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let nextTimer: ReturnType<typeof setTimeout>;
    const startTimer = setTimeout(() => {
      const tick = () => {
        i++;
        setTyped(text.slice(0, i));
        if (i < text.length) {
          const prev = text[i - 1];
          // Pause longer on sentence-ending punctuation for deliberate pacing.
          const pause =
            prev === "." || prev === "?" || prev === "!"
              ? speed * 6
              : prev === "," || prev === ";"
              ? speed * 3
              : speed;
          nextTimer = setTimeout(tick, pause);
        } else {
          nextTimer = setTimeout(() => setDone(true), 1600);
        }
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(startTimer);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, [inView, text, speed, startDelay]);

  return (
    <span ref={ref} className={className}>
      {typed}
      <motion.span
        aria-hidden
        animate={done ? { opacity: 0 } : { opacity: [1, 1, 0, 0, 1] }}
        transition={
          done
            ? { duration: 0.8, ease: "easeOut" }
            : { duration: 1, repeat: Infinity, ease: "linear" }
        }
        className="inline-block ml-[0.15em]"
        style={{
          width: "0.6ch",
          height: "0.95em",
          background: "currentColor",
          verticalAlign: "-0.12em",
          opacity: 0.7,
        }}
      />
    </span>
  );
}
