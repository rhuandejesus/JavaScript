let agora = new Date();
let agoraminutos = new Date();
let agorasegundos= new Date();
let hora = agora.getHours();
let minutos = agoraminutos.getMinutes();
let segundos = agorasegundos.getSeconds();
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

HoraDiv.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos . <p>${resultado}</p>`;