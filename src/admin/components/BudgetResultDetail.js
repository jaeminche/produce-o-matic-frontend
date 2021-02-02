import React, { useEffect, useState } from 'react';
import Table from '../components/common/Table';
import BudgetResult from '../../components/budgetOMatic/BudgetResult';

const BudgetResultDetail = (props) => {
  const { targetResult, isMobile } = props;
  const {
    _id,
    uuid,
    createdAt,
    email,
    createdAt_local,
    createdAt_utc,
    categoryTotals,
    result,
    grandTotal,
    currency,
    currencyRate,
  } = { ...targetResult };

  const fields = ['title', 'data'];
  const itemsData = [
    { title: '견적 ID', data: uuid },
    { title: 'Grand Total', data: grandTotal },
    { title: '통화', data: currency },
    { title: '사용자 email', data: email },
    { title: '생성일(로컬)*', data: createdAt_local },
    { title: '생성일(UTC)', data: createdAt_utc },
    { title: '데이터베이스 ID', data: _id },
  ];
  return (
    <>
      {targetResult && (
        <>
          <Table
            title={'Budget Result Detail'}
            itemsData={itemsData}
            fields={fields}
            itemsPerPage={10}
            pagination={true}
            onRowClick={false}
            description={
              '*생성일(로컬): 관리자의 현위치 시각으로 변환하여 보여주고 있습니다'
            }
          />
          <BudgetResult
            admin
            data={result}
            categoryTotals={categoryTotals}
            currency={currency}
            currencyRate={currencyRate}
            grandTotal={grandTotal}
            isMobile={isMobile}
          />
        </>
      )}
    </>
  );
};

export default BudgetResultDetail;
