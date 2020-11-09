import React from 'react';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
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
  ${mq({
    width: ['100%', , '49.5%', , , , ,],
  })}

  img {
    width: 100%;
    ${mq({
      height: ['320px', '360px', , '380px', , '400px', '640px'],
    })}
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
    text-align: center;
  }
  .title {
    ${mq({
      fontSize: ['26px', '32px', , '40px', , '50px', ,],
    })}
  }
  .subtitle {
    ${mq({
      fontSize: ['10px', '12px', , '18px', , '24px', ,],
    })}
  }
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
          <ImageBlock data={item} key={key} />
        ))}
      </Wrapper>
    </ThumbnailsBlock>
  );
};

export default Thumbnails;
