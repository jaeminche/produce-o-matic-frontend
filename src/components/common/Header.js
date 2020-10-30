import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';
import { SEARCH } from '../../assets';

const HeaderBlock = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background: white;
  color: white;

  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08); */
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0) 100%
  );
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .menuitem {
    font-size: 16px;
    margin-right: 15px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 68px;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div>
            <Link to="/" className="logo">
              Produce-O-Matic
            </Link>
            <span style={{ marginLeft: '25px' }}>
              <Link to="/" className="menuitem">
                Produce-In-Korea
              </Link>
              <Link to="/" className="menuitem">
                Produce-O-Manual
              </Link>
              <Link to="/" className="menuitem">
                Produce-O-Matic
              </Link>
              <Link to="/" className="menuitem">
                Produce-O-People
              </Link>
            </span>
          </div>

          <img className="right" src={SEARCH} alt="search icon" />
        </Wrapper>
      </HeaderBlock>
      {/* <Spacer /> */}
    </>
  );
};

export default Header;
