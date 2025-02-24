function calcularIdade() {

    let valor = window.document.getElementById('valor');
    let idade = Number(valor.value);
    let resultado = window.document.getElementById('resultado');

    // Usuário digitará sua idade, se tiver menos de 16 anos: Você não pode votar; Se tiver menos que 18 e mais que 65: voto Facultativo; Se não for essas faixas de idade: Voto Obrigatório

    if (idade < 16) 
    {
        resultado.innerText = 'Você não pode votar'
    }
    else if (idade >= 16 && idade < 18 || idade >= 65) 
    {
        resultado.innerHTML = 'Voto Facultativo'
    }
    else 
    {
        resultado.innerHTML = 'Voto Obrigatório'
    }
}