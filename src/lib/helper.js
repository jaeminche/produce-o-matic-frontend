// * generate [1 through num]
const generateQt = (num) => {
  const elem = [];
  for (let i = 1; i <= num; i++) {
    elem.push(i);
  }
  return elem;
};

export { generateQt };
