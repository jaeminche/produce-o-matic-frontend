import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BasicDropzone from '../../../components/BasicDropzone/BasicDropzone';
// import PopularLocationsTable from './tables/PopularLocationsTable';
import { listPopularLocations } from '../../../modules/popularLocations';

const PopularLocation = (props) => {
  const { onSubmit, formDataToUpload } = props;
  const dispatch = useDispatch();

  console.log('==7979', formDataToUpload && formDataToUpload.getAll('image'));
  const formDataReady =
    formDataToUpload &&
    formDataToUpload.getAll('image').some((file) => file.path);
  //   return <PopularLocationsTable {...props} />;

  useEffect(() => {
    console.log('==8880');
    dispatch(listPopularLocations());
  }, []);

  return (
    <div>
      <BasicDropzone {...props} />
      {formDataReady && <input onClick={(formDataReady && onSubmit) || null} />}
    </div>
  );
};

export default PopularLocation;
