import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import ContentsTemplates from '../components/common/ContentsTemplates';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const ContentsTemplateBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const ContentsTemplate = ({ type }) => {
  return <ContentsTemplateBlock></ContentsTemplateBlock>;
};

export default ContentsTemplate;
