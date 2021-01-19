import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';
import { formatTime } from '../../lib/format';
import {
  getIp,
  getUsersLocation,
  postCopyContractSample,
} from '../../modules/thirdPartyApis';
import GoogleDocsViewer from 'react-google-docs-viewer';

const DocIframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div>
      <iframe
        src={'https://docs.google.com/viewer?url=' + src + '&embedded=true'}
        title="file"
        width="50%"
        height="600"
      ></iframe>
    </div>
  );
};

const MyGoogleDocContainer = ({ history }) => {
  const dispatch = useDispatch();
  const fileId = '12O4bV8sJj43LAtMXY3FRknaHs56eZqJyju5d9i2JKBQ';
  return (
    <>
      <div>
        <a
          href="https://docs.google.com/document/d/1hdQDYfiNGHOTDiEPUSsOmVBRYEBjPWNihSrsmza3WSU/edit?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <iframe
            title="Local Production Crew Agreement Sample"
            src="https://docs.google.com/document/d/e/2PACX-1vRPbg1_7vlxLDqmmWjPbAW44ny7lcXXlr4Tc8QdAaUxGnTeZ67A6UXa7ceZKbNZTTw2b-cQBoT50kxs/pub?embedded=true"
            // scrolling="no"
            frameborder="1"
            marginheight="0px"
            marginwidth="0px"
            height="400px"
            width="600px"
            allowfullscreen
          ></iframe>
        </a>
      </div>
      {/* <button onClick={() => dispatch(postCopyContractSample({ fileId }))}>
        계약서 샘플 복사하기
      </button> */}
    </>
  );
};

export default withRouter(MyGoogleDocContainer);
