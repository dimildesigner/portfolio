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
import tailwindLogo from "../assets/icons/logo_tailwindcss.svg";
import treejsLogo from "../assets/icons/logo_threejs.svg";

const categories = [
  {
    label: "Front-end & Lógica",
    items: [
      { name: "HTML5", icon: <img src={htmlLogo} alt="Logotipo HTML5" width="25" /> },
      { name: "CSS3", icon: <img src={cssLogo} alt="Logotipo CSS3" width="25" /> },
      { name: "JavaScript (ES6+)", icon: <img src={jsLogo} alt="Logotipo JavaScript (ES6+)" width="25" /> },
      { name: "React.js", icon: <img src={reactLogo} alt="Logotipo React.js" width="25" /> },
    ],
  },
  {
    label: "Performance & Estilo",
    items: [
      { name: "Tailwind CSS", icon: <img src={tailwindLogo} alt="Logotipo Tailwind CSS" width="25" /> },
      { name: "Responsividade", icon: "📱" },
      { name: "Acessibilidade", icon: "♿" },
    ],
  },
  {
    label: "Workflow",
    items: [
      { name: "Git", icon: <img src={gitLogo} alt="Logotipo Git" width="25" /> },
      { name: "GitHub", icon: <img src={githubLogo} alt="Logotipo GitHub" width="25" /> },
      { name: "Figma", icon: <img src={figmaLogo} alt="Logotipo Figma" width="25" /> },
      { name: "Vite", icon: <img src={viteLogo} alt="Logotipo Vite" width="25" /> },
    ],
  },

  {
    label: "Diferencial",
    items: [
      { name: "UX/UI Design", icon: "🖌️" },
      { name: "Three.js (Experiências 3D)", icon: <img src={treejsLogo} alt="Logotipo Three.js" width="25" />},
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
