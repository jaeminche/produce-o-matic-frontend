import React from 'react';
import { CButton } from '@coreui/react';
import { useHistory } from 'react-router-dom';

const SpacerInRow = (props) => {
  const { slash } = props;
  return (
    <span
      style={{
        marginRight: '5px',
        marginLeft: '5px',
        fontWeight: 'bolder',
        color: 'blue',
      }}
    >
      {slash ? '/' : '|'}
    </span>
  );
};

export default React.memo(SpacerInRow);
