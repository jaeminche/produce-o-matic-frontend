import React from 'react';
import { useDispatch } from 'react-redux';
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
import { GetOneFormGroup } from '../common/FormGroups';
import BudgetOMaticTemplateModifyContainer from '../../containers/budgetomatic/BudgetOMaticTemplateModifyContainer';
import EventsButtons from '../common/EventsButtons';

const StyledWrapper = styled.div`
  max-width: 1100px;
  .floatRight {
    float: right;
  }
  .hover {
    &:hover {
      color: ${palette.budgetomatic.text[1]};
    }
  }
`;

const StyledFormGroups = styled.div`
  margin-left: -15px;
  .form-group {
    margin-bottom: 0;
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
    key: 'submit_update_group',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false,
  },
  {
    key: 'update_group',
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

const BudgetItemTemplate = (props) => {
  const {
    item,
    index,
    groupCode,
    activeItem,
    toggleUpdateItem,
    handleDelete,
  } = props;
  const id = item._id;
  const isActiveItem =
    activeItem.groupCode === groupCode &&
    activeItem.key === index &&
    activeItem.open;

  return (
    <div style={{ marginBottom: '10px' }} className={'hover'} key={index}>
      {isActiveItem ? (
        <BudgetOMaticTemplateModifyContainer
          modifyType={'update'}
          toggleUpdateItem={toggleUpdateItem}
          isActiveItem={isActiveItem}
          groupCode={groupCode}
          updateItemTarget={item}
          key={index}
        />
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
            handleDelete={handleDelete}
            id={id}
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
  const { item, activeItem, toggleUpdateItem, handleDelete } = props;
  const { code } = item;
  return item.budgetItems.map((budgetItem, index) => (
    <BudgetItemTemplate
      item={budgetItem}
      index={index}
      activeItem={activeItem}
      toggleUpdateItem={() => toggleUpdateItem(code, index)}
      groupCode={code}
      handleDelete={handleDelete}
    />
  ));
};

const BudgetOMaticTemplateTable = (props) => {
  const {
    DATASETS,
    details,
    setDetails,
    toggleUpdateGroup,
    activeItem,
    toggleUpdateItem,
    onSubmit,
    handleDelete,
    form,
    itemsGroups,
    filteredCategory,
    handleOnSelect,
    activeGroup,
    categoriesList,
    activePage,
    setActivePage,
  } = props;

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

  function isActiveGroup(group) {
    return activeGroup && activeGroup.code === group.code && activeGroup.open;
  }

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
                activePage={activePage}
                onPageChange={(e) => {
                  setActivePage(e);
                }}
                onRowClick={(item, index) => {}}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  code: (group) => {
                    return isActiveGroup(group) ? (
                      <td>
                        <StyledFormGroups>
                          <GetOneFormGroup
                            target="CodeInputFormGroupForGroupTab"
                            updateBtnClicked
                            form={form}
                            itemsGroups={itemsGroups}
                            filteredCategory={filteredCategory}
                            handleOnSelect={handleOnSelect}
                            updateGroupTarget={activeGroup}
                          />
                        </StyledFormGroups>
                      </td>
                    ) : (
                      <td>{group.code}</td>
                    );
                  },
                  category: (group) => {
                    return isActiveGroup(group) ? (
                      <td>
                        <StyledFormGroups>
                          <GetOneFormGroup
                            target="CategorySelectFormGroup"
                            updateBtnClicked
                            form={form}
                            itemsGroups={itemsGroups}
                            filteredCategory={filteredCategory}
                            handleOnSelect={handleOnSelect}
                            updateGroupTarget={activeGroup}
                            categoriesList={categoriesList}
                          />
                        </StyledFormGroups>
                      </td>
                    ) : (
                      <td>{group.category}</td>
                    );
                  },
                  name: (group) => {
                    return isActiveGroup(group) ? (
                      <td>
                        <StyledFormGroups>
                          <GetOneFormGroup
                            target="NameInputFormGroup"
                            updateBtnClicked
                            form={form}
                            itemsGroups={itemsGroups}
                            filteredCategory={filteredCategory}
                            handleOnSelect={handleOnSelect}
                            updateGroupTarget={activeGroup}
                          />
                        </StyledFormGroups>
                      </td>
                    ) : (
                      <td>{group.name}</td>
                    );
                  },
                  submit_update_group: (group, index) => {
                    return isActiveGroup(group) ? (
                      <td className="py-2">
                        <CButton
                          color="warning"
                          variant="outline"
                          shape="square"
                          size="sm"
                          style={{ width: 'max-content', float: 'right' }}
                          onClick={() => onSubmit()}
                        >
                          Submit
                        </CButton>
                      </td>
                    ) : (
                      <td className="py-2"></td>
                    );
                  },
                  update_group: (group, index) => {
                    return (
                      <>
                        <td
                          className="py-2"
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            style={{ width: 'max-content' }}
                            onClick={() => {
                              toggleUpdateGroup(group);
                            }}
                          >
                            {isActiveGroup(group) ? 'Cancel' : 'Update Group'}
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
                  details: (group, index) => {
                    return (
                      <CCollapse show={details.includes(index)}>
                        <CCardBody>
                          <CButton
                            size="sm"
                            color="danger"
                            className="ml-1 floatRight"
                            onClick={() =>
                              handleDelete({
                                type: 'group',
                                id: group._id,
                                budgetItemsLen: group.budgetItems.length,
                              })
                            }
                          >
                            Delete Group
                          </CButton>
                          <p className="text-muted">
                            <strong>
                              This group has {group.budgetItems.length} items:
                            </strong>
                          </p>
                          <p className="text-muted">
                            <BudgetItemsList
                              item={group}
                              activeItem={activeItem}
                              toggleUpdateItem={toggleUpdateItem}
                              onSubmit={onSubmit}
                              handleDelete={handleDelete}
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
