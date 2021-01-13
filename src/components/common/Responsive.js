import React from 'react';
import styled from 'styled-components/macro';

const ResponsiveBlock = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 1040px;
  margin: 0 auto;

  /* todo: change it mobile-first */
  @media (max-width: 1200px) {
    /* width: 768px; */
    width: 74%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ResponsiveBlockFull = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  max-width: 2536px;
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

const Responsive = ({ full = false, children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return full ? (
    <ResponsiveBlockFull {...rest}>{children}</ResponsiveBlockFull>
  ) : (
    <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
  );
};

export default Responsive;
