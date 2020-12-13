import React from 'react';
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
