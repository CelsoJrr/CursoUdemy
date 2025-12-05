function imc() {
    const form = document.querySelector('.form');

    function criarP() {
        const p = document.createElement('p');
        return p;
    }


    function setResult(msg, isValid) {
        const result = document.querySelector('#result');
        result.innerHTML = '';
        const p = criarP();
        p.className = 'p-valid';
        if (isValid == false) {
            p.className = 'p-notvalid';
        }
        p.innerHTML = msg;
        result.appendChild(p);
    }

    function getIMC(peso, altura) {
        return peso / altura ** 2;
    }

    function verificarIMC(imc) {
        const resultados = ['Abaixo do peso', 'Peso Normal'];
        if (imc < 18.5) return resultados[0];

    }


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        if (!peso) {
            setResult("Peso invalido!", false);
            return
        }
        if (!altura) {
            setResult("Altura invalida!", false);
            return
        }
        const imc = getIMC(peso, altura);
        setResult(verificarIMC(imc));
    });
};

imc();