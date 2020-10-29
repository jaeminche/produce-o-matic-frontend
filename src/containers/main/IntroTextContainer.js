import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import IntroText from '../../components/common/IntroText';

const introtext = `A total solution from pre-production to post-production.
The most efficient way to start your production.
Easy, fast, accurate and transparent`;

const IntroTextContainer = () => {
  return <IntroText text={introtext} />;
};

export default withRouter(IntroTextContainer);
