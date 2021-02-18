import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CNav,
  CTabs,
  CNavItem,
  CNavLink,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
  CTabContent,
  CTabPane,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import Select from 'react-select';
import styled from 'styled-components/macro';

const StyledWrapper = styled.div`
  .tab-description {
    margin: 50px 0;
    font-style: italic;
  }
`;

const NameInputFormGroup = ({ tabTitle, onChange }) => {
  const desc =
    tabTitle === 'Item'
      ? '예)production assistant, assistant director, etc...'
      : tabTitle === 'Group'
      ? '예)production department, camera department, etc...'
      : tabTitle === 'Category'
      ? '예)labor, equipments, etc...'
      : '';
  return (
    <CFormGroup row>
      <CCol md="3">
        <CLabel htmlFor="text-input">{`${tabTitle}명`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
        <CInput
          onChange={onChange}
          id={tabTitle}
          name="name"
          placeholder={`${tabTitle}명을 입력해주세요`}
        />
        <CFormText>{desc}</CFormText>
      </CCol>
    </CFormGroup>
  );
};

const TextInputFormGroup = ({ type, tabTitle, onChange }) => {
  const desc =
    type === 'unit'
      ? '예)day, month week,, etc...'
      : type === 'remark'
      ? '예)this rate is subject to change, etc...'
      : type === 'rate'
      ? '예)100000 - 콤마없이 숫자만 입력'
      : '';
  return (
    <CFormGroup row>
      <CCol md="3">
        <CLabel htmlFor="text-input">{`${type}`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
        <CInput
          onChange={onChange}
          id={type}
          name={type}
          placeholder={`${type}을 입력해주세요`}
        />
        <CFormText>{desc}</CFormText>
      </CCol>
    </CFormGroup>
  );
};

const TagsSelectFormGroup = ({
  categoriesList,
  tabTitle,
  onChange,
  handleOnSelect,
  form,
}) => {
  const availTypeTags = ['DO', 'IN', 'TV', 'TC', 'OC', 'DIY'];

  const options =
    availTypeTags &&
    availTypeTags.map((tag) => ({ value: tag, label: `${tag}` }));
  return (
    <CFormGroup row>
      <CCol md="3">
        <CLabel htmlFor="text-input">{`Type Of Production 설정`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
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
  categoriesList,
  tabTitle,
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
    <CFormGroup row>
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
  categoriesList,
  tabTitle,
  onChange,
  handleOnSelect,
  form,
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
    <CFormGroup row>
      <CCol md="3">
        <CLabel htmlFor="text-input">{`허용할 그룹 코드(들)`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
        <Select
          // isClearable={true}
          // value={form && form.groupsCodes.length > 0 && form.groupsCodes}
          isMulti={true}
          options={options}
          onChange={(e) =>
            handleOnSelect({ e, key: 'groupsCodes', isMulti: true })
          }
          placeholder={'신규 카테고리에 속할 그룹 코드를 모두 선택해주세요'}
        />
        {/* <CSelect
          multiple
          onChange={(e) => handleOnSelect(e)}
          custom
          id="groupsCodes"
          name="groupsCodes"
        >
          {availGroupsCodes &&
            availGroupsCodes.map((code) => (
              <option value={code}>{code}</option>
            ))}
        </CSelect> */}
      </CCol>
    </CFormGroup>
  );
};

const GroupCodeSelectFormGroup = ({ itemsGroups, handleOnSelect }) => {
  const options =
    itemsGroups &&
    itemsGroups.map((group) => ({
      value: group.code,
      label: `${group.code}. ${group.name}`,
    }));

  return (
    <CFormGroup row>
      <CCol md="3">
        <CLabel htmlFor="text-input">{`소속 그룹 코드`}</CLabel>
      </CCol>
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
  itemsGroups,
  filteredCategory,
  tabTitle,
  onChange,
  handleOnSelect,
  form,
}) => {
  // const filteredCategory =
  //   categoriesList &&
  //   categoriesList.filter((list) => list.name === form.category);
  console.log('==1, filteredCategory', filteredCategory);
  console.log('==990 filteredCategory', filteredCategory);
  const groupsCodes = filteredCategory && filteredCategory.groupsCodes;

  const groupsCodesTaken =
    itemsGroups &&
    itemsGroups.length > 0 &&
    itemsGroups.map((group) => group.code);
  // const groupsCodesTaken =
  //   filteredCategory && filteredCategory.map((cate) => cate.groupsCodes).flat();

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
    <CFormGroup row>
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
  itemsGroups,
  tabTitle,
  onChange,
  handleOnSelect,
  availItemsCodes,
  form,
}) => {
  const options =
    availItemsCodes &&
    availItemsCodes.map((code) => ({ value: code, label: `${code}` }));
  return (
    <CFormGroup row>
      <CCol md="3">
        <CLabel htmlFor="text-input">{`사용할 아이템 코드`}</CLabel>
      </CCol>
      <CCol xs="12" md="9">
        <Select
          options={availItemsCodes && options}
          onChange={(e) => handleOnSelect({ e, key: 'code' })}
          placeholder={'사용가능한 아이템 코드들 중, 하나를 선택'}
        />
      </CCol>
    </CFormGroup>
  );
};

const FormGroups = ({
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
    <>
      <NameInputFormGroup tabTitle={tabTitle} onChange={onChange} />
      <GroupsCodesSelectFormGroup
        categoriesList={categoriesList}
        tabTitle={tabTitle}
        onChange={onChange}
        handleOnSelect={handleOnSelect}
        form={form}
      />
    </>,
    <>
      <CategorySelectFormGroup
        categoriesList={categoriesList}
        tabTitle={tabTitle}
        handleOnSelect={handleOnSelect}
      />
      <CodeInputFormGroupForGroupTab
        itemsGroups={itemsGroups}
        filteredCategory={filteredCategory}
        tabTitle={tabTitle}
        onChange={onChange}
        handleOnSelect={handleOnSelect}
        form={form}
      />
      <NameInputFormGroup tabTitle={tabTitle} onChange={onChange} />
    </>,
    <>
      <GroupCodeSelectFormGroup
        itemsGroups={itemsGroups}
        handleOnSelect={handleOnSelect}
      />
      <CodeInputFormGroupForItemTab
        itemsGroups={itemsGroups}
        filteredCategory={filteredCategory}
        tabTitle={tabTitle}
        onChange={onChange}
        availItemsCodes={availItemsCodes}
        handleOnSelect={handleOnSelect}
        form={form}
      />
      <NameInputFormGroup tabTitle={tabTitle} onChange={onChange} />
      <TextInputFormGroup
        type={'rate'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <TextInputFormGroup
        type={'unit'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <TextInputFormGroup
        type={'remark'}
        tabTitle={tabTitle}
        onChange={onChange}
      />
      <TagsSelectFormGroup
        categoriesList={categoriesList}
        tabTitle={tabTitle}
        onChange={onChange}
        handleOnSelect={handleOnSelect}
        form={form}
      />
    </>,
  ];
  return setGroups[activeTab];
};

const BudgetOMaticTemplateAddCategory = (props) => {
  const {
    activeText,
    activeTab,
    setActiveTab,
    form,
    itemsGroups,
    categoriesList,
    filteredCategory,
    onChange,
    availItemsCodes,
    handleOnSelect,
    onSubmit,
    error,
    isMobile,
  } = props;
  const tabTitle = activeText[activeTab];

  const TabDescription = ({ tabTitle }) => {
    const text = `* 추가할 신규 ${tabTitle} 정보를 입력해주세요`;
    return <p className="tab-description">{text}</p>;
  };

  // const categories = {data: [{id: }]}
  return (
    <StyledWrapper>
      <CCard>
        <CCardHeader>
          추가할 레이어의 탭을 선택하시고 입력폼을 작성해주세요.
        </CCardHeader>
        <CCardBody>
          <CTabs
            activeTab={activeTab}
            onActiveTabChange={(idx) => setActiveTab(idx)}
          >
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink> 카테고리</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink> 그룹</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink> 아이템</CNavLink>
              </CNavItem>
            </CNav>
            <CForm
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CTabContent>
                <CTabPane>
                  <TabDescription tabTitle={tabTitle} />
                  <FormGroups
                    categoriesList={categoriesList}
                    filteredCategory={filteredCategory}
                    tabTitle={tabTitle}
                    activeTab={activeTab}
                    onChange={onChange}
                    handleOnSelect={handleOnSelect}
                    form={form}
                  />
                </CTabPane>
                <CTabPane>
                  <TabDescription tabTitle={tabTitle} />
                  <FormGroups
                    categoriesList={categoriesList}
                    filteredCategory={filteredCategory}
                    itemsGroups={itemsGroups}
                    tabTitle={tabTitle}
                    activeTab={activeTab}
                    onChange={onChange}
                    handleOnSelect={handleOnSelect}
                    form={form}
                  />
                </CTabPane>
                <CTabPane>
                  <TabDescription tabTitle={tabTitle} />
                  <FormGroups
                    filteredCategory={filteredCategory}
                    itemsGroups={itemsGroups}
                    tabTitle={tabTitle}
                    activeTab={activeTab}
                    availItemsCodes={availItemsCodes}
                    onChange={onChange}
                    handleOnSelect={handleOnSelect}
                    form={form}
                  />
                </CTabPane>
              </CTabContent>
            </CForm>
          </CTabs>
        </CCardBody>
        <CCardFooter>
          <CButton onClick={onSubmit} type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>

      {/* <CCard>
        <CCardHeader>
          Budget-O-Matic 템플릿 관리 - 카테고리 추가하기
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select">카테고리</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="select" id="select">
                  <option value="0">카테고리를 선택하세요</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select">Code</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="select" id="select">
                  <option value="0">code를 선택하세요</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">그룹명</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  onChange={onChange}
                  id="name"
                  name="name"
                  placeholder="그룹명을 입력해주세요"
                />
                <CFormText>
                  {'예)Production Department, Camera Equipments, etc...'}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="email-input">Email Input</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="email"
                  id="email-input"
                  name="email-input"
                  placeholder="Enter Email"
                  autoComplete="email"
                />
                <CFormText className="help-block">
                  Please enter your email
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="password-input">Password</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="password"
                  id="password-input"
                  name="password-input"
                  placeholder="Password"
                  autoComplete="new-password"
                />
                <CFormText className="help-block">
                  Please enter a complex password
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="date-input">Date Input</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="date"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="disabled-input">Disabled Input</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="disabled-input"
                  name="disabled-input"
                  placeholder="Disabled"
                  disabled
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="textarea-input">Textarea</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="9"
                  placeholder="Content..."
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select">Select</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="select" id="select">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="selectLg">Select Large</CLabel>
              </CCol>
              <CCol xs="12" md="9" size="lg">
                <CSelect custom size="lg" name="selectLg" id="selectLg">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="selectSm">Select Small</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom size="sm" name="selectSm" id="SelectLm">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                  <option value="4">Option #4</option>
                  <option value="5">Option #5</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="disabledSelect">Disabled Select</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect
                  custom
                  name="disabledSelect"
                  id="disabledSelect"
                  disabled
                  autoComplete="name"
                >
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol tag="label" sm="3" className="col-form-label">
                Switch checkboxes
              </CCol>
              <CCol sm="9">
                <CSwitch className="mr-1" color="primary" defaultChecked />
                <CSwitch
                  className="mr-1"
                  color="success"
                  defaultChecked
                  variant="outline"
                />
                <CSwitch
                  className="mr-1"
                  color="warning"
                  defaultChecked
                  variant="opposite"
                />
                <CSwitch
                  className="mr-1"
                  color="danger"
                  defaultChecked
                  shape="pill"
                />
                <CSwitch
                  className="mr-1"
                  color="info"
                  defaultChecked
                  shape="pill"
                  variant="outline"
                />
                <CSwitch
                  className="mr-1"
                  color="dark"
                  defaultChecked
                  shape="pill"
                  variant="opposite"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Radios</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox">
                  <CInputRadio
                    className="form-check-input"
                    id="radio1"
                    name="radios"
                    value="option1"
                  />
                  <CLabel variant="checkbox" htmlFor="radio1">
                    Option 1
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox">
                  <CInputRadio
                    className="form-check-input"
                    id="radio2"
                    name="radios"
                    value="option2"
                  />
                  <CLabel variant="checkbox" htmlFor="radio2">
                    Option 2
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox">
                  <CInputRadio
                    className="form-check-input"
                    id="radio3"
                    name="radios"
                    value="option3"
                  />
                  <CLabel variant="checkbox" htmlFor="radio3">
                    Option 3
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Inline Radios</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio1"
                    name="inline-radios"
                    value="option1"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                    One
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio2"
                    name="inline-radios"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                    Two
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio3"
                    name="inline-radios"
                    value="option3"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
                    Three
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Checkboxes</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    Option 1
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Option 2
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox3"
                    name="checkbox3"
                    value="option3"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox3"
                  >
                    Option 3
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Inline Checkboxes</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox1"
                    name="inline-checkbox1"
                    value="option1"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">
                    One
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    Two
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox3"
                    name="inline-checkbox3"
                    value="option3"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">
                    Three
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel col md="3" htmlFor="file-input">
                File input
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Multiple File input</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInputFile
                  id="file-multiple-input"
                  name="file-multiple-input"
                  multiple
                  custom
                />
                <CLabel htmlFor="file-multiple-input" variant="custom-file">
                  Choose Files...
                </CLabel>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel col md={3}>
                Custom file input
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile custom id="custom-file-input" />
                <CLabel htmlFor="custom-file-input" variant="custom-file">
                  Choose file...
                </CLabel>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard> */}
    </StyledWrapper>
  );
};

export default BudgetOMaticTemplateAddCategory;
