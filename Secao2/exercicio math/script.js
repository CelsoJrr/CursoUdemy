const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>raiz${Math.sqrt(numero)}</p>
                    <p>Seu numero é inteiro ${Number.isInteger(numero)}</p>
                    <p>Seu numero é NaN? ${Number.isNaN(numero)}</p>

`;
