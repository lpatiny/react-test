import React from 'react';
import { Card } from 'react-bootstrap';
import ChartEventsPerMinute from './ChartEventsPerMinute';
import eventReducer from '../../util/eventReducer';
import throttle from 'lodash/throttle';

function DataPerMinute(props) {
  const [dataPerMinute, setDataPerMinute] = React.useState([]);

  const throttled = React.useMemo(
    () =>
      throttle(
        dataRows => {
          let data = eventReducer(dataRows, {
            numberOfSlots: 10,
            secondsPerSlot: 60,
            propertyName: 'epoch'
          });
          setDataPerMinute(data);
        },
        5000,
        { leading: true, trailing: false }
      ),
    []
  );

  React.useEffect(() => {
    throttled(props.dataRows);
  }, [props.dataRows, throttled]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Data per minute</Card.Title>
        <ChartEventsPerMinute data={dataPerMinute} title="" />
      </Card.Body>
    </Card>
  );
}

export default DataPerMinute;
