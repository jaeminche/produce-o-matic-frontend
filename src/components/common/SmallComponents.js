/* eslint-disable no-sparse-arrays */
import React from 'react';
// import Responsive from './Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';

const StyledPageTitle = styled.h1`
  display: none;
  ${mq({
    fontSize: ['26px', '32px', , '40px', , '50px', ,],
  })};
  margin-bottom: 0;
  margin-top: ${(props) =>
    props.minusmargin ? '0' : '44px'}; // header's height
  text-align: center;
`;

const PageTitle = (props) => {
  const { text, keyvalue, isMobile } = props;
  // * 기획 변경(2-depth menu 추가)으로 PageTitle은 당분간 없음.
  return true ? (
    <></>
  ) : (
    <StyledPageTitle
      minusmargin={isMobile && text === 'General Knowledge'}
      className="title"
      isMobile={isMobile}
      key={keyvalue}
    >
      {text}
    </StyledPageTitle>
  );
};

export { PageTitle };
