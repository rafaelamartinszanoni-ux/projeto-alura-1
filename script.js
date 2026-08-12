let curtidas = 0;

const botao = document.getElementById("curtir");
const contador = document.getElementById("contador");

botao.onclick = function() {
        curtidas = curtidas + 1;
            contador.textContent = "❤️ " + curtidas + " curtidas";
};

function botaoClicado() {
console.log("fui clicado");
let texto = botao.querySelector("span");

if (curtiu === false) {
texto.textContent++;
curtiu = true;
} else {
texto.textContent--;
curtiu = false;
}
}         