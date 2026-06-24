const iconClasses = "h-6 w-6";

export default function Icon({ name, className = iconClasses }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "robot") {
    return (
      <svg {...commonProps}>
        <path d="M12 6V3" />
        <path d="M8 9h8" />
        <rect x="5" y="8" width="14" height="10" rx="3" />
        <path d="M8.5 13h.01" />
        <path d="M15.5 13h.01" />
        <path d="M9 18v3" />
        <path d="M15 18v3" />
      </svg>
    );
  }

  if (name === "print") {
    return (
      <svg {...commonProps}>
        <path d="M7 4h10v5H7z" />
        <path d="M6 15h12" />
        <path d="M8 19h8" />
        <path d="M6 9h12a3 3 0 0 1 3 3v4H3v-4a3 3 0 0 1 3-3z" />
        <path d="M8 15v4" />
        <path d="M16 15v4" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...commonProps}>
        <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
        <path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z" />
        <path d="M5 3l.7 1.8L7.5 5.5 5.7 6.2 5 8l-.7-1.8-1.8-.7 1.8-.7z" />
      </svg>
    );
  }

  if (name === "circuit") {
    return (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="M12 5v14" />
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="12" cy="19" r="2" />
        <path d="M7 12h3" />
        <path d="M14 12h3" />
      </svg>
    );
  }

  if (name === "kit") {
    return (
      <svg {...commonProps}>
        <path d="M5 8h14" />
        <path d="M7 4h10v16H7z" />
        <path d="M10 8v12" />
        <path d="M14 8v12" />
        <path d="M10 12h4" />
        <path d="M10 16h4" />
      </svg>
    );
  }

  if (name === "advisor") {
    return (
      <svg {...commonProps}>
        <path d="M4 18V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-5 3z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    );
  }

  if (name === "chip") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 3v4" />
        <path d="M15 3v4" />
        <path d="M9 17v4" />
        <path d="M15 17v4" />
        <path d="M3 9h4" />
        <path d="M3 15h4" />
        <path d="M17 9h4" />
        <path d="M17 15h4" />
      </svg>
    );
  }

  if (name === "cube") {
    return (
      <svg {...commonProps}>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 12l8-4.5" />
        <path d="M12 12v9" />
        <path d="M12 12L4 7.5" />
      </svg>
    );
  }

  if (name === "message") {
    return (
      <svg {...commonProps}>
        <path d="M5 18.5V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H9z" />
        <path d="M9 9h6" />
        <path d="M9 12h4" />
      </svg>
    );
  }

  if (name === "terminal") {
    return (
      <svg {...commonProps}>
        <path d="M4 5h16v14H4z" />
        <path d="M7 9l3 3-3 3" />
        <path d="M12 15h5" />
      </svg>
    );
  }

  if (name === "down") {
    return (
      <svg {...commonProps}>
        <path d="M12 5v14" />
        <path d="M6 13l6 6 6-6" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    );
  }

  return null;
}
