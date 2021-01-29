const getGrandTotal = (categoryTotals) => {
  let sum = 0;
  for (const item of categoryTotals) {
    for (const key in item) {
      sum = sum + item[key];
    }
  }
  return sum;
};

export { getGrandTotal };
