import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Sobre mim
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 space-y-6 leading-relaxed"
        >
          <p>
            Sou Desenvolvedor Front-end em transição de carreira, com formação em Publicidade e Propaganda e sólida experiência como Designer Gráfico e Motion Designer.
          </p>

          <p>
            Ao longo da minha trajetória, atuei em projetos de comunicação digital, branding e produção audiovisual, desenvolvendo um olhar estratégico para design, usabilidade e experiência do usuário (UX/UI).
          </p>

          <p>
            Foi a partir da atuação com interfaces e prototipação que direcionei minha carreira para o desenvolvimento web, aprofundando meus conhecimentos em HTML, CSS, JavaScript e React.js.
          </p>

          <p>
            Hoje, meu foco é criar interfaces modernas, responsivas e funcionais, unindo estética e código para entregar experiências digitais eficientes.
          </p>

          <p className="text-purple-400 font-medium">
            Estou em busca de uma oportunidade como Desenvolvedor Front-end Júnior, onde eu possa contribuir, evoluir tecnicamente e gerar impacto real em produtos digitais.
          </p>
        </motion.div>

      </div>
    </section>
  );
}