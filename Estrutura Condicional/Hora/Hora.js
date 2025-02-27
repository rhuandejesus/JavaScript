var agora = new Date();
var hora = agora.getHours();
let HoraDiv = document.getElementById('informacoes');
let resultado;

if (hora >= 5 && hora < 12) {
    resultado = 'Bom dia!';
} else if (hora >= 12 && hora < 18) {
    resultado = 'Boa tarde!';
} else if (hora >= 18 && hora < 24) {
    resultado = 'Boa noite!';
} else {
    resultado = 'Boa madrugada!';
}

HoraDiv.innerHTML = `Agora são ${hora} horas. <p>${resultado}</p>`;