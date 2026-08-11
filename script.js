let curtidas = 0;

const botao = document.getElementById("curtir");
const contador = document.getElementById("contador");

botao.onclick = function() {
        curtidas = curtidas + 1;
            contador.textContent = "❤️ " + curtidas + " curtidas";
};

        