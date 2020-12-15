import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { ConfirmButton } from '../../components/common/Button';
import { useTable } from 'react-table';
import { formatCurrency } from '../../lib/format';

const BudgetOMaticBlock = styled.div`
  padding: 80px 0;
  height: auto;
  background: ${palette.budgetomatic.background[0]};
  color: ${palette.budgetomatic.text[1]};
`;

const StyledPageTitle = styled.h1`
  ${mq({
    fontSize: ['26px', '32px', , '40px', , '50px', ,],
  })}
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
`;

const Wrapper = styled(Responsive)`
  font-family: Lato;
  font-style: normal;
  text-align: center;
  padding-top: 80pxdiv className= 'spacer' {
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
  /* border: 1px solid ${palette.budgetomatic.border[0]}; */
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

const FooterRow = styled.div`
  height: ${(props) => (props.isMobile ? 'auto' : '60px')};
  border: 1px solid #a5a5a5;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: space-between;
  margin-bottom: 80px;
  .footer-block {
    display: flex;
    flex-direction: row;
    width: 50%;
    div {
      padding: 18px 14px;
    }
  }
  .footer-child-first {
    background: #1b1b1b;
    color: white;
    div {
      padding: 18px 14px;
    }
  }
  .footer-grandtotal-value {
    background: aliceblue;
  }
  .incentive-number {
    color: blue;
    font-weight: bold;
  }
  /* .footer-child-first {
    background: #1B1B1B;
  } */
`;

const ResultTableStyles = styled.div`
  /* border: 1px solid #a5a5a5 !important; */
  table {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    width: 100% !important;
    border-spacing: 0;
    /* border-top: 1px solid black; */
    /* border-left: 1px solid #a5a5a5;
    border-right: 1px solid #a5a5a5;
    border: 1px solid #a5a5a5; */

    thead {
      width: inherit;
      tr {
        border: 1px solid #a5a5a5;
      }
    }
    .flex-between {
      /* border: 1px solid #a5a5a5; */
      width: 100%;
      padding: ${(props) => (props.isMobile ? '8px 20px' : '19px 40px')};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 60px;
      background: #1b1b1b;
      color: white;
    }

    .groupname {
      width: 100%;
      display: block;
      padding: ${(props) => (props.isMobile ? '19px 20px' : '19px 40px')};
      text-align: ${(props) => (props.isMobile ? 'center' : 'left')};
      /* background: #f5f5f5; */
      color: rgba(0, 32, 51, 1);
      border: 1px solid #a5a5a5;
    }

    .subtotal {
      background: #ecf3ff;
      color: black;
      border-left: 1px solid #a5a5a5;
      border-right: 1px solid #a5a5a5;
      border-bottom: 1px solid #a5a5a5;
      margin-bottom: 10px;
    }

    tr {
      height: 60px;

      /* &:first-child {
        td {
          border-top: 1px solid black;
        } 
    

      &:last-child {
        td {
          border-bottom: 0;
        }
      } */
    }
    tr th,
    td {
      margin: 0;
      padding: 0.5rem;
      /* border: 1px solid #a5a5a5; */
      border-bottom: 1px solid #a5a5a5;
      border-right: 1px solid #a5a5a5;

      :last-child {
        border-right: 0;
      }
    }
    tbody {
      tr {
        background: white;
      }
    }
  }
`;

function ResultTable({ columns, data, currency, currencyRate }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table style={{ border: '1px solid #a5a5a5' }} {...getTableProps()}>
      <thead>
        {headerGroups.map(
          (group, key) =>
            key > 0 && (
              <tr {...group.getHeaderGroupProps()}>
                {group.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ),
        )}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          if (row.original.checked) {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

const ResultTables = (props) => {
  const {
    data,
    categoryTotals,
    grandtotal,
    currency,
    currencyRate,
    isMobile,
  } = props;
  console.log('====레이', currency, currencyRate);
  const columns = React.useMemo(
    () => [
      {
        Header: 'null',
        columns: isMobile
          ? [
              {
                Header: 'Title',
                accessor: 'name',
              },

              {
                Header: 'RATE',
                accessor: 'rate',
              },
              {
                Header: 'TOTAL',
                accessor: 'itemtotal',
              },
            ]
          : [
              {
                Header: 'Code',
                accessor: 'code',
              },
              {
                Header: 'Title',
                accessor: 'name',
              },
              {
                Header: 'AMNT',
                accessor: 'amnt',
              },
              {
                Header: 'Days',
                accessor: 'days',
              },
              {
                Header: 'RATE',
                accessor: 'rate',
                Cell: (props) => <> {formatCurrency({ num: props.value })} </>,
              },
              {
                Header: 'TOTAL(KRW)',
                accessor: 'itemtotal',
                Cell: (props) => <> {formatCurrency({ num: props.value })} </>,
              },
            ],
      },
    ],
    [],
  );

  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        const categoryname = key;
        const categoryTotal = () => {
          for (const item of categoryTotals) {
            for (const name in item) {
              if (name === categoryname) return item[name];
            }
          }
        };
        return (
          <ResultTableStyles
            style={{ width: '100%', marginTop: '50px' }}
            key={key}
            isMobile={isMobile}
          >
            <table style={{ width: '100%' }}>
              <thead style={{ width: '100%' }}>
                <tr className="flex-between">
                  <div>{categoryname.toUpperCase()}</div>
                  <div>
                    {formatCurrency({
                      num: categoryTotal(),
                      currency: 'KRW',
                    })}
                    {currency !== 'KRW'
                      ? ` (${formatCurrency({
                          num: categoryTotal(),
                          currency,
                          currencyRate,
                        })})`
                      : null}
                  </div>
                </tr>
              </thead>
              {value.map(
                (group, key) =>
                  group.checked && (
                    <div key={key}>
                      <thead style={{ width: '100%', display: 'block' }}>
                        <tr
                          style={{ width: '100%' }}
                          className="groupname"
                        >{`${group.name.toUpperCase()}`}</tr>
                      </thead>
                      <ResultTable
                        style={{ border: '1px solid #a5a5a5' }}
                        columns={columns}
                        data={group.budgetItems}
                        currency={currency}
                        currencyRate={currencyRate}
                      />
                      <div className="flex-between subtotal">
                        <div>subtotal</div>
                        <div>
                          {formatCurrency({
                            num: group.subtotal,
                            currency: 'KRW',
                          })}
                          {currency !== 'KRW'
                            ? ` (${formatCurrency({
                                num: group.subtotal,
                                currency,
                                currencyRate,
                              })})`
                            : null}
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </table>

            <div className="spacer" />
          </ResultTableStyles>
        );
      })}
      <FooterRow isMobile={isMobile}>
        <div
          className="footer-block footer-grandtotal"
          style={{ width: isMobile ? '100%' : '40%' }}
        >
          <div
            style={{ width: isMobile ? '40%' : '50%' }}
            className="footer-child-first footer-grandtotal-key"
          >
            GRAND TOTAL
          </div>
          <div
            style={{ width: isMobile ? '60%' : '50%', paddingTop: '9px' }}
            className="footer-child footer-grandtotal-value"
          >
            <div style={{ padding: '1px 14px' }}>
              {formatCurrency({
                num: grandtotal,
                currency: 'KRW',
              })}
            </div>
            {currency !== 'KRW' ? (
              <div style={{ padding: '1px 14px' }}>
                {` (
                  ${formatCurrency({
                    num: grandtotal,
                    currency,
                    currencyRate,
                  })}
                )`}
              </div>
            ) : null}
          </div>
        </div>
        <div
          className="footer-block footer-incentive"
          style={{ width: isMobile ? '100%' : '60%' }}
        >
          <div
            style={{ width: isMobile ? '40%' : '50%' }}
            className="footer-child-first footer-incentive-key"
          >
            LOCATION INCENTIVE ADVICE
          </div>
          <div
            style={{ width: isMobile ? '60%' : '50%', padding: '10px 14px' }}
            className="footer-child footer-incentive-value"
          >
            <span>Claim your reimbursement of </span>
            <span className="incentive-number">
              {formatCurrency({
                num: grandtotal,
                currency,
                currencyRate,
                incentiveRate: 0.3,
              })}
            </span>
            <span>, or max. 30% of your total spending!</span>
          </div>
        </div>
      </FooterRow>
    </>
  );
};

const BudgetResult = (props) => {
  const { isMobile, categoryTotals } = props;
  const getGrandtotal = () => {
    let sum = 0;
    for (const item of categoryTotals) {
      console.log('aaaa', item);
      for (const key in item) {
        console.log('8888', item[key]);
        sum = sum + item[key];
      }
    }
    return sum;
  };
  const grandtotal = getGrandtotal();
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>
        <StyledPageTitle>Calculation Result</StyledPageTitle>
        <ResultTables {...props} grandtotal={grandtotal} />
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <ConfirmButton style={{ maxWidth: '300px' }} bigGray>
            Send To Your Email
          </ConfirmButton>
          <ConfirmButton style={{ maxWidth: '300px' }} bigGray>
            Download
          </ConfirmButton>
        </div>
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetResult;
