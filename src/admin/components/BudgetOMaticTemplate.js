import React, { useEffect, useState } from 'react';
import BudgetOMaticTemplateTable from './tables/BudgetOMaticTemplateTable';
import BudgetOMaticTemplateModifyContainer from '../containers/budgetomatic/BudgetOMaticTemplateModifyContainer';

const BudgetOMaticTemplate = (props) => {
  const { activeGroup, ...rest } = props;
  const hasActiveGroup = activeGroup && activeGroup.open;
  return hasActiveGroup ? (
    <BudgetOMaticTemplateModifyContainer
      modifyType="update"
      hasActiveGroup={hasActiveGroup}
      activeGroup={activeGroup}
      {...rest}
    />
  ) : (
    <>
      <BudgetOMaticTemplateTable {...props} />
    </>
  );
};

export default BudgetOMaticTemplate;
