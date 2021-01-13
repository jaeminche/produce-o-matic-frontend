import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';
import { formatTime } from '../../lib/format';

const ContentsContainer = ({ pagekey, location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const history = useHistory();
  const { active_tab } = useParams();

  const isGeneralKnowledge = pagekey === 'generalKnowledge';
  const shouldActivateClock = isGeneralKnowledge && active_tab === 'korea';

  const DEFAULT_ACTIVE_TAB = 'korea';
  const { pathname } = location;

  // ? set rows for ui data, tabRows as well if any
  const { rows, tabRows } = uiData[pagekey];

  const _tabRows = tabRows && tabRows[active_tab];
  useEffect(() => {
    if (isGeneralKnowledge && tabRows && !active_tab) {
      history.push(`${pathname}/${DEFAULT_ACTIVE_TAB}`);
    }
  }, []);

  // *** Activate Clock starts
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
  // *** Activate Clock ends

  return (
    <>
      <Contents
        rows={rows}
        tabRows={_tabRows}
        isMobile={isMobile}
        times={
          time
            ? [
                formatTime({ date: time, koreatime: true }),
                formatTime({ date: time, koreatime: false }),
              ]
            : null
        }
      />
    </>
  );
};

export default withRouter(ContentsContainer);
