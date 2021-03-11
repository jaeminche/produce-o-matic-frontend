import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledBasicDropzone, Label } from './style.js';
import clientForMultipart from '../../lib/api/clientForMultipart';
import { useSelector, useDispatch } from 'react-redux';
// import { refreshAndSetJwtAndLoginType } from "index";

const BasicDropzone = ({ onChange, type, text, desc, formindex = false }) => {
  const dispatch = useDispatch();
  const onDrop = useCallback((acceptedFiles) => {
    // console.log("---300.0", acceptedFiles);
    let formData = new FormData();
    console.log('==999', acceptedFiles);
    formData.append('image', acceptedFiles[0]);
    // console.log("---300.1", formData.getAll("image"));
    clientForMultipart
      .post('/api/fileUpload', formData)
      .then(function (response) {
        console.log('==999.0', /*response.data.results[0].image,*/ response);
        if (response.data && response.data !== 'done') {
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
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept:
      'image/jpeg, image/png, image/jpg, image/tiff, image/gif, image/bmp, image/exif, image/ppm, image/pgm, image/pbm, image/pnm, image/hdr, image/heif, image/bpg, application/pdf' /*, 동영상 image/mpeg, image/hevc*/,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <StyledBasicDropzone className="container">
      <Label>{text}</Label>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p className="buttonLabel">첨부하기</p>
      </div>
      <p className="desc">{desc}</p>
      <aside className="attachedName">
        <span className="attachedNameLabel">첨부된 파일:</span>
        <ul>{files}</ul>
      </aside>
    </StyledBasicDropzone>
  );
};

export default BasicDropzone;
