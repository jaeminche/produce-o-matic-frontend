import React from 'react';
import { CButton } from '@coreui/react';
import { useHistory } from 'react-router-dom';

const AddCategory = (props) => {
  const { name, text, ...rest } = props;
  const history = useHistory();

  return (
    <div style={{ marginRight: '10px' }} className="card-header-actions">
      <CButton
        color="info"
        size="lg"
        onClick={() => {
          history.push(`/firstavenue/budgetomatic-page/add-category`);
        }}
      >
        Add Category / Group / Item
      </CButton>
    </div>
  );
};

export default React.memo(AddCategory);
