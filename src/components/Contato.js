"use client";
import { Copy, Mail, FileDown } from "lucide-react";

export default function Contato() {
  const copyEmail = () => {
    navigator.clipboard.writeText("dimildesigner@gmail.com");
    alert("E-mail copiado para a área de transferência!");
  };

  return (
    <section
      id="contato"
      className="py-32 px-6 max-w-4xl mx-auto border-t border-border-light dark:border-border-dark"
    >
      <h3 className="text-[11px] font-mono tracking-widest text-primary-light dark:text-accent uppercase mb-2">
        // CONNECT & COLLABORATE
      </h3>
      <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white mb-6 font-sans">
        Vamos construir algo juntos?
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl leading-relaxed text-sm sm:text-base">
        Estou sempre em busca de novos desafios técnicos como desenvolvedor
        Front-end, onde minha experiência artística multidisciplinar e rigor
        visual em design possam gerar conversão e valor para sua equipe.
      </p>

      {/* Contêiner de Contato Responsivo Light/Dark */}
      <div className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-border-light dark:border-border-dark shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 pb-6 border-b border-border-light dark:border-border-dark">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-primary-light dark:text-accent" />
            <span className="text-gray-800 dark:text-gray-200 font-mono font-medium text-sm sm:text-base">
              dimildesigner@gmail.com
            </span>
          </div>
          <button
            onClick={copyEmail}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 text-xs uppercase tracking-widest font-bold transition-all shadow-sm cursor-pointer"
          >
            <Copy size={13} />
            Copiar E-mail
          </button>
        </div>

        {/* Links Sociais e Currículo */}
        <div className="flex flex-wrap gap-4 select-none">
          <a
            href="https://www.linkedin.com/in/dimildesigner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-white/10 p-3.5 rounded-xl text-[10px] uppercase font-mono font-bold tracking-widest text-gray-700 dark:text-gray-300 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/dimildesigner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-white/10 p-3.5 rounded-xl text-[10px] uppercase font-mono font-bold tracking-widest text-gray-700 dark:text-gray-300 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>

          <a
            href="/curriculo_edimilson_teixeira2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-white/10 p-3.5 rounded-xl text-[10px] uppercase font-mono font-bold tracking-widest text-gray-700 dark:text-gray-300 transition-colors"
          >
            <FileDown size={14} />
            Baixar CV
          </a>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-l-2 border-primary-light dark:border-accent pl-4 font-mono">
        // DISPONÍVEL PARA NOVOS DESAFIOS. RETORNO DE MENSAGENS EM ATÉ 24 HORAS.
      </p>
    </section>
  );
}
