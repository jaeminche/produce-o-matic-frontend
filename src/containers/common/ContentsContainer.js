import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';
import { formatTime } from '../../lib/format';
import { getIp, getUsersLocation } from '../../modules/thirdPartyApis';

const ContentsContainer = ({ pagekey, location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();
  const { pathname } = location;
  const shouldActivateClock = pathname.includes('korea-in-a-nutshell');
  const {
    IP,
    USERSLOCATION,
    ipError,
    usersLocationError,
    loading,
  } = useSelector(({ thirdPartyApis, loading }) => ({
    IP: thirdPartyApis.ip,
    USERSLOCATION: thirdPartyApis.usersLocation,
    ipError: thirdPartyApis.ipError,
    usersLocationError: thirdPartyApis.usersLocationError,
    loading:
      loading['thirdPartyApis/GET_IP'] ||
      loading['thirdPartyApis/GET_USERSLOCATION'],
  }));
  // ? set rows for ui data
  const { rows } = uiData[pagekey];

  useEffect(() => {
    if (shouldActivateClock) dispatch(getIp());
  }, []);

  useEffect(() => {
    if (IP) dispatch(getUsersLocation({ ip: IP }));
  }, [IP]);

  // *======= Activate Clock starts =======
  // ! USE MEMO AND CALLBACK FOR TIMER!
  const [time, setTime] = useState(shouldActivateClock ? new Date() : '');
  useEffect(() => {
    if (shouldActivateClock) {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);
  // *======= Activate Clock ends =======

  return (
    <>
      <Contents
        rows={rows}
        isMobile={isMobile}
        times={
          time
            ? [
                formatTime({ date: time, koreatime: true }),
                formatTime({ date: time, koreatime: false }),
              ]
            : null
        }
        cityName={
          USERSLOCATION &&
          USERSLOCATION.status === 'success' &&
          USERSLOCATION.city
        }
      />
    </>
  );
};

export default withRouter(ContentsContainer);
