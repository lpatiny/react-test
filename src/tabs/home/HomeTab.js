import React from 'react';
import ReceivedData from './ReceivedData';
import ListNodes from './ListNodes';
import FramesPerMinute from './FramesPerMinute';
import DataPerMinute from './DataPerMinute';
import ReceivedFrames from './ReceivedFrames';
import { Row, Col, Container, ResponsiveEmbed } from 'react-bootstrap';

function HomeTab(props) {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4}>
          <ListNodes frameRows={props.frameRows} />
        </Col>
        <Col sm={12} md={4}>
          <ReceivedFrames value={props.frameRows.length} />
        </Col>
        <Col sm={12} md={4}>
          <ReceivedData value={props.dataRows.length} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <FramesPerMinute frameRows={props.frameRows} />
        </Col>
        <Col sm={12} md={6}>
          <DataPerMinute dataRows={props.dataRows} />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTab;
