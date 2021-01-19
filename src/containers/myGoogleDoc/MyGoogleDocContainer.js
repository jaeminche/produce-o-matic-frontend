import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';
import styled from 'styled-components/macro';
import Responsive from '../../components/common/Responsive';
import { mq } from '../../lib/util/device';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../lib/styles/customCssToOverrideBootstrap.css';
import { THUMBNAIL_LOCALPRODUCTIONCREWAGREEMENT } from '../../assets';

const MyGoogleDocContainerBlock = styled.div`
  height: auto;
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
    margin-bottom: 50px;
  }
`;

const RowWrap = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 100%;
  margin: -5px;
  overflow: hidden;

  justify-content: space-between;
`;

const MyCardTitle = styled.span`
  color: rgba(0, 0, 0, 0.72);
  line-height: 20px;
  margin-left: 8px;
  padding-bottom: 4px;
  font-size: 18px;
`;

const MyCard = (props) => {
  const { title, imgUrl, redirectTo } = props;
  return (
    <div style={{ width: '300px', height: 'auto', position: 'relative' }}>
      <Card style={{ width: '95%', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#f5f5f5',
            padding: '1.25rem 1.25rem 1px 1.25rem',
          }}
        >
          <Card.Img
            variant="top"
            src={imgUrl}
            style={{
              boxShadow: '0 0 6px 0 rgba(0,0,0,0.12)',
            }}
          />
        </div>
        <Card.Body style={{ color: 'black' }}>
          <a href={redirectTo} rel="noopener noreferrer" target="_blank">
            <Card.Title>
              <img
                src="https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document"
                alt="Google Docs"
              />
              <MyCardTitle>{title}</MyCardTitle>
            </Card.Title>
          </a>
        </Card.Body>
      </Card>

      {/* <button onClick={() => dispatch(postCopyContractSample({ fileId }))}>
  계약서 샘플 복사하기
</button> */}
    </div>
  );
};

const MyGoogleDocContainer = ({ history }) => {
  const dispatch = useDispatch();
  const fileId = '12O4bV8sJj43LAtMXY3FRknaHs56eZqJyju5d9i2JKBQ';
  const SAMPLES = [
    {
      title: 'LOCAL PRODUCTION CREW AGREEMENT SAMPLE',
      imgUrl: THUMBNAIL_LOCALPRODUCTIONCREWAGREEMENT,
      redirectTo:
        'https://docs.google.com/document/d/1hdQDYfiNGHOTDiEPUSsOmVBRYEBjPWNihSrsmza3WSU/edit?usp=sharing',
    },
    {
      title: 'LOCAL PRODUCTION CREW AGREEMENT SAMPLE',
      imgUrl: THUMBNAIL_LOCALPRODUCTIONCREWAGREEMENT,
      redirectTo:
        'https://docs.google.com/document/d/1hdQDYfiNGHOTDiEPUSsOmVBRYEBjPWNihSrsmza3WSU/edit?usp=sharing',
    },
    {
      title: 'LOCAL PRODUCTION CREW AGREEMENT SAMPLE',
      imgUrl: THUMBNAIL_LOCALPRODUCTIONCREWAGREEMENT,
      redirectTo:
        'https://docs.google.com/document/d/1hdQDYfiNGHOTDiEPUSsOmVBRYEBjPWNihSrsmza3WSU/edit?usp=sharing',
    },
  ];
  return (
    <MyGoogleDocContainerBlock>
      <Wrapper>
        <div className="section-title">Contract Samples</div>
        <RowWrap>
          {SAMPLES.map((sample) => (
            <MyCard
              title={sample.title}
              imgUrl={sample.imgUrl}
              redirectTo={sample.redirectTo}
            />
          ))}
        </RowWrap>
      </Wrapper>
    </MyGoogleDocContainerBlock>
  );
};

export default withRouter(MyGoogleDocContainer);
