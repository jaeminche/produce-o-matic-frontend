import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import { CenteredButton } from '../../components/common/Button';

const BudgetOMaticBlock = styled.div`
  height: auto;
`;

const Wrapper = styled(Responsive)`
  text-align: left;
  margin-top: 80px;

  .title {
    ${mq({
      fontSize: ['26px', '32px', , '40px', , '50px', ,],
    })}
    margin-bottom: 10px;
    text-align: center;
  }
  .text {
    color: white;
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

const BudgetOMatic = ({ isMobile }) => {
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>budgeto</Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetOMatic;
