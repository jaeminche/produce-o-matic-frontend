import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { PageTitle } from '../common/SmallComponents';
import Select from '../common/Select';
import { Button, CenteredButton } from '../../components/common/Button';
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
  border: 1px solid ${palette.budgetomatic.border[0]};
  border-radius: 13px;

  .row-container {
    border-bottom: 1px solid ${palette.budgetomatic.border[0]};
    width: 100%;
    ${mq({
      padding: ['9px 18px', '10px 20px', , '20px 40px', , , ,],
    })};
    background: ${palette.budgetomatic.table[2]};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 100px;
  }
  .row-container:first-child {
    border-radius: 13px 13px 0 0;
  }
  .row-container:last-child {
    border-radius: 0 0 13px 13px;
  }
  .one-row {
    border-radius: 13px;
  }
  .wrap-evenly {
    flex-wrap: wrap;
    gap: 12px;
  }
  .left-item {
    flex: 1;
    text-align: right;
    ${mq({
      minWidth: ['80px', '90px', , '150px', , , ,],
    })};
    ${mq({
      marginRight: ['40px', '45px', , '70px', , '90px', ,],
    })}
  }
  .vertically-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .category-name {
    border: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.24rem 1rem;
    flex: 1 0 auto;
  }
  .right-item {
    flex: 7;
  }
  .radio-box {
    text-align: ${(props) => (props.isMobile ? 'left' : 'right')};
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .radio-item {
    display: inline-block;
  }
`;

const StyledRow = styled.div``;

const ButtonStyledCheckbox = styled.span`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.24rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  flex: 1 0 auto;

  background: ${palette.gray[5]};
  &:hover {
    background: ${palette.gray[8]};
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
`;

const formatType = {
  DO: 'Documentary',
  IN: 'Indie Feature',
  TV: 'TV & Feature',
  TC: 'TV Commercial',
  OC: 'Online Commercial',
  DIY: 'DIY',
};

const Controller1 = (props) => {
  const {
    typeOfProduction,
    daysOfShooting,
    currency,
    OPTIONS,
    onChangeTypeOfProduction,
    onChangeDaysOfShooting,
    onChangeCurrency,
    uiData,
    isMobile,
  } = props;

  return (
    <StyledTable isMobile={isMobile}>
      <div className="row-container">
        <div className="left-item vertically-center">Type of Production</div>
        <div
          id="controller01-typeOfProduction"
          className="right-item radio-box"
        >
          {OPTIONS.typeOfProduction.map((typeOption, key) => {
            return (
              <span className="vertically-center" key={key}>
                <label htmlFor={typeOption} className="radio-item">
                  <input
                    type="radio"
                    id={typeOption}
                    name="typeOption"
                    value={typeOption}
                    className="typeOption"
                    checked={typeOption === typeOfProduction}
                    onChange={onChangeTypeOfProduction}
                  />
                  {formatType[typeOption]}
                </label>
              </span>
            );
          })}
        </div>
      </div>

      <div className="row-container">
        <div className="left-item vertically-center">
          <label htmlFor="daysOfShooting">Shooting Days</label>
        </div>
        <div className="right-item vertically-center">
          <Select
            value={daysOfShooting}
            onChange={onChangeDaysOfShooting}
            id="controller02-daysOfShooting"
            name="daysOfShooting"
            required={true}
            width100={false}
            optionsList={OPTIONS.daysOfShooting}
          />
        </div>
      </div>

      <div className="row-container">
        <div className="left-item vertically-center">
          <label htmlFor="currency">Currency</label>
        </div>
        <div className="right-item vertically-center">
          <Select
            value={currency}
            onChange={onChangeCurrency}
            id="controller03-currency"
            name="currency"
            required={true}
            width100={false}
            optionsList={OPTIONS.currency}
          />
        </div>
      </div>
    </StyledTable>
  );
};

const Controller2 = (props) => {
  const {
    dataSetInstance,
    typeOfProduction,
    daysOfShooting,
    currency,
    OPTIONS,
    onChangeTypeOfProduction,
    onChangeDaysOfShooting,
    onChangeCurrency,
    uiData,
    isMobile,
  } = props;
  // console.log('그룹네임프롭', dataSetInstance);
  return (
    <StyledTable isMobile={isMobile}>
      <div className="row-container one-row wrap-evenly">
        {dataSetInstance &&
          Object.entries(dataSetInstance).map(([key, value]) => (
            <>
              <div className="vertically-center category-name">{key} :</div>

              {value.map((group, key) => (
                <ButtonStyledCheckbox className="vertically-center" key={key}>
                  <label htmlFor={group.name} className="radio-item">
                    <input
                      type="checkbox"
                      id={group.name}
                      name="group.name"
                      value={group.name}
                      className="group.name"
                      checked={group.name === typeOfProduction}
                      onChange={onChangeTypeOfProduction}
                    />
                    {group.name.replace('department', 'dept.')}
                  </label>
                </ButtonStyledCheckbox>
              ))}
            </>
          ))}
      </div>
    </StyledTable>
  );
};

const BudgetOMatic = (props) => {
  const { onSubmit, isMobile } = props;
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>
        <PageTitle text="Budget-O-Matic" />
        <div className="spacer" />
        <form onSubmit={onSubmit}>
          <Controller1 {...props} />
          <Controller2 {...props} />
          <input type="submit" value="Submit" />
        </form>
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetOMatic;
