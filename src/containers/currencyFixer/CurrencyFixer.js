import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrencySet } from '../../modules/thirdPartyApis';

const { REACT_APP_FIXER_APIKEY } = process.env;

const CurrencyFixer = ({ history, children }) => {
  const dispatch = useDispatch();
  const { CURRENCYSET, currencySetError, loading } = useSelector(
    ({ thirdPartyApis, loading }) => ({
      CURRENCYSET: thirdPartyApis.currencySet,
      currencySetError: thirdPartyApis.currencySetError,
      loading: loading['thirdPartyApis/GET_CURRENCYSET'],
    }),
  );

  useEffect(() => {
    console.log('822', process.env, REACT_APP_FIXER_APIKEY);
    REACT_APP_FIXER_APIKEY &&
      dispatch(getCurrencySet({ apikey: REACT_APP_FIXER_APIKEY }));
  }, [REACT_APP_FIXER_APIKEY]);

  return (
    <div currencySet={CURRENCYSET} loading={loading}>
      {children}
    </div>
  );
};

export default withRouter(CurrencyFixer);
