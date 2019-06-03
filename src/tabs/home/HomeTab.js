import React, { useEffect } from 'react';
import ChartEventsPerMinute from './ChartEventsPerMinute';
import ReceivedData from './ReceivedData';
import ListNodes from './ListNodes';
import ReceivedFrames from './ReceivedFrames';
import eventReducer from '../../util/eventReducer';
import { Row, Col, Container } from 'react-bootstrap';

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  flexGrow: 1,
  height: '100%',
  minHeight: '100%'
};

function HomeTab(props) {
  const [framesPerMinute, setFramesPerMinute] = React.useState([]);
  useEffect(() => {
    let data = eventReducer(props.frameRows, {
      numberOfSlots: 10,
      secondsPerSlot: 60,
      propertyName: 'epoch'
    });
    setFramesPerMinute(data);
  }, [props.frameRows]);

  const [dataPerMinute, setDataPerMinute] = React.useState([]);
  useEffect(() => {
    let data = eventReducer(props.dataRows, {
      numberOfSlots: 10,
      secondsPerSlot: 60,
      propertyName: 'epoch'
    });
    setDataPerMinute(data);
  }, [props.dataRows]);

  const [sourceIDs, setSourceIDs] = React.useState([]);
  useEffect(() => {
    // get the last hour of frames
    let sourceIDs = {};
    props.frameRows.forEach(frame => (sourceIDs[frame.sourceNodeID] = true));
    setSourceIDs(Object.keys(sourceIDs));
  }, [props.frameRows]);

  return (
    <Container>
      <Row>
        <Col>
          <ListNodes value={sourceIDs} />
        </Col>
        <Col>
          <ReceivedFrames value={props.frameRows.length} />
        </Col>
        <Col>
          <ReceivedData value={props.dataRows.length} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChartEventsPerMinute
            data={framesPerMinute}
            title="Number of frames per minute"
          />
        </Col>
        <Col>
          {' '}
          <ChartEventsPerMinute
            data={dataPerMinute}
            title="Number of data per minute"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTab;
