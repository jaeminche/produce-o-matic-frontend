const sampleUserData = {
  id: '', // to be getnerated on submission success
  type: '',
  currency: '',
  date_submitted: '',
  email: null,
  data: {
    101: [1, 15],
    103: [5, 15],
    201: [1, 5],
    202: [2, 5],
    1300: [1, 5],
  },
};

const items_labor = {
  production: {
    cd: 100,
    items: {
      cd: 101,
      name: 'Producer/Fixer',
    },
  },
};

const types = {
  diy: {},
  documentary: {},
  indi: {},
  tv: {},
  online: { items_labor },
};
