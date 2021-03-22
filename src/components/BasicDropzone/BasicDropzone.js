import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledBasicDropzone, Label } from './style.js';
import clientForMultipart from '../../lib/api/clientForMultipart';
import { useSelector, useDispatch } from 'react-redux';
// import { refreshAndSetJwtAndLoginType } from "index";

const BasicDropzone = (props) => {
  const {
    onChange,
    type,
    text,
    desc,
    formindex = false,
    formDataToUpload,
    setFormDataToUpload,
    fileUploadDone,
    targetItem,
  } = props;
  const { thumbnail } = { ...targetItem };
  const dispatch = useDispatch();
  const [uploadedFile, setUploadedFile] = useState('');
  const onDrop = useCallback((acceptedFiles) => {
    let formData = new FormData();
    formData.append('image', acceptedFiles[0]);
    setFormDataToUpload(formData);
  }, []);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    // isDragAccept,
    // isDragReject,
  } = useDropzone({
    onDrop,
    accept:
      'image/jpeg, image/png, image/jpg, image/tiff, image/gif, image/bmp, image/exif, image/ppm, image/pgm, image/pbm, image/pnm, image/hdr, image/heif, image/bpg, application/pdf' /*, 동영상 image/mpeg, image/hevc*/,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <StyledBasicDropzone className="container">
      <Label>{text}</Label>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p className="buttonLabel">
          {thumbnail ? '썸네일이미지 변경하기' : '첨부하기'}
        </p>
      </div>
      <p className="desc">{desc}</p>
      <aside className="attachedName">
        <div>
          <span className="attachedNameLabel">첨부할 파일:</span>
          <ul>{files}</ul>

          {fileRejectionItems.length > 0 && (
            <>
              <p className="attachedNameLabel warning">
                첨부할 수 없습니다 (아래 설명을 참고하세요):
              </p>
              <ul>{fileRejectionItems}</ul>
            </>
          )}
          {/* {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>} */}
          {fileUploadDone && <span>파일 업로드 완료됨</span>}
        </div>
      </aside>
    </StyledBasicDropzone>
  );
};

export default BasicDropzone;
