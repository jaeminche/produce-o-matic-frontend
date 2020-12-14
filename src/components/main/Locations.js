import React from 'react';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import Responsive from '../common/Responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useHistory } from 'react-router-dom';

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

const StyledImgBlock = styled.div`
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

const CustomSlide = (props) => {
  const { key, title, imgpath, subtitle, url, history } = props;
  return (
    // <StyledImgBlock onClick={() => history.push(url)}>
    <StyledImgBlock key={key}>
      <a href={url} /*target="_blank"*/>
        <img src={imgpath} alt="click to watch Youtube" />
        <div className="textbox">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </a>
    </StyledImgBlock>
  );
};

const Locations = ({ items }) => {
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
              history={history}
            />
          ))}
        </Slider>
      </Wrapper>
    </LocationsBlock>
  );
};

export default Locations;
