/* eslint-disable no-sparse-arrays */
import React from 'react';
import Responsive from './Responsive';
import { mq } from '../../lib/util/device';
import { PageTitle } from './SmallComponents';
import styled from 'styled-components/macro';
import ReactHtmlParser from 'react-html-parser';
import palette from '../../lib/styles/palette';
import { useParams } from 'react-router-dom';
// import maxmind, { CityResponse } from 'maxmind';

const ContentsBlock = styled.div`
  height: auto;
`;

const SubHeaderTabBlock = styled.nav`
  position: sticky;
  top: 44px; // header's height
  z-index: 10;
  margin-top: -60px;
  /* padding-bottom: 20px; */
  text-align: center;
  height: 48px; //header's height
  z-index: 10;
  width: 100%;
  overflow: hidden;
  color: white;
  background: rgba(32, 32, 32, 0.7);
`;

const SubHeaderTabWrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 10;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  ul {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 80px !important;
    margin: 0;
    color: ${palette.textgray[1]};

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .tab-bar {
    /* border-top: 1px solid white;
    border-bottom: 1px solid white; */
    padding: ${(props) => (props.isMobile ? '11px 30px' : '11px 30px')};
  }
  li {
    display: inline-block;
    vertical-align: top;
    margin: 0 10px;
    padding: 0 5px;
  }
  .menuitem {
    font-size: 14px;
    margin-right: 15px;
  }
  a {
    &:hover {
      color: white;
    }
  }
  .isActive {
    color: white;
    font-weight: bolder;
  }
`;

const Wrapper = styled(Responsive)`
  text-align: left;
  padding-top: 80px;

  .section-title {
    font-family: Lato;
    ${mq({
      fontSize: ['22px', '28px', , '32px', , '32px', '40px'],
    })};
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .text {
    color: ${palette.textgray[0]};
    font-family: Lato;
    ${mq({
      fontSize: ['17px', '17px', , '17px', , '21px', ,],
    })};
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
    white-space: pre-wrap;
  }
  .textInImage {
    color: white;
    text-align: center;
    margin-top: inherit;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .time-backgroundimage {
    height: 130px;
    /* position: absolute; */
    /* top: 0; */
    /* ${(props) => props.isMobile && `height: 200px`}; */
  }
  .itemsLiHasMinWidth {
    ${mq({
      minHeight: ['400px', '430px', , '520px', , , ,],
    })}
  }
  li {
    ${(props) => props.isMobile && `margin-bottom: 50px;`}
  }
  .time-title {
    ${mq({
      fontSize: ['22px', '28px', , '32px', , '32px', '40px'],
    })};
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    opacity: 0.8;
    position: relative;
  }
  .time-numbers {
    ${mq({
      fontSize: ['22px', '28px', , '32px', , '32px', '40px'],
    })};
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
  }
  .current-0-2-11,
  current-0-2-9 {
    ${(props) => props.isMobile && `font-size: 25px`};
  }
  .left-0-2-4 {
    ${(props) => props.isMobile && `padding: 10px`};
  }
  .vertical-center {
    width: 100%;
    ${mq({
      marginBottom: ['5px', '15px', '15px', '15px', , , ,],
    })};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  img {
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
    margin-top: 10px;
  }
  .margin-tb {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .flex-container-responsive {
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    justify-content: space-between;
    /* ${(props) => !props.isMobile && `margin: -20px;`}// space between */
  }
  .flex-item-responsive {
    width: ${(props) => (props.isMobile ? '100%' : '45%')};
    /* ${(props) => !props.isMobile && `margin: 20px;`} // space between
    ${(props) => props.key === 1 && `margin-left: 0;`} */
  }
  .positionRelative {
    position: relative;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: -10px 0;
  }
  .flex-item {
    margin: 10px 0;
    text-align: center;
  }
  /* TODO: 세부 조정 */
  /* .tab-bar {
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 80px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: ${(props) => (props.isMobile ? '0 5px' : '0 30px')};
  }
  .tab-bar-item {
    ${(props) => props.isMobile && `width: 32%;`}
  } */

  .tab-bar-item {
    ${(props) => props.isMobile && `width: 32%;`}
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }

  .logo {
    /* ${mq({ height: ['20px', , , '24px', , , ,] })} */
    filter: invert(1);
    margin-top: 9px;
    /* border-radius: 10px; */
  }
  .width80percent {
    width: 80%;
    margin: 20px auto;
  }
  .colorblue {
    color: rgba(37, 168, 209, 1);
  }

  .header-0-2-3 {
    display: none;
  }

  .smaller-image {
    ${(props) => !props.isMobile && `width: 75%;`}
    display: block;
  }
`;

const FlexContainerResponsive = (props) => {
  const {
    items,
    times,
    cityName,
    keyvalue,
    classNames,
    style,
    itemsLiHasMinWidth,
  } = props;
  // console.log('스타일', style);
  const customcss = times ? 'time-numbers' : null;
  return (
    <ul
      key={keyvalue}
      className={classNames ? classNames : 'flex-container-responsive'}
    >
      {items.map((item, key) => (
        <li
          key={key}
          className={`${itemsLiHasMinWidth ? 'itemsLiHasMinWidth' : ''} ${
            item.type === 'imageWithTextInside'
              ? 'flex-item-responsive positionRelative'
              : 'flex-item-responsive'
          }`}
        >
          {item.type === 'image' ? (
            <img
              src={item.path}
              alt={item.desc}
              className={item.classNames || null}
              style={style || null}
            />
          ) : item.type === 'imageWithTextInside' ? (
            <>
              {item.text && (
                <div
                  style={{ width: '100%' }}
                  className={`textInImage ${item.customCssForText}`}
                >
                  <img
                    src={item.path}
                    alt={item.desc}
                    className={item.customCssForImage}
                  />
                  <div className={'vertical-center'}>
                    <>
                      <div>
                        {item.asyncText && cityName ? cityName : item.text}
                      </div>
                      <div className={customcss}>
                        {times &&
                          times.length > 0 &&
                          (item.text === 'Seoul' ? times[0] : times[1])}
                      </div>
                    </>
                  </div>
                </div>
              )}

              {item.customComponent &&
                item.customComponent.url &&
                item.customComponent}
            </>
          ) : (
            <div className={item.classNames || 'text'} style={style}>
              {ReactHtmlParser(item.text)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const Tabs = (props) => {
  const { tabs, isMobile, keyvalue } = props;
  const { active_tab } = useParams();
  return (
    <SubHeaderTabBlock key={keyvalue} isMobile={isMobile}>
      <SubHeaderTabWrapper isMobile={isMobile}>
        <ul className="tab-bar">
          {tabs.map((tab, key) => (
            <li
              key={keyvalue}
              className={
                tab.path.split('/')[3].includes(active_tab)
                  ? 'isActive'
                  : undefined
              }
            >
              <a href={tab.path}>{tab.name}</a>
            </li>
          ))}
        </ul>
      </SubHeaderTabWrapper>
    </SubHeaderTabBlock>
  );
};

const DrawRowComponent = (props) => {
  const { row, keyvalue, isMobile, times, cityName } = props;
  const {
    type,
    path,
    text,
    desc,
    items,
    tabs,
    classNames,
    style,
    customComponent,
  } = row;

  // console.log('rows');
  const ui = {
    title: (
      <PageTitle
        text={text}
        keyvalue={keyvalue}
        isMobile={isMobile}
        className={classNames}
        style={style}
      />
    ),
    image: (
      <img
        src={path}
        className={classNames || 'margin-tb'}
        style={style}
        alt={desc}
        key={keyvalue}
      />
    ),
    flexContainerResponsive: (
      <FlexContainerResponsive
        items={items}
        keyvalue={keyvalue}
        times={times}
        cityName={cityName}
        classNames={classNames}
        style={style}
      />
    ),
    text: (
      <div key={keyvalue} className={classNames || 'text'} style={style}>
        {ReactHtmlParser(text)}
      </div>
    ),
    tabs: (
      <Tabs
        isMobile={isMobile}
        tabs={tabs}
        keyvalue={keyvalue}
        classNames={classNames}
        style={style}
      />
    ),
    sectionTitle: (
      <h3
        className={classNames || 'section-title'}
        style={style}
        key={keyvalue}
      >
        {text}
      </h3>
    ),
    customComponent: (
      <div className={classNames || null} key={keyvalue}>
        {customComponent && customComponent}
      </div>
    ),
  };

  return ui[type];
};

const Contents = (props) => {
  const { rows, isMobile, times = false, cityName = false } = props;
  return (
    <ContentsBlock>
      <Wrapper isMobile={isMobile}>
        {rows.map((row, index) => (
          <DrawRowComponent
            row={row}
            key={row.id}
            keyvalue={row.id}
            isMobile={isMobile}
            times={times}
            cityName={cityName}
          />
        ))}
      </Wrapper>
    </ContentsBlock>
  );
};

export default Contents;
