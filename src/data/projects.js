  // Lista de projetos apresentados
export const projects = [
  {
    id: 1,
    title: "Raffaello Sanzio - A Escola de Atenas",
    type: "Front-end",
    thumb: "/dimildesigner-escola_de_atenas_thumb.jpg",
    demo: "https://raffaello-sanzio-a-escola-de-atenas.vercel.app/",
    repo: "https://github.com/dimildesigner/raffaello_sanzio_a_escola_de_atenas",
    problema: "A landing page tem objetivo de explorar o tema da arte e cultura em uma apresentação digital interativa e envolvente.",
    solucao: "Garantir uma experiência de usuário fluida e imersiva, com uma narrativa visual que guia o visitante através da história e dos detalhes da pintura, utilizando técnicas modernas de web design para criar uma apresentação impactante e acessível.",
    destaques: [
      "Navegação e Interface atraente", 
      "Cursor personalizado com trail fluido", 
      "Barra de progresso global (scroll 0→100%)",
      "Navegação por âncoras com scroll suave entre seções", 
      "Animações de entrada via Intersection Observer (fade + translateY)"
    ],
    stack: ["HTML5", "CSS3", "JavaScript ES6 (vanilla)"]
  },

  {
    id: 2,
    title: "Detetive do Descarte - Treinamento Corporativo Gamificado",
    type: "Front-end",
    thumb: "/dimildesigner-detetive-do-descarte_frontend_thumb.jpg",
    demo: "https://detetive-do-descarte.vercel.app/",
    repo: "https://github.com/dimildesigner/detetive-do-descarte",
    problema: "Treinamentos corporativos tradicionais sobre sustentabilidade e compliance costumam ser densos, cansativos e geram baixo engajamento prático, resultando em erros contínuos de descarte no ambiente de trabalho.",
    solucao: "Transformar regras complexas de reciclagem em uma investigação policial interativa. Através de 4 casos criminais baseados em histórias em quadrinhos, o usuário aprende ativamente a triagem correta de resíduos enquanto joga e pontua.",
    destaques: [
      "Destaques: Direção de Arte Autoral: Identidade visual inspirada em pulp art e estética Sin City, com ilustrações exclusivas em alto contraste.", 
      "Mecânicas de Front-end Avançadas: Iluminação de cenários em tempo real com lanterna via HTML5 Canvas e simulação física de cabos elásticos/fitas com curvas SVG e GSAP.", 
      "Design focado em UX: Interface responsiva, desafios dinâmicos com ordenação randômica e trilha sonora imersiva, com controle de áudio intuitivo para o usuário."   
    ],
    stack: ["React.js", "Tailwind CSS", "Vite", "GSAP (GreenSock Animation)", "HTML5 Canvas", "SVG Dinâmico"]
  },

  {
    id: 3,
    title: "Jukebox Experience - iTunes Search API",
    type: "Full-stack",
    thumb: "/dimildesigner-jukebox_experience_thumb.jpg",
    demo: "https://jukebox-experience.vercel.app/",
    repo: "https://github.com/dimildesigner/jukebox-experience",
    problema: "Explorar de forma criativa o consumo de uma API e gerar valor, no caso, entretenimento e buscador de músicas de todos os gêneros e estilos.",
    solucao: "Uma aplicação web imersiva que combina uma cena 3D interativa com busca e reprodução de músicas em tempo real. O usuário pode girar o jukebox, explorar o cenário psicodélico e descobrir músicas pelo painel lateral — tudo em uma única experiência fluida.",
    destaques: [
      "Cena 3D interativa - mouse e touch controls", 
      "Busca de músicaspor artista, álbum ou título via iTunes Search API", 
      "Preview de 30 segundos de reprodução",
      "Disco de vinil animado e notas musicais flutuando", 
      "Reatividade ao áudio com luzes coloridas, estelas e cenário psicodélico", 
      "Responsivo em desktop e mobile (touch e resize dinâmico)",
      "Mini player no rodapé com capa do álbum e artista", 
      "Efeito sonoto de scratch, quando o Jukebox é rotacionado"
    ],
    stack: ["Three.js", "Node.js", "Vite"]
  },
  
  {
    id: 4,
    title: "News Gallery — The Guardian Open Platform API",
    type: "Full-stack",
    thumb: "/dimildesigner_news-gallery_thumb.jpg",
    demo: "news-gallery-kappa.vercel.app",
    repo: "https://github.com/dimildesigner/news-gallery",
    problema: "Consumir notícias online virou uma experiência genérica, acelerada e visualmente cansativa. Faltava um produto que respeitasse o conteúdo jornalístico e oferecesse ao leitor uma experiência que valorizasse seu tempo e atenção.",
    solucao: "Uma galeria editorial de notícias ao vivo, onde o scroll é o elemento narrativo principal. O conteúdo é servido em tempo real pela Guardian API, com fallback inteligente, categorias traduzidas automaticamente por locale e modal editorial para leitura imersiva — tudo em EN, PT-BR e ES.",
    destaques: [
      "Hero cinematográfico com parallax e grain overlay.", 
      "Integração real com Guardian Open Platform API.", 
      "Internacionalização completa em 3 idiomas.",
      "Scroll suave via Lenis + transições GPU-accelerated.", 
      "Deploy em produção na Vercel com CI/CD via GitHub."
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "next-intl", "Guardian Open Platform API", "Vercel"]
  },

  {
    id: 5,
    title: "Revista 3D | Interativa",
    type: "Design Gráfico",
    thumb: "/dimildesigner-revista3d-interativa_desiger-grafico_thumb.jpg",
    demo: "https://revista-3d-interativa.vercel.app/",
    repo: "https://github.com/dimildesigner/revista-3d-interativa/",
    problema: "Este projeto nasceu da necessidade de criar uma forma inovadora de apresentar conteúdos digitais, unindo o design editorial clássico com as tecnologias mais modernas de renderização WebGL.",
    solucao: "O grande desafio técnico superado foi a implementação de uma geometria personalizada que permite a deformação das páginas durante a transição, garantindo que a revista se comporte de forma orgânica e estável em diferentes navegadores.",
    destaques: [
      "Geometria de Lâmina, implementação de páginas com espessura real.", 
      "Curvatura Dinâmica, simula uma dobra do papel baseada na posição da página.", 
      "Navegação Inteligente e controle por cliques (esquerdo avança e direito volta).",
      "Performance Otimizada.", 
      "Interface flutuante com foco em tipografia e contraste.",   
    ],
    stack: ["Three.js", "Node.js", "Vite"]
  },

  {
    id: 6,
    title: "Coletânea de Motion e Animações",
    type: "Motion",
    thumb: "/dimildesigner-motion_thumb.jpg",
    demo: "https://player.cloudinary.com/embed/?cloud_name=dswxda39i&public_id=projetos_motion_larh2u",
    repo: "",
    problema: "O vídeo apresenta uma coletânea de motion design e animações criadas para diversos projetos.",
    solucao: "Foram projetos diversos desde edições de vídeos para redes sociais e e-learning, até animações para campanhas publicitárias.",
    destaques: [
      "Animações Vivo Explorer e Petrobras.", 
      "Vinhetas animadas para o mascote Piausin, da Fundação Renova", 
      "Trechos de edições de vídeos de Educação Corporativa para diversas empresas."   
    ],
    stack: ["After Effects", "Premiere Pro", "Animate", "Illustrator", "Photoshop"]
  },
  
  {
    id: 7,
    title: "Petstok - Sistema de Gestão ERP para Petshops",
    type: "Back-end",
    thumb: "/dimildesigner-petstock_backend_thumb.jpg",
    demo: "https://projeto-petshop-api-frontend.vercel.app/#",
    repo: "https://github.com/dimildesigner/projeto_petshop_api_backend",
    problema: "Servir como ferramenta auxiliar para negócios de Petshop, oferecendo controle de estoque, catálogo segmentado por espécie e alertas automáticos de reposição e validade, tudo isso com uma interface intuitiva e responsiva.",
    solucao: "Criação de um sistema ERP Lite para Petshops, com funcionalidades que suprem as necessidades específicas do mercado pet. O sistema inclui controle de estoque inteligente, catálogo segmentado por espécie e alertas automáticos de reposição e validade, tudo isso com uma interface intuitiva e responsiva.",
    destaques: [
      "Autenticação", 
      "Dashboard", 
      "Catálogo de Produtos",
      "Controle de Estoque", 
      "Cantinho da Oportunidade (Promoções)", 
      "Administração de Usuários",
      "CRUD completo de produtos"
    ],
    stack: ["React.js", "Tailwind CSS", "Vite"]
  },

];