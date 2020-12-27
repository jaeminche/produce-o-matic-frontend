import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { ConfirmButton } from '../../components/common/Button';
import { useTable } from 'react-table';
import { formatCurrency } from '../../lib/format';
import { CSVLink, CSVDownload } from 'react-csv';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

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
  .styled-centered {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 50px 0 80px 0;
    .download-table-xls-button {
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.24rem 1rem;
      color: white;
      outline: none;
      cursor: pointer;

      background: ${palette.gray[8]};

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${palette.gray[6]};
        }
      }

      &:disabled {
        background: ${palette.gray[3]};
        color: ${palette.gray[5]};
        cursor: not-allowed;
      }
      max-width: 300px;
      width: 100%;
      height: 84px;
      background: ${palette.button[1]};
      border-radius: 100px;
      align-self: center;
      margin: 0 auto;
    }
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

const FooterRow = styled.div`
  height: ${(props) => (props.isMobile ? 'auto' : '60px')};
  border: 1px solid #a5a5a5;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: space-between;
  margin-bottom: 80px;
  .vertical-center {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .footer-block {
    display: flex;
    flex-direction: row;
    width: 50%;
  }
  .footer-child-first {
    background: #1b1b1b;
    color: white;
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

const ResultTableStyles = styled.table`
  width: 100%;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  ${mq({
    fontSize: ['13px', '16px', , '18px', , , ,],
  })}
  width: 100% !important;
  border-spacing: 0;

  table {
    width: inherit;
    border-collapse: collapse;
  }
  table,
  tr {
    border: 1px solid rgb(165, 165, 165);
  }

  .group-table {
    margin-bottom: 5px;
  }
  [class~='group-table']:last-of-type {
    margin-bottom: 0;
  }

  .flex-between {
    width: 100%;
    /* padding: ${(props) => (props.isMobile ? '8px 20px' : '19px 40px')}; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    background: #1b1b1b;
    color: white;
    th,
    td {
      padding: ${(props) => (props.isMobile ? '0 20px' : '0 40px')};
      border-right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }

  .groupname {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: ${(props) => (props.isMobile ? 'center' : 'center')};
    color: rgba(0, 32, 51, 1);
  }

  .subtotal {
    width: 100%;
    background: #ecf3ff;
    color: black;
  }

  tr {
    height: 60px;
  }
  tr th,
  td {
    margin: 0;
    border-right: 1px solid #a5a5a5;

    :last-child {
      border-right: 0;
    }
  }
  .groupname th {
    border-right: 0;
  }
  tbody {
    tr {
      background: white;
    }
  }
`;

function ResultTable({ subtotal, columns, data, currency, currencyRate }) {
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
    <table {...getTableProps()}>
      <thead style={{ width: '100%' }}>
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

const CellSpacer = ({ type, iterateNo }) => {
  const Cell = (key) =>
    type === 'td' ? (
      <td style={{ display: 'none' }} key={key} />
    ) : (
      <th style={{ display: 'none' }} key={key} />
    );
  return Array(iterateNo)
    .fill()
    .map((item, key) => <Cell key={key} />);
};

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
    <table id="mytable" style={{ width: '100%' }}>
      {Object.entries(data).map(([key, value]) => {
        const categoryname = key;
        const categoryTotal = () => {
          for (const item of categoryTotals) {
            for (const name in item) {
              if (name === categoryname) return item[name];
            }
          }
        };
        return categoryTotal() ? (
          <>
            <ResultTableStyles
              className="category-table"
              style={{
                width: '100%',
                marginTop: '50px',
                border: '1px solid rgb(165, 165, 165)',
              }}
              key={key}
              isMobile={isMobile}
            >
              <thead style={{ width: '100%' }}>
                <tr className="flex-between">
                  <th>{categoryname.toUpperCase()}</th>
                  <CellSpacer type="th" iterateNo={4} />
                  <th>
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
                  </th>
                </tr>
              </thead>
              {value.map(
                (group, key) =>
                  group.checked && (
                    <table
                      key={key}
                      className="group-table"
                      style={{
                        width: '100%',
                      }}
                    >
                      <thead style={{ width: '100%', display: 'block' }}>
                        <tr style={{ width: '100%' }} className="groupname">
                          <th>{`${group.name.toUpperCase()}`}</th>
                          <CellSpacer type="th" iterateNo={5} />
                        </tr>
                      </thead>
                      <ResultTable
                        columns={columns}
                        subtotal={group.subtotal}
                        data={group.budgetItems}
                        currency={currency}
                        currencyRate={currencyRate}
                      ></ResultTable>
                      <table
                        style={{
                          width: '100%',
                          border: '0',
                        }}
                      >
                        <tfoot>
                          <tr
                            style={{ width: '100%' }}
                            className="flex-between subtotal"
                          >
                            <td>{`subtotal`}</td>
                            <CellSpacer type="td" iterateNo={4} />
                            <td>
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
                            </td>
                          </tr>
                        </tfoot>
                      </table>

                      <div className="spacer" />
                    </table>
                  ),
              )}
              <div className="spacer" />
            </ResultTableStyles>
            <table>
              <tfoot>
                <tr>
                  <CellSpacer type="td" iterateNo={4} />
                </tr>
              </tfoot>
            </table>
          </>
        ) : null;
      })}
      <FooterRow isMobile={isMobile}>
        <div
          className="footer-block footer-grandtotal"
          style={{ width: isMobile ? '100%' : '40%' }}
        >
          <div
            style={{ width: isMobile ? '40%' : '50%' }}
            className="vertical-center footer-child-first footer-grandtotal-key"
          >
            GRAND TOTAL
          </div>
          <div
            style={{ width: isMobile ? '60%' : '50%' }}
            className="vertical-center footer-grandtotal-value"
          >
            <div style={{ padding: '10px 14px' }}>
              {formatCurrency({
                num: grandtotal,
                currency: 'KRW',
              })}
            </div>
            {currency !== 'KRW' ? (
              <div style={{ padding: '10px 14px' }}>
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
            className="vertical-center footer-child-first footer-incentive-key"
          >
            LOCATION INCENTIVE ADVICE
          </div>
          <div
            style={{ width: isMobile ? '60%' : '50%', padding: '10px 14px' }}
            className="footer-incentive-value"
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
    </table>
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
          <div className="styled-centered">
            <ReactHTMLTableToExcel
              id="mytableButton"
              className="download-table-xls-button"
              table="mytable"
              filename="budgetomatic"
              sheet="budgetomatic"
              buttonText="Download"
            />
          </div>
          {/* <CSVLink
            data={[
              ['firstname', 'lastname', 'email'],
              ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
              ['Raed', 'Labes', 'rl@smthing.co.com'],
              ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
            ]}
          >
            Download me
          </CSVLink> */}
        </div>
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetResult;
