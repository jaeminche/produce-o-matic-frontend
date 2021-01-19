import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';
import { formatTime } from '../../lib/format';
import {
  getIp,
  getUsersLocation,
  postCopyContractSample,
} from '../../modules/thirdPartyApis';
// import { Card } from '@coreui/icons';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../lib/styles/customCss.css';
import { THUMBNAIL_LOCALPRODUCTIONCREWAGREEMENT } from '../../assets';

const MyGoogleDocContainer = ({ history }) => {
  const dispatch = useDispatch();
  const fileId = '12O4bV8sJj43LAtMXY3FRknaHs56eZqJyju5d9i2JKBQ';
  return (
    <div style={{ width: '300px', height: '209px', position: 'relative' }}>
      <Card style={{ width: '95%', margin: '0 auto' }}>
        {/* <div
          style={{
            backgroundColor: '#f5f5f5',
            padding: '1.25rem',
            height: '118px',
          }}
        >
          <a
            href="https://docs.google.com/document/d/1hdQDYfiNGHOTDiEPUSsOmVBRYEBjPWNihSrsmza3WSU/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <iframe
              title="Local Production Crew Agreement Sample"
              src="https://docs.google.com/document/d/e/2PACX-1vRPbg1_7vlxLDqmmWjPbAW44ny7lcXXlr4Tc8QdAaUxGnTeZ67A6UXa7ceZKbNZTTw2b-cQBoT50kxs/pub?embedded=true"
              // scrolling="no"
              frameborder="0"
              marginheight="0px"
              marginwidth="0px"
              height="inherit"
              width="90%"
              // allowfullscreen
            ></iframe>
          </a>
        </div> */}
        <div
          style={{
            backgroundColor: '#f5f5f5',
            padding: '1.25rem 1.25rem 1px 1.25rem',
          }}
        >
          <Card.Img
            variant="top"
            src={THUMBNAIL_LOCALPRODUCTIONCREWAGREEMENT}
            style={{
              boxShadow: '0 0 6px 0 rgba(193, 193, 193, 0.75)',
            }}
          />
        </div>
        <Card.Body style={{ color: 'black' }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      {/* <button onClick={() => dispatch(postCopyContractSample({ fileId }))}>
        계약서 샘플 복사하기
      </button> */}
    </div>
  );
};

export default withRouter(MyGoogleDocContainer);
