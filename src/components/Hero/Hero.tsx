import logo from "../../assets/logo.webp";
import styles from "./Hero.module.css";

/**
 * Landing hero for the Home section: the mascot mark above the primary
 * "Green Mouse Effect" wordmark and tagline, rendered in the Mouse Memoirs
 * display font with the reference's outlined lettering.
 */
export function Hero() {
  return (
    <div className={styles.hero}>
      <img
        className={styles.logo}
        src={logo}
        alt="Green Mouse Effect mascot — a stylised green mouse"
        width={300}
        height={250}
      />

      <div className={styles.titleWrap}>
        <a
          className={styles.support}
          href="#support-me"
          aria-label="Support Green Mouse Effect"
        >
          <span className={styles.supportInner}>Support</span>
        </a>
        <h1 className={styles.title}>Green Mouse Effect</h1>
      </div>
      <p className={styles.subtitle}>Apps, Games and More</p>

      <a className={styles.scrollCue} href="#about" aria-label="Scroll to About">
        <span>Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
