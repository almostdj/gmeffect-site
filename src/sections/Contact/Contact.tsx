import { useId, useState, type FormEvent } from "react";
import { Section } from "../../components/Section/Section";
import styles from "./Contact.module.css";

/** Contact — a simple, accessible message form (no backend wired up yet). */
export function Contact() {
  const [sent, setSent] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Front-end only for now: acknowledge and reset.
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <Section
      id="contact"
      ariaLabel="Contact"
      eyebrow="Say hello"
      title="Contact"
      tone="green"
    >
      <p className={styles.lead}>
        Got an idea, a bug, or just want to talk mice? Drop us a line and we'll
        get back to you.
      </p>

      {sent ? (
        <div className={styles.success} role="status" aria-live="polite">
          <strong>Thanks!</strong>
          Your message is on its way. We'll be in touch soon.
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={nameId}>
              Name
            </label>
            <input
              className={styles.input}
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={emailId}>
              Email
            </label>
            <input
              className={styles.input}
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={messageId}>
              Message
            </label>
            <textarea
              className={styles.textarea}
              id={messageId}
              name="message"
              rows={4}
              required
            />
          </div>

          <button className={styles.submit} type="submit">
            Send
          </button>
        </form>
      )}

      <p className={styles.aside}>
        Prefer email? Write to{" "}
        <a href="mailto:hello@greenmouseeffect.com">hello@greenmouseeffect.com</a>
      </p>
    </Section>
  );
}
