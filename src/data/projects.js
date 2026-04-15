// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "App de Busca de Usuários",
    description: "Aplicação React que consome a API do GitHub para buscar e exibir perfis de usuários em tempo real.",
    tech: ["React", "GitHub API", "CSS Modules"],
    github: "https://github.com/dimildesigner",
    demo: "#",
    problem:
      "Encontrar informações rápidas de perfis do GitHub sem navegar pela interface da plataforma é trabalhoso para recrutadores e devs.",
    solution:
      "Construí uma interface limpa de busca que consome a API REST do GitHub, exibindo avatar, bio, repositórios e seguidores em cards organizados.",
    highlights: [
      "Consumo de API REST com fetch e tratamento de erros",
      "Debounce na busca para evitar requisições excessivas",
      "Responsividade total com CSS Grid",
      "Estados de loading e empty state",
    ],
  },
  {
    id: 2,
    title: "Dashboard de Tarefas",
    description: "Gerenciador de tarefas com drag-and-drop, filtros por prioridade e persistência local.",
    tech: ["React", "LocalStorage", "Tailwind CSS"],
    github: "https://github.com/dimildesigner",
    demo: "#",
    problem:
      "Apps de produtividade costumam ser complexos demais para uso casual, com curva de aprendizado alta.",
    solution:
      "Criei um dashboard minimalista com kanban simplificado, drag-and-drop nativo e filtros por status, sem dependências externas de gerenciamento.",
    highlights: [
      "Drag and drop implementado com HTML5 API",
      "Persistência via LocalStorage sem biblioteca externa",
      "Filtro e busca em tempo real",
      "UX focada em zero fricção",
    ],
  },
  {
    id: 3,
    title: "Landing Page — Produto SaaS",
    description: "Landing page de alta conversão para produto fictício de SaaS, com animações e CTA otimizado.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/dimildesigner",
    demo: "#",
    problem:
      "Páginas de SaaS genéricas não comunicam valor rapidamente — perdem visitantes nos primeiros 5 segundos.",
    solution:
      "Estruturei a página com hierarquia visual clara: hero com proposta de valor direta, social proof, features e CTA. Animações guiam o olhar sem distrair.",
    highlights: [
      "Animações de entrada com Framer Motion",
      "Scroll animations com Intersection Observer",
      "Lighthouse performance acima de 95",
      "Mobile-first com breakpoints precisos",
    ],
  },
  {
    id: 4,
    title: "Clone UI — Spotify",
    description: "Interface inspirada no Spotify com player funcional, playlists e navegação entre telas.",
    tech: ["React", "Context API", "CSS"],
    github: "https://github.com/dimildesigner",
    demo: "#",
    problem:
      "Reproduzir uma UI complexa como a do Spotify exige domínio de componentização, estado global e layouts avançados.",
    solution:
      "Implementei as telas principais com roteamento, Context API para o player e estado global, simulando o comportamento real da aplicação.",
    highlights: [
      "Context API para estado global do player",
      "React Router para navegação entre telas",
      "Layout CSS Grid + Flexbox combinados",
      "Componentização granular e reutilizável",
    ],
  },
];
