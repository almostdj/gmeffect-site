import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  /** Decorative leading glyph (emoji or short symbol). */
  icon?: string;
  /** Image shown instead of `icon` — e.g. a product logo. Takes precedence. */
  iconSrc?: string;
  title: string;
  /** Optional short label pill shown at the foot of the card. */
  tag?: string;
  /** When set, the whole card becomes a link to this destination. */
  href?: string;
  children: ReactNode;
}

/** Reusable content card used across feature and showcase grids. */
export function Card({ icon, iconSrc, title, tag, href, children }: CardProps) {
  const content = (
    <>
      {iconSrc ? (
        <img className={styles.iconImg} src={iconSrc} alt="" width={56} height={56} />
      ) : (
        icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{children}</p>
      {tag && <span className={styles.tag}>{tag}</span>}
    </>
  );

  if (href) {
    return (
      <a className={`${styles.card} ${styles.linkCard}`} href={href}>
        {content}
      </a>
    );
  }

  return <article className={styles.card}>{content}</article>;
}
