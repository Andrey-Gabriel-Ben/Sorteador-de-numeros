function sortear() {
    let QuantidadeASortear = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate  = parseInt(document.getElementById("ate").value);
    let numerosSorteados = obterNumeroAleatorio(de, ate);
    let QuantidadeRestante = QuantidadeASortear;
    if (QuantidadeRestante > 1) {
        QuantidadeRestante--;
    }
};

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}