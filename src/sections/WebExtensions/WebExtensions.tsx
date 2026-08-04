import { Section } from "../../components/Section/Section";
import { Card } from "../../components/Card/Card";
import styles from "./WebExtensions.module.css";

interface Extension {
  id: string;
  iconSrc: string;
  name: string;
  description: string;
  status: string;
  href: string;
}

const EXTENSIONS: readonly Extension[] = [
  {
    id: "snaggle",
    iconSrc: "/snaggle/icon.png",
    name: "Snaggle",
    description:
      "Downloads videos from X (Twitter). Adds a button to any post with video, lets you pick the quality, and shows live progress.",
    status: "Live",
    href: "/snaggle/",
  },
];

/** Web Extensions — a showcase grid of the studio's browser add-ons. */
export function WebExtensions() {
  return (
    <Section
      id="web-extensions"
      ariaLabel="Web Extensions"
      eyebrow="For your browser"
      title="Web Extensions"
      tone="cream"
    >
      <p className={styles.lead}>
        Little green helpers that live in your browser and make everyday tasks a
        touch more delightful.
      </p>

      <div className={styles.grid}>
        {EXTENSIONS.map((ext) => (
          <Card
            key={ext.id}
            iconSrc={ext.iconSrc}
            title={ext.name}
            tag={ext.status}
            href={ext.href}
          >
            {ext.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
