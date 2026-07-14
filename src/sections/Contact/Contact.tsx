import { useId, useState, type FormEvent } from "react";
import { Section } from "../../components/Section/Section";
import styles from "./Contact.module.css";

/**
 * Web3Forms access key. This value is public by design (it ships in the client
 * bundle) and is tied to contact@gmeffect.com — submissions are emailed there.
 * Get a free key at https://web3forms.com by entering contact@gmeffect.com.
 */
const WEB3FORMS_ACCESS_KEY = "35bb27dc-3a27-450d-b004-90e40ce76aed";

type Status = "idle" | "submitting" | "success" | "error";

/** Contact — an accessible message form that emails contact@gmeffect.com. */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from the Green Mouse Effect site");
    formData.append("from_name", "Green Mouse Effect website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success: boolean };
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const submitting = status === "submitting";

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

      {status === "success" ? (
        <div className={styles.success} role="status" aria-live="polite">
          <strong>Thanks!</strong>
          Your message is on its way. We'll be in touch soon.
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Honeypot: hidden from users, catches spam bots that fill everything. */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />

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
              disabled={submitting}
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
              disabled={submitting}
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
              disabled={submitting}
            />
          </div>

          <button className={styles.submit} type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Send"}
          </button>

          {status === "error" && (
            <p className={styles.error} role="alert">
              Something went wrong. Please try again, or email us directly at{" "}
              contact@gmeffect.com.
            </p>
          )}
        </form>
      )}

      <p className={styles.aside}>
        Prefer email? Write to{" "}
        <a href="mailto:contact@gmeffect.com">contact@gmeffect.com</a>
      </p>
    </Section>
  );
}
