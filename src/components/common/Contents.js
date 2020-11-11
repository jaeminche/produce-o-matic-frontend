/* eslint-disable no-sparse-arrays */
import React from 'react';
import Responsive from './Responsive';
import { mq } from '../../lib/util/device';

import styled from 'styled-components/macro';
import ReactHtmlParser from 'react-html-parser';

const ContentsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  text-align: left;
  margin-top: 80px;

  .title {
    ${mq({
      fontSize: ['26px', '32px', , '40px', , '50px', ,],
    })}
    margin-bottom: 10px;
    text-align: center;
  }
  .section-title {
    font-family: Lato;
    ${mq({
      fontSize: ['22px', '28px', , '36px', , '46px', ,],
    })}
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 10px;
  }
  .text {
    color: white;
    font-family: Lato;
    ${mq({
      fontSize: ['16px', '18px', , '24px', , , ,],
    })}
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
    white-space: pre-wrap;
  }
  .textInImage {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: ${(props) => (props.isMobile ? '35%' : '23%')};
    color: white;
    text-align: center;
  }
  .time-backgroundimage {
    ${(props) => props.isMobile && `height: 200px`};
  }
  .time-title {
    ${mq({
      fontSize: ['26px', '30px', , '40px', , , ,],
    })}
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    opacity: 0.6;
  }
  .time-numbers {
    ${mq({
      fontSize: ['30px', '40px', , '70px', , , ,],
    })}
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
  }
  img {
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
  .margin-tb {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .flex-container-responsive {
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    justify-content: space-between;
    ${(props) => !props.isMobile && `margin: -20px;`}// space between
  }
  .flex-item-responsive {
    width: ${(props) => (props.isMobile ? '100%' : '50%')};
    ${(props) => !props.isMobile && `margin: 20px;`}// space between
  }
  .positionRelative {
    position: relative;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: -10px 0;
  }
  .flex-item {
    margin: 10px 0;
    text-align: center;
  }
  /* TODO: 세부 조정 */
  .tab-bar {
    flex-wrap: wrap;
    margin-top: 80px;
    margin-bottom: 80px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: ${(props) => (props.isMobile ? '0 5px' : '0 30px')};
  }
  .tab-bar-item {
    ${(props) => props.isMobile && `width: 32%;`}
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
`;

const FlexContainerResponsive = (props) => {
  const { items, times } = props;
  const customcss = times ? 'time-numbers' : null;
  return (
    <ul className="flex-container-responsive">
      {items.map((item, key) => (
        <li
          key={key}
          className={
            item.type === 'imageWithTextInside'
              ? 'flex-item-responsive positionRelative'
              : 'flex-item-responsive'
          }
        >
          {item.type === 'image' ? (
            <img src={item.path} alt={item.desc} />
          ) : item.type === 'imageWithTextInside' ? (
            <>
              <img
                src={item.path}
                alt={item.desc}
                className={item.customCssForImage}
              />
              {item.text && (
                <p className={`textInImage ${item.customCssForText}`}>
                  {item.text}
                  <br />
                  <span className={customcss}>
                    {times.length > 0 &&
                      (item.text === 'Korea Time' ? times[0] : times[1])}
                  </span>
                </p>
              )}
            </>
          ) : (
            <p>{item.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

const Tabs = (props) => {
  const { tabs } = props;
  return (
    <ul className="flex-container tab-bar">
      {tabs.map((tab, key) => (
        <li key={key} className="flex-item tab-bar-item">
          <a href={tab.path}>{tab.name}</a>
        </li>
      ))}
    </ul>
  );
};

const DrawRowComponent = (row, key, times) => {
  const { type, path, text, desc, items, tabs } = row;
  const ui = {
    title: (
      <h1 className="title" key={key}>
        {text}
      </h1>
    ),
    image: (
      <img src={path} className="title-image margin-tb" alt={desc} key={key} />
    ),
    flexContainerResponsive: (
      <FlexContainerResponsive items={items} key={key} times={times} />
    ),
    text: (
      <p className="text" key={key}>
        {ReactHtmlParser(text)}
      </p>
    ),
    tabs: <Tabs tabs={tabs} key={key} />,
    sectionTitle: (
      <h2 className="section-title" key={key}>
        {text}
      </h2>
    ),
  };

  return ui[type];
};

const Contents = ({ rows, isMobile, tabRows = false, times = false }) => {
  return (
    <ContentsBlock>
      <Wrapper isMobile={isMobile}>
        {rows.map((row, key) => DrawRowComponent(row, key))}
        {tabRows &&
          tabRows.map((row, key) => DrawRowComponent(row, key, times))}
      </Wrapper>
    </ContentsBlock>
  );
};

export default Contents;
