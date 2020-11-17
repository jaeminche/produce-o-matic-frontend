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
    ${mq({
      padding: ['18px', '20px', , '40px', , , ,],
    })};
    background: ${palette.budgetomatic.table[2]};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .left {
    flex: 1;
    text-align: right;
    ${mq({
      minWidth: ['80px', '90px', , '150px', , , ,],
    })};
    ${mq({
      marginRight: ['40px', '45px', , '70px', , '90px', ,],
    })}
  }
  .right {
    flex: 7;
    text-align: right;
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .type-option {
    display: inline-block;
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
  const { typeOfProduction, typeOptions, onChangeType, isMobile } = props;

  return (
    <StyledTable className="table" isMobile={isMobile}>
      <div className="row">
        <div className="key-section left">Type of Production</div>
        <div className="key-section right" onChange={onChangeType}>
          {typeOptions.map((typeOption, key) => {
            return (
              <span className="type-option" key={key}>
                <label for={typeOption}>
                  <input
                    type="radio"
                    id={typeOption}
                    name="typeOption"
                    value={typeOption}
                    className="typeOption"
                    checked={typeOption === typeOfProduction}
                  />
                  {formatType[typeOption]}
                </label>
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

const BudgetOMatic = (props) => {
  const { typeOfProduction, typeOptions, uiData, isMobile } = props;
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>
        <PageTitle text="Budget-O-Matic" />
        <div className="spacer" />
        <Controller {...props} />
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetOMatic;
