import facepaint from 'facepaint';

// device sizes reference from Bootstrap
// sm, md, lg, xl (576, 768, 992, 1200)

// 다음은 for react-responsive
const deviceSize = {
  mobileS: 320,
  mobile: 321,
  mobileL: 568,
  tablet: 768,
  tabletL: 992,
  desktop: 1200,
  desktopL: 1900,
};

// size와 device는 커스텀메이드 한 쌍
const size = {
  mobileS: '320px',
  mobile: '321px',
  mobileL: '568px',
  tablet: '768px',
  tabletL: '992px',
  desktop: '1200px',
  desktopL: '1900px',
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(min-width: ${size.mobile})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

const mq = facepaint([
  // Note that the first value is considered a default value and is not a child of a media query at-rule.
  `@media(min-width: ${size.mobile})`,
  `@media(min-width: ${size.mobileL})`,
  `@media(min-width: ${size.tablet})`,
  `@media(min-width: ${size.tabletL})`,
  `@media(min-width: ${size.desktop})`,
  `@media(min-width: ${size.desktopL})`,
]);

export { mq, deviceSize, device, size };
