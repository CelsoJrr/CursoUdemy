const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');


function criarElemento(elementTag, elementTexto) {
    const tag = document.createElement(elementTag);
    tag.innerText = elementTexto;
    return tag
}

function main() {
    for (i = 0; i < elementos.length; i++) {
        const { tag, texto } = elementos[i];
        div.appendChild(criarElemento(tag, texto));
    }
    container.appendChild(div);
};
main();