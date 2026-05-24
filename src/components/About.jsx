// src/components/About.jsx — foto corrigida
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import photo from "../assets/images/eddie_linkedin_duotone_0101.png";
import videoEddie from "../assets/videos/filme_duotone_0101.mp4";
import videoMotion from "../assets/videos/projetos_motion.mp4";
import designGrafico from "../assets/images/page-01.jpg";

const stats = [
  {
    value: "+100 Projetos",
    label: "Compromisso contínuo com a entrega e qualidade",
  },
  {
    value: "UX/UI",
    label: "Design centrado no usuário como base para o código",
  },
  { value: "React.js", label: "Foco em componentes escaláveis" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          label="Sobre mim"
          title="A ponte entre o Design e o Código"
          description="Um profissional que entende os dois lados da tela."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
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
                border: "0px solid var(--border)",
                lineHeight: 0,
              }}
            >
              {/* Linha decorativa lateral roxa */}
              {/* <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  background:
                    "linear-gradient(to bottom, var(--purple), var(--cyan))",
                  zIndex: 1,
                }}
              /> */}

              {/* Foto */}
              {/* <img
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
              /> */}

              <a 
                href="https://revista-3d-interativa.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "0",
                  width: "60%",
                }}
              >

              {/* Foto */}
              <img
                src={designGrafico}
                alt="Foto de dimil designer — Desenvolvedor Front-end"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              />
              </a>

              {/* Chip: Motion */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20rem",
                  right: "1rem",
                  background: "rgba(124, 58, 237, 0.93)",
                  border: "1px solid rgba(34, 211, 238, 0.75)",
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
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--cyan-glow)",
                    animation: "pulse 2s infinite",
                    flexShrink: 0,
                  }}
                />
                Design Gráfico
              </div>

              <div
                style={{
                  height: "2.5rem",
                  width: "2.5rem",
                }}
              ></div>

              {/* (Vídeo) */}
              <video
                src={videoMotion}
                autoPlay
                loop
                muted
                playsInline
                loading="lazy"
                alt="Projeto de Motion"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              />

              {/* Chip: Motion */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  background: "rgba(124, 58, 237, 0.93)",
                  border: "1px solid rgba(34, 211, 238, 0.75)",
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
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--cyan-glow)",
                    animation: "pulse 2s infinite",
                    flexShrink: 0,
                  }}
                />
                Motion Design
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                color: "var(--text)",
                lineHeight: 1.75,
              }}
            >
              <p style={{ color: "var(--purple-light)", fontWeight: 500 }}>
                Seja bem-vindo!
                <br />
                Eu sou o Edimilson, também conhecido como dimil. 
              </p>
              <p>
                Sou um desenvolvedor Front-end com uma trajetória sólida em
                design e comunicação visual. Minha abordagem vai além do código:
                aplico anos de experiência em interfaces e branding para
                garantir que cada linha de desenvolvimento web tenha propósito,
                usabilidade e uma estética de valor.
              </p>

              <p>
                Minha carreira foi construída sobre a base do pensamento
                estratégico em design, e hoje, utilizo o desenvolvimento web
                como ferramenta para concretizar essas soluções. Meu trabalho 
                é entregar aplicações que não apenas funcionam, mas
                que elevam a experiência do usuário final.
              </p>

              <p></p>

              <p style={{ color: "var(--purple-light)", fontWeight: 500 }}>
                Junto com minha transição para o desenvolvimento web trouxe a sensibilidade artística e a visão sistêmica para o ambiente do código, resultando em interfaces mais intuitivas, performáticas e alinhadas às necessidades do negócio.
              </p>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                marginTop: "2.5rem",
              }}
              className="about-stats"
            >
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
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-heading)",
                      color: "var(--purple-light)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--purple-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--purple)")
                }
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--purple-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border-soft)")
                }
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
