function criaPessoa(nome,sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        fala(){
            console.log('Olá mundo');
        }
    }
}


const pessoa1 = criaPessoa('L','junior',10);

pessoa1.fala();

