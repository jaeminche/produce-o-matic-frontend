import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import BudgetOMaticTemplateTable from '../../components/tables/BudgetOMaticTemplateTable';
import { listItemsGroups } from '../../../modules/itemsGroups';
import {
  changeField,
  initializeForm,
  initializeAll,
  listCategories,
  addGroup,
  addItem,
  addCategory,
  updateGroup,
  updateItem,
  updateCategory,
} from '../../../modules/admin';
import BudgetOMaticTemplateModify from '../../components/BudgetOMaticTemplateModify';
import { myToast } from '../../../lib/util/myToast';
import { FormGroups } from '../../components/common/FormGroups';

const BudgetOMaticTemplateModifyContainer = (props) => {
  const {
    modifyType = 'add',
    hasActiveGroup = false,
    activeGroup,
    groupCode,
    updateItemTarget,
    toggleUpdateGroup,
    toggleUpdateItem,
    key,
    ...rest
  } = props;
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(hasActiveGroup ? 1 : 2);
  const dispatch = useDispatch();
  const [filteredCategory, setFilteredCategory] = useState('');
  const [availItemsCodes, setAvailItemsCodes] = useState(null);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const activeText = ['Category', 'Group', 'Item'];
  const history = useHistory();

  const {
    itemsGroups,
    formAddCategory,
    formAddGroup,
    formAddItem,
    formUpdateCategory,
    formUpdateGroup,
    formUpdateItem,
    selectedGroup,
    selectedCategory,
    categoriesList,
    addCategorySubmitted,
    addGroupSubmitted,
    addItemSubmitted,
    addCategoryError,
    addGroupError,
    addItemError,

    updateCategorySubmitted,
    updateGroupSubmitted,
    updateItemSubmitted,
    updateCategoryError,
    updateGroupError,
    updateItemError,
    deleteCategoryError,
    deleteGroupError,
    deleteItemError,
    listCategoriesError,
  } = useSelector(({ admin, itemsGroups }) => ({
    itemsGroups: itemsGroups.dataSets,
    formAddCategory: admin.addCategory,
    formAddGroup: admin.addGroup,
    formAddItem: admin.addItem,
    formUpdateCategory: admin.updateCategory,
    formUpdateGroup: admin.updateGroup,
    formUpdateItem: admin.updateItem,
    selectedGroup:
      modifyType === 'update' ? groupCode : admin.addItem.selectedGroup,
    selectedCategory: admin.addGroup.category || admin.updateGroup.category,
    categoriesList: admin.listCategories,
    addCategorySubmitted: admin.addCategorySubmitted,
    addGroupSubmitted: admin.addGroupSubmitted,
    addItemSubmitted: admin.addItemSubmitted,
    updateCategorySubmitted: admin.updateCategorySubmitted,
    updateGroupSubmitted: admin.updateGroupSubmitted,
    updateItemSubmitted: admin.updateItemSubmitted,

    itemsGroupsError: itemsGroups.error,
    addCategoryError: admin.addCategoryError,
    addGroupError: admin.addGroupError,
    addItemError: admin.addItemError,
    updateCategoryError: admin.updateCategoryError,
    updateGroupError: admin.updateGroupError,
    updateItemError: admin.updateItemError,
    deleteCategoryError: admin.deleteCategoryError,
    deleteGroupError: admin.deleteGroupError,
    deleteItemError: admin.deleteItemError,
    listCategoriesError: admin.listCategoriesError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: `${modifyType}${activeText[activeTab]}`,
        key: name,
        value,
      }),
    );
  };

  const handleOnSelect = ({ e, key, isMulti = false }) => {
    // if e is like [{label: str, value: num}], make it flat only with values
    const structuredValues = isMulti
      ? (key === 'groupsCodes' || key === 'tags') && e.map((obj) => obj.value)
      : e.value;

    dispatch(
      changeField({
        form: `${modifyType}${activeText[activeTab]}`,
        key,
        value: structuredValues,
      }),
    );
  };

  const onSubmit = (e) => {
    e && e.preventDefault();
    e && console.log('==779', e, activeTab, formAddCategory);
    if (modifyType === 'add') {
      if (activeTab === 2) {
        const rates = [];
        const { code, name, unit, rate, remark, tags } = formAddItem;
        rates.push(Number(rate));
        dispatch(addItem({ code, name, unit, rate: rates, remark, tags }));
      } else if (activeTab === 1) {
        const { code, name, category } = formAddGroup;
        dispatch(addGroup({ code, name, category }));
      } else if (activeTab === 0) {
        const { name, groupsCodes } = formAddCategory;
        dispatch(addCategory({ name, groupsCodes }));
      }
    } else if (modifyType === 'update') {
      if (activeTab === 2) {
        const rates = [];
        const { code, name, unit, rate, remark, tags, _id } = formUpdateItem;
        const id = _id;
        rates.push(Number(rate));
        dispatch(
          updateItem({ id, code, name, unit, rate: rates, remark, tags }),
        );
      } else if (activeTab === 1) {
        const { code, name, category, _id } = formUpdateGroup;
        const id = _id;
        console.log('==661', id);
        dispatch(updateGroup({ id, code, name, category }));
      } else if (activeTab === 0) {
        const { name, groupsCodes } = formUpdateCategory;
        dispatch(updateCategory({ name, groupsCodes }));
      }
    }
  };

  useEffect(() => {
    console.log('==299', activeTab);
    if (modifyType === 'add') {
      // * 페이지 초기 로드나, add 페이지에서 사용자가 activeTab을 선택할 때마다 모든 폼 초기화
      dispatch(initializeForm('addCategory'));
      dispatch(initializeForm('addGroup'));
      dispatch(initializeForm('addItem'));
    }
    dispatch(initializeForm('updateCategory'));
    dispatch(initializeForm('updateGroup'));
    dispatch(initializeForm('updateItem'));
    if (activeTab === 2 || activeTab === 1) {
      dispatch(listItemsGroups());
    }
    if (activeTab === 1 || activeTab === 0) {
      dispatch(listCategories());
    }
  }, [activeTab]);

  useEffect(() => {
    if (categoriesList && selectedCategory)
      setFilteredCategory(
        categoriesList.filter((list) => list.name === selectedCategory)[0],
      );
  }, [categoriesList, selectedCategory]);

  useEffect(() => {
    // * add 페이지에서 사용자가 add할 아이템의 소속 그룹을 선택하거나, 아이템 update 버튼을 누르면, availItemsCodes를 설정한다.
    if (selectedGroup && itemsGroups) {
      const itemsCodesTaken =
        itemsGroups &&
        itemsGroups
          .filter((group) => group.code === selectedGroup)[0]
          .budgetItems.map((item) => item.code);

      const generateAllItemsCodes = ({ baseNum }) => {
        const elem = [];
        for (let i = baseNum + 1; i < baseNum + 100; i++) {
          elem.push(i);
        }
        return modifyType === 'update'
          ? elem.filter(
              (code) =>
                !itemsCodesTaken.includes(code) ||
                code === updateItemTarget.code,
            )
          : elem.filter((code) => !itemsCodesTaken.includes(code));
      };
      const _availItemsCodes =
        itemsCodesTaken && generateAllItemsCodes({ baseNum: selectedGroup });
      setAvailItemsCodes(_availItemsCodes);
    }
  }, [selectedGroup]);

  useEffect(() => {
    // * 아이템 update를 클릭했을 때, 기존값을 초기값으로 설정
    if (updateItemTarget) {
      console.log('==123', updateItemTarget);
      for (const [key, value] of Object.entries(updateItemTarget)) {
        dispatch(
          changeField({
            form: `${modifyType}${activeText[activeTab]}`,
            key,
            value,
          }),
        );
      }
    } else if (activeGroup) {
      console.log('==124', activeGroup);
      for (const [key, value] of Object.entries(activeGroup)) {
        dispatch(
          changeField({
            form: `${modifyType}${activeText[activeTab]}`,
            key,
            value,
          }),
        );
      }
    }
  }, [updateItemTarget, activeGroup]);

  useEffect(() => {
    let formType = '';
    const korText = {
      addCategory: '카테고리',
      addGroup: '그룹',
      addItem: '아이템',
    };
    if (addCategorySubmitted) {
      formType = 'addCategory';
    } else if (addGroupSubmitted) {
      formType = 'addGroup';
    } else if (addItemSubmitted) {
      formType = 'addItem';
    }
    if (addCategorySubmitted || addGroupSubmitted || addItemSubmitted) {
      dispatch(initializeForm(formType));
      myToast(`제출 성공. ${korText[formType]} 1개가 추가되었습니다.`);
      dispatch(initializeForm(`${formType}Submitted`));
      history.push('/firstavenue/budgetomatic-page/templates');
    }
  }, [addCategorySubmitted, addGroupSubmitted, addItemSubmitted]);

  useEffect(() => {
    if (updateItemSubmitted && updateItemSubmitted.code) {
      myToast(
        `제출 성공. 템플릿의 아이템 코드 ${updateItemSubmitted.code}가 업데이트되었습니다.`,
      );
      // ? initialize forms and refresh the list
      dispatch(initializeForm('updateItemSubmitted'));
      toggleUpdateItem(groupCode, key);
      dispatch(listItemsGroups());
    } else if (updateGroupSubmitted && updateGroupSubmitted.code) {
      myToast(
        `제출 성공. 템플릿의 그룹 코드 ${updateGroupSubmitted.code}가 업데이트되었습니다.`,
      );
      // ? initialize forms and refresh the list
      dispatch(initializeForm('updateGroupSubmitted'));
      toggleUpdateGroup(activeGroup);
      dispatch(listItemsGroups());
    } else if (updateCategorySubmitted && updateCategorySubmitted.name) {
      myToast(
        `제출 성공. 템플릿의 카테고리 이름 ${updateCategorySubmitted.name}가 업데이트되었습니다.`,
      );
      // ? initialize forms and refresh the list
      dispatch(initializeForm('updateCategorySubmitted'));
      dispatch(listItemsGroups());
      // toggleUpdateCategory?();
    }
  }, [updateItemSubmitted, updateGroupSubmitted, updateCategorySubmitted]);

  useEffect(() => {
    if (
      addCategoryError ||
      addGroupError ||
      addItemError ||
      updateCategoryError ||
      updateGroupError ||
      updateItemError ||
      deleteCategoryError ||
      deleteGroupError ||
      deleteItemError ||
      listCategoriesError
    ) {
      const errorMsg = 'Something went wrong. Consult your developer';
      myToast(errorMsg);
      setError(errorMsg);
      dispatch(initializeAll());
    }
  }, [
    addCategoryError,
    addGroupError,
    addItemError,
    updateCategoryError,
    updateGroupError,
    updateItemError,
    deleteCategoryError,
    deleteGroupError,
    deleteItemError,
    listCategoriesError,
  ]);

  return hasActiveGroup ? (
    <BudgetOMaticTemplateTable
      form={modifyType === 'add' ? formAddGroup : formUpdateGroup}
      itemsGroups={itemsGroups}
      filteredCategory={filteredCategory}
      handleOnSelect={handleOnSelect}
      activeGroup={activeGroup}
      categoriesList={categoriesList}
      toggleUpdateGroup={toggleUpdateGroup}
      toggleUpdateItem={toggleUpdateItem}
      onSubmit={onSubmit}
      {...rest}
    />
  ) : (
    <BudgetOMaticTemplateModify
      key={key}
      toggleUpdateGroup={toggleUpdateGroup}
      toggleUpdateItem={toggleUpdateItem}
      modifyType={modifyType}
      groupCode={groupCode}
      updateItemTarget={updateItemTarget}
      activeText={activeText}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      form={
        modifyType === 'add'
          ? activeTab === 2
            ? formAddItem
            : activeTab === 1
            ? formAddGroup
            : formAddCategory
          : formUpdateItem
      }
      categoriesList={categoriesList}
      filteredCategory={filteredCategory}
      itemsGroups={itemsGroups}
      onChange={onChange}
      handleOnSelect={handleOnSelect}
      availItemsCodes={availItemsCodes}
      onSubmit={onSubmit}
      addCategorySubmitted={!!addCategorySubmitted}
      {...rest}
      error={error}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateModifyContainer);
