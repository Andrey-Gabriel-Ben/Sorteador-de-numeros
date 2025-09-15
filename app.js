function sortear() {
    let QuantidadeASortear = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate  = parseInt(document.getElementById("ate").value);
    let numerosSorteados = [];
    let valorsorteado;

    for (let i=0; i < QuantidadeASortear; i++) {
        valorsorteado = obterNumero(de, ate);
        numerosSorteados.push(valorsorteado)
    }

    alert(numerosSorteados);
 }

 function obterNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

