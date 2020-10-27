import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PopularLocationsBlock = styled.div`
  position: relative;
  height: 461px;
  background: rgba(17, 17, 17, 0.4);
  z-index: -1;
`;

const Image = styled.img`
  position: absolute;
  top: -3rem;
  left: 0;
  width: 100%;
  background: rgba(17, 17, 17, 0.4);
  z-index: -1;
`;

// const Image = (props) => {
//   console.log(props);
//   return <Image src="" alt="이미지" />;
// };

const PopularLocations = ({ imgs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <PopularLocationsBlock>
      <Slider {...settings}>
        <div>
          <img style={{ width: '100%', height: 'auto' }} src={imgs[0]} />
        </div>
        <div>
          <img style={{ width: '100%', height: 'auto' }} src={imgs[1]} />
        </div>
        {/* {imgs.map((image) => (
          <div>
            <img src={image} alt="이미지" />
          </div>
        ))} */}
      </Slider>
    </PopularLocationsBlock>
  );
};

export default PopularLocations;
