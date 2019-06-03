import React, { useEffect } from 'react';
import ChartEventsPerMinute from './ChartEventsPerMinute';
import ReceivedData from './ReceivedData';
import ReceivedFrames from './ReceivedFrames';
import eventReducer from '../../util/eventReducer';

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
    // get the last hour of frames
    let data = eventReducer(props.frameRows, {
      numberOfSlots: 10,
      secondsPerSlot: 60,
      propertyName: 'epoch'
    });
    setFramesPerMinute(data);
  }, [props.frameRows]);

  const [dataPerMinute, setDataPerMinute] = React.useState([]);
  useEffect(() => {
    // get the last hour of frames
    let data = eventReducer(props.dataRows, {
      numberOfSlots: 10,
      secondsPerSlot: 60,
      propertyName: 'epoch'
    });
    setDataPerMinute(data);
  }, [props.dataRows]);

  return (
    <div style={style}>
      <div style={{ width: 500, height: 400 }}>
        <ChartEventsPerMinute
          data={framesPerMinute}
          title="Number of frames per minute"
        />
      </div>
      <div style={{ width: 500, height: 400 }}>
        <ChartEventsPerMinute
          data={dataPerMinute}
          title="Number of data per minute"
        />
      </div>
      <ReceivedFrames value={props.frameRows.length} />
      <ReceivedData value={props.dataRows.length} />
    </div>
  );
}

export default HomeTab;
