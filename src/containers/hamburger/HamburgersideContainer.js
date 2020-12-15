import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Hamburgerside from '../../components/hamburger/Hamburgerside';
import { closeHamburgerside } from '../../modules/main';
import { useHistory } from 'react-router-dom';
import { menus } from '../../lib/constants/bars';

const HamburgersideContainer = (props) => {
  const isOpen = useSelector((state) => state.main.isHamburgersideOpen, false);
  const dispatch = useDispatch();
  const { activeMenu, activeSubMenu } = props;
  const history = useHistory();

  const handleCloseHamburgerside = () => {
    dispatch(closeHamburgerside());
  };

  return (
    <Hamburgerside
      isOpen={isOpen}
      handleCloseHamburgerside={handleCloseHamburgerside}
      menus={menus}
      activeMenu={activeMenu}
      activeSubMenu={activeSubMenu}
    />
  );
};

export default HamburgersideContainer;
