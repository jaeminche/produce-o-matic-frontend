import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
// import { listBudgetResults } from '../../../modules/budgetResults';
import clientForMultipart from '../../../lib/api/clientForMultipart';
import {
  listPopularLocations,
  postPopularLocation,
} from '../../../modules/popularLocations';
import PopularLocations from '../../components/contents/PopularLocations';
import { myToast } from '../../../lib/util/myToast';

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
        console.log('==999.0', response);
        if (response.status === 200 && response.data) {
          if (response.data.status === 400 && response.data.errmsg) {
            myToast(
              `파일업로드 실패. 아래 설명을 참고하셔서 다시 업로드해주세요. ErrorCode: F0000; 이유: ${response.data.errmsg}`,
            );
            return;
          } else if (response.data._id) {
            myToast(`File uploading successful!`);
            const { _id, location, contentType, originalname } = response.data;
            const thumbnail = { _id, location, contentType, originalname };
            dispatch(postPopularLocation({ thumbnail }));
          }
        } else {
          myToast(
            `파일 업로드 실패. 서버에서 응답이 없습니다. Consult your engineer.`,
          );
          return;

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
        }
      })
      .catch(function (err) {
        myToast(`서버와의 통신 중에 오류 발생 : ${err.message}`);
        console.log('---401.1', err);
        // if (err.status === 401) {
        //   //   refreshAndSetJwtAndLoginType();
        // }
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
