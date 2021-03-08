import React, { useEffect, useState } from 'react';
import BudgetOMaticTemplateTable from './tables/BudgetOMaticTemplateTable';
import BudgetOMaticTemplateModifyContainer from '../containers/budgetomatic/BudgetOMaticTemplateModifyContainer';

const BudgetOMaticTemplate = (props) => {
  const { activeGroup, ...rest } = props;
  const hasActiveGroup = activeGroup && activeGroup.open;
  const [activePage, setActivePage] = useState(1);
  return hasActiveGroup ? (
    <BudgetOMaticTemplateModifyContainer
      modifyType="update"
      hasActiveGroup={hasActiveGroup}
      activeGroup={activeGroup}
      activePage={activePage}
      setActivePage={setActivePage}
      {...rest}
    />
  ) : (
    <>
      <BudgetOMaticTemplateTable
        activePage={activePage}
        setActivePage={setActivePage}
        {...props}
      />
    </>
  );
};

export default BudgetOMaticTemplate;
