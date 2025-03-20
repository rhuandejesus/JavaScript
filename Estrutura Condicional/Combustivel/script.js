importScripts (Math)

function Calcular (){
    let preco = document.getElementById('preco');
    let valor = Number(preco.value);
    let select = document.getElementById('select');
    let valores = select.options [select.selectedIndex];
    let porcetagem = valores.value;
  
    
    let calculogasolina = (valor*porcetagem);  // conta para calcular o valor da gasolina
   
    let calculoetanol = 1/(valor*porcetagem) * 100; // conta para calcular o valor do etanol

    const calcgasolina = calculogasolina.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const calcetanol = calculoetanol.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   
    let resultado = document.getElementById('resultado');
 
    if(document.getElementById('gasolina').checked){
      resultado.innerHTML = `Abasteça com <strong>ETANOL</strong> se seu preço for igual ou menor a: <strong>${calcgasolina}</strong>`;
    }
 
    else if (document.getElementById('etanol').checked){
        resultado.innerHTML = `Abasteça com <strong>GASOLINA</strong> se seu preço for igual ou menor a: <strong>${calcetanol}</strong>`;
    }
 
    else{
        resultado.innerHTML = "Nenhum valor encontrado";
    }
}
 