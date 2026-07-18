import { useReducedMotion } from "motion/react";

const revealEase = [0.16, 1, 0.3, 1] as const;

export function useRevealMotion(y = 18, duration = 0.58) {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion,
    revealInitial: prefersReducedMotion ? false : { opacity: 0, y },
    revealTransition: { duration, ease: revealEase },
  } as const;
}
