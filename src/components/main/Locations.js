import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LocationsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  padding: 0;
`;

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

const ImgBlock = styled.div`
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
  /* img:hover {
  } */
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
  .subtitle {
    font-size: 24px;
  }
`;

const ImagesBlock = (props) => {
  const { title, imgpath, subtitle } = props;
  return (
    <ImgBlock>
      <img src={imgpath} alt="click to watch Youtube" />
      <div>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </ImgBlock>
  );
};

const CustomSlide = (props) => {
  return (
    <div>
      <ImagesBlock {...props} />
    </div>
  );
};

const Locations = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
          bottom: '-10px',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <LocationsBlock>
      <Wrapper>
        <Slider {...settings}>
          {items.map((item) => (
            <CustomSlide
              imgpath={item.imgpath}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </Slider>
      </Wrapper>
    </LocationsBlock>
  );
};

export default Locations;
