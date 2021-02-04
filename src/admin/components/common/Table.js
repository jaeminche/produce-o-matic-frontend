import React from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react';
import styled from 'styled-components/macro';

const Description = styled.div`
  font-size: 12px;
`;

const getBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'secondary';
    case 'Pending':
      return 'warning';
    case 'Banned':
      return 'danger';
    default:
      return 'primary';
  }
};
// const fields = [
//   '_id',
//   'uuid',
//   'grandTotal',
//   'currency',
//   'currencyRate',
//   'createdAt_local',
//   'createdAt_utc',
//   'email',
// ];

const Table = (props) => {
  const {
    title,
    itemsData, // * [{}, {}...]
    fields,
    itemsPerPage,
    pagination,
    onRowClick,
    description,
    history,
  } = props;
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>{title}</CCardHeader>
            <CCardBody>
              <CDataTable
                items={itemsData}
                fields={fields}
                itemsPerPage={itemsPerPage}
                pagination={pagination}
                onRowClick={onRowClick}
                // scopedSlots={{
                //   status: (item) => (
                //     <td>
                //       <CBadge color={getBadge(item._id)}>{item._id}</CBadge>
                //     </td>
                //   ),
                // }}
                description={description && description}
              />
            </CCardBody>
            {description && (
              <CCardFooter>
                <Description>{description}</Description>
              </CCardFooter>
            )}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Table;
