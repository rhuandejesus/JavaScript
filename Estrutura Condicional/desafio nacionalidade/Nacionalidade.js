function exibirNacionalidade() {
    let select = document.getElementById('nacionalidade');
    let resultado = document.getElementById('resultado');
    let nacionalidade = select.value;

    if (nacionalidade === "Brasil") {
        resultado.innerHTML = "Brasileiro";
    } else {
        resultado.innerHTML = "Estrangeiro";
    }

    if (nacionalidade === "") {
        resultado.innerHTML = 'Nenhum país encontrado, selecione algum país.';
        return;
    }
}