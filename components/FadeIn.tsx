"use client";

import type { ComponentProps } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function FadeIn(props: ComponentProps<typeof motion.div>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0.94, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      {...props}
    />
  );
}
