import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const ThumbnailsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  /* padding: 0; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgLink = styled(Link)`
  position: relative;
  &:hover {
    filter: brightness(0.5);
  }
  img {
    width: 1200px;
    height: 400px;
    object-fit: cover;
    margin: 0 auto;
  }
  div {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 30%;
  }
  p {
    color: white;
  }
  .title {
    font-size: 40px;
    font-weight: bold;
  }
`;

const ImageBlock = ({ data }) => {
  const { title, imgpath, to } = data;
  console.log('props', data);
  return (
    <ImgLink to={to}>
      <img src={imgpath} alt="click to go to the page" />
      <div>
        <p className="title">{title}</p>
      </div>
    </ImgLink>
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
