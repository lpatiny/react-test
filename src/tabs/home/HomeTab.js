import React from 'react';
import ReceivedData from './ReceivedData';
import ListNodes from './ListNodes';
import FramesPerMinute from './FramesPerMinute';
import DataPerMinute from './DataPerMinute';
import ReceivedFrames from './ReceivedFrames';
import { Row, Col, Container } from 'react-bootstrap';

function HomeTab(props) {
  return (
    <Container>
      <Row>
        <Col>
          <ListNodes frameRows={props.frameRows} />
        </Col>
        <Col>
          <ReceivedFrames value={props.frameRows.length} />
        </Col>
        <Col>
          <ReceivedData value={props.dataRows.length} />
        </Col>
      </Row>
      <Row>
        <Col style={{ width: '50%' }}>
          <FramesPerMinute frameRows={props.frameRows} />
        </Col>
        <Col style={{ width: '50%' }}>
          <DataPerMinute dataRows={props.dataRows} />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTab;
