import { useEffect } from "react";

/**
 * Scrolls to the element named by the URL hash on first load.
 *
 * This is a client-rendered SPA, so when the page is opened directly at a deep
 * link such as `/#contact`, the target section does not exist yet when the
 * browser performs its native fragment scroll — it silently stays at the top
 * (notably in Chrome; Firefox happens to retry). We re-run the scroll once
 * React has rendered the sections, and again after the display fonts load
 * (they change the hero's height, which shifts every section's position).
 */
export function useInitialHashScroll(): void {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!id) return;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const html = document.documentElement;
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto"; // instant jump on load, not a slow glide
      el.scrollIntoView();
      html.style.scrollBehavior = previous;
    };

    requestAnimationFrame(scrollToTarget);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(scrollToTarget));
    }
  }, []);
}
