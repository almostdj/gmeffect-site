import { useEffect, useState } from "react";

/**
 * Tracks which full-screen section is currently in view using an
 * IntersectionObserver, so the navigation can highlight the active item.
 *
 * @param ids - Ordered list of section element ids to observe.
 * @returns The id of the section closest to the top of the viewport.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Track how much of each section is visible; the most-visible wins.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId = activeId;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActiveId(bestId);
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // `ids` is stable (module constant); activeId intentionally omitted to
    // avoid re-subscribing on every active change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  return activeId;
}
