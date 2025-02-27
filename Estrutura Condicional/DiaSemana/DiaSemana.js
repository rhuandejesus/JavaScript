function exibirDiaSemana() {
    
    let select = document.getElementById('dia');
    let resultado = document.getElementById('resultado');
    let dia = Number(select.value);

    switch (dia) {
        case 0:
            resultado.innerHTML = 'Domingo';
            break;
        case 1:
            resultado.innerHTML = 'Segunda-Feira';
            break;
        case 2:
            resultado.innerHTML = 'Terça-Feira';
            break;
        case 3:
            resultado.innerHTML = 'Quarta-Feira';
            break;
        case 4:
            resultado.innerHTML = 'Quinta-Feira';
            break;
        case 5:
            resultado.innerHTML = 'Sexta-Feira';
            break;
        case 6:
            resultado.innerHTML = 'Sábado';
            break;
        default:
            resultado.innerHTML = 'Selecione uma opção!';
            break;
    }

}

