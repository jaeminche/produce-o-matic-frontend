import React from 'react';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import Responsive from '../common/Responsive';
import Masonry from 'react-masonry-css';
import { Spacer } from '../common/styledCss';

const PopularLocationsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  .title {
    ${mq({
      fontSize: ['28px', '32px', , '42px', , '60px', ,],
    })};
    text-align: center;
    padding-top: ${(props) => (props.isMobile ? '130px' : '80px')};
    margin-bottom: ${(props) => (props.isMobile ? '10px' : '40px')};
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
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
    color: white;
    width: 90%;
    text-align: center;
  }
  .textbox-title {
    ${mq({
      fontSize: ['22px', '26px', , '28px', '30px', '40px', ,],
    })}
  }
  .subtitle {
    ${mq({
      fontSize: ['8px', '12px', , '18px', , '24px', ,],
    })}
  }
`;

const ImageBlock = ({ data, history, isMobile }) => {
  const { _id, title, subtitle, thumbnail, baseUrl } = data;
  const thumbnailPath = thumbnail.location;
  const handleClick = () => history.push(`${baseUrl}/${_id}`);
  const shortenStr = (str) => {
    const upto = isMobile ? 50 : 60;
    return `${str.slice(0, upto)}...`;
  };
  return (
    <ImgLinkBlock onClick={() => handleClick()} isMobile={isMobile}>
      <img src={thumbnailPath} alt="click to go to the page" />
      <div className="textbox">
        <div className="textbox-title">{title}</div>
        <div>{shortenStr(subtitle)}</div>
      </div>
    </ImgLinkBlock>
  );
};

const PopularLocations = ({ locations, history, isMobile }) => {
  // const { locations } = data;
  console.log('==001', locations);
  return (
    <PopularLocationsBlock>
      <Wrapper isMobile={isMobile}>
        {/* {isMobile && <div className="title">{title}</div>} */}
        {/* <img src={titleImage} alt={`${title} image`} className="title-image" /> */}
        {!isMobile && <Spacer />}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {locations &&
            locations.length > 0 &&
            locations.map(
              (card, key) =>
                card.toggleDisplay && (
                  <ImageBlock
                    isMobile={isMobile}
                    data={card}
                    history={history}
                    key={key}
                  />
                ),
            )}
        </Masonry>
      </Wrapper>
    </PopularLocationsBlock>
  );
};

export default PopularLocations;
