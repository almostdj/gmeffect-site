import type { ComponentType } from "react";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { WebExtensions } from "./WebExtensions/WebExtensions";
import { Contact } from "./Contact/Contact";

/** A full-screen page of the site plus its navigation metadata. */
export interface SiteSection {
  /** DOM id + hash target used for smooth-scroll navigation. */
  id: string;
  /** Human-readable label shown in the navigation menu. */
  label: string;
  /** The section's React component. */
  Component: ComponentType;
}

/**
 * Single, ordered source of truth for the site's sections. It drives the
 * page layout, the navigation menu, and the active-section highlight, so
 * adding a new full-screen page is a one-line change:
 *   1. create the section under `src/sections/<Name>/`,
 *   2. add an entry to this array in the desired order.
 */
export const SECTIONS: readonly SiteSection[] = [
  { id: "home", label: "Home", Component: Home },
  { id: "about", label: "About", Component: About },
  { id: "web-extensions", label: "Web Extensions", Component: WebExtensions },
  { id: "contact", label: "Contact", Component: Contact },
] as const;

/** Stable list of section ids (safe to use as a hook dependency). */
export const SECTION_IDS: readonly string[] = SECTIONS.map((s) => s.id);
