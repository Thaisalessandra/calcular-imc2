
const calcular = document.getElementById('calcular');

function imc (){
    const resultado = document.getElementById('resultado');
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso= document.getElementById('peso').value;

    if (nome.value !== '' && altura.value !== '' && peso.value !== ''){
        const valorIMC= (peso/altura**2).toFixed(2);
        let classificacao ="";
        if(valorIMC < 18.5){
            classificacao= "Abaixo do peso."
        }
        else if(valorIMC < 25){
            classificacao= 'com peso ideal.'
        }
        else if(valorIMC<30){
            classificacao= 'levemente acima do peso.'

        }
        else if(valorIMC<35){
            classificacao= 'obesidade grau I.'

        }
        else if(valorIMC<=40){
            classificacao= 'obesidade grau II.'

        }
        else {
            classificacao= 'obesidade grau III'

        }        
        resultado.textContent= `${nome}, seu IMC é de ${valorIMC} e você está classificado(a) em  ${classificacao}`;
    }
    else{
        alert("Preencha todos os campos")
    }
}

calcular.addEventListener('click', imc);