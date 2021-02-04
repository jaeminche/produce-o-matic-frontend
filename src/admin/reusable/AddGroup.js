import React from 'react';
import { CButton } from '@coreui/react';
import { useHistory } from 'react-router-dom';

const AddGroup = (props) => {
  const { name, text, ...rest } = props;
  const history = useHistory();

  return (
    <div className="card-header-actions">
      <CButton
        color="info"
        size="lg"
        onClick={() => {
          history.push(`/firstavenue/budgetomatic-page/add-group`);
        }}
      >
        Add Group
      </CButton>
    </div>
  );
};

export default React.memo(AddGroup);
