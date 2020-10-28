import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PopularLocationsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  padding: 0;
`;

const ImgBlock = styled.div`
  img {
    width: 1200px;
    height: 400px;
    object-fit: cover;
    margin: 0 auto;
  }
`;

const ImagesBlock = ({ img }) => {
  return (
    <ImgBlock>
      <img src={img} alt="이미지" />
    </ImgBlock>
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: '5', display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: '5', display: 'block', left: '10px' }}
      onClick={onClick}
    />
  );
}

const PopularLocations = ({ imgs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <PopularLocationsBlock>
      <Wrapper>
        <Slider {...settings}>
          {imgs.map((img) => (
            <ImagesBlock img={img} />
          ))}
        </Slider>
      </Wrapper>
    </PopularLocationsBlock>
  );
};

export default PopularLocations;
