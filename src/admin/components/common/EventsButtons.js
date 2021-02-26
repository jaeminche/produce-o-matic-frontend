import React from 'react';
import { CButton } from '@coreui/react';
import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 27.6px;
  ${(props) => props.updateItemBtnClicked && `margin-right: -15px;`}
`;

const EventsButtons = (props) => {
  const { updateItemBtnClicked, toggleUpdateItem, onSubmit, onDelete } = props;
  return (
    <StyledWrapper updateItemBtnClicked={updateItemBtnClicked}>
      {updateItemBtnClicked && (
        <CButton size="sm" color="warning" className="ml-1" onClick={onSubmit}>
          SUBMIT
        </CButton>
      )}
      <CButton
        size="sm"
        color="info"
        className="ml-1"
        onClick={toggleUpdateItem}
      >
        {updateItemBtnClicked ? 'Cancel' : 'Update'}
      </CButton>
      <CButton size="sm" color="danger" className="ml-1" onClick={onDelete}>
        Delete
      </CButton>
    </StyledWrapper>
  );
};

export default EventsButtons;
