import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import { LOGO, SEARCH } from '../../assets';

const HeaderBlock = styled.div`
  ${(props) => props.isFixed && `position: fixed;`}
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
  color: rgba(193, 193, 193, 1);
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    /* ${mq({
      fontSize: ['26px', , , , , '32px', ,],
    })}
    font-weight: 800;
    letter-spacing: 2px; */
    img {
      ${mq({ height: ['20px', , , '24px', , , ,] })}
      border-radius: 10px;
    }
  }
  .menuitem {
    font-size: 16px;
    margin-right: 15px;
  }
  .smalltext {
    font-size: 0.8em;
    /* font-style: italic; */
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

const Header = ({ menus, isFixed /*, user, onLogout*/ }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  function takeOutPrefix(word, prefix) {
    return word.replace(prefix, '');
  }

  return (
    <>
      <HeaderBlock isFixed={isFixed}>
        <Wrapper>
          <div style={{ margin: isMobile ? '0 auto' : 'none' }}>
            <Link to="/" className="logo">
              <img src={LOGO} alt="로고" />
            </Link>
            {!isMobile && (
              <span style={{ marginLeft: '25px' }}>
                {menus.map((menu, key) => (
                  <Link to={menu.path} className="menuitem">
                    <span className="smalltext">Produce-</span>
                    {takeOutPrefix(menu.text, 'Produce-')}
                  </Link>
                ))}
              </span>
            )}
          </div>

          {!isMobile && (
            <img className="right" src={SEARCH} alt="search icon" />
          )}
        </Wrapper>
      </HeaderBlock>
      {/* <Spacer /> */}
    </>
  );
};

export default Header;
