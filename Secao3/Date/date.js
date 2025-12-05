const date = new Date(2019, 3, 20, 15);
const data2 = new Date('2019-04-20 20:20:59');



console.log(date.toString());
console.log(data2.toString());


console.log('Dia', date.getDate());
console.log('mes', date.getMonth());
console.log('ano', date.getFullYear());
console.log('hora', date.getHours());
console.log('minuto', date.getMinutes());
console.log('segundo', date.getSeconds());
console.log('ms', date.getMilliseconds());