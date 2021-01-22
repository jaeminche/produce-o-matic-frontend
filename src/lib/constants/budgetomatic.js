const disabledDefault = 'set';

// ? generate [1 through num]
const generateQt = (num) => {
  const elem = [
    /*disabledDefault*/
  ];
  for (let i = 1; i <= num; i++) {
    elem.push(i);
  }
  return elem;
};

const OPTIONS = {
  typeOfProduction: ['DO', 'IN', 'TV', 'TC', 'OC', 'DIY'],
  daysOfShooting: generateQt(30),
  currency: ['KRW', 'EUR', 'USD', 'CNY'],
  amnt: generateQt(15),
  days: generateQt(40),
};

const myDataSetsTemplate = {
  labor: [],
  equipments: [],
  cast: [],
  'travel & accommodations': [],
  'communications & delivery': [],
  'location fee': [],
  'insurances & taxes': [],
};

const moveItemBeforeAnotherInArr = (arr, newIndex, oldIndex) => {
  if (oldIndex >= arr.length) {
    let i = oldIndex - arr.length + 1;
    while (i--) {
      arr.push(undefined);
    }
  }
  arr.splice(oldIndex, 0, arr.splice(newIndex, 1)[0]);
  return arr;
};
// returns [22, 11, 33]
// console.log(moveItemInArr([11, 22, 33], 0, 1));

const defaultCurrencyRates = {
  KRW: 1,
  USD: 1100,
  EUR: 1350,
  CNY: 171,
};

export {
  disabledDefault,
  generateQt,
  OPTIONS,
  myDataSetsTemplate,
  moveItemBeforeAnotherInArr,
  defaultCurrencyRates,
};
