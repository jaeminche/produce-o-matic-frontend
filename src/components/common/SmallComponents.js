/* eslint-disable no-sparse-arrays */
import React from 'react';
import Responsive from './Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';

const StyledPageTitle = styled.h1`
  /* display: none; */
  ${(props) => !props.isMobile && `display: none;`}
  ${mq({
    fontSize: ['26px', '32px', , '40px', , '50px', ,],
  })};
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
`;

const PageTitle = (props) => {
  const { text, key, isMobile } = props;
  return (
    <StyledPageTitle className="title" isMobile={isMobile} key={key}>
      {text}
    </StyledPageTitle>
  );
};

export { PageTitle };
