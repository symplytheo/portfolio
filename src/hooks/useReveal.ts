import { useEffect, useRef } from "react";

/**
 * Adds `.is-visible` to the element when it enters the viewport.
 * Pairs with the `.reveal` utility; respects prefers-reduced-motion via CSS.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      // Trigger on the first visible pixel (a ratio threshold can never be met by
      // sections taller than the viewport ÷ ratio — e.g. Projects on a phone).
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
