import React from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react';
import { DocsLink } from '../../reusable';

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
    history,
  } = props;
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              {title}
              <DocsLink name="CModal" />
            </CCardHeader>
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
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Table;
