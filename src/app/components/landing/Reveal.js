"use client";

import useScrollReveal from "../../hooks/useScrollReveal";

export default function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = "0ms",
  speed = "default",
  variant = "up",
  style,
  ...props
}) {
  const revealRef = useScrollReveal();
  const delayValue = typeof delay === "number" ? `${delay}ms` : delay;

  return (
    <Component
      ref={revealRef}
      className={`reveal reveal-${variant} reveal-speed-${speed} ${className}`.trim()}
      style={{ "--reveal-delay": delayValue, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
