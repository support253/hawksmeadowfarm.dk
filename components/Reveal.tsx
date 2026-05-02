"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
} & Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition" | "children"
>;

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
  ...rest
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
