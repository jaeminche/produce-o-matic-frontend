import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import IntroText from '../../components/common/IntroText';

const text = `<p>A total solution from pre-production to post-production.</p><p>The most efficient way to start your production.</p><p>Easy, fast, accurate and transparent</p>`;

const IntroTextContainer = () => {
  return <IntroText text={text} />;
};

export default withRouter(IntroTextContainer);
