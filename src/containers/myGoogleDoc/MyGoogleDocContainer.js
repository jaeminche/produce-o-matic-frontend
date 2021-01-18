import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';
import { formatTime } from '../../lib/format';
import {
  getIp,
  getUsersLocation,
  postCopyContractSample,
} from '../../modules/thirdPartyApis';

const MyGoogleDocContainer = () => {
  const dispatch = useDispatch();
  const fileId = '12O4bV8sJj43LAtMXY3FRknaHs56eZqJyju5d9i2JKBQ';
  return (
    <button onClick={() => dispatch(postCopyContractSample({ fileId }))}>
      계약서 샘플 복사하기
    </button>
  );
};

export default withRouter(MyGoogleDocContainer);
