// src/components/Button.jsx

const styles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.625rem 1.375rem",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "1px solid transparent",
    textDecoration: "none",
  },
  primary: {
    background: "var(--purple)",
    color: "#fff",
    borderColor: "var(--purple)",
  },
  outline: {
    background: "transparent",
    color: "var(--text-strong)",
    borderColor: "var(--border-soft)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text)",
    borderColor: "transparent",
  },
};

export default function Button({
  children,
  variant = "primary",
  as: Tag = "button",
  href,
  ...props
}) {
  const combined = { ...styles.base, ...styles[variant] };

  if (Tag === "a" || href) {
    return (
      <a href={href} style={combined} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button style={combined} {...props}>
      {children}
    </button>
  );
}
