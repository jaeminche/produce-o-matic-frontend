import React from 'react';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import Responsive from '../common/Responsive';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

const PopularLocationsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  .title {
    font-size: ${mq({
      fontSize: ['24px', '24px', , '42px', , '60px', ,],
    })};
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  .title-image {
    width: 100%;
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    margin-top: 40px;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }
`;

const ImgBlock = styled.div`
  position: relative;

  img {
    width: 100%;
    max-width: 1200px;
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
      fontSize: ['28px', '34px', , '46px', , '60px', ,],
    })}
  }
  .subtitle {
    ${mq({
      fontSize: ['12px', '14px', , '18px', , '24px', ,],
    })}
  }
`;

const ImagesBlock = (props) => {
  const { title, imgpath, subtitle } = props;
  return (
    <ImgBlock>
      <img src={imgpath} alt="click to watch Youtube" />
      <div className="textbox">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </ImgBlock>
  );
};

const breakpointColumnsObj = {
  default: 2,
  567: 1,
};

// flex child
const ImgLinkBlock = styled.div`
  position: relative;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(.jpg), rgba(0, 0, 0, 0.4);
  border-radius: 30px;

  img {
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
    border-radius: inherit;

    &:hover {
      filter: brightness(0.5);
    }
  }
  .textbox {
    position: absolute;
    transform: translateX(-50%) translateY(-60%);
    left: 50%;
    top: 50%;
    color: white;
    width: 80%;
    text-align: center;
  }
  .title {
    ${mq({
      fontSize: ['26px', '32px', , '40px', , , , '50px'],
    })}
  }
  .subtitle {
    ${mq({
      fontSize: ['10px', '12px', , '18px', , '24px', ,],
    })}
  }
`;

const ImageBlock = ({ data }) => {
  const { title, subtitle, thumbnail, to } = data;
  console.log('props', data);
  return (
    <ImgLinkBlock to={to}>
      <img src={thumbnail} alt="click to go to the page" />
      <div className="textbox">
        <div className="title">{title}</div>
        <div>{subtitle}</div>
      </div>
    </ImgLinkBlock>
  );
};

const PopularLocations = ({ data }) => {
  const { title, titleImage, cards } = data;
  return (
    <PopularLocationsBlock>
      <Wrapper>
        <div className="title">{title}</div>
        <img src={titleImage} alt={`${title} image`} className="title-image" />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {cards.map((card, key) => (
            <ImageBlock data={card} key={key} />

            // <div key={card.id}>
            //   <img src={card.thumbnail} alt={card.title} />
            //   <div>{card.title}</div>
            //   <div>{card.subtitle}</div>
            // </div>
          ))}
        </Masonry>
      </Wrapper>
    </PopularLocationsBlock>
  );
};

export default PopularLocations;
