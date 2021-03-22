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
  {
    key: 'location',
    label: '썸네일',
    _style: { width: '100px' },
    sorter: false,
    filter: false,
  },
  'title',
  {
    key: 'name',
    label: 'Type',
    sorter: false,
    filter: false,
  },
  {
    key: 'originalname',
    label: 'File name',
    sorter: false,
    filter: false,
  },
  {
    key: 'toggleDisplay',
    label: 'P.Location페이지에 표시',
    sorter: false,
    filter: false,
  },
  {
    key: 'toggleDisplayOnMain',
    label: '메인페이지에 표시',
    sorter: false,
    filter: false,
  },
];

const PopularLocationsTable = (props) => {
  const { history, popularLocations } = props;
  console.log('==200', popularLocations);
  const { thumbnail } = { ...popularLocations };
  // const { location, originalname } = { ...thumbnail };
  // const { {...thumbnail}, title, name, toggleDisplay, toggleDisplayOnMain } = {
  //   ...popularLocations,
  // };
  const _locations = { ...popularLocations, ...thumbnail };
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Popular Locations 데이터 목록</CCardHeader>
            <CCardBody>
              <CDataTable
                items={popularLocations}
                fields={fields}
                itemsPerPage={10}
                pagination
                onRowClick={(item) =>
                  history.push(
                    `/firstavenue/budgetomatic-page/results-list/${item._id}`,
                  )
                }
                scopedSlots={{
                  location: (item) => (
                    <td>
                      <div>
                        <img
                          style={{ width: '100px' }}
                          src={item.thumbnail.location}
                          alt={item.thumbnail.originalname}
                        />
                      </div>
                    </td>
                  ),
                  originalname: (item) => (
                    <td>
                      <div>{item.thumbnail.originalname}</div>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default PopularLocationsTable;
