// * generate [1 through num]
const generateQt = (num) => {
  const elem = [];
  for (let i = 1; i <= num; i++) {
    elem.push(i);
  }
  return elem;
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

export { generateQt, myDataSetsTemplate };
