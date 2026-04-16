// src/components/Footer.jsx
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Assinatura */}
        <span style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "1rem",
          color: "var(--text-white)",
        }}>
          dimil<span style={{ color: "var(--purple-light)" }}> designer</span>
        </span>

        {/* Copyright */}
        <p style={{ fontSize: "0.78rem", color: "var(--text)" }}>
          © {currentYear} dimil designer | Site desenvolvido com React + Framer Motion.
        </p>

        {/* Links */}
        <nav aria-label="Links do rodapé" style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com/dimildesigner" },
            { label: "LinkedIn", href: "https://linkedin.com/in/dimildesigner" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.78rem",
                color: "var(--text)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--text-white)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
