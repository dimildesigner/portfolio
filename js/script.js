// Modal Lógica
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const fechar = document.querySelector(".fechar");

const projetos = document.querySelectorAll(".projeto");

const dadosProjetos = {
    1: { img: "img/img_ref01.jpg", titulo: "Site Pizzaria - O Municipal", desc: "Desenvolvimento do website pizzaria O Municipal" },
    2: { img: "img/img_ref02.jpg", titulo: "Landing Page de E-learning", desc: "Desenvolvimento de Landing Page para Treinamento Corporativo" },
    3: { img: "img/img_ref03.jpg", titulo: "Site interativo - Arte Renascentista", desc: "Desenvolvimento do website interativo para Arte Renascentista - Rafael Sanzio" },
    4: { img: "img/img_ref04.jpg", titulo: "APP corrida", desc: "UX/UI - Protótipo para projeto de App de corrida" },
    5: { img: "img/img_ref05.jpg", titulo: "Infográfico Power BI", desc: "Criação de arte para infográfico com dados no Power BI" },
    6: { img: "img/img_ref06.jpg", titulo: "Site interativo - Play List", desc: "Desenvolvimento do website interativo de música" },
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