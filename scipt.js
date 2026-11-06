// getElementById
// meuElemento = document.getElementById("tit-01");
// meuElemento.textContent = "FUNEC";

// // getElementsByClassName
// meuElemento = document.getElementsByClassName("tit-02");
// meuElemento[0].textContent = "texto alterado";

// // getElementsByTagName
// meuElemento = document.getElementsByTagName("p");
// meuElemento[0].textContent = "Teste";

// querySelector
// meuElemento = document.querySelector(".caixa-01");
// meuElemento.textContent = "texto alterado";
// meuElemento = document.querySelector(".caixa-02");
// meuElemento.textContent = "texto alterado";
// meuElemento = document.querySelector(".caixa-03");
// meuElemento.textContent = "texto alterado";

//querySelector
// meuElemento = document.querySelector("#tit-02");
// meuElemento.textContent = "DOM";

// querySelectorAll
// meuElemento = document.querySelectorAll("p");
// meuElemento[3].textContent = "Leo";
// meuElemento[5].textContent = "Fulano";

// innerHTML
// meuElemento = document.querySelector("#p5");
// meuElemento.innerHTML = "<strong>Texto em negrito!</strong>";

// addEventListener
// meuElemento = document.querySelector(".caixa2");
// meuElemento.addEventListener("dblclick", function() {
//     meuElemento.style.backgroundColor = "red";
//     meuElemento.textContent = "Fulano";
// });

// classList.toggle(class)
meuElemento = document.querySelector(".caixa3");
meuElemento.addEventListener("click", function (){
    meuElemento.classList.toggle("estilo");
});


// // // createElement + //appendChild
meuElemento = document.querySelector(".caixa1");
meuElemento.addEventListener("click", function() {
    const novoP = document.createElement("p");
    novoP.textContent = "Novo parágrafo adicionado!";
    meuElemento.appendChild(novoP);
});