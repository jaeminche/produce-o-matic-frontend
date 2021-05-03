import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const Home = () => {
  const history = useHistory();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  useEffect(() => {
    if (user) {
      let timer1 = window.setTimeout(function () {
        history.push('/firstavenue/budgetomatic-page/results-list');
      }, 3500);
      return () => {
        window.clearTimeout(timer1);
      };
    }
  }, [user]);
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <h4 id="traffic" className="card-title mb-0">
                {user && (
                  <>
                    <p>{`Welcome! ${user.username}님,`}</p>
                    <p>{`메뉴를 선택해주세요.`}</p>
                    <p>
                      {`곧 '결과 페이지 내역 보기'로
                      리다이렉트됩니다..`}
                    </p>
                  </>
                )}
              </h4>
              {/* <div className="small text-muted">November 2017</div> */}
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Home;
