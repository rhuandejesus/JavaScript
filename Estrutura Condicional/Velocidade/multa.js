function calcularVelocidade() {

    let valor = window.document.getElementById('valor')
    let resultado = window.document.getElementById('resultado')
    let velocidade = Number(valor.value)

    if (velocidade <= 20) 
    {
        resultado.innerText = 'Sua velocidade está dentro da permitida.'
    } 
    else if (velocidade > 30 && velocidade < 100) 
    {
        resultado.innerHTML = 'Velocidade acima da permitida, será multado.'
    } 
    else 
    {
        resultado.innerHTML = 'Sua velocidade está muito acima da permitida, você será multado e terá o veículo apreendido.' 
    }
}