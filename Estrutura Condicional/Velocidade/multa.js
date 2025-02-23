function calcularVelocidade() {

    let speed = window.document.getElementById('speed')
    let resultado = window.document.getElementById('resultado')
    let velocidade = Number(speed.value)

    if (velocidade <= 30) {
        resultado.innerText = 'Sua velocidade está dentro da permitida.'
    } else if (velocidade > 30 && velocidade < 100) {
        resultado.innerText = 'Velocidade acima da permitida, será multado.'
    } else {
        resultado.innerText = 'Sua velocidade está muito acima da permitida, você será multado e terá o veículo apreendido.' 
    }
}