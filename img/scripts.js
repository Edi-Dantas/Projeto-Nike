let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let carrinho = document.querySelector(".botao-carrinho")

function mudarVisual(cor, imagem){
       
       tenis.classList.add("troca-efeito")
       carrinho.style.background = cor
       body.style.background = cor
       setTimeout(() => {
              tenis.src = imagem
              tenis.classList.remove("troca-efeito")
              
       }, 500);

}