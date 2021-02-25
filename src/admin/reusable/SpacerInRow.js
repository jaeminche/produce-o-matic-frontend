import React from 'react';
import { CButton } from '@coreui/react';
import { useHistory } from 'react-router-dom';

const SpacerInRow = () => {
  return (
    <span
      style={{
        marginRight: '5px',
        marginLeft: '5px',
        fontWeight: 'bolder',
        color: 'blue',
      }}
    >
      |
    </span>
  );
};

export default React.memo(SpacerInRow);
