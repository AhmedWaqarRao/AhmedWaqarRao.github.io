import { useEffect } from "react";

const SELECTOR =
  "main .card, main .bg-white.rounded-2xl, main .bg-white.rounded-xl, main .bg-white.rounded-lg, main [data-reveal]";

/**
 * Fades cards up as they scroll into view, with a small stagger within each row.
 * Skips users who prefer reduced motion and never hides anything if
 * IntersectionObserver is unavailable.
 */
export default function useScrollReveal(routeKey: string) {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let io: IntersectionObserver | undefined;
    const timers: number[] = [];

    const start = window.setTimeout(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.closest(".fixed")
      );

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.classList.add("rv-in");
            io?.unobserve(el);
            // hand the element back to its normal hover transitions once revealed
            timers.push(
              window.setTimeout(() => {
                el.classList.remove("rv", "rv-in");
                el.style.removeProperty("--rv-delay");
              }, 900)
            );
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
      );

      els.forEach((el, i) => {
        el.classList.add("rv");
        el.style.setProperty("--rv-delay", `${(i % 3) * 70}ms`);
        io?.observe(el);
      });
    }, 60);

    return () => {
      window.clearTimeout(start);
      timers.forEach((t) => window.clearTimeout(t));
      io?.disconnect();
    };
  }, [routeKey]);
}
