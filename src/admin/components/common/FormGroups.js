import React, { useEffect, useState } from 'react';
import { CCol, CFormGroup, CFormText, CInput, CLabel } from '@coreui/react';
import Select from 'react-select';
import styled from 'styled-components/macro';

const StyledFormGroups = styled.div`
  ${(props) => props.flexRow && `display: flex; flex-wrap: wrap;`}
`;

const NameInputFormGroup = ({ modifyType, tabTitle, onChange }) => {
  const desc =
    tabTitle === 'Item'
      ? '예)production assistant, assistant director, etc...'
      : tabTitle === 'Group'
      ? '예)production department, camera department, etc...'
      : tabTitle === 'Category'
      ? '예)labor, equipments, etc...'
      : '';
  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      {modifyType !== 'update' && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`${tabTitle}명`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md="9">
        <CInput
          onChange={onChange}
          id={tabTitle}
          name="name"
          placeholder={`${tabTitle}명을 입력해주세요`}
        />
        {modifyType !== 'update' && <CFormText>{desc}</CFormText>}
      </CCol>
    </CFormGroup>
  );
};

const TextInputFormGroup = ({ modifyType, type, tabTitle, onChange }) => {
  const desc =
    type === 'unit'
      ? '예)day, month week,, etc...'
      : type === 'remark'
      ? '예)this rate is subject to change, etc...'
      : type === 'rate'
      ? '예)100000 - 콤마없이 숫자만 입력'
      : '';
  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      {modifyType !== 'update' && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`${type}`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md="9">
        <CInput
          onChange={onChange}
          id={type}
          name={type}
          placeholder={`${type}을 입력해주세요`}
        />
        {modifyType !== 'update' && <CFormText>{desc}</CFormText>}
      </CCol>
    </CFormGroup>
  );
};

const TagsSelectFormGroup = ({ modifyType, handleOnSelect }) => {
  const availTypeTags = ['DO', 'IN', 'TV', 'TC', 'OC', 'DIY'];

  const options =
    availTypeTags &&
    availTypeTags.map((tag) => ({ value: tag, label: `${tag}` }));
  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      {modifyType !== 'update' && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`Type Of Production 설정`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={modifyType !== 'update' && '9'}>
        <Select
          isMulti={true}
          options={options}
          onChange={(e) => handleOnSelect({ e, key: 'tags', isMulti: true })}
          placeholder={
            '사용자가 Type Of Production을 선택했을 때 디폴트로 표시되게 하고 싶은 것을 선택하세요.'
          }
        />
      </CCol>
    </CFormGroup>
  );
};

const CategorySelectFormGroup = ({
  modifyType,
  categoriesList,
  handleOnSelect,
}) => {
  const options =
    categoriesList &&
    categoriesList.length > 0 &&
    categoriesList.map((cate) => ({
      value: cate.name,
      label: cate.name,
    }));
  console.log('==0022', options);
  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      <CCol md="3">
        <CLabel htmlFor="text-input">{`소속 카테고리명`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
        <Select
          options={options}
          onChange={(e) => handleOnSelect({ e, key: 'category' })}
          placeholder={'어느 카테고리의 그룹을 추가하실 건가요?'}
        />
      </CCol>
    </CFormGroup>
  );
};

const GroupsCodesSelectFormGroup = ({
  modifyType,
  categoriesList,
  handleOnSelect,
}) => {
  const categoriesCodesTaken =
    categoriesList && categoriesList.map((cate) => cate.groupsCodes).flat();

  const generateGroupsCodes = ({ num }) => {
    const elem = [];
    for (let i = 100; i <= num; i += 100) {
      elem.push(i);
    }
    return elem.filter((code) => !categoriesCodesTaken.includes(code));
  };
  const availGroupsCodes =
    categoriesCodesTaken && generateGroupsCodes({ num: 10000 });

  const options =
    availGroupsCodes &&
    availGroupsCodes.map((code) => ({ value: code, label: `${code}` }));

  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      <CCol md="3">
        <CLabel htmlFor="text-input">{`허용할 그룹 코드(들)`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
        <Select
          isMulti={true}
          options={options}
          onChange={(e) =>
            handleOnSelect({ e, key: 'groupsCodes', isMulti: true })
          }
          placeholder={'신규 카테고리에 속할 그룹 코드를 모두 선택해주세요'}
        />
      </CCol>
    </CFormGroup>
  );
};

const GroupCodeSelectFormGroup = ({
  modifyType,
  itemsGroups,
  handleOnSelect,
}) => {
  const options =
    itemsGroups &&
    itemsGroups.map((group) => ({
      value: group.code,
      label: `${group.code}. ${group.name}`,
    }));

  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      {modifyType !== 'update' && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`소속 그룹 코드`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md="9">
        <Select
          options={options}
          onChange={(e) => handleOnSelect({ e, key: 'selectedGroup' })}
          placeholder={'어느 그룹의 아이템을 추가하실 건가요?'}
        />
      </CCol>
    </CFormGroup>
  );
};

const CodeInputFormGroupForGroupTab = ({
  modifyType,
  itemsGroups,
  filteredCategory,
  handleOnSelect,
}) => {
  console.log('==1, filteredCategory', filteredCategory);
  console.log('==990 filteredCategory', filteredCategory);
  const groupsCodes = filteredCategory && filteredCategory.groupsCodes;

  const groupsCodesTaken =
    itemsGroups &&
    itemsGroups.length > 0 &&
    itemsGroups.map((group) => group.code);

  const availGroupsCodes =
    groupsCodesTaken &&
    groupsCodes &&
    groupsCodes.filter((code) => !groupsCodesTaken.includes(code));

  const options =
    availGroupsCodes &&
    availGroupsCodes.map((code) => ({ value: code, label: `${code}` }));
  console.log(
    '==2939',
    groupsCodes,
    groupsCodesTaken,
    availGroupsCodes,
    options,
  );
  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      <CCol md="3">
        <CLabel htmlFor="text-input">{`사용할 그룹 코드`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
        <Select
          options={filteredCategory && options}
          onChange={(e) => handleOnSelect({ e, key: 'code' })}
          placeholder={
            '사용가능한 그룹 코드들 중, 카테고리/그룹을 고려하여 하나를 선택'
          }
        />
      </CCol>
    </CFormGroup>
  );
};

const CodeInputFormGroupForItemTab = ({
  modifyType,
  handleOnSelect,
  availItemsCodes,
}) => {
  const options =
    availItemsCodes &&
    availItemsCodes.map((code) => ({ value: code, label: `${code}` }));
  return (
    <CFormGroup
      row
      style={modifyType === 'update' ? { minWidth: '100px' } : null}
    >
      {modifyType !== 'update' && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`사용할 아이템 코드`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={modifyType !== 'update' && '9'}>
        <Select
          options={availItemsCodes && options}
          onChange={(e) => handleOnSelect({ e, key: 'code' })}
          placeholder={
            modifyType === 'update'
              ? '101?'
              : '사용가능한 아이템 코드들 중, 하나를 선택'
          }
        />{' '}
      </CCol>
    </CFormGroup>
  );
};

const FormGroups = ({
  modifyType,
  children,
  itemsGroups,
  categoriesList,
  filteredCategory,
  tabTitle,
  activeTab,
  availItemsCodes,
  onChange,
  handleOnSelect,
  form,
}) => {
  const setGroups = [
    <StyledFormGroups flexRow={modifyType === 'update'}>
      <NameInputFormGroup
        modifyType={modifyType}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <GroupsCodesSelectFormGroup
        modifyType={modifyType}
        categoriesList={categoriesList}
        handleOnSelect={handleOnSelect}
      />
    </StyledFormGroups>,
    <StyledFormGroups flexRow={modifyType === 'update'}>
      <CategorySelectFormGroup
        modifyType={modifyType}
        categoriesList={categoriesList}
        handleOnSelect={handleOnSelect}
      />
      <CodeInputFormGroupForGroupTab
        modifyType={modifyType}
        itemsGroups={itemsGroups}
        filteredCategory={filteredCategory}
        handleOnSelect={handleOnSelect}
      />
      <NameInputFormGroup
        modifyType={modifyType}
        tabTitle={tabTitle}
        onChange={onChange}
      />
    </StyledFormGroups>,
    <StyledFormGroups flexRow={modifyType === 'update'}>
      {modifyType !== 'update' && (
        <GroupCodeSelectFormGroup
          modifyType={modifyType}
          itemsGroups={itemsGroups}
          handleOnSelect={handleOnSelect}
        />
      )}
      <CodeInputFormGroupForItemTab
        modifyType={modifyType}
        availItemsCodes={availItemsCodes}
        handleOnSelect={handleOnSelect}
      />
      <NameInputFormGroup
        modifyType={modifyType}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <TextInputFormGroup
        modifyType={modifyType}
        type={'rate'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <TextInputFormGroup
        modifyType={modifyType}
        type={'unit'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <TextInputFormGroup
        modifyType={modifyType}
        type={'remark'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <TagsSelectFormGroup
        modifyType={modifyType}
        handleOnSelect={handleOnSelect}
      />
      {/* <>{children && children}</> */}
    </StyledFormGroups>,
  ];
  return setGroups[activeTab];
};

export default FormGroups;
