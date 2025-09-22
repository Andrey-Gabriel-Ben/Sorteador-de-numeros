let numerosSorteados = [];

function sortear() {
    let QuantidadeASortear = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate  = parseInt(document.getElementById("ate").value);
    for (let i=0; i < QuantidadeASortear; i++) {
        obterNumero(de, ate);
    };
    exibirResultado(numerosSorteados);
    alterarStatusBotão();
 }

 function obterNumero(min, max) {
    let valorsorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numerosSorteados.includes(valorsorteado)) {
        return obterNumero(min, max);
    } else {
        numerosSorteados.push(valorsorteado);
        return valorsorteado;
    };
   
 }

 function exibirResultado(numerosGerados) {
    let listaDeNumeros = numerosGerados.join(", ");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaDeNumeros}.</label>`;
 };

 function alterarStatusBotão() {
    let botão = document.getElementById("btn-reiniciar");
    if (botão.classList.contains("container__botao-desabilitado")) {
        botão.classList.remove("container__botao-desabilitado");
        botão.classList.add("container__botao");
    } else {
        botão.classList.remove("container__botao");
        botão.classList.add("container__botao-desabilitado");
    };
 };

 function reiniciar() {
    let mensagen = document.getElementById("resultado");
    mensagen.innerHTML = `<label class="texto__paragrafo">Nenhum número sorteado ainda.</label>`;
    limparCampo("quantidade");
    limparCampo("de");
    limparCampo("ate");
    numerosSorteados = []
    alterarStatusBotão();
 }

 function limparCampo(id) {
    let campo = document.getElementById(id);
    campo.value = "";
 }
 