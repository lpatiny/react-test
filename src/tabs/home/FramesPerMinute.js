import React from 'react';
import { Card } from 'react-bootstrap';
import ChartEventsPerMinute from './ChartEventsPerMinute';
import eventReducer from '../../util/eventReducer';
import throttle from 'lodash/throttle';

function FramesPerMinute(props) {
  const [framesPerMinute, setFramesPerMinute] = React.useState([]);

  const throttled = React.useRef(
    throttle(
      frameRows => {
        let data = eventReducer(frameRows, {
          numberOfSlots: 10,
          secondsPerSlot: 60,
          propertyName: 'epoch'
        });
        setFramesPerMinute(data);
      },
      5000,
      { leading: true, trailing: false }
    )
  );

  React.useEffect(() => throttled.current(props.frameRows), [
    props.frameRows,
    throttled
  ]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Frames per minute</Card.Title>
        <ChartEventsPerMinute data={framesPerMinute} title="" />
      </Card.Body>
    </Card>
  );
}

export default FramesPerMinute;
