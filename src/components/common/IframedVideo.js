import React from 'react';
import Responsive from './Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import { CenteredButton } from './Button';
import palette from '../../lib/styles/palette';

const Wrapper = styled.div`
  text-align: left;
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  /* Aspect Ratio / Padding-Bottom
        1:1 / 100%
        16:9 / 56.25%
        4:3 / 75%
        3:2 / 66.66&
        8:5 / 62.5%
     */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const IframedVideo = (props) => {
  const { title, url } = props;
  return (
    <Wrapper>
      {/* <iframe
      title={title}
      width="100%"
      height="100%"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe> */}
      <iframe
        title={title}
        width="100%"
        height="100%"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

export default IframedVideo;
