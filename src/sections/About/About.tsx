import { Section } from "../../components/Section/Section";
import { Card } from "../../components/Card/Card";
import styles from "./About.module.css";

/** About — what Green Mouse Effect is and what it stands for. */
export function About() {
  return (
    <Section id="about" ariaLabel="About" eyebrow="Who we are" title="About" tone="soft">
      <p className={styles.lead}>
        <strong>Green Mouse Effect</strong> is a small independent studio building
        playful apps, games and browser extensions. We chase that one bright idea
        that makes people grin — then polish it until it feels effortless.
      </p>

      <div className={styles.grid}>
        <Card icon="🎮" title="Games">
          Bite-sized games with big personality — quick to pick up, hard to put
          down, and always a little bit weird.
        </Card>
        <Card icon="⚡" title="Apps">
          Focused tools that do one thing brilliantly, with interfaces that stay
          out of your way.
        </Card>
        <Card icon="🧩" title="Extensions">
          Handy browser add-ons that quietly make the web nicer to live in, day
          after day.
        </Card>
      </div>
    </Section>
  );
}
