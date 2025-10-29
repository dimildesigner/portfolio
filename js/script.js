// Modal Lógica - Elementos atualizados
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video"); // Novo elemento
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const fechar = document.querySelector(".fechar");

const projetos = document.querySelectorAll(".projeto");

// Alteração na estrutura dos dados:
// 'img' para imagens, 'video' para vídeos.
const dadosProjetos = {
    1: { img: "img/galeria/dimildesigner_port_img01g.png", titulo: "Prototipagem", desc: "1. Suzano: Treinamento Corporativo; 2. Fundação Renova: Game Corporativo; 3. JBS: Corporativo; 4. Grupo Globo: Treinamento Corporativo." },
    2: { video: "video/dimildesigner_port_img02g.mp4", titulo: "Motions e vídeos", desc: "Animações, motions e edições de vídeos variados." }, // Mudança para 'video'
    3: { img: "img/galeria/dimildesigner_port_img03g.jpg", titulo: "E-mail Marketing", desc: "Vivo Champion - Arte para divulgação de cursos e certificações tech. Botão com chamada para ação (CTA), para facilitar a inscrição. Consistência da Marca: fontes, cores, fotos e logo para fortalecer o reconhecimento. Logos dos parceiros dos cursos e certificações." },
    4: { img: "img/galeria/dimildesigner_port_img04g.jpg", titulo: "Game art", desc: "Fundação Renova: Game - Guardiões, uma aventura no Rio Doce. Arte vetorial desenvolvida no Adobe Illustrator." },
    5: { img: "img/galeria/dimildesigner_port_img05g.jpg", titulo: "Logotipo e Manual de Identidade Visual", desc: "Associação Paulista de Neurologia - APAN SP. Apresenta a criação do logo e ícone (mapa do estado de SP/neurônio), estrutura, tipografia, padrões de cores, versões cromáticas, preto e negativo." },
    6: { img: "img/galeria/dimildesigner_port_img06g.jpg", titulo: "Redes Sociais", desc: "Posts diversos: 1. Vivo Explore; 2. Vivo Como Faz?; 3. Vivo Transforma; 4. APM Evento Científico; 5. APM Médico Empreendedor e SEBRAE; 6. APM Cultural - Cine Debate." },
};

function fecharModal() {
    modal.style.display = "none";
    // Pausa o vídeo ao fechar o modal, caso esteja sendo exibido
    modalVideo.pause();
    modalVideo.currentTime = 0; // Opcional: volta o vídeo para o início
}

projetos.forEach((el) => {
    el.addEventListener("click", () => {
        const id = el.getAttribute("data-projeto");
        const data = dadosProjetos[id];
        
        modalTitulo.textContent = data.titulo;
        modalDescricao.textContent = data.desc;

        // Lógica para alternar entre imagem e vídeo
        if (data.video) {
            // É um projeto de vídeo
            modalVideo.src = data.video;
            modalVideo.style.display = "block"; // Mostra o elemento de vídeo
            modalImg.style.display = "none";    // Oculta o elemento de imagem
            modalVideo.play();                  // Inicia a reprodução do vídeo
        } else {
            // É um projeto de imagem
            modalImg.src = data.img;
            modalImg.style.display = "block";   // Mostra o elemento de imagem
            modalVideo.style.display = "none";  // Oculta o elemento de vídeo
            modalVideo.src = "";                // Limpa o src do vídeo (opcional, mas boa prática)
        }

        modal.style.display = "flex";
    });
});

fechar.addEventListener("click", fecharModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

// Animação de surgimento ao rolar — com reset ao subir
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
        } else {
            entrada.target.classList.remove("aparecer");
        }
    });
}, {
    threshold: 0.1 // Detecta quando ao menos 10% do item está visível
});

document.querySelectorAll('.projeto').forEach((el) => {
    observador.observe(el);
});


// Digitação animada
const textoElemento = document.getElementById("digitando");
const cursorElemento = document.querySelector(".cursor");

const frases = [
    "Bem-vindo!",
    "Veja alguns de meus projetos.",
    "Branding",
    "Design Gráfico",
    "Ilustração",    
    "Motion Design",
    "UX/UI Design",
    "Web Design"
];

let indiceFraseAtual = 0;
let indiceCaractereAtual = 0;
let isDeleting = false;

const velocidadeDigitacao = 120; // ms por caractere
const velocidadeApagar = 25;     // ms por caractere ao apagar
const tempoEspera = 1500;        // ms entre digitação e apagamento

function digitarApagar() {
    const fraseAtual = frases[indiceFraseAtual];

    if (isDeleting) {
        textoElemento.textContent = fraseAtual.substring(0, indiceCaractereAtual - 1);
        indiceCaractereAtual--;

        if (indiceCaractereAtual === 0) {
            isDeleting = false;
            indiceFraseAtual = (indiceFraseAtual + 1) % frases.length;
            setTimeout(digitarApagar, velocidadeDigitacao);
        } else {
            setTimeout(digitarApagar, velocidadeApagar);
        }

    } else {
        textoElemento.textContent = fraseAtual.substring(0, indiceCaractereAtual + 1);
        indiceCaractereAtual++;

        if (indiceCaractereAtual === fraseAtual.length) {
            isDeleting = true;
            setTimeout(digitarApagar, tempoEspera);
        } else {
            setTimeout(digitarApagar, velocidadeDigitacao);
        }
    }
}

// Inicia a animação ao carregar a página
window.addEventListener("load", () => {
    digitarApagar();
});

// Scroll: botão "voltar ao topo"
window.onscroll = function () {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Clique no botão para voltar ao topo
document.getElementById("backToTopBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esta linha garante a suavidade
    });
};