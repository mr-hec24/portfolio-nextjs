"use client";

import React from "react";

/**
 * Manual only — never system-driven, per the design's motion notes.
 * The knob slides 200ms; the page colours cross-fade 260ms (globals.css).
 * The choice persists to localStorage and is applied before paint by the
 * inline script in layout.tsx, so there is no flash on load.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable (private mode) — the toggle still works for this session */
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark theme"
      className="flex h-6 w-11 flex-none cursor-pointer items-center rounded-full bg-ghost px-[3px]"
    >
      <span
        className="block h-[18px] w-[18px] rounded-full bg-accent transition-transform duration-200 ease-out motion-reduce:transition-none"
        style={{ transform: isDark ? "translateX(20px)" : "translateX(0)" }}
      />
    </button>
  );
}
