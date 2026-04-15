import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24">
      
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Desenvolvedor{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Front-end
            </span>
          </h1>

          {/* STACK */}
          <p className="mt-4 text-sm md:text-base text-purple-400 font-medium tracking-wide">
            HTML • CSS • JavaScript • React.js • UX/UI
          </p>

          {/* DESCRIÇÃO */}
          <p className="mt-6 text-gray-300 max-w-xl">
            Desenvolvo interfaces modernas, responsivas e centradas na experiência do usuário,
            unindo design e código para criar soluções digitais eficientes e intuitivas.
          </p>

          {/* BOTÕES */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            <a
              href="https://github.com/dimildesigner"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
            >
              GitHub →
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-lg transition"
            >
              Ver Projetos ↓
            </a>
          </div>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute inset-0 w-72 h-72 border border-purple-500/20 rounded-full"></div>
          </div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-bounce">
        ↓ scroll
      </div>

    </section>
  );
}