import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import clientForMultipart from '../../../lib/api/clientForMultipart';
import {
  listPopularLocations,
  postPopularLocation,
  updatePopularLocation,
} from '../../../modules/popularLocations';
import PopularLocation from '../../components/contents/PopularLocation';
import { myToast } from '../../../lib/util/myToast';

const PopularLocationContainer = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = match.params;
  const [popularLocationForm, setPopularLocationForm] = useState(null);
  const [formDataToUpload, setFormDataToUpload] = useState('');
  const [fileUploadDone, setFileUploadDone] = useState(false);
  const { location } = useSelector(({ popularLocations }) => ({
    location: popularLocations.popularLocations,
  }));

  const targetItem =
    location &&
    location.length > 0 &&
    location.filter((item) => item._id === id)[0];

  useEffect(() => {
    !location
      ? dispatch(listPopularLocations())
      : setPopularLocationForm(targetItem);
  }, [dispatch, location]);

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setPopularLocationForm({ ...popularLocationForm, [name]: value });
    // dispatch(
    //   changeField({
    //     form: `${modifyType}${activeText[activeTab]}`,
    //     key: name,
    //     value,
    //   }),
    // );
  });

  const setToggle = (e) => {
    const { value, name } = e.target;
    setPopularLocationForm({
      ...popularLocationForm,
      [name]: !popularLocationForm[name],
    });
  };

  const handleOnSelect = ({ e, key }) => {
    setPopularLocationForm({ ...popularLocationForm, [key]: e.value });
  };

  const onSubmit = ({ type }) => {
    /**
     *? post일 때는 무조건 파일업로드하고 제출.
     *? patch일 때는 썸네일이미지 변경하기했을 때만 파일업로드하고 제출.
     *? 그렇지 않았을 때는 파일업로드 생략하고 제출
     */
    if (
      type === 'post' ||
      (type === 'patch' &&
        formDataToUpload &&
        formDataToUpload.getAll('image').some((file) => file.path))
    ) {
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
              // setFileUploadDone(true);
              myToast(`File uploading successful!`);
              const {
                _id,
                location,
                contentType,
                originalname,
              } = response.data;
              const thumbnail = { _id, location, contentType, originalname };

              type === 'post' &&
                dispatch(
                  postPopularLocation({ ...popularLocationForm, thumbnail }),
                );
              type === 'patch' &&
                dispatch(
                  updatePopularLocation({
                    ...popularLocationForm,
                    thumbnail,
                    id,
                  }),
                );
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
    } else if (type === 'patch') {
      dispatch(updatePopularLocation({ ...popularLocationForm, id }));
    }
  };

  useEffect(() => {
    console.log('==300', popularLocationForm);
  }, [popularLocationForm]);
  useEffect(() => {
    formDataToUpload && console.log('==980', formDataToUpload.getAll('image'));
  }, [formDataToUpload]);
  return (
    <PopularLocation
      history={history}
      targetItem={targetItem}
      form={popularLocationForm}
      onChange={onChange}
      setToggle={setToggle}
      handleOnSelect={handleOnSelect}
      formDataToUpload={formDataToUpload}
      setFormDataToUpload={setFormDataToUpload}
      fileUploadDone={fileUploadDone}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(PopularLocationContainer);
