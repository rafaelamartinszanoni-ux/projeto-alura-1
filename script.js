let curtidas = Number(localStorage.getItem("curtidas")) || 0;
let jaCurtiu = localStorage.getItem("jaCurtiu") === "true";

const botao = document.getElementById("curtir");
const contador = document.getElementById("contador");

// Mostra a quantidade de curtidas quando a página abre
contador.textContent = "❤️ " + curtidas + " curtidas";

// Se já curtiu, desativa o botão
if (jaCurtiu) {
    botao.disabled = true;
    botao.textContent = "Você já curtiu ❤️";
}

botao.onclick = function() {
    if (!jaCurtiu) {
        curtidas = curtidas + 1;
        jaCurtiu = true;

        // Salva no navegador
        localStorage.setItem("curtidas", curtidas);
        localStorage.setItem("jaCurtiu", "true");

        contador.textContent = "❤️ " + curtidas + " curtidas";

        botao.disabled = true;
        botao.textContent = "Você já curtiu ❤️";
    }
};