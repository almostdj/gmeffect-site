import { Section } from "../../components/Section/Section";
import { Hero } from "../../components/Hero/Hero";

/** Home — the landing section, dominated by the full-screen hero. */
export function Home() {
  return (
    <Section id="home" ariaLabel="Home" tone="cream">
      <Hero />
    </Section>
  );
}
