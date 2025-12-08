const pessoa = {
    nome: 'Celso',
    sobrenome: 'Junior',
    idade: 21,
    endereco: {
        //rua: 'Dom Basilio',
        numero: 55
    }
};


// const { nome: n, sobrenome, endereco } = pessoa;
// console.log(n, sobrenome, endereco);

// const { endereco: { rua: r = '1234', numero }, endereco } = pessoa;
// console.log(r, endereco);


const { nome, ...resto } = pessoa;
console.log(nome, resto);

