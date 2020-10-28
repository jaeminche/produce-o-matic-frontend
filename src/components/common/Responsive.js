import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 1200px;
  margin: 0 auto;

  /* todo: change it mobile-first */
  @media (max-width: 1200px) {
    /* width: 768px; */
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
