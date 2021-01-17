import React from 'react';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
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
      style={{
        ...style,
        zIndex: '5',
        display: 'block',
        right: '10px',
        padding: '50px 25px ',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '5',
        display: 'block',
        left: '0',
        padding: '50px 25px',
      }}
      onClick={onClick}
    />
  );
}

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
    width: 80%;
  }
  .title {
    ${mq({
      fontSize: ['28px', '28px', , '38px', , , ,],
    })};
  }
  .subtitle {
    ${mq({
      fontSize: ['12px', '14px', , '21px', , , ,],
    })};
  }
  .text-shadow {
    text-shadow: 0 0 1px #444444, 0 0 2px #444444, 0 0 3px #444444,
      0 0 4px #444444, 0 0 7px #444444, 0 0 10px #444444, 0 0 13px #444444,
      0 0 18px #444444;
  }
`;

const ImagesBlock = (props) => {
  const { key, title, imgpath, subtitle, url } = props;
  // console.log('-s-s', url, imgpath);
  return (
    <ImgBlock key={key}>
      <a href={url}>
        <img src={imgpath} alt="click to watch Youtube" />
        <div className="textbox">
          <div className="title text-shadow">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </a>
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
  console.log('아이템', items);
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
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
          {items.map((item, key) => (
            <CustomSlide
              key={key}
              imgpath={item.imgpath}
              title={item.title}
              subtitle={item.subtitle}
              url={item.url}
            />
          ))}
        </Slider>
      </Wrapper>
    </LocationsBlock>
  );
};

export default Locations;
