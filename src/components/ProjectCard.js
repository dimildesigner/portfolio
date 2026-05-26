"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.15, duration: 0.8 },
  },
};

export default function ProjectCard({ project, index, onClick }) {
  // Converte o index em formato de duas casas (ex: // 01.)
  const formattedIndex = `// 0${index + 1}.`;

  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark transition-all duration-500 hover:border-primary-light/30 dark:hover:border-accent/30 hover:shadow-2xl hover:shadow-primary-light/5 hover:-translate-y-1.5 flex flex-col justify-between h-full"
    >
      <div>
        {/* Topo do Card: Categoria & Index */}
        <div className="flex justify-between items-center mb-4 select-none">
          <span className="text-[10px] font-mono tracking-widest text-primary-light dark:text-accent uppercase">
            {project.type}
          </span>
          <span className="text-[11px] font-mono text-gray-300 dark:text-gray-600">
            {formattedIndex}
          </span>
        </div>

        {/* Imagem do Projeto com Zoom Lento e Foco Visual */}
        <div 
          onClick={() => onClick(project)}
          className="relative w-full h-56 mb-6 overflow-hidden rounded-xl border border-border-light dark:border-border-dark cursor-pointer group-hover:border-primary-light/25 dark:group-hover:border-accent/25 transition-colors duration-500"
        >
          <Image
            src={project.thumb}
            alt={`Capa do projeto ${project.title}`}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Tint Overlay premium no hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Título Principal Editorial */}
        <h3 
          onClick={() => onClick(project)}
          className="font-bold text-xl sm:text-2xl tracking-tight text-gray-900 dark:text-white mb-3 cursor-pointer group-hover:text-primary-light dark:group-hover:text-accent transition-colors duration-300"
        >
          {project.title}
        </h3>

        {/* Lista de Tecnologias (Tags discretas) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-mono px-2 py-0.5 rounded bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark text-gray-500 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-[9px] font-mono text-gray-400 px-1 py-0.5">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>

      <div>
        {/* Botões Principais de Ação (Demo & Repo) */}
        <div className="flex gap-3 mb-5">
          {project.demo && project.demo !== "#" ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-[10px] font-mono font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Demo ↗
            </a>
          ) : (
            <span className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-border-light dark:border-border-dark text-[10px] font-mono text-gray-450 dark:text-gray-550 select-none cursor-not-allowed">
              Offline
            </span>
          )}

          {project.repo && project.repo !== "#" ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-4 rounded-xl border border-border-light dark:border-border-dark text-gray-700 dark:text-gray-300 text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Repo ↗
            </a>
          ) : (
            <span className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-border-light dark:border-border-dark text-[10px] font-mono text-gray-450 dark:text-gray-550 select-none cursor-not-allowed">
              Privado
            </span>
          )}
        </div>

        {/* Rodapé do Card: Explorar Detalhes */}
        <div className="pt-4 border-t border-border-light dark:border-border-dark text-center select-none">
          <button
            onClick={() => onClick(project)}
            className="inline-flex items-center justify-center gap-1 text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-primary-light dark:hover:text-accent font-bold transition-colors cursor-pointer group/btn"
          >
            Explorar Detalhes
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
