// src/components/Navbar.jsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Fechar menu com ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Travar scroll quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--purple), var(--cyan))",
          zIndex: 9999,
          transition: "width 0.1s linear",
          pointerEvents: "none",
        }}
      />

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(11,11,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 1.5rem",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="Ir para o início"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "var(--text-white)",
              letterSpacing: "-0.02em",
            }}
          >
            dimil <span style={{ color: "var(--purple-light)" }}>designer</span>
          </a>

          {/* Nav desktop */}
          <nav aria-label="Navegação principal">
            <ul
              style={{
                display: "flex",
                gap: "2.5rem",
                listStyle: "none",
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--text-white)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão CV desktop */}
          <a
            href="/cv_edimilson_dev2026.pdf"
            download
            className="desktop-nav"
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--text-white)",
              padding: "0.45rem 1.1rem",
              border: "1px solid var(--border-soft)",
              borderRadius: "var(--radius-sm)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--purple-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-soft)")}
          >
            Baixar CV
          </a>

          {/* Botão hamburguer mobile */}
          <button
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text-white)",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text-white)",
              transition: "opacity 0.25s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text-white)",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Menu mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                overflow: "hidden",
                background: "rgba(11,11,15,0.97)",
                backdropFilter: "blur(12px)",
                borderTop: "1px solid var(--border)",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.5rem",
                  gap: "1.25rem",
                }}
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        document.body.style.overflow = "";
                        setTimeout(() => {
                          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }}
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "var(--text-strong)",
                        fontFamily: "var(--font-heading)",
                        display: "block",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/cv_edimilson_dev2026.pdf"
                    download
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.6rem 1.2rem",
                      background: "var(--purple)",
                      color: "#fff",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginTop: "0.5rem",
                    }}
                  >
                    ↓ Baixar CV
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
