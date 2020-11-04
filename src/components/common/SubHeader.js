import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import { LOGO, SEARCH } from '../../assets';

const SubHeaderBlock = styled.div`
  position: sticky;
  top: 0;
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
  color: rgba(193, 193, 193, 1);
  justify-content: center;
  .menuitem {
    font-size: 16px;
    margin-right: 15px;
  }
  .isActive {
    color: white;
  }
`;

const SubHeader = ({ submenus, pathname }) => {
  return (
    <SubHeaderBlock>
      <Wrapper>
        {submenus.map((submenu, key) => (
          <Link
            to={submenu.subpath}
            className={
              submenu.subpath === `${pathname}`
                ? 'isActive menuitem'
                : 'menuitem'
            }
          >
            {submenu.text}
          </Link>
        ))}
      </Wrapper>
    </SubHeaderBlock>
  );
};

export default SubHeader;
