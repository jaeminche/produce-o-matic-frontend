import React from 'react';
import { withRouter } from 'react-router-dom';
import IntroText from '../../components/common/IntroText';

// const text = `<div>A total solution from pre-production to post-production.</div><div>The most efficient way to start your production.</div><div>Easy, fast, accurate and transparent</div>`;

const text = `<div>Budget-O-matic is an easy and fast budget calculator.</div><div>Check the estimated budget for your film/video production in Korea.</div><div>(Including incentive program up to 30%)</div>`;

const IntroTextContainer = () => {
  return <IntroText text={text} />;
};

export default withRouter(IntroTextContainer);
