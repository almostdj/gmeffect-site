import { SECTIONS } from "../../sections/sections";
import styles from "./Footer.module.css";

/**
 * Site footer: the section links on the left and a copyright line on the
 * right, over a full-width divider. Links are generated from the shared
 * `SECTIONS` config so they stay in sync with the rest of the site.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <nav className={styles.nav} aria-label="Footer">
          {SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className={styles.link}>
              {section.label}
            </a>
          ))}
        </nav>
        <p className={styles.copy}>© {year} GME — All Rights Reserved</p>
      </div>
    </footer>
  );
}
