function meuEscopo(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');
    const pessoas = [];

    function criarObjeto (nome,sobrenome,peso,altura){
        return {
            nome:nome,
            sobrenome:sobrenome,
            peso:peso,
            altura:altura
        }
    }


    function recebeevento(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push(criarObjeto(nome,sobrenome,peso,altura));
        
        result.innerHTML += `<p>${nome}  ${sobrenome}<p/>`

            
        
        console.log(pessoas);
    }


    form.addEventListener('submit', recebeevento);
}
meuEscopo();    
