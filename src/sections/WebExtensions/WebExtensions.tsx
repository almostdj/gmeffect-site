import { Section } from "../../components/Section/Section";
import { Card } from "../../components/Card/Card";
import styles from "./WebExtensions.module.css";

interface Extension {
  id: string;
  icon: string;
  name: string;
  description: string;
  status: string;
}

const EXTENSIONS: readonly Extension[] = [
  {
    id: "video-button",
    icon: "🎬",
    name: "Video Saver",
    description:
      "Adds a friendly one-click download button next to videos, with a built-in quality picker.",
    status: "Live",
  },
  {
    id: "gif-grabber",
    icon: "🖼️",
    name: "GIF Grabber",
    description:
      "Resolves and saves high-quality clips from your favourite galleries without the clutter.",
    status: "Live",
  },
  {
    id: "feed-keeper",
    icon: "📡",
    name: "Feed Keeper",
    description:
      "Back up and browse your social feeds offline, on your terms — private by default.",
    status: "Beta",
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
          <Card key={ext.id} icon={ext.icon} title={ext.name} tag={ext.status}>
            {ext.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
