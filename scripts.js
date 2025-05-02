let circulo = document.querySelector(".circulo");
let imagemCopo = document.querySelector(".imagem-copo");

function trocarcor(cor, imagem) {
    circulo.style.background = cor;
    imagemCopo.src = imagem;
}