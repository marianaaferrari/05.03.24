const posicaoSupeiorinicial = 50,
    posicaoEsquerdaInicial = 50,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    imgAvatar = document.getElementById("imgAvatar"),
    styleAvatar = window.getComputedStyle(imgAvatar);

var posicaoSupeior = 50,
    posicaoEsquerda = 50,
    topAvatar,
    leftAvatar;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px",''));
}

function getLeftStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda() {
    console.clear();
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar >= posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel);
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.")
    }
    console.log("Posição do avatar à esquerda: ", imgAvatar.style.left);
}