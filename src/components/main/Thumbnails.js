import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const ThumbnailsBlock = styled.div`
  height: auto;
`;

// flex parent
const Wrapper = styled(Responsive)`
  /* padding: 0; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// flex child
const ImgLinkBlock = styled(Link)`
  position: relative;
  width: 49.5%;

  img {
    width: 100%;
    /* TODO */
    height: 400px;
    /* height: calc(); */
    object-fit: cover;
    margin: 0 auto;
    &:hover {
      filter: brightness(0.5);
    }
  }
  .textbox {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
    color: white;
  }
  .title {
    font-size: 50px;
  }
  /* @media (max-width: 1500px) {
    img {
        height: 550px;

    }
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
`;

const ImageBlock = ({ data }) => {
  const { title, imgpath, to } = data;
  console.log('props', data);
  return (
    <ImgLinkBlock to={to}>
      <img src={imgpath} alt="click to go to the page" />
      <div className="textbox">
        <div className="title">{title}</div>
      </div>
    </ImgLinkBlock>
  );
};

const Thumbnails = ({ data }) => {
  return (
    <ThumbnailsBlock>
      <Wrapper full>
        {data.map((item, key) => (
          <ImageBlock data={item} />
        ))}
      </Wrapper>
    </ThumbnailsBlock>
  );
};

export default Thumbnails;
