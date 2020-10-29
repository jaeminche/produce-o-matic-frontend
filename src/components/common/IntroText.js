import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import ReactHtmlParser from 'react-html-parser';

const IntroTextBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  padding: 0;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 24px;

  .viewmore {
    color: rgba(37, 168, 209, 1);
  }
`;

const IntroText = ({ text }) => {
  console.log('text', text);
  return (
    <IntroTextBlock>
      <Wrapper>
        <>
          {ReactHtmlParser(text)}
          <Link to="/" className="viewmore">
            View More >
          </Link>
        </>
      </Wrapper>
    </IntroTextBlock>
  );
};

export default IntroText;
