import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BasicDropzone from '../../../components/BasicDropzone/BasicDropzone';
// import PopularLocationsTable from './tables/PopularLocationsTable';
import { listPopularLocations } from '../../../modules/popularLocations';
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

const PopularLocation = (props) => {
  const { targetItem, form, onSubmit, formDataToUpload } = props;
  const dispatch = useDispatch();

  console.log('==7979', formDataToUpload && formDataToUpload.getAll('image'));
  console.log('==7980', form);

  const formDataReady =
    (formDataToUpload &&
      formDataToUpload.getAll('image').some((file) => file.path)) ||
    (form && Object.values(form).every((x) => x !== null && x !== ''));
  //   return <PopularLocationsTable {...props} />;

  return (
    <CCard>
      <CCardHeader>
        <p>
          앞서 선택하신 Location의 세부 정보를 변경하고 Submit 버튼을
          눌러주세요.
        </p>
        <p>Submit 버튼을 누르기 전에는 변경사항이 저장되지 않습니다.</p>
      </CCardHeader>
      <CCardBody>
        <CForm
          action=""
          method="post"
          encType="multipart/form-data"
          className="form-horizontal"
          style={{ marginRight: '15px' }}
        >
          <ContentsFormGroup {...props} />
        </CForm>
        <BasicDropzone {...props} />
      </CCardBody>
      <CCardFooter>
        <CButton
          onClick={() => (formDataReady ? onSubmit({ type: 'patch' }) : null)}
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
    </CCard>
  );
};

export default PopularLocation;
