/* eslint-disable no-sparse-arrays */
import React from 'react';
import Responsive from './Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';

const StyledPageTitle = styled.h1`
  ${mq({
    fontSize: ['26px', '32px', , '40px', , '50px', ,],
  })}
  margin-bottom: 10px;
  text-align: center;
`;

const PageTitle = (props) => {
  const { text, key } = props;
  return (
    <StyledPageTitle className="title" key={key}>
      {text}
    </StyledPageTitle>
  );
};

export { PageTitle };
