import React from 'react';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { PageTitle } from '../common/SmallComponents';
import { useTable } from 'react-table';

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

const ResultTableStyles = styled.div`
  padding: 1rem;

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;

    tr {
      ${
        '' /* :first-child {
        td {
          border-top: 1px solid black;
        }
      } */
      }

      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    tfoot {
      tr:first-child {
        td {
          border-top: 2px solid black;
        }
      }
      font-weight: bolder;
    }
  }
`;

function ResultTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
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
  const { data, categoryTotals, isMobile } = props;
  const columns = React.useMemo(
    () => [
      {
        Header: 'null',
        columns: [
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
            Header: 'UNIT',
            accessor: 'unit',
          },
          {
            Header: 'RATE',
            accessor: 'rate',
          },
          {
            Header: 'TOTAL',
            accessor: 'itemtotal',
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
          <div key={key}>
            {value.map(
              (group, key) =>
                group.checked && (
                  <ResultTableStyles key={key}>
                    <div>
                      {categoryname}
                      {group.name}
                      {categoryTotal()}
                    </div>
                    <ResultTable columns={columns} data={group.budgetItems} />
                    <div>subtotal</div>
                  </ResultTableStyles>
                ),
            )}
          </div>
        );
      })}
    </>
  );
};

const BudgetResult = (props) => {
  const { isMobile } = props;
  return (
    <BudgetOMaticBlock>
      <Wrapper isMobile={isMobile}>
        <PageTitle text="Calculation Result" isMobile={isMobile} />
        <ResultTables {...props} />
      </Wrapper>
    </BudgetOMaticBlock>
  );
};

export default BudgetResult;
