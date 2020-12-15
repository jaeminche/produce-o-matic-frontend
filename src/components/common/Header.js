import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import { LOGO, SEARCH } from '../../assets';
import palette from '../../lib/styles/palette';
import Hamburger from '../hamburger/Hamburger';
import HamburgersideContainer from '../../containers/hamburger/HamburgersideContainer';

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
  position: relative;
  height: 68px;
  display: flex;
  align-items: center;
  color: ${palette.textgray[1]};
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    /* ${mq({
      fontSize: ['26px', , , , , '32px', ,],
    })}
    font-weight: 800;
    letter-spacing: 2px; */
    img {
      ${mq({ height: ['20px', , , '24px', , , ,] })}
      filter: invert(1);
      margin-top: 9px;
      /* border-radius: 10px; */
    }
  }
  .center {
    margin: 0 auto;
  }
  .menuitem {
    font-size: 16px;
    margin-right: 15px;
  }
  .isActive {
    color: white;
  }
  a {
    &:hover {
      color: white;
    }
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

const Header = ({ menus, isFixed, activeMenu /*, user, onLogout*/ }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  function takeOutPrefix(word, prefix) {
    return word.replace(prefix, '');
  }

  return (
    <HeaderBlock isFixed={isFixed}>
      <Wrapper>
        {isMobile && <Hamburger />}
        {isMobile && <HamburgersideContainer activeMenu={activeMenu} />}

        <Link to="/" className={isMobile ? 'logo center' : 'logo'}>
          <img src={LOGO} alt="로고" />
        </Link>
        {!isMobile && (
          <span style={{ marginLeft: '25px' }}>
            {menus.map((menu, key) => (
              <Link
                to={menu.path}
                className={
                  menu.path.includes(activeMenu)
                    ? 'isActive menuitem'
                    : 'menuitem'
                }
                key={key}
              >
                <span className="smalltext">Produce-</span>
                {takeOutPrefix(menu.text, 'Produce-')}
              </Link>
            ))}
          </span>
        )}

        {!isMobile && <img className="right" src={SEARCH} alt="search icon" />}
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
