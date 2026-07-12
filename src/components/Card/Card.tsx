import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  /** Decorative leading glyph (emoji or short symbol). */
  icon?: string;
  title: string;
  /** Optional short label pill shown at the foot of the card. */
  tag?: string;
  children: ReactNode;
}

/** Reusable content card used across feature and showcase grids. */
export function Card({ icon, title, tag, children }: CardProps) {
  return (
    <article className={styles.card}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{children}</p>
      {tag && <span className={styles.tag}>{tag}</span>}
    </article>
  );
}
