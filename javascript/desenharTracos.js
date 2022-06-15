function desenharTracos(palavraSorteada, dicaSorteada){
    desenhar.strokeStyle = "darkblue";
    desenhar.lineWidth = 5;
    desenhar.lineCap = "round";
    desenhar.lineJoin = "round";
    desenhar.beginPath();
    let eixo = 450/palavraSorteada.length;
    for (let i = 0; i < palavraSorteada.length; i++) {
        desenhar.moveTo(320+(eixo*i), 350);
        desenhar.lineTo(360+(eixo*i), 350);
    };
    desenhar.stroke();
    desenhar.closePath();

    desenhar.font = "25px Arial";
    desenhar.fillText(dicaSorteada, 450, 50);
    desenhar.stroke();

    desenhar.font = "25px Arial";
    desenhar.fillText("Letras Erradas:", 430, 110);
    desenhar.stroke();
};

