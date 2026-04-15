// src/components/Stack.jsx
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import htmlLogo from "../assets/icons/logo_html5.svg";
import cssLogo from "../assets/icons/logo_css3.svg";
import jsLogo from "../assets/icons/logo_javascript.svg";
import reactLogo from "../assets/icons/logo_react.svg";
import gitLogo from "../assets/icons/logo_git.svg";
import githubLogo from "../assets/icons/logo_github.svg";
import figmaLogo from "../assets/icons/logo_figma.svg";
import viteLogo from "../assets/icons/logo_vite.svg";







const categories = [
  {
    label: "Front-end",
    items: [
      { name: "HTML5", icon: <img src={htmlLogo} alt="HTML5" width="25" /> },
      { name: "CSS3", icon: <img src={cssLogo} alt="CSS3" width="25" /> },
      { name: "JavaScript", icon: <img src={jsLogo} alt="JavaScript" width="25" /> },
      { name: "React.js", icon: <img src={reactLogo} alt="React.js" width="25" /> },
    ],
  },
  {
    label: "Ferramentas",
    items: [
      { name: "Git", icon: <img src={gitLogo} alt="Git" width="25" /> },
      { name: "GitHub", icon: <img src={githubLogo} alt="GitHub" width="25" /> },
      { name: "Figma", icon: <img src={figmaLogo} alt="Figma" width="25" /> },
      { name: "Vite", icon: <img src={viteLogo} alt="Vite" width="25" /> },
    ],
  },
  {
    label: "Conceitos",
    items: [
      { name: "Responsividade", icon: "📱" },
      { name: "UX/UI", icon: "🖌️" },
      { name: "Acessibilidade", icon: "♿" },
      { name: "Performance", icon: "🚀" },
    ],
  },
];

function StackCard({ name, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        padding: "1.1rem 0.875rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        cursor: "default",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span style={{ fontSize: "1.75rem", lineHeight: 1 }} role="img" aria-label={name}>
        {icon}
      </span>
      <span style={{
        fontSize: "0.78rem",
        fontWeight: 600,
        color: "var(--text-strong)",
        textAlign: "center",
        lineHeight: 1.3,
      }}>
        {name}
      </span>
    </motion.div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionTitle
          label="Stack"
          title="Tecnologias e ferramentas"
          description="O que uso para criar interfaces modernas e funcionais."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              <h3 style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}>
                <span style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1px",
                  background: "var(--border)",
                }} />
                {cat.label}
              </h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
                gap: "0.875rem",
              }}>
                {cat.items.map((item, ii) => (
                  <StackCard
                    key={item.name}
                    {...item}
                    delay={ci * 0.1 + ii * 0.06}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
