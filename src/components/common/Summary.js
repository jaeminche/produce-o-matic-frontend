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
    /* ${mq({
      height: ['320px', '360px', , '380px', , '400px', '640px'],
    })} */
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
    ${(props) => !props.isMobile && `margin: -20px;`}// space between
  }
  .flex-item {
    width: ${(props) => (props.isMobile ? '100%' : '44%')};
    ${(props) => !props.isMobile && `margin: 20px;`}// space between
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
  const { title, text, titleImage, flexBoxes } = uiData;

  function isOdd(num) {
    return num % 2;
  }

  return (
    <SummaryBlock>
      <Wrapper isMobile={isMobile}>
        {isMobile && title && <h1 className="title">{title}</h1>}
        {text && <p className="text">{ReactHtmlParser(text)}</p>}
        {/* {title && (
          <img src={titleImage} alt={title} className="title-image margin-tb" />
        )} */}
        {flexBoxes && (
          <div className="text">
            {flexBoxes.map((item, key) => (
              <ul key={key}>
                <li className="flex-container">
                  <img
                    src={item.image}
                    alt={item.desc}
                    className={
                      !isMobile && isOdd(key)
                        ? 'flex-item radius-round reverse-order'
                        : 'flex-item radius-round'
                    }
                  />
                  <p className="flex-item">{ReactHtmlParser(item.text)}</p>
                </li>
              </ul>
            ))}
          </div>
        )}
      </Wrapper>
    </SummaryBlock>
  );
};

export default Summary;
