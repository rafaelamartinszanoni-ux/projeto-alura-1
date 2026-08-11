let curtidas = 0;

const botaoCurtir = document.getElementById("curtir");
const contador = document.getElementById("contador");

botaoCurtir.addEventListener("click", function () {

    curtidas++;

        contador.innerHTML = "❤️ " + curtidas + " curtidas";

        }); 


        const curiosidades = [

                "💜 Olivia Rodrigo nasceu em 20 de fevereiro de 2003.",

                    "🎤 Drivers License foi um dos maiores sucessos de sua carreira.",

                        "🎵 Olivia participa da composição de suas próprias músicas.",

                            "🎬 Antes da carreira musical, Olivia também ficou conhecida como atriz.",

                                "💿 Cada álbum representa uma fase diferente de sua carreira."

                                ];

                                const botaoCuriosidade = document.getElementById("curiosidade");

                                const textoCuriosidade = document.getElementById("textoCuriosidade");

                                botaoCuriosidade.addEventListener("click", function () {

                                    let numero = Math.floor(Math.random() * curiosidades.length);

                                        textoCuriosidade.innerHTML = curiosidades[numero];

                                        });
        