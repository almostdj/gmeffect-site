import { Section } from "../../components/Section/Section";
import { BuyMeACoffeeButton } from "../../components/BuyMeACoffee/BuyMeACoffeeButton";
import styles from "./Support.module.css";

/** Support me — a donation call-to-action (Buy Me a Coffee + QR code). */
export function Support() {
  return (
    <Section
      id="support-me"
      ariaLabel="Support me"
      eyebrow="Enjoying GME?"
      title="Support me"
      tone="soft"
    >
      <p className={styles.lead}>
        Green Mouse Effect is a tiny independent studio. If our apps, games or
        extensions made you smile, you can help fuel the next one with a coffee.
        Every cup genuinely helps — thank you! 💚
      </p>

      <BuyMeACoffeeButton />

      <div className={styles.qr}>
        <img
          className={styles.qrImage}
          src="/support-qr.png"
          alt="QR code linking to the Green Mouse Effect Buy Me a Coffee page"
          width={240}
          height={240}
        />
        <p className={styles.qrCaption}>…or scan to support from your phone</p>
      </div>
    </Section>
  );
}
