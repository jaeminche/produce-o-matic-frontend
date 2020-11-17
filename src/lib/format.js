function formatTime(date, koreatime = false) {
  const offset = 9;
  let hour = koreatime ? date.getUTCHours() + offset : date.getHours();
  let min = koreatime ? date.getUTCMinutes() : date.getMinutes();
  let sec = koreatime ? date.getUTCSeconds() : date.getSeconds();
  let midday = 'AM';
  midday = hour >= 12 ? 'PM' : 'AM'; /* assigning AM/PM */
  hour =
    hour === 0
      ? 12
      : hour > 12
      ? hour - 12
      : hour; /* assigning hour in 12-hour format */
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

export { formatTime, toLowerCase, removeSpaceAndUnderbar };
