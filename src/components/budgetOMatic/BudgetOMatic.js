import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { PageTitle } from '../common/SmallComponents';
import { CenteredButton } from '../../components/common/Button';

const BudgetOMaticBlock = styled.div`
  height: auto;
  background: ${palette.budgetomatic.background[0]};
  color: ${palette.budgetomatic.text[1]};
`;

const Wrapper = styled(Responsive)`
  text-align: center;
  padding-top: 80px;

  /* .title {
    ${mq({
    fontSize: ['26px', '32px', , '40px', , '50px', ,],
  })}
    margin-bottom: 10px;
    text-align: center;
  } */
  .text {
    color: ${palette.budgetomatic.text[1]};
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
  }
  .margin-tb {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

const Controller = () => {
  return <div></div>;
};

const BudgetOMatic = ({ isMobile }) => {
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>
        <PageTitle text="Budget-O-Matic" />
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetOMatic;
