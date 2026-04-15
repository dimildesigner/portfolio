// src/components/Hero.jsx
import { motion } from "framer-motion";

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  },
};

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fundo — glow ambience */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 60% 50% at 70% 40%, rgba(124,58,237,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 35% at 80% 70%, rgba(34,211,238,0.06) 0%, transparent 65%)
        `,
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }} className="hero-grid">

          {/* ── Lado esquerdo: texto ── */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={stagger.item}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--cyan)",
                marginBottom: "1.25rem",
                opacity: 0.9,
              }}
            >
              <span style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: "var(--cyan)",
                animation: "pulse 2s infinite",
              }} />
              Disponível para oportunidades
            </motion.span>

            <motion.h1
              variants={stagger.item}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "var(--text-white)",
                letterSpacing: "-0.02em",
              }}
            >
              Desenvolvedor{" "}
              <span style={{
                background: "linear-gradient(135deg, var(--purple-light), var(--cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Front-end
              </span>
              <br />com foco em UX
            </motion.h1>

            <motion.p
              variants={stagger.item}
              style={{
                marginTop: "1.25rem",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                color: "var(--purple-light)",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              HTML · CSS · JavaScript · React.js · UX/UI
            </motion.p>

            <motion.p
              variants={stagger.item}
              style={{
                marginTop: "1.25rem",
                color: "var(--text)",
                maxWidth: "44ch",
                lineHeight: 1.7,
                fontSize: "1rem",
              }}
            >
              Crio interfaces modernas, responsivas e centradas no usuário,
              unindo design estratégico e código para entregar experiências
              digitais eficientes.
            </motion.p>

            <motion.div
              variants={stagger.item}
              style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.875rem" }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.7rem 1.5rem",
                  background: "var(--purple)",
                  color: "#fff",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "background 0.2s, transform 0.2s",
                  border: "1px solid var(--purple)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--purple-light)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--purple)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                Ver Projetos ↓
              </a>

              <a
                href="https://github.com/dimildesigner"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.7rem 1.5rem",
                  background: "transparent",
                  color: "var(--text-strong)",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "border-color 0.2s, color 0.2s",
                  border: "1px solid var(--border-soft)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--purple-light)";
                  e.currentTarget.style.color = "var(--text-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-soft)";
                  e.currentTarget.style.color = "var(--text-strong)";
                }}
              >
                GitHub →
              </a>
            </motion.div>
          </motion.div>

          {/* ── Lado direito: visual técnico ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center" }}
            className="hero-visual"
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "380px" }}>

              {/* Glow de fundo */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "280px",
                height: "280px",
                background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Card: Código mockup */}
              <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "1.25rem",
                boxShadow: "var(--shadow-card)",
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.78rem",
                position: "relative",
                zIndex: 1,
              }}>
                {/* Barra de título */}
                <div style={{ display: "flex", gap: "6px", marginBottom: "1rem" }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  <span style={{ marginLeft: "auto", color: "var(--text)", fontSize: "0.7rem" }}>Hero.jsx</span>
                </div>

                {/* Linhas de código */}
                {[
                  { indent: 0, tokens: [{ t: "const ", c: "#7C3AED" }, { t: "Hero", c: "#22D3EE" }, { t: " = () => (", c: "#E5E7EB" }] },
                  { indent: 1, tokens: [{ t: "<section", c: "#7C3AED" }, { t: " id=", c: "#9CA3AF" }, { t: '"hero"', c: "#22D3EE" }, { t: ">", c: "#7C3AED" }] },
                  { indent: 2, tokens: [{ t: "<h1", c: "#7C3AED" }, { t: " className=", c: "#9CA3AF" }, { t: '"title"', c: "#22D3EE" }, { t: ">", c: "#7C3AED" }] },
                  { indent: 3, tokens: [{ t: "Desenvolvedor Front-end", c: "#E5E7EB" }] },
                  { indent: 2, tokens: [{ t: "</h1>", c: "#7C3AED" }] },
                  { indent: 2, tokens: [{ t: "<Button", c: "#7C3AED" }, { t: " variant=", c: "#9CA3AF" }, { t: '"primary"', c: "#22D3EE" }, { t: ">", c: "#7C3AED" }] },
                  { indent: 3, tokens: [{ t: "Ver Projetos", c: "#E5E7EB" }] },
                  { indent: 2, tokens: [{ t: "</Button>", c: "#7C3AED" }] },
                  { indent: 1, tokens: [{ t: "</section>", c: "#7C3AED" }] },
                  { indent: 0, tokens: [{ t: ");", c: "#E5E7EB" }] },
                ].map((line, i) => (
                  <div key={i} style={{ display: "flex", lineHeight: "1.8", userSelect: "none" }}>
                    <span style={{ color: "var(--border)", width: "1.5rem", flexShrink: 0, textAlign: "right", marginRight: "0.75rem" }}>{i + 1}</span>
                    <span style={{ paddingLeft: `${line.indent * 1}rem` }}>
                      {line.tokens.map((tok, j) => (
                        <span key={j} style={{ color: tok.c }}>{tok.t}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chip: stack */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "-1rem",
                  background: "var(--bg-card-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.5rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.78rem",
                  color: "var(--text-strong)",
                  boxShadow: "var(--shadow-card)",
                  zIndex: 2,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22D3EE", flexShrink: 0 }} />
                React · Framer · Tailwind
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text)",
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <span>scroll</span>
        <span>↓</span>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
