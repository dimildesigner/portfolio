"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Componente Interno do Accordion Item (Inspirado na Ref. 03)
function AccordionItem({ title, index, isOpen, onClick, children }) {
  return (
    <div className="border-b border-border-light dark:border-border-dark py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer group"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500">
            0{index}.
          </span>
          <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-800 dark:text-gray-200 group-hover:text-primary-light/80 dark:group-hover:text-accent/80 transition-colors">
            {title}
          </span>
        </div>
        <span className={`text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-300 transform font-mono text-base ${isOpen ? 'rotate-45 text-primary-light dark:text-accent' : ''}`}>
          +
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 font-sans">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Modal({ project, onClose }) {
  const [openSection, setOpenSection] = useState(1); // Deixa a primeira seção aberta por padrão

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-dark/85 backdrop-blur-md">
        
        {/* Container do Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white dark:bg-card-dark w-full max-w-5xl rounded-3xl border border-border-light dark:border-border-dark shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
        >
          {/* Botão de Fechar */}
          <button 
            onClick={onClose} 
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 hover:text-primary-light dark:hover:text-accent transition-colors cursor-pointer border border-border-light dark:border-border-dark"
            aria-label="Fechar detalhes do projeto"
          >
            <X size={16} />
          </button>

          {/* Coluna Esquerda: Showcase de Imagem/Mídia */}
          <div className="w-full md:w-5/12 bg-gray-50 dark:bg-bg-dark/50 border-r border-border-light dark:border-border-dark relative flex flex-col justify-between min-h-[250px] md:min-h-0 p-6 sm:p-8">
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-border-light dark:border-border-dark bg-black/5 dark:bg-white/5 min-h-[180px] md:min-h-0">
              <Image
                src={project.thumb}
                alt={`Imagem de demonstração do projeto ${project.title}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Links de Acesso Rápido com Visual Premium */}
            <div className="flex gap-4 mt-6">
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  <ExternalLink size={14} />
                  Demo Online
                </a>
              )}

              {project.repo && project.repo !== "#" && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border-light dark:border-border-dark text-gray-700 dark:text-gray-300 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-white/5 active:scale-95 transition-all"
                >
                  <svg
                    className="w-3.5 h-3.5"
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
                  Repositório
                </a>
              )}
            </div>
          </div>

          {/* Coluna Direita: Informações Técnicas e Accordions */}
          <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
            <div className="mb-6">
              {/* Categoria */}
              <span className="text-[10px] font-mono tracking-widest text-primary-light dark:text-accent uppercase">
                {project.type}
              </span>
              
              {/* Título Principal */}
              <h2 className="text-2xl sm:text-3xl font-extrabold dark:text-white mt-1 leading-tight font-sans">
                {project.title}
              </h2>
            </div>

            {/* Sistema de Accordions (Preciosidade dos Detalhes / Ref. 03) */}
            <div className="flex-1 flex flex-col gap-1 mb-8">
              
              {/* Seção 01: O Desafio */}
              <AccordionItem
                title="Desafio & Briefing"
                index={1}
                isOpen={openSection === 1}
                onClick={() => setOpenSection(openSection === 1 ? 0 : 1)}
              >
                <p className="text-gray-600 dark:text-gray-400">
                  {project.problema}
                </p>
              </AccordionItem>

              {/* Seção 02: A Solução */}
              <AccordionItem
                title="Solução & UX/UI"
                index={2}
                isOpen={openSection === 2}
                onClick={() => setOpenSection(openSection === 2 ? 0 : 2)}
              >
                <p className="text-gray-600 dark:text-gray-400">
                  {project.solucao}
                </p>
              </AccordionItem>

              {/* Seção 03: Recursos e Destaques */}
              {project.destaques && project.destaques.length > 0 && (
                <AccordionItem
                  title="Destaques & Interações"
                  index={3}
                  isOpen={openSection === 3}
                  onClick={() => setOpenSection(openSection === 3 ? 0 : 3)}
                >
                  <ul className="space-y-2">
                    {project.destaques.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm">
                        <span className="text-primary-light dark:text-accent font-bold mr-2.5">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              )}

              {/* Seção 04: Stack Utilizada */}
              <AccordionItem
                title="Especificações Técnicas"
                index={4}
                isOpen={openSection === 4}
                onClick={() => setOpenSection(openSection === 4 ? 0 : 4)}
              >
                <div className="flex flex-wrap gap-2 pt-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark rounded text-xs text-primary-light dark:text-accent font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </AccordionItem>

            </div>

            {/* Metadados Internos Técnicos */}
            <div className="border-t border-border-light dark:border-border-dark pt-4 flex justify-between items-center text-[9px] font-mono text-gray-400 uppercase select-none">
              <span>EST. 1999 • EDDIE DESIGNER.DEV</span>
              <span>[ ESC: CTRL+W ]</span>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}