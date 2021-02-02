import React, { useEffect, useState } from 'react';
import BudgetOMaticTemplateTable from './tables/BudgetOMaticTemplateTable';

const BudgetOMaticTemplate = (props) => {
  return (
    <>
      <BudgetOMaticTemplateTable {...props} />
    </>
  );
};

export default BudgetOMaticTemplate;
