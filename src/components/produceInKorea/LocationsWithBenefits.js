import React from 'react';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import Responsive from '../common/Responsive';

const LocationsWithBenefitsBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  padding: 0;
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

const LocationsWithBenefits = ({ data }) => {
  return (
    <LocationsWithBenefitsBlock>
      <Wrapper></Wrapper>
    </LocationsWithBenefitsBlock>
  );
};

export default LocationsWithBenefits;
