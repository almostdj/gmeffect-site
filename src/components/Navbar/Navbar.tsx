import { useCallback, useEffect, useId, useRef, useState } from "react";
import { SECTIONS, SECTION_IDS } from "../../sections/sections";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import styles from "./Navbar.module.css";

/**
 * Site-wide navigation: a fixed bar with the GME wordmark and a MENU pill
 * that opens a full-screen overlay panel of section links. Smooth-scrolls to
 * the target section, highlights the active one, and is keyboard accessible.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const scrollDirection = useScrollDirection();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();

  // The bar shows on the hero section, whenever the user scrolls up, or while
  // the menu is open; it tucks away when scrolling down through the content.
  const onHero = activeId === SECTION_IDS[0];
  const visible = open || onHero || scrollDirection === "up";

  const close = useCallback(() => setOpen(false), []);

  // Close on Escape and lock body scroll while the overlay is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  // Restore focus to the toggle when the menu closes.
  const handleClose = useCallback(() => {
    close();
    toggleRef.current?.focus();
  }, [close]);

  return (
    <>
      <header className={`${styles.bar} ${visible ? "" : styles.hidden}`}>
        <a className={styles.logo} href="#home" aria-label="Green Mouse Effect — home">
          GME
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Rendered as a sibling of the header so it is never affected by the
          header's transform (scroll-hide / focus-within), which would turn the
          header into a containing block and clip this fixed overlay. */}
      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className={styles.backdrop} onClick={handleClose} />
          <nav id={menuId} className={styles.panel} aria-label="Primary">
            <ul className={styles.list}>
              {SECTIONS.map((section, index) => (
                <li key={section.id}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={`#${section.id}`}
                    className={`${styles.link} ${
                      activeId === section.id ? styles.linkActive : ""
                    }`}
                    aria-current={activeId === section.id ? "true" : undefined}
                    onClick={handleClose}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      className={styles.toggleIcon}
      width="22"
      height="14"
      viewBox="0 0 22 14"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M1 1h20M1 7h20M1 13h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className={styles.toggleIcon}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M2 2l12 12M14 2L2 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
