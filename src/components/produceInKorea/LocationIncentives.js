import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';

import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';

const LocationIncentivesBlock = styled.div`
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
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
    white-space: pre-wrap;
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
    width: ${(props) => (props.isMobile ? '100%' : '50%')};
    ${(props) => !props.isMobile && `margin: 20px;`}// space between
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
`;

const FlexContainer = (props) => {
  const { data } = props;
  return (
    <ul className="flex-container">
      {data.map((item, key) => (
        <li key={key} className="flex-item">
          {item.type === 'image' ? (
            <img src={item.image} alt={item.desc} />
          ) : (
            <p>{item.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

const LocationIncentives = ({ uiData, isMobile }) => {
  const { title, text, titleImage, flexBox, subImages } = uiData;

  return (
    <LocationIncentivesBlock>
      <Wrapper isMobile={isMobile}>
        {title && <h1 className="title">{title}</h1>}
        {title && (
          <img src={titleImage} alt={title} className="title-image margin-tb" />
        )}
        {text && <p className="text">{text[0]}</p>}
        {flexBox && <FlexContainer data={flexBox} />}
        {text && <p className="text">{text[1]}</p>}
        {subImages &&
          subImages.map((image, key) => (
            <img
              key={key}
              src={image}
              alt={`${title}`}
              className="title-image margin-tb"
            />
          ))}
      </Wrapper>
    </LocationIncentivesBlock>
  );
};

export default LocationIncentives;
