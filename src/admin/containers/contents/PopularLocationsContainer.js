import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
// import { listBudgetResults } from '../../../modules/budgetResults';
import clientForMultipart from '../../../lib/api/clientForMultipart';
import PopularLocations from '../../components/contents/PopularLocations';

const PopularLocationsContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formDataToUpload, setFormDataToUpload] = useState('');
  const [fileUploadDone, setFileUploadDone] = useState('');
  //   const { BUDGETRESULTS } = useSelector(({ budgetResults }) => ({
  //     BUDGETRESULTS: budgetResults.budgetResults,
  //   }));

  //   useEffect(() => {
  //     dispatch(listBudgetResults());
  //   }, []);

  // const onRowClick = (e) => history.push()
  const onSubmit = () => {
    console.log('==912');
    clientForMultipart
      .post('/api/fileUpload', formDataToUpload)
      .then(function (response) {
        console.log('==999.0', /*response.data.results[0].image,*/ response);
        if (
          !(
            (
              response.status === 200 &&
              response.data &&
              response.data === 'done'
            ) //!여기
          )
        ) {
          alert('File uploading failed! Consult your engineer.');
        }
        // onChange({
        //   name:
        //     type === 'I0'
        //       ? 'verify_image_path'
        //       : type === 'legal_represent_file_path'
        //       ? 'legal_represent_file_path'
        //       : type === 'corp_biz_file_path'
        //       ? 'corp_biz_file_path'
        //       : type,
        //   value: response.data.results[0].image,
        //   formindex,
        // });
        // dispatch(
        //   changeField({
        //     form: "creditorInfoForm",
        //     key:
        //       type === "I0"
        //         ? "verify_image_path"
        //         : type === "legal_represent_file_path"
        //         ? "legal_represent_file_path"
        //         : type === "corp_biz_file_path"
        //         ? "corp_biz_file_path"
        //         : "",
        //     value: response.data.results[0].image,
        //     formindex
        //   })
        // );
      })
      .catch(function (response) {
        alert(`서버와의 통신 중에 오류 발생 : ${response}`);
        console.log('---401.1', response);
        if (response.status === 401) {
          //   refreshAndSetJwtAndLoginType();
        }
      });
  };

  useEffect(() => {
    formDataToUpload && console.log('==980', formDataToUpload.getAll('image'));
  }, [formDataToUpload]);
  return (
    <PopularLocations
      history={history}
      formDataToUpload={formDataToUpload}
      setFormDataToUpload={setFormDataToUpload}
      fileUploadDone={fileUploadDone}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(PopularLocationsContainer);
