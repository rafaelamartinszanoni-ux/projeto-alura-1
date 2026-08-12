let curtidas = Number(localStorage.getItem("curtidas")) || 0;
let jaCurtiu = localStorage.getItem("jaCurtiu") === "true";

const botao = document.getElementById("curtir");
const contador = document.getElementById("contador");

contador.textContent = "❤️ " + curtidas + " curtidas";

if (jaCurtiu) {
    botao.disabled = true;
    botao.textContent = "Você já curtiu ❤️";
}

botao.onclick = function() {
    if (!jaCurtiu) {
        curtidas = curtidas + 1;
        jaCurtiu = true;

        localStorage.setItem("curtidas", curtidas);
        localStorage.setItem("jaCurtiu", "true");

        contador.textContent = "❤️ " + curtidas + " curtidas";

        botao.disabled = true;
        botao.textContent = "Você já curtiu ❤️";
    }
}; 