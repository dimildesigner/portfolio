// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes do projeto ${project.title}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "1.5rem",
        cursor: "pointer",
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        display: "flex",
        flexDirection: "column",
        gap: "0.875rem",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 40px rgba(124,58,237,0.15)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <h3 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--text-white)",
          lineHeight: 1.3,
        }}>
          {project.title}
        </h3>

        {/* Ícone de seta */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid var(--border-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text)",
            fontSize: "0.8rem",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >
          ↗
        </span>
      </div>

      {/* Descrição */}
      <p style={{
        fontSize: "0.875rem",
        color: "var(--text)",
        lineHeight: 1.65,
        flexGrow: 1,
      }}>
        {project.description}
      </p>

      {/* Tech badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {project.tech.map((item) => (
          <span
            key={item}
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "var(--purple-light)",
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.2)",
              padding: "0.2rem 0.6rem",
              borderRadius: "2rem",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div style={{
        display: "flex",
        gap: "0.75rem",
        paddingTop: "0.75rem",
        borderTop: "1px solid var(--border)",
        marginTop: "auto",
      }}>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "#fff",
            background: "var(--purple)",
            padding: "0.4rem 0.9rem",
            borderRadius: "var(--radius-sm)",
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
          onClick={(e) => e.stopPropagation()}
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "var(--text-strong)",
            background: "transparent",
            padding: "0.4rem 0.9rem",
            borderRadius: "var(--radius-sm)",
            transition: "color 0.2s, border-color 0.2s",
            border: "1px solid var(--border-soft)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--border)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-strong)"; e.currentTarget.style.borderColor = "var(--border-soft)"; }}
        >
          Ver código
        </a>

        <button
          onClick={onClick}
          style={{
            marginLeft: "auto",
            fontSize: "0.75rem",
            color: "var(--text)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-white)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
        >
          Detalhes
        </button>
      </div>
    </motion.article>
  );
}
