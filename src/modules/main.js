import { handleActions } from 'redux-actions';

const OPEN_HAMBURGERSIDE = 'main/OPEN_HAMBURGERSIDE';
const CLOSE_HAMBURGERSIDE = 'main/CLOSE_HAMBURGERSIDE';
const TOGGLE_ADMINSIDE = 'main/TOGGLE_ADMINSIDE';

export const openHamburgerside = () => ({
  type: OPEN_HAMBURGERSIDE,
});
export const closeHamburgerside = () => ({
  type: CLOSE_HAMBURGERSIDE,
});
export const toggleAdminSide = ({ data }) => ({
  type: TOGGLE_ADMINSIDE,
  data: data,
});
const initialState = {
  isHamburgersideOpen: false,
  isBackgroundBlur: false,
  sidebarShow: 'responsive',
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
    [TOGGLE_ADMINSIDE]: (state, payload) => {
      return {
        ...state,
        sidebarShow: payload.data,
      };
    },
  },
  initialState,
);

export default main;
