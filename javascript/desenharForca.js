function desenharForca(){
    desenhar.strokeStyle = "darkblue";
    desenhar.lineWidth = 5;
    desenhar.lineCap = "round";
    desenhar.lineJoin = "round";
    desenhar.beginPath();
    desenhar.moveTo(50, 20);
    desenhar.lineTo(50, 350);
    desenhar.stroke();
    desenhar.beginPath();
    desenhar.moveTo(20, 350);
    desenhar.lineTo(250, 350);
    desenhar.stroke();
    desenhar.beginPath();
    desenhar.moveTo(47.5, 20);
    desenhar.lineTo(180, 20);
    desenhar.stroke();
    desenhar.beginPath();
    desenhar.moveTo(177, 20);
    desenhar.lineTo(177, 70);
    desenhar.stroke();
}

function desenharBoneco(erros){
    switch(erros){
        case 1:
            desenhar.fillStyle = "darkblue";
            desenhar.lineWidth = 5;
            desenhar.beginPath();
            desenhar.arc(177, 92, 20, 0, Math.PI*2);
            desenhar.stroke();
            break;
        case 2:
            desenhar.fillStyle = "darkblue";
            desenhar.lineWidth = 5;
            desenhar.strokeStyle = "darkblue";
            desenhar.beginPath();
            desenhar.moveTo(177, 110);
            desenhar.lineTo(152, 200);
            desenhar.lineTo(202, 200);
            desenhar.fill();
            break;
        case 3:
            desenhar.fillStyle = "darkblue";
            desenhar.lineWidth = 5;
            desenhar.beginPath();
            desenhar.moveTo(170, 150);
            desenhar.lineTo(120, 170);
            desenhar.stroke();
            break;
        case 4:
            desenhar.fillStyle = "darkblue";
            desenhar.lineWidth = 5;
            desenhar.beginPath();
            desenhar.moveTo(180, 150);
            desenhar.lineTo(230, 170);
            desenhar.stroke();
            break;
        case 5:
            desenhar.fillStyle = "darkblue";
            desenhar.lineWidth = 5;
            desenhar.beginPath();
            desenhar.moveTo(165, 200);
            desenhar.lineTo(165, 250);
            desenhar.stroke();
            break;
        case 6:
            desenhar.fillStyle = "darkblue";
            desenhar.lineWidth = 5;
            desenhar.beginPath();
            desenhar.moveTo(190, 200);
            desenhar.lineTo(190, 250);
            desenhar.stroke();
            break;
    }
}