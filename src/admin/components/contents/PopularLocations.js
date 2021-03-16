import React from 'react';
import BasicDropzone from '../../../components/BasicDropzone/BasicDropzone';
// import PopularLocationsTable from './tables/PopularLocationsTable';

const PopularLocations = (props) => {
  const { onSubmit, formDataToUpload } = props;
  console.log('==7979', formDataToUpload && formDataToUpload.getAll('image'));
  const formDataReady =
    formDataToUpload &&
    formDataToUpload.getAll('image').some((file) => file.path);
  //   return <PopularLocationsTable {...props} />;
  return (
    <div>
      <BasicDropzone {...props} />
      {formDataReady && <input onClick={(formDataReady && onSubmit) || null} />}
    </div>
  );
};

export default PopularLocations;
