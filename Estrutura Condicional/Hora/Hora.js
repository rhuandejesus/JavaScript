function HoraDoDia(){
    let agora = new Date()
    let hora =7//agora.getHours()
    let minuto = agora.getMinutes()  
    let textohoras = window.document.getElementById('horas')
    let imagem = window.document.getElementById('imagem')
    let pagina = window.document.getElementById('pagina')

    textohora=0;

    if (hora >= 0 && hora <= 5) {
        textohoras.innerText = `Boa madrugada, agora são ${hora} horas e ${minuto} minutos!`
        imagem.src = 'img/Madrugada.jpg'
        pagina.style.backgroundColor = '#000000'
    } 
    
    else if (hora < 12) {
        textohoras.innerText = `Bom dia, agora são ${hora} horas e ${minuto} minutos.`
        imagem.src = 'img/Manhã.jpg'
        pagina.style.backgroundColor = '#FC9F18'
    } 
    
    else if (hora < 18) {
        textohoras.innerText = `Boa tarde, agora são ${hora} horas e ${minuto} minutos.`
        imagem.src = 'img/Tarde.jpg'
        pagina.style.backgroundColor = '#773302'
    } 
    
    else {
        textohoras.innerText = `Boa noite, agora são ${hora} horas e ${minuto} minutos.`
        imagem.src = 'img/Noite.jpg'
        pagina.style.backgroundColor = '#292C2E'
    }
}