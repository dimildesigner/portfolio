// src/components/SectionTitle.jsx
import { motion } from "framer-motion";

export default function SectionTitle({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: "3rem" }}
    >
      {label && (
        <span
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--purple-light)",
            marginBottom: "0.75rem",
          }}
        >
          {label}
        </span>
      )}

      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 800,
          color: "var(--text-white)",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            marginTop: "0.875rem",
            color: "var(--text)",
            maxWidth: "42ch",
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
