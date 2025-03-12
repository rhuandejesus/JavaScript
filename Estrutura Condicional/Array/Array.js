function capturarNumeros() {
    let quantidade = parseInt(prompt("Quantos números quer inserir?"));
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
        
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Valor inválido, tente novamente!");
            i--; 
        }
    }

    numeros.push(10);
    numeros.sort((a, b) => a - b);

    let totalNumeros = numeros.length;

    document.getElementById("resultado").innerHTML = `
        <strong>Números digitados (ordenados):</strong> ${numeros.join(", ")} <br>
        <strong>Total de números:</strong> ${totalNumeros}
    `;

    let buscarNumero = parseInt(prompt("Digite um número para verificar se ele está na lista:"));
    let indice = numeros.indexOf(buscarNumero);

    if (indice !== -1) {
        alert(`O número ${buscarNumero} está na posição ${indice} do array.`);
    } else {
        alert(`O número ${buscarNumero} não foi encontrado.`);
    }
}