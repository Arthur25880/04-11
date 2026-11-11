// SELECIONANDO OS BOTÕES
const botaoPrincipal = document.querySelector(".principal");
const botaoSecundario = document.querySelector(".secundario");

// SELECIONANDO AS 3 CAIXAS
const caixas = document.querySelectorAll(
    ".caixa1, .caixa2, .caixa3"
);

// BOTÃO PRINCIPAL: BORDA AZUL
botaoPrincipal.addEventListener("click", function() {
    caixas.forEach(function(caixa) {
        caixa.style.border = "3px solid blue";
    });
});

// BOTÃO SECUNDÁRIO: REMOVE AS BORDAS
botaoSecundario.addEventListener("click", function() {
    caixas.forEach(function(caixa) {
        caixa.style.border = "none";
    });
});

// CLIQUE INDIVIDUAL NAS CAIXAS: BORDA VERDE
caixas.forEach(function(caixa) {
    caixa.addEventListener("click", function() {
        caixa.style.border = "3px solid yellow";
    });
});