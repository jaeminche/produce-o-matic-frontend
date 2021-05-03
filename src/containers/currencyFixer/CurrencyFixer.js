import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrencySet, getUsersLocation } from '../../modules/thirdPartyApis';

const { REACT_APP_FIXER_APIKEY } = process.env;

const CurrencyFixer = ({ history, children }) => {
  const dispatch = useDispatch();
  const {
    CURRENCYSET,
    currencySetError,
    USERSLOCATION,
    usersLocationError,
    loading,
  } = useSelector(({ thirdPartyApis, loading }) => ({
    CURRENCYSET: thirdPartyApis.currencyset,
    currencySetError: thirdPartyApis.currencySetError,
    USERSLOCATION: thirdPartyApis.usersLocation,
    usersLocationError: thirdPartyApis.usersLocationError,
    loading: loading['thirdPartyApis/GET_CURRENCYSET'],
  }));

  useEffect(() => {
    if (!CURRENCYSET && REACT_APP_FIXER_APIKEY)
      dispatch(getCurrencySet({ apikey: REACT_APP_FIXER_APIKEY }));
  }, [REACT_APP_FIXER_APIKEY]);

  useEffect(() => {
    if (
      !USERSLOCATION
      // || (USERSLOCATION && USERSLOCATION.status !== 'success')
    )
      dispatch(getUsersLocation());
  }, []);

  return (
    <div currencyset={CURRENCYSET} loading={loading}>
      {children}
    </div>
  );
};

export default withRouter(CurrencyFixer);
