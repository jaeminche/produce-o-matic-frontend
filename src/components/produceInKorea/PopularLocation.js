import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import { CenteredButton } from '../../components/common/Button';
import palette from '../../lib/styles/palette';
import IframedVideo from '../common/IframedVideo';

const PopularLocationBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  text-align: left;
  ${mq({
    paddingTop: ['30px', '40px', , '60px', , '80px', ,],
  })};

  .title {
    ${mq({
      fontSize: ['26px', '32px', , '40px', , '50px', ,],
    })};
    margin-bottom: 10px;
    text-align: center;
  }
  .text {
    color: ${palette.textgray[0]};
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
  }
  .margin-tb {
    /* margin-top: 80px; */
    margin-bottom: 40px;
  }
`;

const PopularLocation = ({ data, history, isMobile }) => {
  const { title, url, text } = data;

  return (
    <PopularLocationBlock>
      <Wrapper isMobile={isMobile}>
        {title && <h1 className="title margin-tb">{title}</h1>}
        {url && <IframedVideo title={title && title} url={url} />}
        {text && <p className="text">{text}</p>}

        <CenteredButton onClick={history.goBack} bigBlue>
          {'Go Back'}
        </CenteredButton>
      </Wrapper>
    </PopularLocationBlock>
  );
};

export default PopularLocation;
