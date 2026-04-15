import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#111] border border-gray-800 rounded-xl p-6 max-w-lg w-full"
      >
        <h3 className="text-2xl text-white font-bold">{project.title}</h3>

        <p className="text-gray-400 mt-4">{project.details}</p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 mt-6">
          <a href={project.demo} target="_blank" className="text-white">
            Ver projeto
          </a>
          <a href={project.github} target="_blank" className="text-gray-400">
            Código
          </a>
        </div>

        {/* FECHAR */}
        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-500 hover:text-white"
        >
          Fechar
        </button>
      </motion.div>
    </div>
  );
}