import styles from "./BuyMeACoffeeButton.module.css";

/** Buy Me a Coffee page for the studio. */
const BMC_URL = "https://www.buymeacoffee.com/gmeffect";

/**
 * "Support me" button linking to the studio's Buy Me a Coffee page.
 *
 * Note: Buy Me a Coffee's official inline-button script positions its button
 * via `document.currentScript`, which is null when the script is injected into
 * a React SPA, so it never renders. This is a pixel-matched link — the same
 * colours and label as the configured BMC button — that reliably does the job.
 */
export function BuyMeACoffeeButton() {
  return (
    <a className={styles.button} href={BMC_URL} target="_blank" rel="noreferrer">
      <span className={styles.cup} aria-hidden="true">
        ☕
      </span>
      Support me
    </a>
  );
}
