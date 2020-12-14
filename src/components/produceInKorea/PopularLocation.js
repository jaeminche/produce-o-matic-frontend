import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import { CenteredButton } from '../../components/common/Button';
import palette from '../../lib/styles/palette';

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
  .video_wrapper {
    position: relative;
    padding-bottom: 56.25%;
    /* Aspect Ratio / Padding-Bottom
        1:1 / 100%
        16:9 / 56.25%
        4:3 / 75%
        3:2 / 66.66&
        8:5 / 62.5%
     */
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const PopularLocation = ({ data, history, isMobile }) => {
  const { title, url, text } = data;

  return (
    <PopularLocationBlock>
      <Wrapper isMobile={isMobile}>
        {title && <h1 className="title margin-tb">{title}</h1>}
        {url && (
          <div className="video_wrapper">
            {/* <iframe
              title={title}
              width="100%"
              height="100%"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <iframe
              title={title}
              width="100%"
              height="100%"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {text && <p className="text">{text}</p>}

        <CenteredButton onClick={history.goBack} bigBlue>
          {'< List'}
        </CenteredButton>
      </Wrapper>
    </PopularLocationBlock>
  );
};

export default PopularLocation;
