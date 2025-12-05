function imc(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    function calcularIMC(evento){
        evento.preventDefault();
        const peso = document.getElementById('peso').value;
        const altura = document.getElementById('altura').value;
        const calculo = Number(peso)/Number(altura)**2
        let resposta = ''

        if (Number(peso) && Number(altura)) {
            if (calculo < 18.5){
                resposta = "Abaixo do peso"
            }else if (calculo <= 24.9){
                resposta = "Peso Normal"
            }else if (calculo <= 29.9){
                resposta = "Sobrepeso"
            }else if(calculo > 30){
                resposta = "Obesidade"
            }
            result.innerHTML = `${calculo.toFixed(2)} está ${resposta}`
        }else{
            result.innerHTML = 'error'
        }


        
    };
    





    form.addEventListener('submit',calcularIMC);
};

imc();