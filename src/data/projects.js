// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Workflow Manager - Sistema de tarefas diárias | Back-end",
    description:
      "O Workflow Manager é uma aplicação web moderna para organização e gerenciamento de tarefas e fluxos de trabalho.",
    tech: ["Google AI Studio", "Gemini API", "Node.js", "Vercel", "Supabase"],
    github: "https://github.com/dimildesigner/workflow_manager",
    demo: "https://workflow-manager-eight.vercel.app/",
    problem: "Organizar tarefas cotidianas de forma rápida e simples",
    solution:
      "Interface limpa e organizadas em cards para criar tarefas e posicioná-las na exata situação, ou seja, elas em estado inicial, em andamento ou finalizadas.",
    highlights: [
      "Gerenciamento de tarefas — Crie, edite e exclua tarefas com facilidade",
      "Fluxos de trabalho personalizados — Organize tarefas em etapas do seu processo",
      "Visualização em quadro — Interface estilo Kanban para acompanhamento visual",
      "Acompanhamento de progresso — Monitore o status de cada atividade",
      "Powered by Google AI — Recursos inteligentes para auxiliar na gestão",
      "Design responsivo — Funciona em desktop e dispositivos móveis",
    ],
  },
  {
    id: 2,
    title:
      "Petstok - Sistema de Gestão ERP para Petshops | Front-end e Back-end",
    description:
      "O Petstock é um ERP Lite desenvolvido para o mercado pet, com foco em controle de estoque inteligente, catálogo segmentado por espécie e alertas automáticos de reposição e validade.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "Axios"],
    github: "https://github.com/dimildesigner/projeto_petshop_api_frontend",
    demo: "https://projeto-petshop-api-frontend.vercel.app/",
    problem:
      "Servir como ferramenta auxiliar para negócios de Petshop, oferecendo controle de estoque, catálogo segmentado por espécie e alertas automáticos de reposição e validade, tudo isso com uma interface intuitiva e responsiva.",
    solution:
      "Criação de um sistema ERP Lite para Petshops, com funcionalidades que suprem as necessidades específicas do mercado pet. O sistema inclui controle de estoque inteligente, catálogo segmentado por espécie e alertas automáticos de reposição e validade, tudo isso com uma interface intuitiva e responsiva.",
    highlights: [
      "Autenticação",
      "Dashboard",
      "Catálogo de Produtos",
      "Controle de Estoque",
      "Cantinho da Oportunidade (Promoções)",
      "Administração de Usuários",
    ],
  },
  {
    id: 3,
    title:
      "Raffaello Sanzio - A Escola de Atenas - Landing Page Cultural | Front-end",
    description:
      "Este projeto é uma experiência de scroll-driven storytelling inspirada nas grandes exposições digitais de museus e nos especiais interativos do New York Times. O objetivo é apresentar a pintura de Raffaello Sanzio - A Escola de Atenas não apenas como uma obra de arte, mas como uma narrativa viva — filosófica, histórica e surpreendentemente contemporânea.",
    tech: ["HTML5", "CSS3", "JavaScript ES6 (vanilla)"],
    github:
      "https://github.com/dimildesigner/raffaello_sanzio_a_escola_de_atenas",
    demo: "https://raffaello-sanzio-a-escola-de-atenas.vercel.app/",
    problem:
      "A landing page tem objetivo de explorar o tema da arte e cultura em uma apresentação digital interativa e envolvente.",
    solution:
      "Garantir uma experiência de usuário fluida e imersiva, com uma narrativa visual que guia o visitante através da história e dos detalhes da pintura, utilizando técnicas modernas de web design para criar uma apresentação impactante e acessível.",
    highlights: [
      "Navegação e Interface atraente",
      "Cursor personalizado com trail fluido",
      "Barra de progresso global (scroll 0→100%)",
      "Navegação por âncoras com scroll suave entre seções",
      "Animações de entrada via Intersection Observer (fade + translateY)",
    ],
  },
  {
    id: 4,
    title: "Jukebox Experience - iTunes Search API",
    description:
      "Uma experiência musical imersiva em 3D — busque, ouça e sinta a música.",
    tech: ["Three.js", "Vite", "Node.js"],
    github: "https://github.com/dimildesigner/jukebox-experience",
    demo: "https://jukebox-experience.vercel.app/",
    problem:
      "Explorar de forma criativa o consumo de uma API e gerar valor, no caso, entretenimento e buscador de músicas de todos os gêneros e estilos.",
    solution:
      "Uma aplicação web imersiva que combina uma cena 3D interativa com busca e reprodução de músicas em tempo real. O usuário pode girar o jukebox, explorar o cenário psicodélico e descobrir músicas pelo painel lateral — tudo em uma única experiência fluida.",
    highlights: [
      "Cena 3D interativa - mouse e touch controls",
      "Busca de músicaspor artista, álbum ou título via iTunes Search API",
      "Preview de 30 segundos de reprodução",
      "Disco de vinil animado e notas musicais flutuando",
      "Reatividade ao áudio com luzes coloridas, estelas e cenário psicodélico",
      "Responsivo em desktop e mobile (touch e resize dinâmico)",
      "Mini player no rodapé com capa do álbum e artista",
      "Efeito sonoto de scratch, quando o Jukebox é rotacionado",
    ],
  },
];
