function capturarNumeros() {
    let quantidade = parseInt(prompt("Insira uma quantidade de dados"));
    
    if (quantidade == isNaN || quantidade <= 0 || quantidade == null) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
        numeros [i] = parseInt(prompt(`Digite o ${i + 1}º número:`));  
    }

    numeros.push(10);
    numeros.sort(function (a, b) {return a - b});

    let totalNumeros = numeros.length;

    document.getElementById("resultado").innerHTML = `
        Números digitados (ordenados): ${numeros.join(", ")} <br>
        Total de números:${totalNumeros}
    `;

    let buscarNumero = parseInt(prompt("Digite um número para verificar se ele está na lista:"));
    let indice = numeros.indexOf(buscarNumero);

    if (indice !== -1) {
        alert(`O número ${buscarNumero} está na posição ${indice} do array.`);
    } else {
        alert(`O número ${buscarNumero} não foi encontrado.`);
    }
}