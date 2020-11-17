import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { PageTitle } from '../common/SmallComponents';
import { CenteredButton } from '../../components/common/Button';
import { toLowerCase, removeSpaceAndUnderbar } from '../../lib/format';

const BudgetOMaticBlock = styled.div`
  height: auto;
  background: ${palette.budgetomatic.background[0]};
  color: ${palette.budgetomatic.text[1]};
`;

const Wrapper = styled(Responsive)`
  text-align: center;
  padding-top: 80px;

  .spacer {
    padding-top: 80px;
  }
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

const StyledTable = styled.div`
  box-sizing: border-box;
  border: 1px solid ${palette.budgetomatic.border};
  border-radius: 13px;

  .row:first-child {
    border-radius: 13px 13px 0 0;
  }
  .row:last-child {
    border-radius: 0 0 13px 13px;
  }
  .row {
    border-bottom: 1px solid ${palette.budgetomatic.border};
    width: 100%;
    padding: 40px;
    background: ${palette.budgetomatic.table[2]};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .left {
    text-align: right;
    width: 25%;
  }
  .right {
    text-align: right;
    width: auto;
  }
`;

const StyledRow = styled.div``;

const formatType = {
  diy: 'DIY',
  documentary: 'Documentary',
  indie_feature: 'Indie Feature',
  tv_commercial: 'TV Commercial',
  online_commercial: 'Online Commercial',
};

const Controller = (props) => {
  const { typeOfProduction, typeOptions } = props;
  console.log(props);
  return (
    <StyledTable className="table">
      <div className="row">
        <div className="left">Type of Production</div>
        <div className="right">
          {typeOptions.map((option, key) => {
            return (
              <span>
                <input
                  type="radio"
                  id={option}
                  name="type-option"
                  value={option}
                  className="type-option"
                  checked={option === typeOfProduction}
                  key={key}
                ></input>
                <label> {formatType[option]}</label>
              </span>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="left">Shooting Days</div>
        <div className="right"></div>
      </div>
      <div className="row">
        <div className="left">Currency</div>
        <div className="right"></div>
      </div>
    </StyledTable>
  );
};

const BudgetOMatic = ({ typeOfProduction, typeOptions, uiData, isMobile }) => {
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>
        <PageTitle text="Budget-O-Matic" />
        <div className="spacer" />
        <Controller typeOptions={typeOptions} />
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetOMatic;
