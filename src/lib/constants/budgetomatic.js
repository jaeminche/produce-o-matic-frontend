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
  currency: ['KRW', 'EUR', 'USD'],
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

export { disabledDefault, generateQt, OPTIONS, myDataSetsTemplate };
