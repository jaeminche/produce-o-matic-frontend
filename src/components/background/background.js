import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useMediaQuery } from 'react-responsive';
import { closeHamburgerside } from '../../modules/main';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(34, 36, 36, 0.8);
  z-index: 10;
  top: 0;
  right: 0;
  -webkit-­transition: opacity 0.5s ease;
  ­-moz-­transition: opacity 0.5s ease;
  -­o-­transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  overflow: hidden;

  -webkit-transition-property: visibility;
  transition-property: visibility;
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  -webkit-transition-delay: ${(props) => (props.isOpen ? '0' : '0.49s')};
  transition-delay: ${(props) => (props.isOpen ? '0' : '0.49s')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  cursor: ${(props) => (props.isMobile ? 'pointer' : 'auto')};
`;

const Background = () => {
  const isOpen = useSelector((state) => state.main.isBackgroundBlur, false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  return (
    <Wrapper
      isOpen={isOpen}
      isMobile={isMobile}
      onClick={() => dispatch(closeHamburgerside())}
    />
  );
};

export default Background;
