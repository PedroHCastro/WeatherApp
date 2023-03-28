export default () => {
  function timestampToDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const day = days[date.getDay()];
    const hours = '0' + date.getHours();
    const hoursFormated = hours.slice(-2);
    const minutes = '0' + date.getMinutes();
    const minutesFormated = minutes.slice(-2);

    return {day, hours: hoursFormated, minutes: minutesFormated};
  }

  function currentDate() {
    var now = new Date();

    var days = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];

    var months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];

    const hours = '0' + now.getHours();
    const hoursFormated = hours.slice(-2);
    const minutes = '0' + now.getMinutes();
    const minutesFormated = minutes.slice(-2);

    return {day, date, month, hours: hoursFormated, minutes: minutesFormated};
  }

  return {timestampToDate, currentDate};
};
