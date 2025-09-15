function sortear() {
    let QuantidadeASortear = parseInt(document.getElementById("quantidade").value);
    let min = parseInt(document.getElementById("de").value);
    let max = parseInt(document.getElementById("ate").value);
    let QuantidadeRestante = QuantidadeASortear;
    if (QuantidadeRestante > 1) {
        QuantidadeRestante--;
    }
};

