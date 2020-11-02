import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import IntroText from '../../components/common/IntroText';

const text = `<div>A total solution from pre-production to post-production.</div><div>The most efficient way to start your production.</div><div>Easy, fast, accurate and transparent</div>`;

const IntroTextContainer = () => {
  return <IntroText text={text} />;
};

export default withRouter(IntroTextContainer);
