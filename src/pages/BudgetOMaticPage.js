import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import BudgetOMaticContainer from '../containers/budgetOMatic/BudgetOMaticContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const BudgetOMaticPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const BudgetOMaticPage = () => {
  const pagekey = 'budget-o-matic';
  return (
    <BudgetOMaticPageBlock>
      <Helmet>
        <title>PRODUCE-O-MATIC_BudgetOMatic</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={2} />
      <BudgetOMaticContainer />
      <FooterContainer />
    </BudgetOMaticPageBlock>
  );
};

export default BudgetOMaticPage;
