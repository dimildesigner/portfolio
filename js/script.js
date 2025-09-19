// Modal Lógica
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const fechar = document.querySelector(".fechar");

const projetos = document.querySelectorAll(".projeto");

const dadosProjetos = {
    1: { img: "img/galeria/dimildesigner_port_img01g.png", titulo: "Prototipagem", desc: "1. Suzano: Treinamento Anticorrupção - Pocket. Protótipo com 50 telas. Conteúdo informativo, quiz e vídeo; 2. Fundação Renova: Game - Guardiões, uma aventura no Rio Doce. Protótipo com 242 telas. Avatar, podcasts, vídeos, quiz e badges; 3. JBS: Treinamento Relacionamento com Governo e Agentes Públicos. Protótipo com 74 telas. Conteúdo informativo, quiz e vídeo; 4. Grupo Globo: Treinamento Compliance. Protótipo com 90 telas. Conteúdo informativo e quiz." },
    2: { img: "img/galeria/dimildesigner_port_img02g.png", titulo: "Motions e vídeos", desc: "Animações, motions e edições de vídeos variados." },
    3: { img: "img/galeria/dimildesigner_port_img03g.jpg", titulo: "E-mail Marketing", desc: "Vivo Champion: Cursos e certificações tech. Assunto atraente para despertar interesse. Conteúdo relevante sobre cursos de tecnologia. Botão com Chamada para Ação (CTA) para facilitar a inscrição. Consistência da Marca: fontes, cores, fotos e logo para fortalecer o reconhecimento. Logos dos parceiros para contextualizar os cursos e certificações." },
    4: { img: "img/galeria/dimildesigner_port_img04g.jpg", titulo: "Game art", desc: "Fundação Renova: Game - Guardiões, uma aventura no Rio Doce. Ilustração do Projeto de Gamificação da Fundação Renova. Arte vetorial desenvolvida no Adobe Illustrator, baseada nos personagens e no mascote “Piauzim” do Projeto Doce Vivo." },
    5: { img: "img/galeria/dimildesigner_port_img05g.jpg", titulo: "Logotipo e Manual de Identidade Visual", desc: "Associação Paulista de Neurologia - APAN SP. Apresenta a criação do logo e ícone (mapa do estado de SP/neurônio), estrutura, tipografia, padrões de cores, versões cromáticas, preto e negativo." },
    6: { img: "img/galeria/dimildesigner_port_img06g.jpg", titulo: "Banners e Posts", desc: "1. Vivo Explore; 2. Vivo Como Faz? e 3. Vivo Transforma: Banners; 4. APM, 5. APM e SEBRAE; 6. APM e República Literária." },
};

projetos.forEach((el) => {
    el.addEventListener("click", () => {
        const id = el.getAttribute("data-projeto");
        const data = dadosProjetos[id];
        modalImg.src = data.img;
        modalTitulo.textContent = data.titulo;
        modalDescricao.textContent = data.desc;
        modal.style.display = "flex";
    });
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
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
    "Bem-vindo ao meu portfolio!",
    "Veja alguns de meus projetos.",
    "Desenvolvimento Web e Design."
];

let indiceFraseAtual = 0;
let indiceCaractereAtual = 0;
let isDeleting = false;

const velocidadeDigitacao = 120; // ms por caractere
const velocidadeApagar = 30;     // ms por caractere ao apagar
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
    document.body.scrollTop = 0;             // Safari
    document.documentElement.scrollTop = 0;  // Chrome, Firefox, IE, Opera
};