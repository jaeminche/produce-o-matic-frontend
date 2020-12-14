import { handleActions } from 'redux-actions';

const OPEN_HAMBURGERSIDE = 'main/OPEN_HAMBURGERSIDE';
const CLOSE_HAMBURGERSIDE = 'main/CLOSE_HAMBURGERSIDE';

export const openHamburgerside = () => ({
  type: OPEN_HAMBURGERSIDE,
});
export const closeHamburgerside = () => ({
  type: CLOSE_HAMBURGERSIDE,
});

const initialState = {
  isHamburgersideOpen: false,
  isBackgroundBlur: false,
};

const main = handleActions(
  {
    [OPEN_HAMBURGERSIDE]: (state) => {
      document.documentElement.classList.add('no-scroll');
      return {
        ...state,
        isHamburgersideOpen: true,
        isBackgroundBlur: true,
      };
    },
    [CLOSE_HAMBURGERSIDE]: (state) => {
      document.documentElement.classList.remove('no-scroll');
      return {
        ...state,
        isHamburgersideOpen: false,
        isBackgroundBlur: false,
      };
    },
  },
  initialState,
);

export default main;
