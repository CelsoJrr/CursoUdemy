function mudarHTML(msg) {
    const m = document.querySelector('.container h1');
    m.innerHTML = msg;
}
function formatacaoSemana(semana) {
    switch (semana) {
        case 0: return `domingo`;
        case 1: return `segunda-feira`;
        case 2: return `terça-feira`;
        case 3: return `quarta-feira`;
        case 4: return `quinta-feira`;
        case 5: return `sexta-feira`;
        case 6: return `sabado`;
    }
}
function formatacaoMes(mes) {
    meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[mes];
}
function formatarHorario(time) {
    return time >= 10 ? time : `0${time}`
}
function date() {
    const data = new Date();
    semana = formatacaoSemana(data.getDay());
    dia = data.getDay();
    mes = formatacaoMes(data.getMonth());
    ano = data.getFullYear();
    hora = formatarHorario(data.getHours());
    minuto = formatarHorario(data.getMinutes());

    mudarHTML(`${semana}, ${dia} de ${mes} de ${ano} <br> ${hora}:${minuto}`);
    //metodo simples
    const metodonovo = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })
}
date();             