let btnJogar = document.querySelector(".iniciar-jogo");
let btnNovaPalavra = document.querySelector(".nova-palavra");
let btnMenu = document.querySelector(".voltar-menu");
let btnNovoJogo = document.querySelector(".jogar-novamente");
let btnForm = document.querySelector("#enviar-form");
let canvas = document.querySelector("#canvas");

btnJogar.addEventListener("click", () => {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("area-jogo").style.display = "block";

    chamarJogo();
});

btnNovaPalavra.addEventListener ("click", () => {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("formulario").style.display = "block";
});

btnForm.addEventListener("click", () => {
    let palavra = document.querySelector("#palavra").value.toUpperCase();
    let dica = document.querySelector("#dica").value;

    palavras.push(palavra);
    dicas.push(dica);
    
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("area-jogo").style.display = "block";

    chamarJogo();
    console.log(palavras);
    document.getElementById("formulario").style.display = "none";
})

btnMenu.addEventListener("click", () =>{
    location.reload()
})

