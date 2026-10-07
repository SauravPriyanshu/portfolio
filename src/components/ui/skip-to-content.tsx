import * as React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--surface)] focus:text-[var(--text)] focus:border focus:border-[var(--accent)] focus:rounded-[14px] focus:outline-none"
    >
      Skip to content
    </a>
  );
}
