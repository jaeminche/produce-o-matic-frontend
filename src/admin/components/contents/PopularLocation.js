import React from 'react';
import BasicDropzone from '../../../components/BasicDropzone/BasicDropzone';
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CButton,
  CCardFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { ContentsFormGroup } from '../../../admin/components/common/FormGroups';
import { myToast } from '../../../lib/util/myToast';

const PopularLocation = (props) => {
  const { isAddPage, form, onSubmit, formDataToUpload } = props;

  console.log('==7979', formDataToUpload && formDataToUpload.getAll('image'));
  console.log('==7980', form);

  const validateForm = () => {
    const validateFileFormInsteadOfThumbnail = () => {
      if (
        formDataToUpload &&
        formDataToUpload.getAll('image').some((file) => file.path)
      )
        return true;
      myToast('썸네일이미지 첨부는 필수입니다');
      return false;
    };
    return (
      form &&
      (isAddPage
        ? validateFileFormInsteadOfThumbnail() &&
          Object.entries(form)
            .filter((item) => item[0] !== 'thumbnail')
            .every((x) => x[1] !== null && x[1] !== '')
        : Object.values(form).every((x) => x !== null && x !== ''))
    );
  };

  return (
    <CCard>
      <CForm
        // action='' method="post" encType="multipart/form-data"
        className="form-horizontal"
        style={{ marginRight: '15px' }}
      >
        <CCardHeader>
          <p>
            앞서 선택하신 Location의 세부 정보를 변경하고 Submit 버튼을
            눌러주세요.
          </p>
          <p>Submit 버튼을 누르기 전에는 변경사항이 저장되지 않습니다.</p>
        </CCardHeader>
        <CCardBody>
          <ContentsFormGroup {...props} />
          <BasicDropzone {...props} />
        </CCardBody>
        <CCardFooter>
          <CButton
            onClick={() =>
              validateForm() ? onSubmit() : myToast('모두 입력해주세요')
            }
            type="submit"
            size="sm"
            color="primary"
          >
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          {/* <CButton type="reset" size="sm" color="danger">
          <CIcon name="cil-ban" /> Reset
        </CButton> */}
        </CCardFooter>
      </CForm>
    </CCard>
  );
};

export default PopularLocation;
