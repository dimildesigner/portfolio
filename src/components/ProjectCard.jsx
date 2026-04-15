import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#111] border border-gray-800 rounded-xl p-6 cursor-pointer hover:border-purple-500 transition"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-2">
        {project.description}
      </p>

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
    </motion.div>
  );
}