import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const IntroTextBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  padding: 0;
`;

const IntroText = ({ text }) => {
  return (
    <IntroTextBlock>
      <Wrapper>{text}</Wrapper>
    </IntroTextBlock>
  );
};

export default IntroText;
