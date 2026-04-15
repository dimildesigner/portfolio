// src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const EMAIL = "dimildesigner@gmail.com";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dimildesigner",
    icon: "in",
  },
  {
    label: "GitHub",
    href: "https://github.com/dimildesigner",
    icon: "gh",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback para navegadores sem suporte
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          label="Contato"
          title="Vamos conversar?"
          description="Estou disponível para oportunidades como Desenvolvedor Front-end Júnior, projetos freelance ou colaborações."
        />

        <div style={{ maxWidth: "560px" }}>

          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
              <span style={{ fontSize: "0.7rem", color: "var(--text)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Email
              </span>
              <a
                href={`mailto:${EMAIL}`}
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-white)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-white)")}
              >
                {EMAIL}
              </a>
            </div>

            <button
              onClick={handleCopy}
              aria-label={copied ? "Email copiado!" : "Copiar endereço de email"}
              style={{
                padding: "0.55rem 1.1rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                background: copied ? "rgba(34,211,238,0.1)" : "var(--purple)",
                color: copied ? "var(--cyan)" : "#fff",
                border: copied ? "1px solid rgba(34,211,238,0.3)" : "1px solid var(--purple)",
              }}
            >
              {copied ? "✓ Copiado!" : "Copiar email"}
            </button>
          </motion.div>

          {/* Links sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "flex",
              gap: "0.875rem",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Perfil no ${link.label}`}
                style={{
                  flex: 1,
                  minWidth: "140px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.875rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--text-strong)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
                  e.currentTarget.style.color = "var(--text-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-strong)";
                }}
              >
                <span style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-card-2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "var(--purple-light)",
                  flexShrink: 0,
                }}>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}

            {/* Baixar CV */}
            <a
              href="/cv.pdf"
              download
              aria-label="Baixar currículo em PDF"
              style={{
                flex: 1,
                minWidth: "140px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                padding: "0.875rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--text-strong)",
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                e.currentTarget.style.color = "var(--text-white)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-strong)";
              }}
            >
              <span style={{
                width: "32px",
                height: "32px",
                borderRadius: "var(--radius-sm)",
                background: "var(--bg-card-2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                color: "var(--cyan)",
                flexShrink: 0,
              }}>
                ↓
              </span>
              Baixar CV
            </a>
          </motion.div>

          {/* Frase de fechamento */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              marginTop: "2rem",
              fontSize: "0.8rem",
              color: "var(--text)",
              lineHeight: 1.6,
              borderLeft: "2px solid var(--purple)",
              paddingLeft: "1rem",
            }}
          >
            Aberto a oportunidades como <strong style={{ color: "var(--text-strong)" }}>Desenvolvedor Front-end Júnior</strong>.
            Respondo em até 24h.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
