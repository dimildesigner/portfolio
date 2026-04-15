// src/components/ProjectModal.jsx
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  // Fechar com ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Focar no botão de fechar ao abrir
  useEffect(() => {
    if (project) closeRef.current?.focus();
  }, [project]);

  // Travar scroll
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes do projeto: ${project.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              width: "100%",
              maxWidth: "580px",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "1.5rem 1.5rem 0",
              gap: "1rem",
            }}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "var(--text-white)",
                lineHeight: 1.2,
              }}>
                {project.title}
              </h3>

              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Fechar modal"
                style={{
                  flexShrink: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--bg-card-2)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-white)"; e.currentTarget.style.borderColor = "var(--border-soft)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                ✕
              </button>
            </div>

            {/* Conteúdo */}
            <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Problema */}
              <div>
                <h4 style={{ ...labelStyle, color: "var(--cyan)" }}>Problema</h4>
                <p style={textStyle}>{project.problem || project.description}</p>
              </div>

              {/* Solução */}
              {project.solution && (
                <div>
                  <h4 style={{ ...labelStyle, color: "var(--purple-light)" }}>Solução</h4>
                  <p style={textStyle}>{project.solution}</p>
                </div>
              )}

              {/* Destaques técnicos */}
              {project.highlights && (
                <div>
                  <h4 style={{ ...labelStyle, color: "var(--text-strong)" }}>Destaques técnicos</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {project.highlights.map((h) => (
                      <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", ...textStyle }}>
                        <span style={{ color: "var(--purple-light)", marginTop: "0.15rem", flexShrink: 0 }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stack */}
              <div>
                <h4 style={labelStyle}>Stack</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "var(--purple-light)",
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "2rem",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{
                display: "flex",
                gap: "0.875rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border)",
              }}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.55rem 1.2rem",
                    background: "var(--purple)",
                    color: "#fff",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "background 0.2s",
                    border: "1px solid var(--purple)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--purple-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--purple)")}
                >
                  Ver projeto ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.55rem 1.2rem",
                    background: "transparent",
                    color: "var(--text-strong)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "color 0.2s, border-color 0.2s",
                    border: "1px solid var(--border-soft)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-strong)"; }}
                >
                  Ver código
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const labelStyle = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

const textStyle = {
  fontSize: "0.875rem",
  color: "var(--text)",
  lineHeight: 1.7,
};
