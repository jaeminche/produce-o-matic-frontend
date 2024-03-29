import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';

const SummaryBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  text-align: left;
  padding-top: 80px;

  .title {
    ${mq({
      fontSize: ['26px', '28px', , '40px', , '50px', ,],
    })}
    margin-bottom: 10px;
    text-align: center;
  }
  .text {
    color: ${palette.textgray[0]};
    font-family: Lato;
    ${mq({
      fontSize: ['17px', '17px', , '17px', , '21px', ,],
    })};
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
  }
  img {
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
  .margin-tb {
    margin-top: 80px;
    margin-bottom: 40px;
  }
  .flex-container {
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    justify-content: space-between;
    ${(props) => !props.isMobile && `margin: -20px;`}// space
  }
  .flex-item {
    width: ${(props) => (props.isMobile ? '100%' : '44%')};
    ${(props) =>
      !props.isMobile &&
      `margin: 20px;`} //space

    /* Set image size relative to parent height */
    height: auto;
    position: relative;
    overflow: hidden;
    img {
      ${(props) =>
        !props.isMobile &&
        `
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        width: auto;
        transform: translate(-50%, -50%);
      `}

      border-radius: inherit;
    }
  }
  .radius-round {
    border-radius: 30px;
  }
  ul {
    padding-inline-start: 0;
  }
  .reverse-order {
    order: 2;
  }
`;

const Summary = ({ uiData, isMobile }) => {
  const { /*title, titleImage, */ text, flexBoxes } = uiData;

  function isOdd(num) {
    return num % 2;
  }

  return (
    <SummaryBlock>
      <Wrapper isMobile={isMobile}>
        {/* {isMobile && title && <h1 className="title">{title}</h1>} */}
        {text && <div className="text">{ReactHtmlParser(text)}</div>}
        {/* {title && (
          <img src={titleImage} alt={title} className="title-image margin-tb" />
        )} */}
        {flexBoxes && (
          <div className="text">
            <ul>
              {flexBoxes.map((item, key) => (
                <li key={key} className="flex-container">
                  <div
                    className={
                      !isMobile && isOdd(key)
                        ? 'flex-item radius-round reverse-order'
                        : 'flex-item radius-round'
                    }
                  >
                    <img src={item.image} alt={item.desc} />
                  </div>
                  <div className="flex-item">{ReactHtmlParser(item.text)}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Wrapper>
    </SummaryBlock>
  );
};

export default Summary;
