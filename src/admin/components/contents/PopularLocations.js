import React from 'react';
import BasicDropzone from '../../../components/BasicDropzone/BasicDropzone';
// import PopularLocationsTable from './tables/PopularLocationsTable';

const PopularLocations = (props) => {
  const { onSubmit } = props;
  //   console.log('==7979', props.PopularLocations);
  //   return <PopularLocationsTable {...props} />;
  return (
    <div>
      <BasicDropzone {...props} />
      <input onClick={onSubmit} />
    </div>
  );
};

export default PopularLocations;