import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../modules/user';

import { TheContent, TheSidebar, TheFooter, TheHeader } from './index';
import '../scss/style.scss';
import { myToast } from '../../lib/util/myToast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TheLayout = ({ history }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  useEffect(() => {
    if (!user) {
      history.push('/posttest/login');
    } else if (user && user.username !== 'proadmin') {
      confirmAlert({
        title:
          'You are logged in, but not as admin user. Log out first, and then log in as admin user to access this page.',
        message: 'Do you want proceed to log in as admin user?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              dispatch(logout());
            },
          },
          {
            label: 'No, I just want to go back',
            onClick: () => {
              history.goBack();
            },
          },
        ],
        childrenElement: () => <div />,
        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => {},
        afterClose: () => {},
        onClickOutside: () => {},
        onKeypressEscape: () => {},
      });
    }
  }, [user]);

  return (
    <>
      {user ? (
        user.username === 'proadmin' ? (
          <div className="c-app c-default-layout">
            <TheSidebar />
            <div className="c-wrapper">
              <TheHeader />
              <div className="c-body">
                <TheContent />
              </div>
              <TheFooter />
            </div>
          </div>
        ) : (
          <>
            You are logged in, but not as admin user. Log out first, and then
            log in as admin user to access this page.
          </>
        )
      ) : (
        <>Authentication required</>
      )}
    </>
  );
};

export default withRouter(TheLayout);
