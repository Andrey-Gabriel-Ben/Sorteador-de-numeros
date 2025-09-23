let numerosSorteados = [];
let botãoSortear = document.getElementById("btn-sortear");

function sortear() {
    if (botãoSortear.classList.contains("container__botao-desabilitado")) {return;};
    let QuantidadeASortear = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate  = parseInt(document.getElementById("ate").value);
    if (ate <= de) {
        alert('O valor posto no campo "Do número" deve ser inferior ao do campo "Até o número". Verifique e tente novamente!');
        reiniciar;
        return;
    };
    if (QuantidadeASortear >= ate - de) {
        alert('Me parece que a quantidade de números disponíveis para serem sorteados é insuficiente para atingir a quantidade de números aleatórios desejada, verifique os campos e tente novamente!');
        reiniciar();
        return;
    };
    for (let i=0; i < QuantidadeASortear; i++) {obterNumero(de, ate)};
    exibirResultado(numerosSorteados);
    alterarStatusBotão("btn-reiniciar");
    alterarStatusBotão("btn-sortear");
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

 function alterarStatusBotão(id) {
    let botão = document.getElementById(id);
    if (botão.classList.contains("container__botao-desabilitado")) {
        botão.classList.remove("container__botao-desabilitado");
        botão.classList.add("container__botao");
    } else {
        botão.classList.remove("container__botao");
        botão.classList.add("container__botao-desabilitado");
    };
 };

 function reiniciar() {
    if (botão.classList.contains("container__botao-desabilitado")) {return;};
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
 