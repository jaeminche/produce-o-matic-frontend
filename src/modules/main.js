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
  isBackgroundBlur: true,
};

const main = handleActions(
  {
    [OPEN_HAMBURGERSIDE]: (state) => {
      document.documentElement.classList.add('no-scroll');
      console.log('스테이트', state);
      return {
        ...state,
        isHamburgersideOpen: true,
        isBackgroundBlur: false,
      };
    },
    [CLOSE_HAMBURGERSIDE]: (state) => {
      document.documentElement.classList.add('no-scroll');
      return {
        ...state,
        isHamburgersideOpen: false,
        isBackgroundBlur: true,
      };
    },
  },
  initialState,
);

export default main;
