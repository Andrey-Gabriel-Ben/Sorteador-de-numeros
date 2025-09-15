let numerosSorteados = [];

function sortear() {
    let QuantidadeASortear = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate  = parseInt(document.getElementById("ate").value);
    for (let i=0; i < QuantidadeASortear; i++) {
        obterNumero(de, ate);
    }

    alert(numerosSorteados);
 }

 function obterNumero(min, max) {
    let valorsorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numerosSorteados.includes(valorsorteado)) {
        return obterNumero(min, max);
    } else {
        numerosSorteados.push(valorsorteado)
        return valorsorteado;
    }
   
 }

