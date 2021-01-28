import moment from 'moment';

function formatTime({ date, koreatime }) {
  const offset = 9;
  let hour = koreatime ? date.getUTCHours() + offset : date.getHours();
  let min = koreatime ? date.getUTCMinutes() : date.getMinutes();
  let sec = koreatime ? date.getUTCSeconds() : date.getSeconds();
  let midday = 'AM';
  // console.log('시간', koreatime, where, hour, midday);
  console.log('====hour전', koreatime, hour);
  midday = hour >= 12 && hour < 24 ? 'PM' : 'AM';
  hour = hour === 0 ? 12 : hour > 24 ? hour - 24 : hour > 12 ? hour - 12 : hour;
  console.log('====hour후', koreatime, hour);

  hour = addZero(hour);
  min = addZero(min);
  sec = addZero(sec);

  return (
    hour + ':' + min + ':' + sec + ' ' + midday
  ); /* adding time to the div */
}

function addZero(k) {
  /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return '0' + k;
  } else {
    return k;
  }
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function removeSpaceAndUnderbar(str) {
  const regex = /[_ ]/gi;
  return str.replace(regex, '');
}

const formatCurrency = ({
  num,
  currency = 'KRW',
  currencyRate = 1,
  incentiveRate = 1,
}) => {
  console.log('==399', currency, currencyRate);
  const formatter = !currency
    ? new Intl.NumberFormat()
    : new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency,
      });
  const result = formatter.format((num / currencyRate) * incentiveRate);
  return currency !== 'KRW' ? result.substring(0, result.length - 3) : result;
};

const formatBudgetResults = ({ data }) =>
  data.map((item) => {
    const dateFormat = 'YYYY-MM-DD HH:mm:ss';
    const { createdAt } = item;
    const date = moment.utc(createdAt).format(dateFormat);
    const stillUtc = moment.utc(date).toDate();
    const local = moment(stillUtc).local().format(dateFormat);
    return {
      ...item,
      createdAt_local: local,
      createdAt_utc: date,
    };
  });

// const formatBudgetResults = ({ data }) =>
//   data.map((item) => {
//     return {
//       ...item,
//       createdAt:
//         item.createdAt +
//         formatTime({
//           displayDate: true,
//           date: new Date(item.createdAt),
//           koreatime: true,
//         }),
//     };
//   });

export {
  formatTime,
  toLowerCase,
  removeSpaceAndUnderbar,
  formatCurrency,
  formatBudgetResults,
};
