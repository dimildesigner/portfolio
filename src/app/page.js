"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Sobre from "@/components/Sobre";
import Stack from "@/components/Stack";
import ProjectCard from "@/components/ProjectCard";
import Modal from "@/components/Modal";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFacet, setActiveFacet] = useState("creative"); // "creative" | "technical"
  const [tagAtiva, setTagAtiva] = useState("Todos");

  // Definição das tags para filtro de projetos
  const tags = [
    "Todos",
    "Front-end",
    "Back-end",
    "Full-stack",
    "Motion",
    "Design Gráfico",
  ];

  // Lógica de filtragem
  const projetosExibidos =
    tagAtiva === "Todos"
      ? projects
      : projects.filter((p) => p.type === tagAtiva);

  return (
    <main className="min-h-screen bg-bg-light dark:bg-bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      {/* Hero Section - Grid Editorial e Blueprint */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[90vh] blueprint-grid">
        
        {/* Glowing Mesh Gradients (Otimizados e Profundos) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-600/20 dark:bg-purple-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        </div>

        {/* Linha Fina Técnica - Estilo blueprint superior */}
        <div className="absolute top-28 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200/60 to-transparent dark:via-white/5" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Conteúdo Editorial e Tipografia */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Metadados Técnicos de Topo */}
            <div className="flex flex-wrap gap-4 text-[10px] font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase">
              <span>[ LOC: 23°32&apos;S 46°38&apos;W ]</span>
              <span>•</span>
              <span>[ STATUS: DISPONÍVEL ]</span>
              <span>•</span>
              <span>[ ART + CODE ]</span>
            </div>

            {/* Chave de Faceta Interativa (Creative / Technical) */}
            <div className="flex p-1 bg-gray-100 dark:bg-white/5 border border-border-light dark:border-border-dark rounded-full max-w-xs font-mono text-[11px] select-none">
              <button
                onClick={() => setActiveFacet("creative")}
                className={`py-2 px-5 rounded-full cursor-pointer transition-all duration-300 font-semibold tracking-wider ${
                  activeFacet === "creative"
                    ? "bg-primary-light text-white shadow-md shadow-primary-light/20 scale-105"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                }`}
              >
                // CREATIVE.UX
              </button>
              <button
                onClick={() => setActiveFacet("technical")}
                className={`py-2 px-5 rounded-full cursor-pointer transition-all duration-300 font-semibold tracking-wider ${
                  activeFacet === "technical"
                    ? "bg-accent text-gray-900 shadow-md shadow-accent/20 scale-105"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                }`}
              >
                // DEV.FRONTEND
              </button>
            </div>

            {/* Título Editorial Gigante e Fluido */}
            <div className="overflow-hidden w-full">
              <motion.h1
                key={activeFacet}
                initial={{ y: "40%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white"
              >
                {activeFacet === "creative" ? (
                  <>
                    O olhar sensível do{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-mono italic font-normal tracking-wide">
                      Design
                    </span>{" "}
                    traduzido em experiência digital.
                  </>
                ) : (
                  <>
                    O rigor lógico do{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono italic font-normal tracking-wide">
                      Código
                    </span>{" "}
                    estruturado com precisão de pixels.
                  </>
                )}
              </motion.h1>
            </div>

            {/* Descrição em Bloco (Estilo Grid Editorial) */}
            <div className="border-l-2 border-primary-light/50 dark:border-accent/40 pl-4 py-1 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeFacet}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-sans"
                >
                  {activeFacet === "creative"
                    ? "Mais de 25 anos moldando identidades visuais, motion graphics, vídeos de impacto e interfaces lapidadas. A beleza das entrelinhas, a paciência do Bonsai e o cuidado milimétrico aplicados à tecnologia."
                    : "Desenvolvimento front-end focado em React, Next.js, arquitetura de componentes escaláveis, clean code, SEO rigoroso e interfaces performáticas que respiram dinamismo e movimento."}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Chamada para Ação */}
            <div className="flex gap-4 mt-4 items-center">
              <a
                href="#projetos"
                className="px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-6 py-3 border border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 font-bold text-xs uppercase tracking-widest rounded-full transition-all text-gray-600 dark:text-gray-300"
              >
                Falar Comigo
              </a>
            </div>
          </div>

          {/* Coluna Direita: Painel Visual Interativo (Bento Graphic) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeFacet === "creative" ? (
                /* Card Visual: Árvore Bonsai Vector Animate (Símbolo de Cuidado e Detalhes) */
                <motion.div
                  key="bonsai-card"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[340px] aspect-square rounded-2xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark p-8 flex flex-col items-center justify-between shadow-2xl shadow-purple-900/5 relative overflow-hidden"
                >
                  <div className="absolute top-4 left-6 text-[9px] font-mono text-purple-400">
                    // DESIGN.SYSTEM
                  </div>
                  <div className="absolute top-4 right-6 text-[9px] font-mono text-gray-400">
                    MOD: BONSAI
                  </div>

                  {/* SVG Bonsai Minimalista Animado */}
                  <div className="w-full flex-1 flex justify-center items-center relative py-6">
                    <svg
                      viewBox="0 0 200 200"
                      className="w-40 h-40 drop-shadow-[0_8px_24px_rgba(168,85,247,0.15)]"
                    >
                      {/* Tronco Estilizado */}
                      <path
                        d="M 100 160 C 100 130, 85 120, 85 100 C 85 80, 115 70, 105 50"
                        fill="none"
                        stroke="#6B21A8"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="transition-all duration-700"
                      />
                      <path
                        d="M 85 100 C 70 95, 60 80, 50 85"
                        fill="none"
                        stroke="#6B21A8"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 97 75 C 115 72, 125 60, 135 65"
                        fill="none"
                        stroke="#6B21A8"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />

                      {/* Folhagens (Círculos Orgânicos Animados com Pulse) */}
                      <circle cx="105" cy="45" r="16" className="fill-purple-500/80 animate-pulse" />
                      <circle cx="48" cy="85" r="12" className="fill-pink-500/80 animate-pulse delay-500" />
                      <circle cx="138" cy="65" r="14" className="fill-cyan-500/80 animate-pulse delay-1000" />
                      <circle cx="85" cy="98" r="8" className="fill-purple-400/90 animate-pulse delay-300" />

                      {/* Vaso Minimalista do Bonsai */}
                      <rect x="60" y="160" width="80" height="12" rx="4" fill="#1F2937" />
                      <line x1="50" y1="160" x2="150" y2="160" stroke="#E5E7EB" strokeWidth="2" className="dark:stroke-gray-700" />
                    </svg>
                  </div>

                  <div className="text-center">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-800 dark:text-gray-200">
                      Rigor Estético
                    </h4>
                    <p className="text-[10px] text-gray-400 mt-1">
                      Cultivando harmonia visual em cada pixel
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* Card Visual: Interface Blueprint Código (Símbolo de Dev e Performance) */
                <motion.div
                  key="code-card"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[340px] aspect-square rounded-2xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark p-6 flex flex-col justify-between shadow-2xl shadow-cyan-900/5 relative overflow-hidden"
                >
                  <div className="absolute top-4 left-6 text-[9px] font-mono text-cyan-400">
                    // DEV.MODULE
                  </div>
                  <div className="absolute top-4 right-6 text-[9px] font-mono text-gray-400">
                    LANG: TSX / CSS4
                  </div>

                  {/* Bloco de Código Estilizado e Interativo */}
                  <div className="w-full flex-1 flex flex-col justify-center font-mono text-[10px] text-gray-500 gap-2.5 py-6">
                    <div className="text-purple-400 flex items-center gap-1">
                      <span className="text-gray-400">1</span>
                      const Portfolio = () =&gt; &#123;
                    </div>
                    <div className="pl-4 text-cyan-400 flex items-center gap-1">
                      <span className="text-gray-400">2</span>
                      const [details, setDetails] = useArt();
                    </div>
                    <div className="pl-4 text-pink-400 flex items-center gap-1">
                      <span className="text-gray-400">3</span>
                      return &lt;Experience focus=&quot;pixel-perfect&quot;&gt;
                    </div>
                    <div className="pl-8 text-gray-300 dark:text-gray-600 flex items-center gap-1">
                      <span className="text-gray-400">4</span>
                      &lt;Bonsai care=&#123;patience&#125; /&gt;
                    </div>
                    <div className="pl-8 text-gray-300 dark:text-gray-600 flex items-center gap-1">
                      <span className="text-gray-400">5</span>
                      &lt;Code clean=&#123;true&#125; /&gt;
                    </div>
                    <div className="pl-4 text-pink-400 flex items-center gap-1">
                      <span className="text-gray-400">6</span>
                      &lt;/Experience&gt;;
                    </div>
                    <div className="text-purple-400 flex items-center gap-1">
                      <span className="text-gray-400">7</span>
                      &#125;;
                    </div>
                  </div>

                  <div className="border-t border-border-light dark:border-border-dark pt-4 flex justify-between items-center text-[10px] font-mono text-gray-400">
                    <span>PERFORMANCE: 100%</span>
                    <span className="text-accent">● SYSTEM ACTIVE</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      <Sobre />
      <Stack />

      {/* Grid de Projetos com Diagramação Assimétrica */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 py-24">
        
        <h3 className="text-center text-[11px] font-mono tracking-widest text-primary-light dark:text-accent uppercase mb-2">
          // SELECTED WORKS
        </h3>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 dark:text-white text-center font-sans">
          Projetos Criativos
        </h2>

        {/* Filtros de Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl mx-auto">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagAtiva(tag)}
              className={`px-5 py-2 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95 border ${
                tagAtiva === tag
                  ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white shadow-md shadow-gray-900/10 dark:shadow-white/5"
                  : "bg-transparent text-gray-500 border-gray-200/50 dark:border-white/5 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid Editorial Assimétrico de Projetos */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10"
        >
          {projetosExibidos.length > 0 ? (
            projetosExibidos.map((p, index) => {
              // Determina a largura assimétrica baseada no index para criar o grid editorial
              // Exemplo: Projetos alternam largura (1/3, 2/3 ou metade) para ficar com visual de revista.
              // Elemento 0: spans 7 cols. Elemento 1: spans 5 cols. Elemento 2: spans 12 cols (ou 6/6).
              let gridClass = "md:col-span-6"; // padrão: metade da largura
              
              if (tagAtiva === "Todos") {
                if (index === 0) {
                  gridClass = "md:col-span-7"; // maior à esquerda
                } else if (index === 1) {
                  gridClass = "md:col-span-5"; // menor à direita
                } else if (index === 2) {
                  gridClass = "md:col-span-12"; // tela cheia para o terceiro
                }
              }

              return (
                <div key={p.id} className={gridClass}>
                  <ProjectCard
                    project={p}
                    index={index}
                    onClick={setSelectedProject}
                  />
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-12 text-gray-500 py-12 font-mono text-xs">
              Nenhum projeto encontrado nesta categoria.
            </p>
          )}
        </motion.div>
      </section>

      <Contato />
      <Footer />

      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
