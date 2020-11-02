import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components/macro';
import { mq } from '../../lib/util/device';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import {
  LOGO,
  SEARCH,
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  YOUTUBE_ICON,
  WHATSAPP_ICON,
} from '../../assets';

const FooterBlock = styled.div`
  padding-top: 85px;
  padding-bottom: 10px;
`;

const Wrapper = styled(Responsive)`
  /* min-height: 506px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  color: rgba(193, 193, 193, 1);

  .logo {
    ${mq({
      fontSize: ['26px', , , , , '32px', ,],
    })}
    font-weight: 800;
    letter-spacing: 2px;
    img {
      ${mq({ height: ['20px', , , '24px', , , ,] })}
      border-radius: 10px;
    }
  }
  .menuitem {
    font-size: 18px;
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
  margin-top: 30px;
`;

const CopyrightsTextBox = styled.div`
  color: rgba(124, 124, 124, 1);
`;
const MultipleLinksBox = styled.div`
  a {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Menus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .menu {
    margin-right: 10px;
  }
`;
const Submenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 68px;
`;

const Footer = ({ menus, socialMedia, terms }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      {/* <Spacer /> */}
      <FooterBlock>
        <Wrapper>
          <LogoBox>
            <Link to="/" className="logo title">
              <img src={LOGO} alt="logo" />
            </Link>
            <RowWithMarginTop>
              {socialMedia.map((media, key) => (
                <>
                  <Link to={media.path} className="icon">
                    <img src={media.icon} alt={`${media.name} icon`} />
                  </Link>
                  <span className="icon-spacer" />
                </>
              ))}
            </RowWithMarginTop>
          </LogoBox>
          <Menus>
            {menus.map((menu, key) => (
              <div className="title menu">
                <Link to={menu.path} className="menuitem ">
                  {menu.text}
                </Link>
                <RowWithMarginTop>
                  <Submenus>
                    {menu.submenus.map((submenu, key) => (
                      <Link to={submenu.subpath}>{submenu.text}</Link>
                    ))}
                  </Submenus>
                </RowWithMarginTop>
              </div>
            ))}
          </Menus>
        </Wrapper>

        <Wrapper style={{ marginTop: '90px' }}>
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
          <CopyrightsTextBox>
            Ⓒ Copyright 2020 Produce-O-Matic. All rights reserved.
          </CopyrightsTextBox>
        </Wrapper>
      </FooterBlock>
    </>
  );
};

export default Footer;
