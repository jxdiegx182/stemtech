"use client";

import { useCallback, useEffect, useRef } from "react";

export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -80px 0px",
} = {}) {
  const nodeRef = useRef(null);

  const setNode = useCallback((node) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return undefined;
    }

    node.classList.add("reveal-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return setNode;
}
