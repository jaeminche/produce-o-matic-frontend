import React from 'react';
import Responsive from './Responsive';
import { mq } from '../../lib/util/device';

import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';

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
  img {
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
  .margin-tb {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .flex-container {
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    justify-content: space-between;
    ${(props) => !props.isMobile && `margin: -20px;`}// space between
  }
  .flex-item {
    width: ${(props) => (props.isMobile ? '100%' : '50%')};
    ${(props) => !props.isMobile && `margin: 20px;`}// space between
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
`;

const FlexContainer = (props) => {
  const { items } = props;
  console.log('ittt', items);
  return (
    <ul className="flex-container">
      {items.map((item, key) => (
        <li key={key} className="flex-item">
          {item.type === 'image' ? (
            <img src={item.path} alt={item.desc} />
          ) : (
            <p>{item.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

const DrawRowComponent = (item) => {
  const { type, path, text, desc, items } = item;
  const ui = {
    title: <h1 className="title">{text}</h1>,
    image: <img src={path} className="title-image margin-tb" alt={desc} />,
    flexContainer: <FlexContainer items={items} />,
    text: <p className="text">{text}</p>,
  };

  return ui[type];
};

const Contents = ({ uiData, isMobile }) => {
  const { rows } = uiData.uiType === 'default' && uiData;

  return (
    <ContentsBlock>
      <Wrapper isMobile={isMobile}>
        {rows.map((row, key) => DrawRowComponent(row))}
      </Wrapper>
    </ContentsBlock>
  );
};

export default Contents;
