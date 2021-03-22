import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BasicDropzone from '../../../components/BasicDropzone/BasicDropzone';
// import PopularLocationsTable from './tables/PopularLocationsTable';
import { listPopularLocations } from '../../../modules/popularLocations';
import { CForm } from '@coreui/react';
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
    <div>
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
      {formDataReady && <input onClick={() => onSubmit({ type: 'patch' })} />}
    </div>
  );
};

export default PopularLocation;
