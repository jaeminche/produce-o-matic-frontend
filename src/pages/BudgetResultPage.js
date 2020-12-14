import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import BudgetResultContainer from '../containers/budgetOMatic/BudgetResultContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const BudgetOMaticPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const BudgetOMaticPage = () => {
  const pagekey = 'budget-result';
  return (
    <BudgetOMaticPageBlock>
      <Helmet>
        <title>Your_Result_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={2} />
      <BudgetResultContainer />
      <FooterContainer />
    </BudgetOMaticPageBlock>
  );
};

export default BudgetOMaticPage;
