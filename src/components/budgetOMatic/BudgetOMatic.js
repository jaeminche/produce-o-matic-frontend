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
  font-family: Lato;
  font-style: normal;
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
  margin-bottom: 20px;

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
    border-bottom: none;
  }
  .solo-container {
    border-radius: 13px !important;
  }
  .wrap-evenly {
    flex-wrap: wrap;
    gap: 12px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    padding: 5px 0;
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
  .left-left-item {
    flex: 2;
    text-align: left;
    ${mq({
      minWidth: ['80px', '90px', '150px', '300px', , , ,],
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
  .horizontally-center {
    margin: 0 auto;
  }
  .checkbox {
    display: none;
  }
  .checked {
    background: ${palette.gray[8]};
  }
  .category-name {
    border: none;
    font-size: 16px;
    flex: 1 0 auto;
  }
  .right-item {
    flex: 7;
  }
  .radio-box,
  .budgetItem-contents {
    text-align: ${(props) => (props.isMobile ? 'left' : 'right')};
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    justify-content: space-between;
  }
  .budgetItem-contents {
    flex-wrap: nowrap;
  }
  .radio-item {
    display: inline-block;
  }
  .checkbox-item {
    display: inline-block;
    cursor: pointer;
  }
  i {
    flex: 1 0 auto;
  }
  .title-row {
    ${mq({
      fontSize: ['13px', '14px', , '16px', , '18px', ,],
    })}
  }
  .content-row {
    ${mq({
      fontSize: ['12px', '12px', , '16px', , '18px', ,],
    })}
  }
  .margin-l {
    margin-left: 20px;
  }
`;

const CategoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 76px;
  text-align: center;
  color: ${palette.budgetomatic.text[2]};
`;

const ButtonStyledCheckbox = styled.span`
  border: none;
  border-radius: 13px;
  font-size: 16px;
  max-height: 36px;
  /* font-weight: bold; */
  padding: 4px 16px 7px 16px;
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
      <div className="row-container content-row">
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

      <div className="row-container content-row">
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
            maxWidth={'300px'}
            optionsList={OPTIONS.daysOfShooting}
          />
        </div>
      </div>

      <div className="row-container content-row">
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
            maxWidth={'300px'}
            optionsList={OPTIONS.currency}
          />
        </div>
      </div>
    </StyledTable>
  );
};

const Controller2 = (props) => {
  const { keyname, dataSetInstance, onChangeCheckbox, isMobile } = props;
  // console.log('그룹네임프롭', dataSetInstance);
  const D = dataSetInstance[keyname];
  const regex = /department|equipments/gi;
  return (
    <StyledTable isMobile={isMobile}>
      <div
        className="row-container solo-container wrap-evenly"
        style={{ minHeight: '76px' }}
      >
        {D.map((group, key) => (
          <ButtonStyledCheckbox
            className={
              group.checked()
                ? 'checked vertically-center'
                : 'vertically-center'
            }
            key={key}
          >
            <label htmlFor={group.name} className="checkbox-item">
              <input
                type="checkbox"
                id={group.name}
                name={group.name}
                value={group.code}
                className="checkbox"
                checked={group.checked()}
                onChange={onChangeCheckbox}
              />
              {group.name.replace(regex, '')}
            </label>
          </ButtonStyledCheckbox>
        ))}

        {[...Array(10).keys()].map((i, key) => (
          <i aria-hidden={true} key={key} />
        ))}
      </div>
    </StyledTable>
  );
};

const Grandtotal = ({ children }) => {
  return <div>{children}</div>;
};

const Subtotal = ({ children }) => {
  return <div>{children}</div>;
};

const Calculator = (props) => {
  const { dataSetInstance, currency, OPTIONS, isMobile } = props;
  console.log('데이터인스턴스', dataSetInstance);
  return (
    <Grandtotal props={props}>
      {dataSetInstance &&
        Object.entries(dataSetInstance).map(([key, value]) => (
          <div key={key}>
            <CategoryTitle>{key.toUpperCase()}</CategoryTitle>
            <Controller2 keyname={key} {...props} />
            {value.map(
              (group, key) =>
                group.checked() && (
                  <StyledTable isMobile={isMobile} key={key}>
                    <div className="row-container">
                      <div className="vertically-center horizontally-center title-row">
                        {`${group.code}. ${group.name.toUpperCase()}`}
                      </div>
                    </div>
                    {group.budgetItems.map(
                      (budgetItem, key) =>
                        budgetItem.checked && (
                          <div className="row-container content-row" key={key}>
                            <div className="left-left-item vertically-center">
                              {`${budgetItem.code}. ${budgetItem.name}`}
                            </div>

                            <div className="right-item budgetItem-contents">
                              <div className="vertically-center">
                                Rate: {budgetItem.rate[0]}
                                {`(${currency})`}
                              </div>
                              <div className="vertically-center">
                                <div className="flex-row">
                                  <Select
                                    value={budgetItem.amnt}
                                    // onChange={}
                                    id="controller02-amnt"
                                    name="amnt"
                                    required={true}
                                    width={'70px'}
                                    maxWidth={'70px'}
                                    optionsList={OPTIONS.amnt}
                                  />
                                  <div className="vertically-center margin-l">
                                    Amnt.
                                  </div>
                                </div>
                              </div>
                              <div className="vertically-center">
                                <div className="flex-row">
                                  <Select
                                    value={budgetItem.days}
                                    // onChange={}
                                    id="controller02-days"
                                    name="days"
                                    required={true}
                                    width={'70px'}
                                    maxWidth={'70px'}
                                    optionsList={OPTIONS.days}
                                  />
                                  <div className="vertically-center margin-l">
                                    Days
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ),
                    )}
                  </StyledTable>
                ),
            )}
          </div>
        ))}
    </Grandtotal>
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

          <Calculator {...props} />
          <input type="submit" value="Submit" />
        </form>
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetOMatic;
