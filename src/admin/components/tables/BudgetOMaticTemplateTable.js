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
import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';
import { AddCategory, SpacerInRow } from '../../reusable';
import FormGroups from '../common/FormGroups';
import BudgetOMaticTemplateModifyContainer from '../../containers/budgetomatic/BudgetOMaticTemplateModifyContainer';

const StyledWrapper = styled.div`
  max-width: 1100px;
  .floatRight {
    float: right;
  }
  .flexRow {
    display: flex;
    flex-direction: row;
  }
  .buttonHeight {
    height: 27.6px;
  }
  .hover {
    &:hover {
      color: ${palette.budgetomatic.text[1]};
    }
  }
`;

const TwoFlexboxes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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

const EventsButtons = (props) => {
  const { isActiveItem, toggleUpdateItem, code, index } = props;
  return (
    <div className={'flexRow buttonHeight'}>
      {isActiveItem && (
        <CButton size="sm" color="warning">
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
    </div>
  );
};

const BudgetItemTemplate = (props) => {
  const { item, index, groupCode, activeItem, toggleUpdateItem } = props;
  const isActiveItem =
    activeItem.groupCode === groupCode &&
    activeItem.key === index &&
    activeItem.open;

  return (
    <div style={{ marginBottom: '10px' }} className={'hover'} key={index}>
      {isActiveItem ? (
        <TwoFlexboxes>
          <BudgetOMaticTemplateModifyContainer
            modifyType={'update'}
            groupCode={groupCode}
            updateItemTarget={item}
          />
          <EventsButtons
            index={index}
            groupCode={groupCode}
            isActiveItem={isActiveItem}
            toggleUpdateItem={toggleUpdateItem}
          />
        </TwoFlexboxes>
      ) : (
        <TwoFlexboxes>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', marginRight: '15px' }}
          >
            <span>{item.code}. </span>
            <span>{item.name}</span>
            <SpacerInRow />
            {item.rate.length > 0 &&
              item.rate.map((rate, index) => (
                <span>
                  ₩{rate}
                  {index > 0 && index !== item.rate.length - 1 && ' / '}
                </span>
              ))}
            <SpacerInRow slash />
            <span>{item.unit}</span>
            <SpacerInRow />
            <span>remark : {item.remark ? 'O' : 'X'}</span>
            <SpacerInRow />
            <span>
              {item.tags.length > 0 ? `  tags : ` : null}
              {item.tags.length > 0
                ? item.tags.map((tag) => (
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                    >
                      {tag}
                    </CButton>
                  ))
                : null}
            </span>
          </div>
          <EventsButtons
            index={index}
            isActiveItem={isActiveItem}
            toggleUpdateItem={toggleUpdateItem}
          />
        </TwoFlexboxes>
      )}
    </div>
  );
};

const BudgetItemsList = (props) => {
  const { item, activeItem, toggleUpdateItem } = props;
  const { code } = item;
  return item.budgetItems.map((budgetItem, index) => (
    <BudgetItemTemplate
      item={budgetItem}
      index={index}
      activeItem={activeItem}
      toggleUpdateItem={() => toggleUpdateItem(code, index)}
      groupCode={code}
    />
  ));
};

const BudgetOMaticTemplateTable = (props) => {
  const { DATASETS, history, activeItem, toggleUpdateItem } = props;
  const [details, setDetails] = useState([]);

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
              {/* <AddGroup /> */}
              <AddCategory />
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
                  // toggleDetails(index);
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
                            style={{ width: 'max-content' }}
                            onClick={() => {
                              history.push(
                                `/firstavenue/budgetomatic-page/templates/${item._id}`,
                              );
                            }}
                          >
                            Update GROUP
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
                            <BudgetItemsList
                              item={item}
                              activeItem={activeItem}
                              toggleUpdateItem={toggleUpdateItem}
                            />
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
