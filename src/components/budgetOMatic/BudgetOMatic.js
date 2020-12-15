import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { PageTitle } from '../common/SmallComponents';
import Select from '../common/Select';
import { XMARK, PLUSMARK } from '../../assets';
import { ConfirmButton } from '../../components/common/Button';
import { Spacer } from '../common/styledCss';
import ReactHtmlParser from 'react-html-parser';

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
    padding-top: ${(props) => (props.width ? props.width : '80px')};
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
    })};
  }
  .left-left-item {
    flex: 2;
    text-align: left;
    ${mq({
      minWidth: ['70px', '90px', '140px', , , '300px', ,],
    })};
    ${mq({
      marginRight: ['10px', '45px', , '70px', , '90px', ,],
    })};
  }
  .vertically-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .align-center {
    align-items: center;
  }
  .horizontally-center {
    margin: 0 auto;
  }
  .gap {
    margin: 6px;
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
  .right-contents {
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
    })};
  }
  .content-row {
    ${mq({
      fontSize: ['12px', '12px', , '16px', , '18px', ,],
    })};
  }
  .margin-l {
    margin-left: 20px;
  }
  .plus-parent {
    border-radius: 50%;
    ${mq({
      width: ['35px', , , '50px', , , ,],
      height: ['35px', , , '50px', , , ,],
      marginRight: ['-8px', '-10px', , '-20px', , , ,],
    })};
    position: relative;
  }
  @media (hover: hover) and (pointer: fine) {
    .plus-parent:hover {
      background: ${palette.budgetomatic.table[1]};
    }
  }
  @media (hover: none) {
    .plus-parent {
      background: ${palette.budgetomatic.table[1]};
    }
  }
  .plus-child-circle {
    position: absolute;
    ${mq({
      top: ['50%', , , , , , ,],
      left: ['50%', , , , , , ,],
    })};
  }
  .plus-child-mark {
    position: absolute;
    ${mq({
      top: ['18%', , , '25%', , , ,],
      left: ['18%', , , '25%', , , ,],
    })};
  }
`;

const CategoryTitle = styled.div`
  ${mq({
    fontSize: ['24px', '28px', , '31px', , '34px', ,],
    margin: ['40px 0 20px', , , '50px 0 30px', , '60px 0 30px', ,],
  })};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 44px;
  text-align: center;
  color: ${palette.budgetomatic.text[2]};
  letter-spacing: normal;
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

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${palette.gray[7]};
    }
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
          <label htmlFor="daysOfShooting">Days of Shooting</label>
        </div>
        <div className="right-item vertically-center">
          <Select
            value={daysOfShooting}
            onChange={onChangeDaysOfShooting}
            id="controller02-daysOfShooting"
            name="daysOfShooting"
            required={true}
            maxWidth={'300px'}
            options={OPTIONS.daysOfShooting}
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
            options={OPTIONS.currency}
          />
        </div>
      </div>
    </StyledTable>
  );
};

const Controller2 = (props) => {
  const { keyname, dataSetInstance, onChangeToggleGroup, isMobile } = props;
  // console.log('그룹네임프롭', dataSetInstance);
  const D = dataSetInstance[keyname];
  const regexGroupName = /department|equipments/gi;
  return (
    <StyledTable isMobile={isMobile}>
      <div
        className="row-container solo-container wrap-evenly"
        style={{ minHeight: '76px' }}
      >
        {D.map((group, key) => (
          <ButtonStyledCheckbox
            className={
              group.checked
                ? 'checked vertically-center gap'
                : 'vertically-center gap'
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
                checked={group.checked}
                onChange={onChangeToggleGroup}
              />
              {group.name.replace(regexGroupName, '')}
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
  const {
    dataSetInstance,
    currency,
    currencyRate,
    OPTIONS,
    onChangeSelect,
    onChangeReplace,
    onClickRemove,
    onClickAdd,
    isMobile,
  } = props;
  // console.log('데이터인스턴스', dataSetInstance);

  return (
    <Grandtotal props={props}>
      {dataSetInstance &&
        Object.entries(dataSetInstance).map(([key, value]) => (
          <div key={key}>
            <CategoryTitle>{key.toUpperCase()}</CategoryTitle>
            <Controller2 keyname={key} {...props} />
            {value.map((group, key) => {
              return (
                group.checked && (
                  <StyledTable isMobile={isMobile} key={key}>
                    <div className="row-container">
                      <div className="vertically-center horizontally-center title-row">
                        {`${group.code}. ${group.name.toUpperCase()}`}
                      </div>
                      <div
                        onClick={() =>
                          onClickRemove({
                            targetGroupCd: group.code,
                            willTargetGroup: true,
                          })
                        }
                        className="vertically-center"
                      >
                        <img src={XMARK} alt="x-mark" />
                      </div>
                    </div>
                    {group.budgetItems.map((budgetItem, key) => {
                      // ? make helpers for Select
                      const itemNamesNextToOption = group.options.map(
                        (item) => item.budgetItemName,
                      );
                      const options = group.options.map(
                        (item) => item.budgetItemCode, // * CODES makes the options
                      );
                      const getItemsCurrIdxFromCurrArr = (
                        budgetItems,
                        itemCode,
                      ) =>
                        budgetItems
                          .map((item) => item.code)
                          .indexOf(parseInt(itemCode));

                      return (
                        budgetItem.checked && (
                          <div className="row-container content-row" key={key}>
                            <div className="left-left-item  vertically-center">
                              <div className="flex-row">
                                <Select
                                  value={budgetItem.code && budgetItem.code}
                                  onChange={(e) =>
                                    onChangeReplace({
                                      e,
                                      amnt: budgetItem.amnt,
                                      days: budgetItem.days,
                                      oldIdx: getItemsCurrIdxFromCurrArr(
                                        group.budgetItems,
                                        budgetItem.code,
                                      ),
                                      newIdx: getItemsCurrIdxFromCurrArr(
                                        group.budgetItems,
                                        e.target.value,
                                      ),
                                      targetGroupCd: group.code,
                                    })
                                  }
                                  id={`calculator-${budgetItem.name}`}
                                  name={budgetItem.code}
                                  required={true}
                                  width={'100%'}
                                  maxWidth={'300px'}
                                  items={group.budgetItems}
                                  itemNamesNextToOption={itemNamesNextToOption}
                                  options={options}
                                />
                              </div>
                            </div>

                            <div className="right-item budgetItem-contents">
                              <div className="vertically-center">
                                Rate:{' '}
                                {(budgetItem.rate[0] / currencyRate).toFixed(
                                  currency !== 'KRW' ? 0 : 0,
                                )}
                                {`(${currency})`}
                              </div>
                              <div className="vertically-center">
                                <div className="flex-row">
                                  <Select
                                    value={budgetItem.amnt && budgetItem.amnt}
                                    onChange={onChangeSelect}
                                    id="calculator-amnt"
                                    name={`[${group.code}, ${budgetItem.code}, "amnt"]`}
                                    required={true}
                                    width={'70px'}
                                    maxWidth={'70px'}
                                    options={OPTIONS.amnt}
                                  />
                                  <div className="vertically-center margin-l">
                                    Amnt.
                                  </div>
                                </div>
                              </div>
                              <div className="vertically-center">
                                <div className="flex-row">
                                  <Select
                                    value={budgetItem.days && budgetItem.days}
                                    onChange={onChangeSelect}
                                    id="calculator-days"
                                    name={`[${group.code}, ${budgetItem.code}, "days"]`}
                                    required={true}
                                    width={'70px'}
                                    maxWidth={'70px'}
                                    options={OPTIONS.days}
                                  />
                                  <div className="vertically-center margin-l">
                                    Days
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vertically-center margin-l"
                              onClick={() =>
                                onClickRemove({
                                  targetGroupCd: group.code,
                                  targetBudgetItemCd: budgetItem.code,
                                  willTargetGroup: false,
                                })
                              }
                            >
                              <img src={XMARK} alt="delete item" />
                            </div>
                          </div>
                        )
                      );
                    })}
                    {group.budgetItems.some(
                      (budgetItem) => !budgetItem.checked,
                    ) && (
                      <div className="row-container content-row right-contents align-center">
                        <div
                          className="plus-parent"
                          onClick={() => {
                            console.log('온클릭');
                            const getFirstUncheckedItem = function (group) {
                              const items = group.budgetItems;
                              console.log('==20-', items);

                              for (let i = 0; i < items.length; i++) {
                                if (!items[i].checked)
                                  return {
                                    targetBudgetItemCd: items[i].code,
                                    targetBudgetItemIdx: i,
                                  };
                              }
                            };
                            onClickAdd({
                              targetGroupCd: group.code,
                              targetBudgetItemCdAndIdx: getFirstUncheckedItem(
                                group,
                              ),
                            });
                          }}
                        >
                          <div className="plus-child-circle "></div>
                          <img
                            className="plus-child-mark"
                            src={PLUSMARK}
                            alt="add item"
                          />
                        </div>
                      </div>
                    )}

                    <div className="row-container content-row">
                      <div className="left-left-item vertically-center">
                        Subtotal
                      </div>
                      <div className="right-item right-contents">
                        <div style={{ display: 'flex' }}>
                          <span className="vertically-center ">
                            {(group.subtotal / currencyRate).toFixed(
                              currency !== 'KRW' ? 0 : 0,
                            )}
                          </span>
                          <span className="vertically-center margin-l">
                            {currency}
                          </span>
                        </div>
                      </div>
                    </div>
                  </StyledTable>
                )
              );
            })}
          </div>
        ))}
    </Grandtotal>
  );
};

const IntroText = (isMobile) => {
  const text = ReactHtmlParser(`<strong>Budget-O-Matic™</strong><br /> is a web-based budget calculator 
  to get estimated costs for filming in South Korea today.`);
  return isMobile ? <h3>{text}</h3> : <h2>{text}</h2>;
};

const BudgetOMatic = (props) => {
  const { onSubmit, isMobile } = props;
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>
        {/* <PageTitle text="Budget-O-Matic" isMobile={isMobile} /> */}
        <IntroText isMobile={isMobile} />
        <div className="spacer" />
        <Controller1 {...props} />

        <Calculator {...props} />

        <ConfirmButton onClick={onSubmit} bigGray>
          Get Result
        </ConfirmButton>
        <Spacer width="1px" />
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetOMatic;
