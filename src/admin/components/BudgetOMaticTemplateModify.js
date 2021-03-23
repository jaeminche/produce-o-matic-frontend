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
import { GetOneFormGroup, FormGroups } from './common/FormGroups';
import EventsButtons from '../components/common/EventsButtons';

const StyledWrapper = styled.div`
  .tab-description {
    margin: 50px 0;
    font-style: italic;
  }
`;

const TwoFlexboxes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const BudgetOMaticTemplateModify = (props) => {
  const {
    key,
    isActiveItem,
    toggleUpdateItem,
    modifyType,
    groupCode,
    updateItemTarget,
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
    handleDelete,
    id,
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
    activeTab === 2 ? (
      <TwoFlexboxes>
        <CForm
          action=""
          method="post"
          encType="multipart/form-data"
          className="form-horizontal"
          style={{ marginRight: '15px' }}
          wasValidated={true}
        >
          <FormGroups
            modifyType={modifyType}
            groupCode={groupCode}
            updateItemTarget={updateItemTarget}
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
        <EventsButtons
          handleDelete={handleDelete}
          id={id}
          index={key}
          groupCode={groupCode}
          isActiveItem={isActiveItem}
          toggleUpdateItem={toggleUpdateItem}
          onSubmit={onSubmit}
        />
      </TwoFlexboxes>
    ) : activeTab === 1 ? (
      <GetOneFormGroup />
    ) : null
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
              wasValidated={true}
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
