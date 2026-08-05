let curtidas = 0;

const botaoCurtir = document.getElementById("curtir");
const contador = document.getElementById("contador");

botaoCurtir.addEventListener("click", function () {

    curtidas++;

        contador.innerHTML = "❤️ " + curtidas + " curtidas";

            if (curtidas === 1) {

                    alert("💜 Obrigada por visitar o OliviaVerse!");

                        }

                        });

                        const curiosidades = [

                        "💜 Olivia Rodrigo nasceu em 20 de fevereiro de 2003.",

                        "🎤 Drivers License ficou semanas no topo das paradas musicais.",

                        "⭐ Olivia escreve muitas das próprias músicas.",

                        "🎬 Antes da música, Olivia também ficou conhecida como atriz.",

                        "💿 Cada álbum representa uma fase diferente da vida dela."

                        ];

                        const botaoCuriosidade = document.getElementById("curiosidade");

                        const texto = document.getElementById("textoCuriosidade");

                        botaoCuriosidade.addEventListener("click", function () {

                            let numero = Math.floor(Math.random() * curiosidades.length);

                                texto.innerHTML = curiosidades[numero];

                                });