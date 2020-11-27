import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  overflow-x: hidden;
  z-index: 10001;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition-property: visibility;
  transition-property: visibility;
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  -webkit-transition-delay: ${(props) => (props.isOpen ? '0' : '0.49s')};
  transition-delay: ${(props) => (props.isOpen ? '0' : '0.49s')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

const Container = styled.div`
  max-width: 260px;
  width: 100%;
  background-color: black;
  height: 100%;
  /* padding: 20px; */
  position: absolute;
  z-index: 1001;
  top: 0;
  left: 0;
  box-shadow: ${(props) =>
    props.isOpen ? '16px 0 8px 0 rgba(34, 36, 36, 0.2)' : 'none'};
  ­-webkit-­transition: all 0.5s ease;
  ­-moz-­transition: all 0.5s ease;
  -­o-­transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  -ms-transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  overflow-y: scroll;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  background-color: rgba(34, 36, 36, 0.8);
  z-index: 1000;
  top: 0;
  -webkit-­transition: opacity 0.5s ease;
  ­-moz-­transition: opacity 0.5s ease;
  -­o-­transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style: none;
  margin-top: 60px;
  line-height: 30px;
`;

const Submenu = styled.ul`
  list-style: none;
  padding-left: 25px;
  line-height: 30px;
`;

const CopyRight = styled.span`
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const Hamburgerside = (props) => {
  const { isOpen, handleCloseHamburgerside, activeMenu, menus } = props;

  return (
    <Wrapper isOpen={isOpen}>
      <Background isOpen={isOpen} onClick={() => handleCloseHamburgerside()} />
      <Container isOpen={isOpen}>
        <HeaderRow></HeaderRow>

        <Menu>
          {menus.map((menu, key) => (
            <li onClick={() => handleCloseHamburgerside()}>
              <NavLink
                to={menu.path}
                className={
                  menu.path.includes(activeMenu)
                    ? 'isActive menuitem'
                    : 'menuitem'
                }
                key={key}
              >
                {menu.text}
                <Submenu>
                  {menu.submenus.map((submenu, key) => (
                    <li>
                      <NavLink
                        to={submenu.path}
                        className={
                          submenu.path.includes(activeMenu)
                            ? 'isActive menuitem'
                            : 'menuitem'
                        }
                        key={key}
                      >
                        {submenu.text}
                      </NavLink>
                    </li>
                  ))}
                </Submenu>
              </NavLink>
            </li>
          ))}
        </Menu>
        <CopyRight></CopyRight>
      </Container>
    </Wrapper>
  );
};

export default Hamburgerside;
