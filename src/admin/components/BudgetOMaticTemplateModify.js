import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CForm,
  CNav,
  CTabs,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import styled from 'styled-components/macro';
import FormGroups from './common/FormGroups';

const StyledWrapper = styled.div`
  .tab-description {
    margin: 50px 0;
    font-style: italic;
  }
`;

const BudgetOMaticTemplateModify = (props) => {
  const {
    modifyType,
    groupCode,
    children,
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
  return modifyType === 'update' ? (
    <CForm
      action=""
      method="post"
      encType="multipart/form-data"
      className="form-horizontal"
    >
      <FormGroups
        modifyType={modifyType}
        groupCode={groupCode}
        children={children}
        filteredCategory={filteredCategory}
        itemsGroups={itemsGroups}
        tabTitle={tabTitle}
        activeTab={activeTab}
        availItemsCodes={availItemsCodes}
        onChange={onChange}
        handleOnSelect={handleOnSelect}
        form={form}
      />
    </CForm>
  ) : (
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
    </StyledWrapper>
  );
};

export default BudgetOMaticTemplateModify;
