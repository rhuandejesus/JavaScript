function HoraDoDia(){
    let agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();  
    let textohoras = window.document.getElementById('horas');
    let imagem = window.document.getElementById('imagem');
    let fundo = window.document.getElementById('fundo');

    if (hora >= 0 && hora <= 5) {
        textohoras.innerHTML = `agora são ${hora} horas e ${minuto} minutos da madrugada.`
        imagem.src = 'img/Madrugada.jpg'
        fundo.style.backgroundColor = '#000000'
        textohoras.style.color = '#000000'
    } 
    
    else if (hora < 12) {
        textohoras.innerHTML = `agora são ${hora} horas e ${minuto} minutos da manhã.`
        imagem.src = 'img/Manhã.jpg'
        fundo.style.backgroundColor = '#FC9F18'
        textohoras.style.color = '#FC9F18'
    } 
    
    else if (hora < 18) {
        textohoras.innerHTML = `agora são ${hora} horas e ${minuto} minutos da tarde.`
        imagem.src = 'img/Tarde.jpg'
        fundo.style.backgroundColor = '#773302'
        textohoras.style.color = '#773302'
    } 
    
    else {
        textohoras.innerHTML = `agora são ${hora} horas e ${minuto} minutos da noite.`
        imagem.src = 'img/Noite.jpg'
        fundo.style.backgroundColor = '#292C2E'
        textohoras.style.color = '#292C2E'
    }
}