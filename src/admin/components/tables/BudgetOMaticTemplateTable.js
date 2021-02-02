import React, { useEffect, useState } from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CCollapse,
  CButton,
} from '@coreui/react';
import { DocsLink } from '../../reusable';
import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';

const StyledWrapper = styled.div`
  .floatRight {
    float: right;
  }
  .hover {
    &:hover {
      color: ${palette.budgetomatic.text[1]};
    }
  }
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
const fields = [
  'code',
  'category',
  'name',
  {
    key: 'modify_group',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false,
  },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false,
  },
];

const BudgetOMaticTemplateTable = (props) => {
  const { DATASETS, history } = props;
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  return (
    <StyledWrapper>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Budget-O-Matic Template
              <DocsLink name="CModal" />
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={DATASETS}
                fields={fields}
                itemsPerPage={10}
                hover
                sorter
                pagination
                onRowClick={(item, index) => {
                  toggleDetails(index);
                }}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  modify_group: (item, index) => {
                    return (
                      <>
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={() => {
                              history.push(
                                `/firstavenue/budgetomatic-page/templates/${item._id}`,
                              );
                            }}
                          >
                            Modify
                          </CButton>
                        </td>
                      </>
                    );
                  },
                  show_details: (item, index) => {
                    return (
                      <>
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={() => {
                              toggleDetails(index);
                            }}
                          >
                            {details.includes(index) ? 'Hide' : 'Show'}
                          </CButton>
                        </td>
                      </>
                    );
                  },
                  details: (item, index) => {
                    return (
                      <CCollapse show={details.includes(index)}>
                        <CCardBody>
                          <CButton
                            size="sm"
                            color="danger"
                            className="ml-1 floatRight"
                          >
                            Delete Group
                          </CButton>
                          <p className="text-muted">
                            <strong>
                              This group has {item.budgetItems.length} items:
                            </strong>
                          </p>
                          <p className="text-muted">
                            {item.budgetItems.map((item) => (
                              <div
                                style={{ marginBottom: '10px' }}
                                className={'hover'}
                              >
                                <span>{item.code}. </span>
                                <span>{item.name}</span>
                                <span className={'floatRight'}>
                                  <CButton size="sm" color="info">
                                    Modify
                                  </CButton>
                                  <CButton
                                    size="sm"
                                    color="danger"
                                    className="ml-1"
                                  >
                                    Delete
                                  </CButton>
                                </span>
                              </div>
                            ))}
                          </p>
                        </CCardBody>
                      </CCollapse>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </StyledWrapper>
  );
};

export default BudgetOMaticTemplateTable;
