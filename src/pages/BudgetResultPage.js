import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import BudgetResultContainer from '../containers/budgetOMatic/BudgetResultContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const BudgetResultPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const BudgetResultPage = () => {
  const pagekey = 'budget-result';
  return (
    <BudgetResultPageBlock>
      <Helmet>
        <title>PRODUCE-O-MATIC_Your_Budget_Result</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={2} />
      <BudgetResultContainer />
      <FooterContainer />
    </BudgetResultPageBlock>
  );
};

export default BudgetResultPage;
