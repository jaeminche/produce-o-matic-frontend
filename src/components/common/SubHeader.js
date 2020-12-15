import React from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const SubHeaderBlock = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  height: 68px;
  z-index: 9;
  width: 100%;
  overflow: hidden;
  color: white;
  background: ${palette.background[1]};
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 10;

  ul {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 80px;
    margin: 0;

    color: ${palette.textgray[1]};

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
  li {
    display: inline-block;
    vertical-align: top;
    margin: 0 -0.11765em;
    padding: 0 5px;
  }

  .menuitem {
    color: rgba(165, 165, 165, 1);
    font-size: 16px;
    margin-right: 15px;
  }
  .menuitem:last-child {
    margin-right: -15px;
  }

  a {
    &:hover {
      color: white;
    }
  }
  .isActive {
    color: white;
    font-weight: bold;
  }
`;

const SubHeader = ({ submenus, activeSubMenu }) => {
  return (
    <SubHeaderBlock>
      <Wrapper>
        <ul>
          {submenus.map((submenu, key) => (
            <li
              key={key}
              className={
                submenu.path.split('/')[2].includes(activeSubMenu)
                  ? 'isActive menuitem'
                  : 'menuitem'
              }
            >
              <Link to={submenu.path}>{submenu.text}</Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </SubHeaderBlock>
  );
};

export default SubHeader;
