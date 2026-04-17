// src/components/About.jsx — foto corrigida
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import photo from "../assets/images/eddie_linkedin_duotone_0101.png";

const stats = [
  { value: "React", label: "Stack principal" },
  { value: "10+", label: "Anos em HTML, CSS e JavaScript" },
  { value: "5+", label: "Anos com UX/UI" },
  { value: "100+", label: "Projetos construídos" },
  
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          label="Sobre mim"
          title="Design que escreve código"
          description="Um profissional que entende os dois lados da tela."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "4rem",
          alignItems: "start",
        }} className="about-grid">

          {/* ── Foto / Avatar ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                lineHeight: 0,
              }}
            >
              {/* Linha decorativa lateral roxa */}
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "3px",
                background: "linear-gradient(to bottom, var(--purple), var(--cyan))",
                zIndex: 1,
              }} />

              {/* Foto */}
              <img
                src={photo}
                alt="Foto de dimil designer — Desenvolvedor Front-end"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  borderRadius: "var(--radius)",
                }}
              />

              {/* Chip: disponível */}
              <div style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                background: "rgba(124, 58, 237, 0.82)",
                border: "1px solid rgba(34,211,238,0.3)",
                borderRadius: "2rem",
                padding: "0.35rem 0.75rem",
                fontSize: "0.7rem",
                color: "var(--cyan)",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                zIndex: 2,
                backdropFilter: "blur(4px)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan-glow)", animation: "pulse 2s infinite", flexShrink: 0 }} />
                Disponível
              </div>
            </div>
          </motion.div>

          {/* ── Texto ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", color: "var(--text)", lineHeight: 1.75 }}>
              <p>
                Olá, eu sou o Dimil, um desenvolvedor Front-end em transição de carreira, com formação em
                Publicidade e Propaganda e sólida experiência como Designer Gráfico e Motion Designer.
              </p>

              <p>
                Ao longo da minha trajetória, atuei em projetos de comunicação digital,
                branding e produção audiovisual — desenvolvendo um olhar estratégico para
                design, usabilidade e experiência do usuário (UX/UI).
              </p>

              <p>
                Foi a partir da atuação com interfaces e prototipação que direcionei minha
                carreira para o desenvolvimento web, aprofundando conhecimentos em
                HTML, CSS, JavaScript e React.js.
              </p>

              <p style={{ color: "var(--purple-light)", fontWeight: 500 }}>
                Hoje meu foco é criar interfaces modernas, responsivas e funcionais —
                unindo estética e código para entregar experiências digitais eficientes.
              </p>
            </div>

            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "2.5rem",
            }} className="about-stats">
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "var(--purple-light)" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text)", marginTop: "0.25rem" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  padding: "0.65rem 1.4rem",
                  background: "var(--purple)",
                  color: "#fff",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  transition: "background 0.2s",
                  border: "1px solid var(--purple)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--purple-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--purple)")}
              >
                Entrar em contato
              </a>
              <a
                href="/cv_edimilson_dev2026.pdf"
                download
                style={{
                  padding: "0.65rem 1.4rem",
                  background: "transparent",
                  color: "var(--text-strong)",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  transition: "border-color 0.2s",
                  border: "1px solid var(--border-soft)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--purple-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-soft)")}
              >
                ↓ Baixar CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
