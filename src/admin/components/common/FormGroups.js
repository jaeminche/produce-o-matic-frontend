import React, { useEffect, useState } from 'react';
import {
  CCol,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CCard,
  CCardBody,
  CSwitch,
} from '@coreui/react';
import Select from 'react-select';
import styled from 'styled-components/macro';
import { SpacerInRow } from '../../reusable';

const StyledFormGroups = styled.div`
  ${(props) =>
    props.flexRow && `display: flex; flex-wrap: wrap; margin-left: -15px;`}
`;

const maxWidth = {
  code: '130px',
  name: '150px',
  rate: '110px',
  unit: '80px',
  remark: '200px',
  multiSelects: '200px',
};
const minWidth = {
  code: '130px',
  name: '150px',
  rate: '110px',
  unit: '80px',
  remark: '200px',
  multiSelects: '200px',
};
const width = {
  code: '130px',
  name: '150px',
  rate: '110px',
  unit: '80px',
  remark: '200px',
  multiSelects: '200px',
};

const NameInputFormGroup = ({
  updateBtnClicked,
  defaultValue,
  tabTitle,
  onChange,
  form,
}) => {
  const desc =
    tabTitle === 'Item'
      ? '예) production assistant, assistant director, etc...'
      : tabTitle === 'Group'
      ? '예) production department, camera department, etc...'
      : tabTitle === 'Category'
      ? '예) labor, equipments, etc...'
      : '';
  return (
    <CFormGroup
      row={!updateBtnClicked}
      style={updateBtnClicked ? { width: '170px' } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`${tabTitle}명`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked ? '9' : null}>
        <CInput
          defaultValue={defaultValue && defaultValue}
          onChange={onChange}
          id={tabTitle}
          name="name"
          placeholder={`${tabTitle}명을 입력해주세요`}
          required
        />
        {!updateBtnClicked && <CFormText>{desc}</CFormText>}
      </CCol>
    </CFormGroup>
  );
};

const TextInputFormGroup = ({
  updateBtnClicked,
  defaultValue,
  type,
  tabTitle,
  onChange,
}) => {
  const desc =
    type === 'unit'
      ? '예) day, month week,, etc...'
      : type === 'remark'
      ? '예) this rate is subject to change, etc...'
      : type === 'rate'
      ? '예) 100000 - 콤마없이 숫자만 입력'
      : type === 'title'
      ? '예) Taekwondowon, a versatile location for film and TV'
      : type === 'subtitle'
      ? '예) Discover the charms of Muju Taekwondowon a special filming location of South Korea'
      : type === 'text'
      ? '예) TaeKwondowon is ...(디테일 페이지에 들어갈 설명)'
      : type === 'youtubePath'
      ? '예) https://www.youtube.com/embed/joiGm8xre04'
      : '';

  return (
    <CFormGroup
      row={!updateBtnClicked}
      style={updateBtnClicked ? { width: `${width[type]}` } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`${type}`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked ? '9' : null}>
        <CInput
          defaultValue={defaultValue && defaultValue}
          onChange={onChange}
          id={type}
          name={type}
          placeholder={`${type}을 입력해주세요`}
        />
        {!updateBtnClicked && <CFormText>{desc}</CFormText>}
      </CCol>
    </CFormGroup>
  );
};

const SwitchInputFormGroup = ({
  updateBtnClicked,
  defaultValue,
  toggle,
  type,
  tabTitle,
  setToggle,
}) => {
  const desc = '';
  console.log('==401', toggle);
  return (
    <CFormGroup
      row={!updateBtnClicked}
      style={updateBtnClicked ? { width: `${width[type]}` } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`${type}`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked ? '9' : null}>
        <CSwitch
          className={'mx-1'}
          shape={'pill'}
          color={'info'}
          labelOn={'\u2713'}
          labelOff={'\u2715'}
          defaultChecked
          checked={toggle}
          onChange={setToggle}
          id={type}
          name={type}
        />
        {!updateBtnClicked && <CFormText>{desc}</CFormText>}
      </CCol>
    </CFormGroup>
  );
};

const TagsSelectFormGroup = ({
  updateBtnClicked,
  defaultValue,
  handleOnSelect,
  type,
}) => {
  const availTypeTags = ['DO', 'IN', 'TV', 'TC', 'OC', 'DIY'];

  const options =
    availTypeTags &&
    availTypeTags.map((tag) => ({ value: tag, label: `${tag}` }));
  return (
    <CFormGroup
      row={!updateBtnClicked}
      style={updateBtnClicked ? { minWidth: `${minWidth[type]}` } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`Type Of Production 설정`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked && '9'}>
        <Select
          isMulti
          defaultValue={
            defaultValue &&
            defaultValue.map((value) => {
              return { label: value, value: value };
            })
          }
          name={'tags'}
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
  updateBtnClicked,
  defaultValue,
  categoriesList,
  handleOnSelect,
}) => {
  console.log('==933', categoriesList);
  const options =
    categoriesList &&
    categoriesList.length > 0 &&
    categoriesList.map((cate) => ({
      value: cate.name,
      label: cate.name,
    }));
  return (
    <CFormGroup
      row={!updateBtnClicked}
      style={updateBtnClicked ? { maxWidth: '120px' } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`소속 카테고리명`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked ? '9' : null}>
        <Select
          defaultValue={
            defaultValue && { label: defaultValue, value: defaultValue }
          }
          options={options}
          onChange={(e) => handleOnSelect({ e, key: 'category' })}
          placeholder={'어느 카테고리의 그룹을 추가하실 건가요?'}
        />
      </CCol>
    </CFormGroup>
  );
};

const GroupsCodesSelectFormGroup = ({
  updateBtnClicked,
  defaultValue,
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
      row={!updateBtnClicked}
      style={updateBtnClicked ? { maxWidth: '100px' } : null}
    >
      <CCol md="3">
        <CLabel htmlFor="text-input">{`허용할 그룹 코드(들)`}</CLabel>
      </CCol>
      <CCol xs="12" md={!updateBtnClicked ? '9' : null}>
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
  updateBtnClicked,
  defaultValue,
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
      row={!updateBtnClicked}
      style={updateBtnClicked ? { maxWidth: '100px' } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`소속 그룹 코드`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked ? '9' : null}>
        <Select
          options={options}
          onChange={(e) => handleOnSelect({ e, key: 'selectedGroup' })}
          placeholder={'어느 그룹의 아이템을 추가하실 건가요?'}
        />
      </CCol>
    </CFormGroup>
  );
};

const NameTypeSelectFormGroup = ({
  defaultValue,
  form,
  key,
  handleOnSelect,
}) => {
  const options = [
    {
      value: 'PopularLocations',
      label: 'PopularLocations',
    },
    {
      value: 'LocationIncentive',
      label: 'LocationIncentive',
    },
  ];
  const desc =
    'p.locations을 선택하면 메인페이지에서 상단에, l.incentive를 선택하면 하단에 위치합니다';
  console.log('==301', form, defaultValue);
  return (
    <CFormGroup row>
      <CCol md="3">
        <CLabel htmlFor="text-input">{`타입`}</CLabel>
      </CCol>
      <CCol xs="12" md={'9'}>
        <Select
          options={options}
          defaultValue={
            defaultValue && { label: defaultValue, value: defaultValue }
          }
          // defaultValue={form && { label: form[key], value: form[key] }}
          // value={form && key && form[key]}
          onChange={(e) => handleOnSelect({ e, key })}
          placeholder={defaultValue || desc}
        />
        <CFormText>{desc}</CFormText>
      </CCol>
    </CFormGroup>
  );
};

const CodeInputFormGroupForGroupTab = ({
  updateBtnClicked,
  defaultValue,
  itemsGroups,
  filteredCategory,
  handleOnSelect,
}) => {
  console.log('==1, filteredCategory', filteredCategory);
  // console.log('==990 filteredCategory', filteredCategory);
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
  // console.log(
  //   '==2939',
  //   groupsCodes,
  //   groupsCodesTaken,
  //   availGroupsCodes,
  //   options,
  // );
  return (
    <CFormGroup
      row={!updateBtnClicked}
      style={updateBtnClicked ? { maxWidth: '120px' } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`사용할 그룹 코드`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked ? '9' : null}>
        <Select
          defaultValue={
            defaultValue && { label: defaultValue, value: defaultValue }
          }
          options={availGroupsCodes && options}
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
  updateBtnClicked,
  defaultValue,
  handleOnSelect,
  availItemsCodes,
  form,
}) => {
  const options =
    availItemsCodes &&
    availItemsCodes.map((code) => ({ value: code, label: `${code}` }));
  return (
    <CFormGroup
      row={!updateBtnClicked}
      style={updateBtnClicked ? { width: '120px' } : null}
    >
      {!updateBtnClicked && (
        <CCol md="3">
          <CLabel htmlFor="text-input">{`사용할 아이템 코드`}</CLabel>
        </CCol>
      )}
      <CCol xs="12" md={!updateBtnClicked && '9'}>
        <Select
          defaultValue={
            defaultValue && { label: defaultValue, value: defaultValue }
          }
          options={availItemsCodes && options}
          onChange={(e) => handleOnSelect({ e, key: 'code' })}
          placeholder={'사용가능한 아이템 코드들 중, 하나를 선택'}
        />{' '}
      </CCol>
    </CFormGroup>
  );
};

const ContentsFormGroup = (props) => {
  console.log('==202', props);
  const { targetItem, form, onChange, setToggle, handleOnSelect } = props;
  const {
    title,
    subtitle,
    text,
    name,
    youtubePath,
    thumbnail,
    toggleDisplay,
    toggleDisplayOnMain,
  } = { ...targetItem };
  const { location, originalname, _id } = { ...thumbnail };
  return (
    <StyledFormGroups>
      <CFormGroup row>
        <CCol md="3">
          <CLabel htmlFor="text-input">{`썸네일이미지`}</CLabel>
        </CCol>
        <CCol xs="12" md={'9'}>
          <img src={location} alt={originalname} style={{ width: '60%' }} />
        </CCol>
      </CFormGroup>

      <NameTypeSelectFormGroup
        defaultValue={name}
        form={form}
        key={'name'}
        handleOnSelect={handleOnSelect}
      />
      <TextInputFormGroup
        defaultValue={title}
        form={form}
        type={'title'}
        onChange={onChange}
      />
      <TextInputFormGroup
        defaultValue={subtitle}
        form={form}
        type={'subtitle'}
        onChange={onChange}
      />
      <TextInputFormGroup
        defaultValue={text}
        form={form}
        type={'text'}
        onChange={onChange}
      />
      <TextInputFormGroup
        defaultValue={youtubePath}
        form={form}
        type={'youtubePath'}
        onChange={onChange}
      />
      <SwitchInputFormGroup
        defaultValue={toggleDisplay}
        toggle={form && form.toggleDisplay}
        form={form}
        type={'toggleDisplay'}
        setToggle={setToggle}
      />
      <SwitchInputFormGroup
        defaultValue={toggleDisplayOnMain}
        toggle={form && form.toggleDisplayOnMain}
        form={form}
        type={'toggleDisplayOnMain'}
        setToggle={setToggle}
      />
    </StyledFormGroups>
  );
};
const GetOneFormGroup = (props) => {
  const { target, updateGroupTarget, ...rest } = props;
  const { code, name, category } = updateGroupTarget;
  const dic = {
    CodeInputFormGroupForGroupTab: (
      <CodeInputFormGroupForGroupTab {...rest} defaultValue={code} />
    ),
    CategorySelectFormGroup: (
      <CategorySelectFormGroup {...rest} defaultValue={category} />
    ),
    NameInputFormGroup: <NameInputFormGroup {...rest} defaultValue={name} />,
  };
  return dic[target];
};
const FormGroups = ({
  modifyType,
  updateItemTarget,
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
  /**
   * * activeTab 설정
   * 0: 템플릿 관리 > 카테고리
   * 1: 템플릿 관리 > 그룹
   * 2: 템플릿 관리 > 아이템
   * 위의 조건에 따라 0, 또는 1, 2로 들어온다
   */
  const { code, name, unit, rate, remark, tags } = { ...updateItemTarget };
  const updateBtnClicked = modifyType === 'update';

  const setGroups = [
    <StyledFormGroups flexRow={updateBtnClicked}>
      <NameInputFormGroup
        updateBtnClicked={updateBtnClicked}
        form={form}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <GroupsCodesSelectFormGroup
        updateBtnClicked={updateBtnClicked}
        form={form}
        type={'multiSelects'}
        categoriesList={categoriesList}
        handleOnSelect={handleOnSelect}
      />
    </StyledFormGroups>,
    <StyledFormGroups flexRow={updateBtnClicked}>
      <CategorySelectFormGroup
        updateBtnClicked={updateBtnClicked}
        form={form}
        categoriesList={categoriesList}
        handleOnSelect={handleOnSelect}
      />
      <CodeInputFormGroupForGroupTab
        updateBtnClicked={updateBtnClicked}
        form={form}
        itemsGroups={itemsGroups}
        filteredCategory={filteredCategory}
        handleOnSelect={handleOnSelect}
      />
      <NameInputFormGroup
        updateBtnClicked={updateBtnClicked}
        form={form}
        tabTitle={tabTitle}
        onChange={onChange}
      />
    </StyledFormGroups>,
    <StyledFormGroups flexRow={updateBtnClicked}>
      {!updateBtnClicked && (
        <GroupCodeSelectFormGroup
          updateBtnClicked={updateBtnClicked}
          form={form}
          itemsGroups={itemsGroups}
          handleOnSelect={handleOnSelect}
        />
      )}
      <CodeInputFormGroupForItemTab
        updateBtnClicked={updateBtnClicked}
        defaultValue={code}
        form={form}
        type={'code'}
        availItemsCodes={availItemsCodes}
        handleOnSelect={handleOnSelect}
      />
      <NameInputFormGroup
        updateBtnClicked={updateBtnClicked}
        defaultValue={name}
        form={form}
        type={'name'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      {updateBtnClicked && <SpacerInRow />}
      <TextInputFormGroup
        updateBtnClicked={updateBtnClicked}
        defaultValue={rate}
        form={form}
        type={'rate'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      {updateBtnClicked && <SpacerInRow slash />}
      <TextInputFormGroup
        updateBtnClicked={updateBtnClicked}
        defaultValue={unit}
        form={form}
        type={'unit'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      {updateBtnClicked && <SpacerInRow />}
      <TextInputFormGroup
        updateBtnClicked={updateBtnClicked}
        defaultValue={remark}
        form={form}
        type={'remark'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      {updateBtnClicked && <SpacerInRow />}
      <TagsSelectFormGroup
        updateBtnClicked={updateBtnClicked}
        defaultValue={tags && tags.map((tag) => tag)}
        form={form}
        type={'multiSelects'}
        handleOnSelect={handleOnSelect}
      />
    </StyledFormGroups>,
  ];
  return setGroups[activeTab];
};

export {
  maxWidth,
  minWidth,
  width,
  ContentsFormGroup,
  GetOneFormGroup,
  FormGroups,
};
