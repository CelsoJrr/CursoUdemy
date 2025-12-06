const data = new Date();
const semana = data.getDay();
let semanatexto;

switch (semana) {
    case 0:
        semanatexto = 'domingo';
        break;
    case 1:
        semanatexto = 'segunda';
        break;
    case 6:
        semanatexto = 'sabado';
        break;

}
console.log(semanatexto);
