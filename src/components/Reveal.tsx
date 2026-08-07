"use client";

import React from "react";

/**
 * Section reveal: rise 12px + fade over 400ms, 60ms stagger, once,
 * triggered at 15% in view. Honours prefers-reduced-motion via CSS.
 */
export default function Reveal({
  children,
  index = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let shown = false;

    const show = () => {
      if (shown) return;
      shown = true;
      node.setAttribute("data-shown", "true"); // once
      observer.disconnect();
      window.removeEventListener("scroll", check);
    };

    /**
     * Reveal once the element has entered the top 85% of the viewport, or if
     * it has already been scrolled past. The second case matters: an instant
     * jump (anchor link, restored scroll position, End key) can move an
     * element from below the fold to above it without the observer ever
     * seeing it intersect, which would strand it at opacity 0 forever.
     */
    const check = () => {
      const rect = node.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top <= window.innerHeight * 0.85) show();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(node);
    window.addEventListener("scroll", check, { passive: true });
    check();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
