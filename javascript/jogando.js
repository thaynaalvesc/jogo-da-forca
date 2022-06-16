let palavras = ["ESCOLA", "AMARELO", "LUA", "CACHORRO", "BANANA", "ESPANHA", "MUSICA"];
let dicas = ["Dica: Lugar", "Dica: Cor", "Dica: Céu", "Dica: Animal", "Dica: Alimento", "Dica: País", "Dica: Arte"];


let desenhar = canvas.getContext("2d");
let erros = 0;
let acertos = 0;
let espaco = 0;
let letrasCertas = [];
let letrasErradas = [];

function sorteiaPalavra(){
    return Math.floor(Math.random() * palavras.length);
}

function chamarJogo(){
    let sorteio = sorteiaPalavra();
    let palavraSorteada = palavras[sorteio];
    let dicaSorteada = dicas[sorteio];

    desenharForca();
    desenharTracos(palavraSorteada, dicaSorteada);
    ouvindoTeclas(palavraSorteada);
}


function escreverLetraCorreta(index, palavraSorteada){
    desenhar.font = "bold 25px Arial";
    desenhar.strokeStyle = "darkblue";
    desenhar.lineWidth = 5;
    desenhar.lineCap = "round";
    desenhar.lineJoin = "round";
    let eixo = 450/palavraSorteada.length;
    desenhar.fillText(palavraSorteada[index], 330+(eixo*index), 340);   
    desenhar.stroke();
}

function escreverLetraIncorreta(tecla){
    desenhar.font = "bold 25px Arial";
    desenhar.fillStyle = "darkblue";
    desenhar.fillText(tecla, (430 + espaco), 150);
    espaco = espaco + 30;
}

function ouvindoTeclas(palavraSorteada){
    document.body.addEventListener("keydown", function(event){
        let tecla = event.key.toUpperCase();
        if (event.keyCode >= 65 && event.keyCode <= 90){
            if(palavraSorteada.includes(tecla)){
                if(letrasCertas.includes(tecla) || letrasCertas.length == palavraSorteada.length || letrasErradas.length == 6){
                    return false;
                }else{
                    for (let i = 0; i < palavraSorteada.length; i++) {
                        if(palavraSorteada[i] === tecla){
                            escreverLetraCorreta(i, palavraSorteada);
                            letrasCertas.push(tecla);
                        }
                    }
                }
            }else{
                if(letrasErradas.includes(tecla)|| letrasErradas.length == 6 || letrasCertas.length == palavraSorteada.length){
                    return false;
                }else{
                    escreverLetraIncorreta(tecla);
                    erros += 1;
                    desenharBoneco(erros);
                    letrasErradas.push(tecla);   
                }
            }

        }
       ganhouOuPerdeu(palavraSorteada);
    })
}

function ganhouOuPerdeu(palavraSorteada){
    if(letrasErradas.length == 6){
        desenhar.font = "bolder 20px Arial";
        desenhar.fillStyle = "red";
        desenhar.fillText("OH NÃO, VOCÊ PERDEU!", 410, 200);
        desenhar.fillText("PALAVRA CERTA: " + palavraSorteada, 395, 220);

        document.getElementById("voltar-menu").style.display = "block";
    }

    if(letrasCertas.length == palavraSorteada.length){
        desenhar.font = "bolder 25px Arial";
        desenhar.fillStyle = "red";
        desenhar.fillText("PARABÉNS, VOCÊ GANHOU", 377, 200);

        document.getElementById("voltar-menu").style.display = "block";
    }
}