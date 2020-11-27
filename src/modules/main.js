const SIDE_OPEN = 'app/SIDE_OPEN';
const SIDE_CLOSE = 'app/SIDE_CLOSE';

export const sideOpen = () => ({ type: SIDE_OPEN });
export const sideClose = () => ({ type: SIDE_CLOSE });

const initialState = {
  isSideOpen: false,
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_OPEN:
      document.documentElement.classList.add('no-scroll');
      return Object.assign({}, state, {
        isSideOpen: true,
      });
    case SIDE_CLOSE:
      document.documentElement.classList.remove('no-scroll');
      return Object.assign({}, state, {
        isSideOpen: false,
      });
    default:
      return state;
  }
};

export default main;
