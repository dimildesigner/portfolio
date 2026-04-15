import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "dimildesigner@gmail.com"; // 🔥 TROCAR PELO SEU

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Vamos conversar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-400 mb-8"
        >
          Estou disponível para oportunidades como Desenvolvedor Front-end Júnior, projetos freelance ou colaborações.
        </motion.p>

        {/* EMAIL */}
        <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <span className="text-white">{email}</span>

          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
          >
            {copied ? "Copiado!" : "Copiar email"}
          </button>
        </div>

        {/* LINKS */}
        <div className="flex justify-center gap-6 mt-8 text-gray-400">
          
          <a
            href="https://github.com/dimildesigner"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/dimildesigner"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a href="/cv.pdf" download>
            Baixar CV
          </a>
        </div>

      </div>
    </section>
  );
}