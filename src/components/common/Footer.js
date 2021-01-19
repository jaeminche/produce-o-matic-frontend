import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import { LOGO } from '../../assets';
import palette from '../../lib/styles/palette';

const FooterBlock = styled.div`
  padding-top: 85px;
  padding-bottom: 10px;
  margin-bottom: -44px; // offset as much as the header's height
`;

const Wrapper = styled(Responsive)`
  /* min-height: 506px; */
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: space-between;
  font-size: ${(props) => (props.isMobile ? '12px' : '14px')};
  color: ${palette.textgray[0]};

  .logo {
    ${mq({
      fontSize: ['26px', , , , , '32px', ,],
    })}
    font-weight: 800;
    letter-spacing: 2px;
    img {
      ${mq({ height: ['20px', , , '24px', , , ,] })}
      /* border-radius: 10px; */
      filter: invert(1);
      margin-top: 9px;
    }
  }
  .menuitem {
    font-size: 17px;
    margin-right: 15px;
  }
  .smalltext {
    font-size: 0.8em;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;
const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${(props) => props.isMobile && `align-items: center;`}
  .title {
    font-size: 25px;
    font-weight: 700;
    text-align: left;
  }
  .icon-spacer {
    margin-right: 10px;
  }
`;

const RowWithMarginTop = styled.div`
  margin-top: ${(props) => (props.isMobile ? '17px' : '30px')};
`;

const CopyrightsTextBox = styled.div`
  color: ${palette.textgray[2]};
`;
const MultipleLinksBox = styled.div`
  a {
    margin-left: 10px;
    margin-right: 10px;
  }
  .terms {
    color: ${palette.textgray[2]};
  }
`;
const MenusBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: space-between;
  .menu {
    margin-right: 10px;
    ${(props) => props.isMobile && `margin-top: 27px;`}
  }
`;
const Submenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${(props) => props.isMobile && `margin-left: 26px;`}
  font-size: 14px;
`;

const Footer = ({ menus, socialMedia, terms }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <FooterBlock>
      <Wrapper isMobile={isMobile}>
        <LogoBox isMobile={isMobile}>
          <Link to="/" className="logo title">
            <img src={LOGO} alt="logo" />
          </Link>
          <RowWithMarginTop isMobile={isMobile}>
            {socialMedia.map((media, key) => (
              <span key={key}>
                <Link to={media.path} className="icon">
                  <img src={media.icon} alt={`${media.name} icon`} />
                </Link>
                <span className="icon-spacer" />
              </span>
            ))}
          </RowWithMarginTop>
        </LogoBox>
        <MenusBox isMobile={isMobile}>
          {menus.map((menu, key) => (
            <div className="title menu" key={key}>
              <Link to={menu.path} className="menuitem ">
                {menu.text}
              </Link>
              <RowWithMarginTop isMobile={isMobile}>
                <Submenus isMobile={isMobile}>
                  {menu.submenus.map((submenu, key) => (
                    <Link to={submenu.path} key={key}>
                      {submenu.text}
                    </Link>
                  ))}
                </Submenus>
              </RowWithMarginTop>
            </div>
          ))}
        </MenusBox>
      </Wrapper>

      <Wrapper style={{ marginTop: '90px' }} isMobile={isMobile}>
        <CopyrightsTextBox>
          Ⓒ Copyright 2020 Produce-O-Matic. All rights reserved.
        </CopyrightsTextBox>
        <MultipleLinksBox>
          <Link to="/privacy" className="terms">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link to="/terms" className="terms">
            Terms of Use
          </Link>
          <span>|</span>
          <Link to="/copyrights" className="terms">
            Copyrights
          </Link>
        </MultipleLinksBox>
      </Wrapper>
    </FooterBlock>
  );
};

export default Footer;
