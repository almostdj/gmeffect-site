import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Tone = "cream" | "soft" | "green";

interface SectionProps {
  /** DOM id used as the smooth-scroll anchor target. */
  id: string;
  /** Accessible name for the landmark region. */
  ariaLabel: string;
  /** Optional small kicker line above the title. */
  eyebrow?: string;
  /** Optional display heading rendered in the Mouse Memoirs font. */
  title?: string;
  /** Background treatment, used to visually separate adjacent sections. */
  tone?: Tone;
  children: ReactNode;
}

const toneClass: Record<Tone, string> = {
  cream: styles["tone-cream"],
  soft: styles["tone-soft"],
  green: styles["tone-green"],
};

/**
 * Full-height, semantic section wrapper shared by every page of the site.
 * Guarantees the `min-height: 100vh` "one screen = one page" layout and a
 * centered content column, while letting each section supply its own body.
 */
export function Section({
  id,
  ariaLabel,
  eyebrow,
  title,
  tone = "cream",
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      aria-label={title ? undefined : ariaLabel}
      className={`${styles.section} ${toneClass[tone]}`}
    >
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        {title && (
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
