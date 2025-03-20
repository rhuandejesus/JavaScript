importScripts (Math)

function Calcular (){
    let preco = document.getElementById('preco');
    let valor = Number(preco.value);
    let select = document.getElementById('select');
    let valores = select.options [select.selectedIndex];
    let porcetagem = valores.value;
  
    
    let calculogasolina = (valor*porcetagem);  // conta para calcular o valor da gasolina
   
    let calculoetanol = 1/(valor*porcetagem) * 100; // conta para calcular o valor do etanol

   // const totalgasolina = calculogasolina.toFixed(2);
   // const totaletanol = calculoetanol.toFixed(2);
    const calcu = calculogasolina.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const calc = calculoetanol.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   
    

    let resultado = document.getElementById('resultado');
 
    if(document.getElementById('gasolina').checked){
      resultado.innerHTML = `O valor ficará de  ${calcu}`;
    }
 
    else if (document.getElementById('etanol').checked){
        resultado.innerHTML = `O valor ficará de  ${calc}`;
    }
 
    else{
        resultado.innerHTML = "Nenhum valor encontrado";
    }
}
 