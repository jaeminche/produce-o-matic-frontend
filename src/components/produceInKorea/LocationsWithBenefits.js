import React from 'react';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import Responsive from '../common/Responsive';
import Masonry from 'react-masonry-css';

const LocationsWithBenefitsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;

const ImgBlock = styled.div`
  position: relative;

  img {
    width: 100%;
    max-width: 1200px;
    height: 400px;
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
const LocationsWithBenefits = ({ data }) => {
  const { title, thumbnail, cards } = data;
  return (
    <LocationsWithBenefitsBlock>
      <Wrapper>
        <div>{title}</div>
        <div>{thumbnail}</div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {cards.map((card) => (
            <div key={card.id}>
              <div>{card.title}</div>
              <div>{card.subtitle}</div>
            </div>
          ))}
        </Masonry>
      </Wrapper>
    </LocationsWithBenefitsBlock>
  );
};

export default LocationsWithBenefits;
