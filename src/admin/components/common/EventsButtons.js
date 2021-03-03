import React from 'react';
import { CButton } from '@coreui/react';
import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 27.6px;
  ${(props) => props.isActiveItem && `margin-right: -15px;`}
`;

const EventsButtons = (props) => {
  const { isActiveItem, toggleUpdateItem, code, index, onSubmit } = props;
  return (
    <StyledWrapper isActiveItem={isActiveItem}>
      {isActiveItem && (
        <CButton size="sm" color="warning" onClick={onSubmit}>
          SUBMIT
        </CButton>
      )}
      <CButton
        size="sm"
        color="info"
        className="ml-1"
        onClick={() => toggleUpdateItem(code, index)}
      >
        {isActiveItem ? 'Cancel' : 'Update'}
      </CButton>
      <CButton size="sm" color="danger" className="ml-1">
        Delete
      </CButton>
    </StyledWrapper>
  );
};

export default EventsButtons;
