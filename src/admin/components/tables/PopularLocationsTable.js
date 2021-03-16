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
const fields = [
  '_id',
  'uuid',
  'grandTotal',
  'currency',
  'currencyRate',
  'createdAt_local',
  'createdAt_utc',
  'email',
];

const PopularLocationsTable = (props) => {
  const { budgetResults, history } = props;
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Popular Locations 목록</CCardHeader>
            <CCardBody>
              <CDataTable
                items={budgetResults}
                fields={fields}
                itemsPerPage={10}
                pagination
                onRowClick={(item) =>
                  history.push(
                    `/firstavenue/budgetomatic-page/results-list/${item._id}`,
                  )
                }
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

export default PopularLocationsTable;
